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
