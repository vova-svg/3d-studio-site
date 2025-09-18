## 3D Visualization Studio — One‑page site

Minimal, modern, responsive portfolio for a 3D visualization studio.

Features
- Dark/light theme toggle (persists)
- RU/EN/UK translations (persisted)
- Gallery with category filters (Interiors/Exteriors)
- Smooth image fade‑in on load, card bounce‑in on reveal
- Lightbox (click on any image)
- About with animated counters
- Contact form (front‑end only)

Tech
- Pure HTML + CSS + Vanilla JS (no build tools)

Structure
```
index.html
assets/
  css/styles.css
  js/main.js
  images/
    1.jpg … 8.jpg           # Interiors
    exterior/9.jpg … 16.jpg # Exteriors
    placeholder.svg
README.md
```

Usage
1) Replace images in `assets/images` and `assets/images/exterior`.
2) Update contact links in `index.html` (email, Telegram, Instagram).
3) Open `index.html` or run a local server:
```powershell
python -m http.server 5500
```

Translations
Language buttons RU/EN/UK at the top. Stats and “Trusted by” are translated via `data-i18n` attributes and dictionaries in `assets/js/main.js`.

Lightbox
Click any gallery image. Placeholder appears if a file is missing.

Deploy — GitHub Pages
1) Create a repo and push files.
2) Settings → Pages → Build and deployment → Branch: `main` → Folder: `/ (root)` → Save
3) URL: `https://<username>.github.io/<repo>/`

Deploy — Netlify / Vercel
Import the repository. No build command required; output directory is the repo root.

Upwork portfolio tips
- Add the live URL and 2–3 best screenshots (Hero + Gallery) to your project.
- Brief description: “One‑page 3D visualization studio site: i18n, theme toggle, animated gallery and counters, lightbox, responsive grid.”
- Mention stack: HTML/CSS/JS, no frameworks, fast load.
- Attach a short GIF showing gallery filters and lightbox.

License / Attribution
Replace this section with your details if publishing publicly.
