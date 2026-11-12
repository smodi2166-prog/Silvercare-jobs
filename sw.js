// Yoro Jobs service worker: makes the app installable and fast on slow networks.
// Pages: network first, fall back to cache when offline. Static files: cache first. Supabase API calls: never cached.
const VERSION = 'yj-v3';
const SHELL = ['/', '/index.html', '/app.css', '/shared.js', '/config.js', '/i18n.js', '/manifest.webmanifest', '/assets/hero-800.jpg', '/assets/icons/icon-192.png', '/assets/icons/icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.endsWith('supabase.co')) return; // live data, never cache
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((r) => { const copy = r.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return r; }).catch(() => caches.match(req).then((r) => r || caches.match('/index.html'))));
    return;
  }
  const isOwn = url.origin === location.origin;
  const isLib = /cdn\.jsdelivr\.net|fonts\.(googleapis|gstatic)\.com/.test(url.hostname);
  if (!isOwn && !isLib) return;
  if (isOwn && /\.(js|css)$/.test(url.pathname)) { // code: network first so updates arrive immediately
    e.respondWith(fetch(req).then((r) => { const copy = r.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return r; }).catch(() => caches.match(req)));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => { if (r.ok || r.type === 'opaque') { const copy = r.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); } return r; })));
});
