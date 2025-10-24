# The Jungle Growshop Dortmund — Astro SSG

Static, fast, SEO-friendly site for a local growshop. Built with Astro + Tailwind.

## Scripts

```bash
pnpm dev       # dev server
pnpm build     # static build -> /dist
pnpm preview   # preview /dist
pnpm lint      # eslint
pnpm format    # prettier
pnpm typecheck # typescript
```

## Content

- `content/global.json` – Stammdaten, Öffnungszeiten, Zahlarten
- `content/seo/*.json` – Title, Description, Canonical pro Route

## Pages

- `/` Home
- `/growshop_dortmund/`
- `/produkte/`
- `/wissen/`
- `/standort/`
- `/kontakt/`
- `/team/`
- `/impressum/`, `/datenschutz/`

## SEO

- `<title>`, `<meta description>`, canonical, OG/Twitter
- JSON-LD via `SchemaScript.astro` (LocalBusiness, Breadcrumb)
- `@astrojs/sitemap`, `robots.txt`, `manifest.webmanifest`

## Deploy (GitHub Pages)

Workflows unter `.github/workflows` (noch ausstehend). In Repo Settings ▸ Pages: Build and deployment → GitHub Actions.

## Notes

- In Produktion bleibt der Head clean (keine Dev-Injektionen).
- Fonts nutzen System-Fallbacks; self-hosted WOFF2 kann leicht ergänzt werden.
- Der Content ist bewusst textlastig, damit Suchmaschinen lokale Relevanz erkennen.
