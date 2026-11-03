import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import { SUPABASE_URL, SUPABASE_KEY, BUCKET, BRAND } from './config.js';

// Separate sessions for the candidate app and the staff console so logging into one never affects the other.
export const IS_ADMIN_PAGE = /admin\.html$/.test(location.pathname);
export const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { storageKey: IS_ADMIN_PAGE ? 'yj-staff-auth' : 'yj-candidate-auth' } });

// ---------- tiny UI helpers ----------
export const $ = (id) => document.getElementById(id);
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
let tt;
export function toast(t, ms = 2400) { const e = $('toast'); e.textContent = t; e.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => e.classList.remove('on'), ms); }
export function openSheet(html) { $('sheet').innerHTML = html; $('modal').classList.add('on'); }
export function closeSheet() { $('modal').classList.remove('on'); }
export function initModal() { $('modal').onclick = (e) => { if (e.target === $('modal')) closeSheet(); }; $('sheet').addEventListener('click', (e) => { const b = e.target.closest('.chip'); if (!b) return; const g = b.closest('[data-chips]'); if (!g) return; if (g.dataset.multi === '1') b.classList.toggle('on'); else g.querySelectorAll('.chip').forEach((c) => c.classList.toggle('on', c === b)); }); }
export function chipRow(name, opts, sel, multi) { return `<div class="chips" data-chips="${name}" data-multi="${multi ? 1 : 0}">${opts.map((o) => `<button type="button" class="chip ${(multi ? (sel || []).includes(o) : sel === o) ? 'on' : ''}" data-v="${esc(o)}">${esc(o)}</button>`).join('')}</div>`; }
export function chipVal(name) { const g = $('sheet').querySelector(`[data-chips="${name}"]`); if (!g) return null; const on = [...g.querySelectorAll('.chip.on')].map((c) => c.dataset.v); return g.dataset.multi === '1' ? on : on[0] || null; }
export const fmtDate = (d) => d ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '—';
export const initials = (n) => (n || '?').split(' ').map((x) => x[0]).join('').slice(0, 2).toUpperCase();
export const shortId = (uuid) => 'YJ-' + (uuid || '').replace(/-/g, '').slice(0, 6).toUpperCase();
export const pay = (j) => j.pay_min && j.pay_max && j.pay_min !== j.pay_max ? `₹${j.pay_min.toLocaleString('en-IN')} – ${j.pay_max.toLocaleString('en-IN')}` : `₹${(j.pay_min || j.pay_max || 0).toLocaleString('en-IN')}`;

// ---------- profile strength ----------
export function strength(c, docs = {}) { let s = 30; if (c.prefs) s += 15; if (c.exp) s += 15; if (c.personal) s += 10; if (docs.photo) s += 10; if (docs.id) s += 15; if (docs.cert) s += 5; return Math.min(100, s); }

// ---------- areas ----------
let areaCache = null;
export async function areas() { if (areaCache) return areaCache; const { data } = await sb.from('areas').select('name,city,lat,lng').eq('active', true).order('name'); areaCache = data || []; return areaCache; }

// ---------- images ----------
export function compressImage(file, max = 1000, quality = 0.85) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) return resolve(file);
    const img = new Image(); const url = URL.createObjectURL(file);
    img.onload = () => { const s = Math.min(1, max / Math.max(img.width, img.height)); const c = document.createElement('canvas'); c.width = Math.round(img.width * s); c.height = Math.round(img.height * s); c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); c.toBlob((b) => { URL.revokeObjectURL(url); resolve(b); }, 'image/jpeg', quality); };
    img.onerror = reject; img.src = url;
  });
}
export async function uploadDoc(uid, slot, file) {
  const isImg = file.type.startsWith('image/');
  const blob = isImg ? await compressImage(file) : file;
  const ext = isImg ? 'jpg' : 'pdf';
  const path = `${uid}/${slot}.${ext}`;
  const { error } = await sb.storage.from(BUCKET).upload(path, blob, { upsert: true, contentType: isImg ? 'image/jpeg' : file.type });
  if (error) throw error;
  const { error: e2 } = await sb.from('documents').upsert({ candidate_id: uid, slot, file_path: path, file_name: file.name, status: 'Uploaded', rejection_reason: null, created_at: new Date().toISOString() }, { onConflict: 'candidate_id,slot' });
  if (e2) throw e2;
  return path;
}
export async function signedUrl(path, seconds = 600) { if (!path) return null; const { data } = await sb.storage.from(BUCKET).createSignedUrl(path, seconds); return data?.signedUrl || null; }

// ---------- ID card ----------
export async function drawIdCard(c, photoUrl) {
  const W = 1011, H = 638; // CR80 at 300dpi
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H; const x = cv.getContext('2d');
  x.fillStyle = '#fff'; x.fillRect(0, 0, W, H);
  x.fillStyle = BRAND.teal; x.fillRect(0, 0, W, 120);
  x.fillStyle = '#fff'; x.font = '700 44px Inter, system-ui, sans-serif'; x.fillText(BRAND.company.toUpperCase(), 40, 76);
  x.font = '500 22px Inter, system-ui, sans-serif'; x.fillText('Verified Care Professional', 40, 106);
  x.textAlign = 'right'; x.font = '600 24px Inter, system-ui, sans-serif'; x.fillText(shortId(c.id), W - 40, 72); x.textAlign = 'left';
  // photo
  const px = 40, py = 160, pw = 280, ph = 340;
  x.fillStyle = '#E6F4F2'; x.fillRect(px, py, pw, ph);
  if (photoUrl) { try { const img = await new Promise((res, rej) => { const i = new Image(); i.crossOrigin = 'anonymous'; i.onload = () => res(i); i.onerror = rej; i.src = photoUrl; }); const s = Math.max(pw / img.width, ph / img.height); const dw = img.width * s, dh = img.height * s; x.save(); x.beginPath(); x.rect(px, py, pw, ph); x.clip(); x.drawImage(img, px + (pw - dw) / 2, py + (ph - dh) / 2, dw, dh); x.restore(); } catch (e) { } }
  else { x.fillStyle = BRAND.teal; x.font = '700 96px Inter, system-ui, sans-serif'; x.textAlign = 'center'; x.fillText(initials(c.name), px + pw / 2, py + ph / 2 + 34); x.textAlign = 'left'; }
  x.strokeStyle = '#CFD8D6'; x.lineWidth = 3; x.strokeRect(px, py, pw, ph);
  // text
  const lx = 360; let ly = 200;
  x.fillStyle = '#1A1F1F'; x.font = '700 46px Inter, system-ui, sans-serif'; x.fillText(c.name, lx, ly); ly += 50;
  x.fillStyle = BRAND.teal; x.font = '600 30px Inter, system-ui, sans-serif'; x.fillText(c.role === 'Physio' ? 'Physiotherapist' : c.role, lx, ly); ly += 56;
  x.fillStyle = '#5B6565'; x.font = '500 22px Inter, system-ui, sans-serif';
  const line = (k, v) => { x.fillStyle = '#5B6565'; x.fillText(k, lx, ly); x.fillStyle = '#1A1F1F'; x.font = '600 24px Inter, system-ui, sans-serif'; x.fillText(v, lx + 170, ly); x.font = '500 22px Inter, system-ui, sans-serif'; ly += 42; };
  line('Phone', '+91 ' + c.phone); line('Area', `${c.area}, ${c.city}`); if (c.exp?.reg) line('Reg. no.', c.exp.reg);
  line('Valid till', new Date(Date.now() + 365 * 864e5).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }));
  // verified badge
  if (c.verified) { x.fillStyle = '#15803D'; x.beginPath(); x.roundRect(lx, 520, 330, 56, 28); x.fill(); x.fillStyle = '#fff'; x.font = '700 24px Inter, system-ui, sans-serif'; x.fillText('✓  YORO VERIFIED', lx + 28, 557); }
  else { x.fillStyle = '#B45309'; x.font = '600 22px Inter, system-ui, sans-serif'; x.fillText('Verification pending', lx, 556); }
  x.fillStyle = '#5B6565'; x.font = '400 18px Inter, system-ui, sans-serif'; x.fillText('If found, please return to YORO Health, Pune · +91 92725 71708 · care@yorohealth.com', 40, H - 28);
  return cv.toDataURL('image/png');
}
