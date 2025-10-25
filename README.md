# The Jungle Growshop Dortmund — Astro SSG

Static, fast, SEO-friendly site built with **Astro + Tailwind** and a **Radix/shadcn-based UI Library** wrapped as **Astro Islands**.

## Quick Start
```
pnpm install
pnpm dev
pnpm build
```

## Documentation
- Workflow (Modus B – PR-Flow):  [docs/WORKFLOW.md](docs/WORKFLOW.md)
- Architecture & Inventory:      [docs/ASTRO_UI_LIBRARY.md](docs/ASTRO_UI_LIBRARY.md)
- Cookbook (Copy & Paste):       [docs/UI_SNIPPETS.md](docs/UI_SNIPPETS.md)

## Notes
- Project Pages: `astro.config.mjs` setzt `site` + `base`.
- Interne Links & Assets: immer `import.meta.env.BASE_URL` nutzen.
- CI baut PRs/Feature-Branches, Deploy läuft automatisch auf `main`.
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
