# UPM SHS Department of Medicine Alumni Tracking System — GitHub Pages Fixed Build

This package is designed to avoid the issue where GitHub Pages shows the HTML but fails to apply the latest CSS/JS.

## Important
The deployed `index.html` is **self-contained**:
- CSS is embedded directly in `index.html`
- JavaScript is embedded directly in `index.html`
- Both uploaded logos are embedded directly in `index.html`

That means GitHub Pages does not need to fetch `styles.css`, `dist/app.js`, or image files for the live page. The separate source files are still included so you can edit them later.

## Upload / replace on GitHub
1. Open the `upmshs-community/alumni` repository.
2. Replace the existing files with the contents of this ZIP.
3. Make sure `index.html` is in the repository root.
4. Commit the upload.
5. Wait for **Actions → pages build and deployment** to finish successfully.
6. Open `https://upmshs-community.github.io/alumni/` and hard-refresh once.

## Editable source files
- `src/app.ts` — TypeScript source
- `styles.css` — editable styles
- `dist/app.js` — compiled JS
- `assets/` — original image files

For this fixed build, editing those source files will not change the live page until you regenerate/replace the inline content in `index.html`.


## Logo order
The header shows the UP seal first, followed by the UPM School of Health Sciences seal. Both use the same displayed dimensions.
