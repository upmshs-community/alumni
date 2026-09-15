# UPM SHS Department of Medicine — AlumniTrack

A starter alumni outcomes system for the UP Manila School of Health Sciences Department of Medicine.

## Included
- Department dashboard
- Alumni registry
- MD batch/cohort tracking
- Alumni self-update workflow concept
- Reports page
- Supabase/PostgreSQL schema
- CSV import template
- Historical-data verification fields

## Local setup
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Create a Supabase project and paste the project URL and anon key.
5. Run `supabase/schema.sql` in the Supabase SQL Editor.
6. Run `npm run dev`.

## Historical migration recommendation
Do not bulk-mark handwritten legacy data as verified. Encode every record with `source_document`, `source_page`, and `verification_status`. Use a second-person review before confirming names, graduation dates, and licensure details.

## Next production steps
- Add Supabase authentication and role-based access (super admin, staff, faculty, alumni).
- Replace mock data with database queries.
- Add CSV import + duplicate detection.
- Add alumni verification-email workflow.
- Add a Philippines practice-location map.
- Add export to CSV/PDF for accreditation and annual reports.
- Add row-level security policies before deployment.

## Deploy on GitHub Pages only

This repository is configured for GitHub Pages using GitHub Actions.

1. Create a GitHub repository (for example, `upm-shs-alumni-tracker`).
2. Upload/push all files in this project to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Open the **Actions** tab and wait for **Deploy Next.js site to GitHub Pages** to finish.
6. GitHub will show the public Pages URL after deployment. For a project repository, it normally looks like `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

The configuration automatically detects the repository name during GitHub Actions, so you do not need to hard-code it.

GitHub Pages hosts the statically exported frontend. Supabase can still be added later as an external backend, but server-only Next.js features cannot run directly on GitHub Pages.
