# The Jungle — Astro UI Library
**SEO-optimiert · SSR-first · Astro Islands (React) · BASE_URL-safe**

Diese Bibliothek portiert das vollständige Base44/shadcn/radix Widget-Set, sodass

- **Inhalte** serverseitig gerendert werden – Crawler sehen alles ohne JS.
- **Interaktion** nur dort hydratisiert wird, wo sie nötig ist (`client:visible`/`client:idle`).
- Alle internen Links/Assets per `import.meta.env.BASE_URL` Project-Pages-tauglich bleiben.
- **Styles** zentral verwaltet werden (`src/styles/ui.css`, optional `src/styles/home.css`).

> 💡 **Copy & Paste gesucht?** Das komplette Cookbook liegt in [docs/UI_SNIPPETS.md](./UI_SNIPPETS.md).

---

## Projekt-Setup (Kurz)

### Astro-Konfiguration

```ts
// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  site: "https://inone24.github.io/the-jungle-growshop-dortmund",
  base: "/the-jungle-growshop-dortmund",
  outDir: "dist",
  integrations: [react(), tailwind(), sitemap()],
  vite: {
    resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } }
  }
});
```

### BASE_URL sicher verwenden

```astro
---
const base = import.meta.env.BASE_URL;
---
<a href={`${base}kontakt/`}>Kontakt</a>
<img src={`${base}map-preview.svg`} alt="Karte" />
```

### Styles & Tokens

- Design Tokens: `src/styles/tokens.css`
- Globale Widgets & Utilities: `src/styles/ui.css`
- Seiten-/Feature-Effekte: `src/styles/home.css`
- Head/SEO: `src/layouts/PageLayout.astro` (SSR, kein Client-JS)

> ❗ Build-Artefakte nicht committen – `.gitignore` deckt `dist/`, `docs/`, `sitemap*.xml` ab.

---

## Komponenten-Inventar (100 % Abdeckung)

| Kategorie | Astro-Wrapper | React-Island | Hydration | SSR-Fallback |
| --- | --- | --- | --- | --- |
| **Navigation** | `components/ui/NavigationMenu.astro` | `islands/ui/NavigationMenu.client.tsx` | `client:idle` | `<nav>`/`<ul>` |
|  | `components/ui/Menubar.astro` | `islands/ui/Menubar.client.tsx` | `client:idle` | Liste |
|  | `components/DropdownMenu.astro` | `islands/DropdownMenu.client.tsx` | `client:idle` | `<nav>`/`<ul>` |
| **Overlays** | `components/ui/Dialog.astro` | `islands/ui/Dialog.client.tsx` | `client:idle` | SSR-Section |
|  | `components/ui/AlertDialog.astro` | `islands/ui/AlertDialog.client.tsx` | `client:idle` | Hinweis-Box |
|  | `components/ui/Sheet.astro` | `islands/ui/Sheet.client.tsx` | `client:idle` | `<details>` |
|  | `components/ui/Popover.astro` | `islands/ui/Popover.client.tsx` | `client:idle` | Inline-Box |
|  | `components/ImageLightbox.astro` | `islands/ImageLightbox.client.tsx` | `client:idle` | `<figure>` |
| **Content & Layout** | `components/ui/Card*.astro` | – | – | – |
|  | `components/ui/Separator.astro` | `islands/ui/Separator.client.tsx` | optional | `<hr>` |
|  | `components/ui/Aspect.astro` | `islands/ui/AspectRatio.client.tsx` | optional | CSS `aspect-ratio` |
|  | `components/ui/Breadcrumb.astro` | – | – | JSON-LD optional |
|  | `components/ui/Avatar.astro` | `islands/ui/Avatar.client.tsx` | optional | `<img>`/Initialen |
|  | `components/ui/Sidebar.astro` | `islands/ui/Sidebar.client.tsx` | `client:idle` | `<aside>` mit Liste |
| **Buttons & Chips** | `components/ui/Button.astro` | – | – | – |
|  | `components/ui/Badge.astro` | – | – | – |
| **Form & Inputs** | `components/ui/Input.astro` | – | – | – |
|  | `components/ui/Textarea.astro` | – | – | – |
|  | `components/ui/Label.astro` | – | – | – |
|  | `components/ui/Select.astro` | `islands/ui/Select.client.tsx` | `client:idle` | `<select>` |
|  | `components/ui/RadioGroup.astro` | `islands/ui/RadioGroup.client.tsx` | `client:idle` | `<fieldset>` |
|  | `components/ui/Switch.astro` | `islands/ui/Switch.client.tsx` | `client:visible` | Checkbox |
|  | `components/ui/InputOTP.astro` | `islands/ui/InputOTP.client.tsx` | `client:visible` | Textfeld |
|  | `components/ContactForm.astro` | `islands/ContactForm.client.tsx` | `client:idle` | echtes `<form>` |
| **Tooltips & Micro-Overlays** | `components/HoverCard.astro` | `islands/HoverCard.client.tsx` | `client:visible` | Inline-Text |
|  | `components/ui/Tooltip.astro` | `islands/ui/Tooltip.client.tsx` | `client:idle` | `title`-Fallback |
| **Struktur & Listen** | `components/ui/Accordion.astro` | `islands/ui/Accordion.client.tsx` | `client:visible` | `<details>` |
|  | `components/ui/Tabs.astro` | `islands/ui/Tabs.client.tsx` | `client:idle` | `<details>` |
|  | `components/ui/Collapsible.astro` | `islands/ui/Collapsible.client.tsx` | `client:idle` | `<details>` |
|  | `components/ui/Pagination.astro` | – | – | – |
| **Scroll & Collections** | `components/ui/ScrollArea.astro` | `islands/ui/ScrollArea.client.tsx` | `client:visible` | native Overflow |
|  | `components/ui/Carousel.astro` | `islands/ui/Carousel.client.tsx` | `client:idle` | Grid |
| **Daten & Werte** | `components/ui/ChartLine.astro` | `islands/ui/ChartContainer.client.tsx` | `client:visible` | Liste |
|  | `components/ui/Progress.astro` | `islands/ui/Progress.client.tsx` | `client:visible` | `<progress>` |
|  | `components/ui/Slider.astro` | `islands/ui/Slider.client.tsx` | `client:visible` | `<input type="range">` |
| **Tabellen & Feedback** | `components/ui/Table.astro` + `TableParts.astro` | – | – | – |
|  | `components/ui/Alert.astro` | – | – | – |
|  | `components/ui/Toaster.astro` | `islands/ui/Toaster.client.tsx`, `islands/ui/use-toast.ts` | `client:idle` | – |
| **Suche & Kontext** | `components/ui/CommandPalette.astro` | `islands/ui/Command.client.tsx` | `client:idle` | `<ul>` |
|  | `components/ui/ContextMenu.astro` | `islands/ui/ContextMenu.client.tsx` | `client:visible` | Liste |
| **Hilfs-Widgets** | `components/ui/Skeleton.astro` | `islands/ui/Skeleton.client.tsx` | optional | `<div class="skeleton">` |
|  | `components/ui/Resizable.astro` | `islands/ui/Resizable.client.tsx` | `client:idle` | Grid |
|  | `components/ui/Calendar.astro` | `islands/ui/Calendar.client.tsx` | `client:visible` | `<input type="date">` |
|  | `islands/ui/Drawer.client.tsx` | – | `client:idle` | (Sheet deckt das Pattern bereits ab) |

---

## Performance & Accessibility

- **Hydration bewusst wählen:** Hover/Scroll/Charts → `client:visible`, Form-Komfort/Toaster → `client:idle`.
- **Kontraste & Focus**: Tokens liefern passende Farben, `focus-visible` nutzen.
- **CLS vermeiden:** Bilder mit festen Dimensionen; Webfonts optional selbst hosten.
- **Semantik**: Überschriftenhierarchie, `section`, `nav`, `figure`, `table` korrekt einsetzen.
- **Interne Links**: Sprechende Anchor-Texte (“LED Grow Lampen Dortmund”).

---

## Weiterführend

- **Cookbook:** [docs/UI_SNIPPETS.md](./UI_SNIPPETS.md) – alle Snippets als Astro-Code.
- **Workflow:** [docs/WORKFLOW.md](./WORKFLOW.md) – Branch/PR-Prozess für Modus B.

Viel Spaß beim Bauen! 🌿
