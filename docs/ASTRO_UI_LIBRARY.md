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
# The Jungle — Astro UI Library (SEO-optimiert, SSR-first, Islands)

> 🚀 **Neu:** Schnelle Copy-&-Paste-Beispiele findest du jetzt in [UI_SNIPPETS.md](./UI_SNIPPETS.md).

Diese Bibliothek bündelt alle Base44-Widgets (shadcn/radix/cmdk etc.), sodass sie
- **SEO-optimiert** sind (Inhalte SSR im DOM, Crawler-freundlich),
- **progressiv** funktionieren (Interaktion via **Astro Islands**),
- auf **GitHub Pages (Project Pages)** laufen (**BASE_URL**-sichere Links),
- **zentral** gestylt werden (Tokens + `/src/styles/ui.css` / `home.css`).

---

## Architektur in 60 Sekunden

- **SSR-first**: Texte, Links, Tabellen, Listen, Formulare kommen **serverseitig** ins HTML.
- **Islands** nur für Interaktion (Dropdown, Hover-Card, Dialog, Select, Charts, Carousel …).
  - Pattern: `components/ui/*.astro` (SSR-Wrapper) ↔ `islands/ui/*.client.tsx` (React).
- **BASE_URL** (Astro) für Project Pages:

  ```ts
  const base = import.meta.env.BASE_URL; // "/the-jungle-growshop-dortmund/"
  <a href={`${base}kontakt/`}>Kontakt</a>
  <img src={`${base}map-preview.svg`} />
  ```

- SEO-Head (Title/Meta/JSON-LD) passiert in `PageLayout.astro` (SSR). Keine Head-Manipulation per JS.

## Setup & Best Practices

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
export default defineConfig({
  site: "https://inone24.github.io/the-jungle-growshop-dortmund",
  base: "/the-jungle-growshop-dortmund",
  integrations: [react(), tailwind(), sitemap()]
});
```

- Import-Alias: `"@" -> ./src` (bereits gesetzt).
- `outDir` und GitHub Actions sind bereits für Project Pages vorbereitet.

### Styles

- Design-Tokens: `/src/styles/tokens.css`
- Widgets & Utilities: `/src/styles/ui.css`
- Seiten-/Spezialeffekte: `/src/styles/home.css`
- Keine Build-Artefakte versionieren – `.gitignore` deckt `dist/`, `docs/`, `sitemap*.xml` ab.
- Islands nur dort hydratisieren, wo wirklich nötig (`client:visible` für Hover/Scroll, `client:idle` für Form/Toaster).

## Komponenten-Inventar

Die folgende Tabelle fasst alle portierten Widgets zusammen. Jede Komponente liefert serverseitig gerenderten Content und – falls nötig – eine Island für Interaktion.

| Kategorie | Astro-Wrapper | React-Island | Hydration | SSR-Fallback |
| --- | --- | --- | --- | --- |
| Navigation | `components/ui/NavigationMenu.astro` | `islands/ui/NavigationMenu.client.tsx` | `client:idle` | `<nav><ul>`
|  | `components/ui/Menubar.astro` | `islands/ui/Menubar.client.tsx` | `client:idle` | Liste
|  | `components/DropdownMenu.astro` | `islands/DropdownMenu.client.tsx` | `client:idle` | `<nav><ul>`
| Overlays | `components/ui/Dialog.astro` | `islands/ui/Dialog.client.tsx` | `client:idle` | SSR-Section
|  | `components/ui/AlertDialog.astro` | `islands/ui/AlertDialog.client.tsx` | `client:idle` | Hinweis-Box
|  | `components/ui/Sheet.astro` | `islands/ui/Sheet.client.tsx` | `client:idle` | `<details>`
|  | `components/ui/Popover.astro` | `islands/ui/Popover.client.tsx` | `client:idle` | Inline-Box
|  | `components/ImageLightbox.astro` | `islands/ImageLightbox.client.tsx` | `client:idle` | `<figure>`
| Content/Layout | `components/ui/Card*.astro` | – | – | –
|  | `components/ui/Separator.astro` | `islands/ui/Separator.client.tsx` | optional | `<hr>`
|  | `components/ui/Aspect.astro` | `islands/ui/AspectRatio.client.tsx` | optional | CSS-`aspect-ratio`
|  | `components/ui/Breadcrumb.astro` | – | – | JSON-LD optional
|  | `components/ui/Avatar.astro` | `islands/ui/Avatar.client.tsx` | optional | `<img>`/Initialen
|  | `components/ui/Sidebar.astro` | `islands/ui/Sidebar.client.tsx` | `client:idle` | `<aside>` mit Liste
| Buttons & Chips | `components/ui/Button.astro` | – | – | –
|  | `components/ui/Badge.astro` | – | – | –
| Form & Inputs | `components/ui/Input.astro` | – | – | –
|  | `components/ui/Textarea.astro` | – | – | –
|  | `components/ui/Label.astro` | – | – | –
|  | `components/ui/Select.astro` | `islands/ui/Select.client.tsx` | `client:idle` | `<select>`
|  | `components/ui/RadioGroup.astro` | `islands/ui/RadioGroup.client.tsx` | `client:idle` | `<fieldset>`
|  | `components/ui/Switch.astro` | `islands/ui/Switch.client.tsx` | `client:visible` | `<input type="checkbox">`
|  | `components/ui/InputOTP.astro` | `islands/ui/InputOTP.client.tsx` | `client:visible` | Textfeld
|  | `components/ContactForm.astro` | `islands/ContactForm.client.tsx` | `client:idle` | echtes `<form>`
| Tooltips & Micro-Overlays | `components/HoverCard.astro` | `islands/HoverCard.client.tsx` | `client:visible` | Inline-Text
|  | `components/ui/Tooltip.astro` | `islands/ui/Tooltip.client.tsx` | `client:idle` | `title`-Attribut
| Struktur & Listen | `components/ui/Accordion.astro` | `islands/ui/Accordion.client.tsx` | `client:visible` | `<details>`
|  | `components/ui/Tabs.astro` | `islands/ui/Tabs.client.tsx` | `client:idle` | `<details>`
|  | `components/ui/Collapsible.astro` | `islands/ui/Collapsible.client.tsx` | `client:idle` | `<details>`
|  | `components/ui/Pagination.astro` | – | – | –
| Scroll & Collections | `components/ui/ScrollArea.astro` | `islands/ui/ScrollArea.client.tsx` | `client:visible` | native Overflow
|  | `components/ui/Carousel.astro` | `islands/ui/Carousel.client.tsx` | `client:idle` | Grid
| Daten & Werte | `components/ui/ChartLine.astro` | `islands/ui/ChartContainer.client.tsx` | `client:visible` | Liste
|  | `components/ui/Progress.astro` | `islands/ui/Progress.client.tsx` | `client:visible` | `<progress>`
|  | `components/ui/Slider.astro` | `islands/ui/Slider.client.tsx` | `client:visible` | `<input type="range">`
| Tabellen | `components/ui/Table.astro` + `TableParts.astro` | – | – | –
| Feedback | `components/ui/Alert.astro` | – | – | –
|  | `components/ui/Toaster.astro` | `islands/ui/Toaster.client.tsx`, `islands/ui/use-toast.ts` | `client:idle` | –
| Suche & Kontext | `components/ui/CommandPalette.astro` | `islands/ui/Command.client.tsx` | `client:idle` | `<ul>`
|  | `components/ui/ContextMenu.astro` | `islands/ui/ContextMenu.client.tsx` | `client:visible` | Liste
| Hilfs-Widgets | `components/ui/Skeleton.astro` | `islands/ui/Skeleton.client.tsx` | optional | `<div class="skeleton">`
|  | `components/ui/Resizable.astro` | `islands/ui/Resizable.client.tsx` | `client:idle` | Grid Layout
|  | `components/ui/Calendar.astro` | `islands/ui/Calendar.client.tsx` | `client:visible` | `<input type="date">`
|  | `islands/ui/Drawer.client.tsx` | – | `client:idle` | (Sheet empfohlen)

> 📝 **Hinweis:** Der Vaul-Drawer existiert weiterhin als Island, die Sheet-Komponente deckt das gleiche Pattern aber mit Radix/Dialog ab.

## Komponenten-Katalog (Auszug + Snippets)

Pattern: SSR-Wrapper (Astro) + optionale Island (React). Importiere Utilities/Styles einmalig:

```astro
---
import "@/styles/ui.css";
const base = import.meta.env.BASE_URL;
---
```

### Navigation & Menüs

**NavigationMenu (Radix)** → `components/ui/NavigationMenu.astro`

```astro
<NavigationMenu
  groups={[
    {
      label: "Produkte",
      items: [
        { label: "LED", href: `${base}produkte/led-grow-lampen/` },
        { label: "Lüftung", href: `${base}produkte/lueftung/` }
      ]
    }
  ]}
/>
```

**Menubar (Radix)** → `components/ui/Menubar.astro`

```astro
<Menubar menus={[{ label: "Datei", items: [{ label: "Neu" }, { label: "Öffnen" }] }]} />
```

**DropdownMenu** → `components/DropdownMenu.astro`

```astro
<DropdownMenu label="Menü" items={[{ label: "Kontakt", href: `${base}kontakt/` }]} />
```

### Content & Layout

**Card Suite** → `(Card|Header|Title|Description|Content|Footer.astro)`

```astro
<Card>
  <CardHeader>
    <CardTitle>Headline</CardTitle>
  </CardHeader>
  <CardContent>…</CardContent>
</Card>
```

**Breadcrumb (optional JSON-LD)** → `components/ui/Breadcrumb.astro`

```astro
<Breadcrumb
  emitJsonLd
  items={[
    { name: "Start", href: `${base}` },
    { name: "Growshop Dortmund", current: true }
  ]}
/>
```

**Separator** → `components/ui/Separator.astro`

**Aspect** → `components/ui/Aspect.astro` (`ratio="16/9"`)

### Text/Forms

**Button / Badge / Label** → `components/ui/*.astro`

**Input / Textarea** → `components/ui/*.astro`

```astro
<Label forId="msg">Nachricht</Label>
<Textarea name="message" rows={6} placeholder="…" />
```

**ContactForm** (SSR + Island-Validation) → `components/ContactForm.astro`

```astro
<ContactForm action="/api/contact" />
```

**Select (Radix)** → `components/ui/Select.astro`

**RadioGroup (Radix)** → `components/ui/RadioGroup.astro`

**Switch (Radix)** → `components/ui/Switch.astro`

**InputOTP** → `components/ui/InputOTP.astro`

**Tooltip** → `components/ui/Tooltip.astro` (title-Fallback im `noscript`)

### Overlays & Dialoge

- **Dialog** → `components/ui/Dialog.astro`
- **AlertDialog** → `components/ui/AlertDialog.astro`
- **Sheet** (Drawer auf Dialog-Basis) → `components/ui/Sheet.astro`
- **Popover** → `components/ui/Popover.astro`
- **ImageLightbox** → `components/ImageLightbox.astro`

### Struktur / Sidebar

**Sidebar** → `components/ui/Sidebar.astro` (Desktop fix, mobil als Sheet)

```astro
<Sidebar
  menu={[
    { label: "Grow Komplett Sets", href: `${base}produkte/` },
    { label: "LED Grow Lampen", href: `${base}produkte/led-grow-lampen/` }
  ]}
/>
```

### Daten/Visualisierung

**ChartLine (Recharts, SSR-Liste Fallback)** → `components/ui/ChartLine.astro`

```astro
<ChartLine data={[{ name: "KW1", value: 12 }, { name: "KW2", value: 18 }]} />
```

**Progress** → `components/ui/Progress.astro` (`<progress>` Fallback)

**Slider** → `components/ui/Slider.astro` (`input[type=range]` Fallback)

### Collections / Scrolling / Pagination

- **ScrollArea** → `components/ui/ScrollArea.astro` (native overflow Fallback)
- **Carousel** (Embla, SSR-Grid Fallback) → `components/ui/Carousel.astro`
- **Pagination** (SSR-only) → `components/ui/Pagination.astro`

```astro
<Pagination
  links={[
    { label: "«", href: `${base}produkte/?p=1`, rel: "prev" },
    { label: "1", href: `${base}produkte/?p=1` },
    { label: "2", href: `${base}produkte/?p=2`, current: true },
    { label: "3", href: `${base}produkte/?p=3`, rel: "next" }
  ]}
/>
```

### Content-Struktur / Tabs / Accordion

- **Tabs** (Radix) → `components/ui/Tabs.astro`
- **Accordion** (Radix) → `components/ui/Accordion.astro`

### Feedback

- **Alert** (SSR) → `components/ui/Alert.astro`
- **Toaster** (Toast System) → `components/ui/Toaster.astro`
  - Trigger via Island-Helper `useToast()` (siehe `src/islands/ui/use-toast.ts`)

## Cheatsheet – Codex-Snippets

### BASE_URL für interne Links

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
### Breadcrumb + JSON-LD

```astro
<Breadcrumb
  emitJsonLd
  items={[
    { name: "Start", href: `${base}` },
    { name: "Growshop Dortmund", current: true }
  ]}
/>
```

### SSR + Island-Pattern

```astro
<noscript>
  <!-- SSR: Crawler sehen den Content -->
  <details>
    <summary>Mehr</summary>
    <p>…</p>
  </details>
</noscript>
<MyIsland client:idle {...props} />
```

### Toast auslösen (Beispiel)

```ts
// irgendwo in einer Island
import { toast } from "@/islands/ui/use-toast";

toast({ title: "Gespeichert", description: "Einstellungen übernommen." });
```

### Sidebar

```astro
<Sidebar
  menu={[
    { label: "Grow Komplett Sets", href: `${base}produkte/` },
    { label: "LED Grow Lampen", href: `${base}produkte/led-grow-lampen/` }
  ]}
/>
```

## SEO-Hinweise

- Head/Meta in `PageLayout.astro` pflegen (Title, Description, OG/Twitter, JSON-LD).
- Semantik: Überschriftenhierarchie (`h1/h2/h3`), `nav`, `main`, `section`, `figure`, `table` etc. nutzen.
- Bilder: `alt` beschreibend (5–12 Wörter).
- Interne Links: sprechende Anchors („LED Grow Lampen Dortmund“).
- LCP/CLS: feste Dimensionen bei Bildern, Fonts self-host (optional).

## Troubleshooting

- 404 auf Pages → prüfe `astro.config.mjs` (site, base), Links/Assets via `BASE_URL`.
- Interaktion ohne JS → SSR-Fallback wird gezeigt (gewollt).
- CI/Pages: Actions sollten grün sein (Deploy Pages).
- Konflikte mit `docs/**`: `docs/` nicht mehr versionieren (nur Actions deployen), ggf. aus Historie entfernen.

© The Jungle Growshop Dortmund — UI Library Dokumentation
