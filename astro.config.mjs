import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://inone24.github.io/the-jungle-growshop-dortmund",
  base: "/the-jungle-growshop-dortmund",
  outDir: "dist",
  integrations: [tailwind(), sitemap()]
});
