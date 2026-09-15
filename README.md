# UPM SHS Department of Medicine Alumni Admin Portal

Polished GitHub Pages frontend with **Supabase email/password authentication** and admin-only Row Level Security.

## Important privacy architecture
GitHub Pages is a public static host. Therefore, this public package deliberately contains **no alumni dataset**. The alumni records live in Supabase, where Row Level Security allows access only to authenticated accounts listed in `admin_users`.

Do **not** put the private SQL/data setup package in the public GitHub repository.

## Files to upload to GitHub
- `index.html`
- `config.js`
- `README.md` (optional)

## Setup
1. Create a Supabase project.
2. Run the SQL files from the separate **private setup ZIP** in order.
3. Create an administrator under Supabase **Authentication → Users**.
4. Add that user's UUID to `admin_users` using the provided template SQL.
5. Open **Project Settings / API** and copy the Project URL and anon/publishable key.
6. Edit `config.js` and paste them there.
7. Upload this public site to GitHub Pages.

## Admin functions included
- Secure admin login / logout
- Dashboard
- Alumni registry search and filters
- Add / edit / delete alumni records
- Verification status tracking
- Batch summaries
- Data-quality dashboard
- CSV export
- Mobile-responsive UI

The anon/publishable Supabase key is safe to expose in a frontend **only when RLS is correctly enabled**. Never place the Supabase service-role key in `config.js` or any GitHub repository.
