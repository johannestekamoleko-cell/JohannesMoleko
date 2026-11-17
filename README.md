# JohannesMoleko

Personal portfolio site for Johannes Moleko, live at **https://jlmoleko.publicvm.com** (GitHub Pages).
It's a static site with no build step.

```
index.html            page markup
styles.css            all styles
script.js             mobile menu, scroll reveal, active nav link
favicon.svg / .ico / favicon-32.png / apple-touch-icon.png / icon-512.png
site.webmanifest      app icon + theme colour
assets/og-image.png   preview image for LinkedIn / WhatsApp shares
assets/projects/      homepage screenshots of client sites (1200×600 WebP)
assets/certs/         certificate PDFs
```

## Preview locally

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Adding a project screenshot

1. Take a 2:1 screenshot of the homepage (e.g. 1600×800) and save it as `assets/projects/<name>.webp`.
2. Copy one of the `<article class="work-card">` blocks in `index.html` and update the link, image, text and tags.
