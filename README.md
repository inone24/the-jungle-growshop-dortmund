# The Jungle Growshop Dortmund

Static storefront for The Jungle Growshop Dortmund built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The generated site is emitted to `dist/` and can be previewed locally with `pnpm preview`.

## Continuous integration

GitHub Actions runs `pnpm build` on every push and pull request using Node.js 22 and pnpm 8.15.5. The compiled output is attached as an artifact for quick inspection.

## GitHub Pages deployment

1. Enable **GitHub Pages** in the repository settings and choose **GitHub Actions** as the source.
2. Ensure the `Deploy Pages` workflow has run successfully on the `main` branch. It uploads the `dist/` folder via `actions/upload-pages-artifact` and publishes it with `actions/deploy-pages`.
3. The published site will be available at `https://<username>.github.io/the-jungle-growshop-dortmund/` (or your configured custom domain).
