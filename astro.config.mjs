import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
  site: "https://inone24.github.io/the-jungle-growshop-dortmund",
  base: "/the-jungle-growshop-dortmund",
  outDir: "dist",
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap(),
    compress({
      logger: 1,
      html: { removeComments: true, collapseBooleanAttributes: true },
      css: true,
      img: true,
      svg: true
    })
  ],
  vite: {
    build: { cssMinify: true }
  }
});
