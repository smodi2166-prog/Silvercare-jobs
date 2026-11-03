# Yoro Jobs — go-live runbook

Static web app (no build step) + Supabase backend. Everything in this folder is deployable as-is.

Files: `index.html` (candidate app) · `admin.html` (staff console) · `shared.js`, `config.js`, `app.css`.
Backend: Supabase project **yoro-jobs** (`pglxotjvbcklzswziggs`, Mumbai) — tables, PostGIS, RLS policies, storage bucket `candidate-docs`, edge function `admin-add-candidate` are already deployed.

## 1. Host the site (5 min)

Option A — Netlify (easiest): log in at app.netlify.com → "Add new site" → "Deploy manually" → drag this folder. You get `https://<name>.netlify.app` immediately.
Option B — Vercel: `npx vercel` inside this folder, or import a GitHub repo containing it.
Option C — any static host / your own server: upload the 5 files.

## 2. Custom domain jobs.yorohealth.com (10 min + DNS propagation)

In Netlify/Vercel: Site settings → Domains → add `jobs.yorohealth.com`. In your DNS (where yorohealth.com is managed): add CNAME `jobs` → the host they show. HTTPS is automatic.

## 3. Switch on phone OTP login (Supabase dashboard, 5 min)

supabase.com/dashboard → project yoro-jobs → Authentication → Providers → **Phone** → Enable.
- SMS provider: Supabase supports Twilio, MessageBird, Textlocal, Vonage. For India, Twilio (fastest to start; needs DLT registration for the sender) or Textlocal (Indian, DLT-ready). Paste the account keys.
- **Test without SMS**: in the same Phone settings, "Test phone numbers / OTPs" → add your own numbers with a fixed OTP (e.g. `+919999999999 = 123456`). Those numbers log in without any SMS being sent — use this to onboard your first batch by hand while DLT approval is pending.
- Authentication → Rate limits: keep defaults (prevents OTP abuse).
- Authentication → URL configuration → Site URL = `https://jobs.yorohealth.com`.

## 4. Create staff logins (2 min each)

Dashboard → Authentication → Users → **Add user** → email + password → tick "Auto confirm". Then allow that email in the admin list:
```sql
insert into public.admins (email, name, role) values ('pallavi@yorohealth.com', 'Pallavi', 'recruiter');
```
(SQL editor in the dashboard.) `sahil@yorohealth.com` is already in the list — create the auth user for it the same way. Staff log in at `/admin.html`.

## 5. First-day checks

1. Open the site on your phone → Register → OTP → name/role/area → Home.
2. Add photo (camera opens) → admin → Candidates → open → tick ID + BGV → Generate ID card → download PNG (print at 86×54 mm, CR80 card).
3. Admin → Jobs → Post a job within 10 km of the test candidate → candidate sees it under Jobs → Interested → admin → job → Assign.

## Phase 2 (not built yet)
- WhatsApp alerts on new job / verification / assignment: Gupshup or Interakt API key + one edge function triggered by a database webhook on `jobs` and `job_interests`.
- BGV vendor API (AuthBridge / IDfy / SpringVerify) writing into the `bgv` document slot.
- Google Places autocomplete for free-text addresses (today: area list in table `areas`; add rows there for new areas/cities).

## Security notes
- The publishable key in `config.js` is safe to ship: all data access is governed by row-level security. Candidates can only read/write their own row and documents; client addresses live in `jobs_private` which only admins can read.
- Documents are in a private bucket; the app serves them via 10-minute signed URLs. Views of Aadhaar images are not yet audit-logged (phase 2).
- Never paste the service-role key into the frontend.
