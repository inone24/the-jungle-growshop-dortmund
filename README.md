# The Jungle Growshop Dortmund — Astro SSG

Static, fast, SEO-friendly site built with Astro + Tailwind (Project Pages, `BASE_URL`-safe) and a UI library based on Radix/shadcn as Astro Islands.

## Quick Start

```bash
pnpm install
pnpm dev
pnpm build   # static -> dist
```

## Docs

- [UI Library – Architektur & Best Practices](docs/ASTRO_UI_LIBRARY.md)
- [UI Library – Snippets (Copy & Paste)](docs/UI_SNIPPETS.md)

## Notes

- Project Pages: `astro.config.mjs` sets `site` + `base`.
- Internal links & assets via `import.meta.env.BASE_URL`.
- Build & Deploy: GitHub Actions are configured (push to `main` triggers Pages).
