## 3D Visualization Studio — One‑page site

Minimal, modern, responsive for a 3D visualization studio.

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