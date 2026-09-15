# UPM-SHS Department of Medicine AlumniTrack — Static Prototype

This version is intentionally **plain/static** so it can be deployed directly on **GitHub Pages** and has a real `index.html` at the repository root.

## Main files

- `index.html` — homepage / entry point
- `styles.css` — all visual styling
- `src/app.ts` — editable TypeScript source
- `dist/app.js` — browser-ready compiled JavaScript used by `index.html`
- `tsconfig.json` — TypeScript compiler config
- `package.json` — optional local build tooling

## Easiest GitHub Pages deployment

1. Create a GitHub repository.
2. Upload **all files and folders inside this project** to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`.
6. Save.
7. Wait for GitHub Pages to publish the site.

No Vercel and no GitHub Actions are required for this version.

## Editing TypeScript

The live page loads `dist/app.js`. If you edit `src/app.ts`, compile it before pushing:

```bash
npm install
npm run build
```

If you do not want to install Node/TypeScript yet, you can edit `dist/app.js` directly, but `src/app.ts` is the cleaner source of truth.

## Important data note

The records and statistics included in this prototype are **sample/demo data only**. They are not official UPM-SHS alumni statistics. Replace them with verified historical and alumni-confirmed records before institutional use.

## What works already

- Dashboard cards
- Batch progress view
- Alumni registry and filters
- Add/edit alumni record
- Profile modal
- Local browser storage
- CSV export
- Cohort report download
- Update-request prototype
- Responsive layout

## Next production phase

For real institutional use, connect the frontend to a secure backend/database such as Supabase, add authenticated roles, audit logs, validation, consent/privacy controls, and a verified migration workflow for historical alumni records.
