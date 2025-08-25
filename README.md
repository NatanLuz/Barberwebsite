 ## Barbearia Luxo — Premium Barber Website ##PROTOTYPE WEBSITE##

 [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)]()
[![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat&logo=google&logoColor=white)]()


![Barbearia Luxo](https://i.imgur.com/UirkYbC.png)

An elegant, performance‑oriented, and fully responsive website for a premium barber shop. Built with accessible HTML, modern CSS, and light vanilla JavaScript, focusing on conversion, SEO, and a polished UX.

### What’s inside
- Landing page with hero, highlights, services, and CTA
- About page with story, team, and differentiators
- Services page with clear pricing and booking CTA
- Contact and booking page with inline validation and map
- Reusable components (cards, features, forms, grid)
- Smooth on‑scroll reveal and mobile navigation
- SEO (Open Graph, Twitter Cards, canonical), JSON‑LD (HairSalon)
- PWA baseline: manifest + Service Worker (offline cache)

### Highlights
- Professional dark theme with premium accent color
- Mobile‑first grid and modern layout primitives
- Accessible: skip link, ARIA states, keyboard handling
- Fast: minimal JS, optimized animations, preconnects

### Tech Stack
- HTML5, CSS3 (custom properties, responsive grid)
- Vanilla JS (navigation, form validation, a11y helpers)
- Google Fonts (Inter, Playfair Display)

### Getting Started
1) Clone the repo
2) Open `index.html` in your browser

For a local server (recommended):
```bash
# Using VS Code
code .
# Run with Live Server extension

# Or with Python
python -m http.server 8080
```

### Project Structure
```
barbeirowebsite/
  index.html
  sobre.html
  servicos.html
  contato.html
  style.css
  Main.js
  img/
  manifest.json
  sw.js
  sitemap.xml
  robots.txt
```

### Customization
- Branding: update logo text and primary color in `:root` variables (style.css)
- Contact data: update phone/email/address in `contato.html` and JSON‑LD in `index.html`
- Prices and services: edit cards in `servicos.html`
- Images: replace assets inside `img/` (prefer WebP/AVIF)

### SEO & PWA Notes
- Keep canonical links per page, and update `sitemap.xml`
- Host over HTTPS for Service Worker and PWA install prompts
- Replace the manifest icon with a proper 512×512 PNG/SVG

### Roadmap (nice‑to‑have)
- FAQ section with Schema.org `FAQPage`
- Testimonials with `Review` schema
- Image `<picture>` sources (WebP/AVIF) + width/height attributes
- Content Security Policy and CSP‑safe inline handling

### Credits
Design and development by Natan Da Luz.

LinkedIn: https://www.linkedin.com/in/natan-da-luz-3156582a2/
Email: natandaluz01@gmail.com
