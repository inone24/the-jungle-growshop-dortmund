# UI Cookbook – Astro (SSR-first) + Islands (Interaktiv)

> **Hinweise**
> - Alle Beispiele rendern Inhalte serverseitig; Interaktion hydratisiert als Astro-Island (`client:visible`/`client:idle`).
> - Interne Links/Bilder immer `import.meta.env.BASE_URL` verwenden – kompatibel zu GitHub Project Pages.
> - Styles über `src/styles/ui.css` (Utilities) und optional `src/styles/home.css`.
# UI Snippets – Astro (SSR-first) + Islands (Interaktiv)

> **Hinweis**  
> - Inhalte werden **serverseitig** gerendert (SEO).  
> - Interaktion hydratisiert gezielt als **Astro Islands** (`client:visible|idle`).  
> - Interne Links/Bilder **BASE_URL-sicher**:
>   ```astro
>   ---
>   const base = import.meta.env.BASE_URL; // z.B. "/the-jungle-growshop-dortmund/"
>   ---
>   <a href={`${base}kontakt/`}>Kontakt</a>
>   <img src={`${base}map-preview.svg`} alt="Karte"/>
>   ```
> - Zentrale Utilities/Styles: `src/styles/ui.css` (+ ggf. `src/styles/home.css`)

---

## 0) Quick Imports

```astro
---
import "@/styles/ui.css";
const base = import.meta.env.BASE_URL;
---
```

---

## 1) Navigation & Menüs

### NavigationMenu (Radix)
```astro
import NavigationMenu from "@/components/ui/NavigationMenu.astro";

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

### Menubar (Radix)
```astro
import Menubar from "@/components/ui/Menubar.astro";

<Menubar menus={[{ label: "Datei", items: [{ label: "Neu" }, { label: "Öffnen" }] }]} />
```

### DropdownMenu
```astro
import DropdownMenu from "@/components/DropdownMenu.astro";

<DropdownMenu
  label="Menü"
  items={[
    { label: "Kontakt", href: `${base}kontakt/` },
    {
      label: "Produkte",
      children: [
        { label: "Grow-Sets", href: `${base}produkte/` },
        { label: "LED-Growlampen", href: `${base}produkte/led-grow-lampen/` }
      ]
    }
  ]}
/>
```

---

## 2) Content & Layout

### Breadcrumb (JSON-LD optional)
```astro
import Breadcrumb from "@/components/ui/Breadcrumb.astro";

<Breadcrumb
  emitJsonLd
  items={[
    { name: "Start", href: `${base}` },
    { name: "Growshop Dortmund", current: true }
  ]}
/>
```

### Card Suite
## 1) Navigation / Menüs

### 1.1 NavigationMenu (Radix)
```astro
import NavigationMenu from "@/components/ui/NavigationMenu.astro";
<NavigationMenu groups={[
  { label: "Produkte", items: [
    { label: "LED", href: `${base}produkte/led-grow-lampen/` },
    { label: "Lüftung", href: `${base}produkte/lueftung/` },
    { label: "Dünger", href: `${base}produkte/duenger/` }
  ] }
]}/>
```

### 1.2 Menubar (Radix)
```astro
import Menubar from "@/components/ui/Menubar.astro";
<Menubar menus={[
  { label: "Datei", items: [{ label: "Neu" }, { label: "Öffnen" }] },
  { label: "Hilfe", items: [{ label: "FAQ", href: `${base}wissen/` }] }
]}/>
```

### 1.3 DropdownMenu
```astro
import DropdownMenu from "@/components/DropdownMenu.astro";
<DropdownMenu label="Menü" items={[
  { label: "Kontakt", href: `${base}kontakt/` },
  { label: "Produkte", children: [
    { label: "Grow-Sets", href: `${base}produkte/` },
    { label: "LED-Growlampen", href: `${base}produkte/led-grow-lampen/` }
  ] }
]}/>
```

## 2) Content & Layout

### 2.1 Breadcrumb (+ optional JSON-LD)
```astro
import Breadcrumb from "@/components/ui/Breadcrumb.astro";
<Breadcrumb emitJsonLd items={[
  { name: "Start", href: `${base}` },
  { name: "Growshop Dortmund", current: true }
]}/>
```

### 2.2 Card-Suite
```astro
import Card from "@/components/ui/Card.astro";
import CardHeader from "@/components/ui/CardHeader.astro";
import CardTitle from "@/components/ui/CardTitle.astro";
import CardDescription from "@/components/ui/CardDescription.astro";
import CardContent from "@/components/ui/CardContent.astro";
import CardFooter from "@/components/ui/CardFooter.astro";

<Card class="ui-glass">
<Card>
  <CardHeader>
    <CardTitle>LED Grow Lampen</CardTitle>
    <CardDescription>Bar-Style · Vollspektrum · dimmbar</CardDescription>
  </CardHeader>
  <CardContent>Inhalt …</CardContent>
  <CardFooter>
    <a href={`${base}produkte/led-grow-lampen/`}>Mehr erfahren</a>
  </CardFooter>
</Card>
```

### Separator & Aspect
  <CardFooter><a href={`${base}produkte/led-grow-lampen/`}>Mehr</a></CardFooter>
</Card>
```

### 2.3 Separator / Aspect
```astro
import Separator from "@/components/ui/Separator.astro";
import Aspect from "@/components/ui/Aspect.astro";

<Separator />
<Aspect ratio="16/9">
  <img src={`${base}map-preview.svg`} alt="Karte" />
</Aspect>
```

### Avatar & Sidebar
```astro
import Avatar from "@/components/ui/Avatar.astro";
import Sidebar from "@/components/ui/Sidebar.astro";

<Avatar src={`${base}logo.svg`} alt="The Jungle" initials="TJ" />

<Sidebar
  menu={[
    { label: "Grow-Sets", href: `${base}produkte/` },
    { label: "LED", href: `${base}produkte/led-grow-lampen/` }
  ]}
/>
```

---

## 3) Buttons, Badges & Labels

<Aspect ratio="16/9"><img src={`${base}map-preview.svg`} alt="Map" /></Aspect>
```

### 2.4 Avatar
```astro
import Avatar from "@/components/ui/Avatar.astro";
<Avatar src={`${base}map-preview.svg`} alt="Brand" initials="TJ" />
```

## 3) Buttons / Badges / Labels
```astro
import Button from "@/components/ui/Button.astro";
import Badge from "@/components/ui/Badge.astro";
import Label from "@/components/ui/Label.astro";

<Button as="a" href={`${base}kontakt/`} variant="default" size="lg">Beratung & Kauf</Button>
<Button as="a" href={`${base}standort/`} variant="outline">Route starten</Button>
<Button variant="default" size="lg" as="a" href={`${base}kontakt/`}>
  Beratung & Kauf
</Button>
<Button variant="outline" as="a" href={`${base}standort/`}>
  Route starten
</Button>
<Badge>Neu</Badge>
<Label forId="email">E-Mail</Label>
```

---

## 4) Formulare & Inputs

### Input & Textarea
## 4) Formulare & Eingaben

### 4.1 Input / Textarea
```astro
import Input from "@/components/ui/Input.astro";
import Textarea from "@/components/ui/Textarea.astro";

<Input type="email" name="email" placeholder="E-Mail" />
<Textarea name="message" rows={6} placeholder="Nachricht…" />
```

### Select / RadioGroup / Switch / OTP
```astro
import Select from "@/components/ui/Select.astro";
### 4.2 ContactForm (SSR + RHF-Island)
```astro
import ContactForm from "@/components/ContactForm.astro";
<ContactForm action="/api/contact" />
```

### 4.3 Select (Radix, SSR-Fallback)
```astro
import Select from "@/components/ui/Select.astro";
<Select name="medium" value="erde" items={[
  { label: "Erde", value: "erde" },
  { label: "Coco", value: "coco" },
  { label: "Hydro", value: "hydro" }
]}/>
```

### 4.4 RadioGroup / Switch / InputOTP
```astro
import RadioGroup from "@/components/ui/RadioGroup.astro";
import Switch from "@/components/ui/Switch.astro";
import InputOTP from "@/components/ui/InputOTP.astro";

<Select
  name="medium"
  value="erde"
  items={[
    { label: "Erde", value: "erde" },
    { label: "Coco", value: "coco" },
    { label: "Hydro", value: "hydro" }
  ]}
/>

<RadioGroup
  name="leistung"
  value="300"
  options={[
    { label: "240 W", value: "240" },
    { label: "300 W", value: "300" }
  ]}
/>

<Switch name="newsletter" checked>Newsletter</Switch>
<InputOTP name="verifizierung" slots={6} />
```

### Kontaktformular (SSR + react-hook-form)
```astro
import ContactForm from "@/components/ContactForm.astro";

<ContactForm action="/api/contact" />
```

---

## 5) Overlays & Feedback

### Dialog / AlertDialog / Sheet / Popover / Tooltip
<RadioGroup name="leistung" value="300" options={[
  { label: "240 W", value: "240" },
  { label: "300 W", value: "300" }
]}/>
<Switch name="newsletter" checked={true}>Newsletter</Switch>
<InputOTP name="verifizierung" slots={6} />
```

## 5) Overlays & Feedback

### 5.1 Dialog / AlertDialog / Sheet
```astro
import Dialog from "@/components/ui/Dialog.astro";
import AlertDialog from "@/components/ui/AlertDialog.astro";
import Sheet from "@/components/ui/Sheet.astro";
import Popover from "@/components/ui/Popover.astro";
import Tooltip from "@/components/ui/Tooltip.astro";

<Dialog trigger="Öffnen" title="Info" description="Details …">
  <p>Dialog-Inhalt</p>
</Dialog>

<AlertDialog
  trigger="Löschen"
  title="Sicher?"
  description="Vorgang kann nicht rückgängig gemacht werden."
  actionLabel="Ja"
  cancelLabel="Abbrechen"
/>

<Sheet side="right" trigger="Filter">
  <p>Filter-Content</p>
</Sheet>

<Popover trigger="Mehr" content="Popover-Inhalt" />
<Tooltip trigger="?" content="Info-Text" />
```

### Image-Lightbox
```astro
import ImageLightbox from "@/components/ImageLightbox.astro";

<ImageLightbox
  images={[
    { url: "https://…/bild.jpg", alt: "Laden", title: "Show & Lager" }
  ]}
/>
```

### Toaster & Toast-API
  <p>Sidebar-Content</p>
</Sheet>
```

### 5.2 Popover / Tooltip
```astro
import Popover from "@/components/ui/Popover.astro";
import Tooltip from "@/components/ui/Tooltip.astro";

<Popover trigger="Mehr" content="PO-Inhalt" />
<Tooltip trigger="?" content="Info-Text" />
```

### 5.3 Toaster / `toast()`
```astro
import Toaster from "@/components/ui/Toaster.astro";

<Toaster />
```
```ts
// innerhalb einer Island
// In einer Island
import { toast } from "@/islands/ui/use-toast";

toast({ title: "Gespeichert", description: "Einstellungen übernommen." });
```

### Alert & Skeleton
### 5.4 Alert / Skeleton
```astro
import Alert from "@/components/ui/Alert.astro";
import Skeleton from "@/components/ui/Skeleton.astro";

<Alert title="Hinweis">Mo–Sa 10–20 Uhr geöffnet.</Alert>
<Skeleton className="h-6 w-40" />
```

---

## 6) Collections & Struktur

### Accordion & Tabs
```astro
import Accordion from "@/components/ui/Accordion.astro";
import Tabs from "@/components/ui/Tabs.astro";

<Accordion items={[{ value: "faq1", title: "Welche LED?", content: "~250–350 W …" }]} />

<Tabs
  items={[
    { value: "led", label: "LED", content: "LED-Inhalt …" },
    { value: "luft", label: "Lüftung", content: "Lüftungs-Inhalt …" }
  ]}
/>
```

### ScrollArea / Carousel / Pagination
## 6) Collections / Scrolling / Struktur

### 6.1 ScrollArea / Carousel / Pagination
```astro
import ScrollArea from "@/components/ui/ScrollArea.astro";
import Carousel from "@/components/ui/Carousel.astro";
import Pagination from "@/components/ui/Pagination.astro";

<ScrollArea className="h-64">
  <p>langer Text …</p>
</ScrollArea>

<Carousel
  items={[
    { src: `${base}map-preview.svg`, alt: "Karte", title: "Standort" }
  ]}
/>

<Pagination
  links={[
    { label: "«", href: `${base}produkte/?p=1`, rel: "prev" },
    { label: "1", href: `${base}produkte/?p=1` },
    { label: "2", href: `${base}produkte/?p=2`, current: true },
    { label: "3", href: `${base}produkte/?p=3`, rel: "next" }
  ]}
/>
```

### Resizable Panels
```astro
import Resizable from "@/components/ui/Resizable.astro";

<Resizable direction="horizontal">
  <div slot="a">Panel A</div>
  <div slot="b">Panel B</div>
</Resizable>
```

---

## 7) Daten & Visualisierung

### Chart / Progress / Slider / Table
```astro
import ChartLine from "@/components/ui/ChartLine.astro";
import Progress from "@/components/ui/Progress.astro";
import Slider from "@/components/ui/Slider.astro";
import Table from "@/components/ui/Table.astro";
import T from "@/components/ui/TableParts.astro";

<ChartLine data={[{ name: "KW1", value: 12 }, { name: "KW2", value: 18 }]} />
<Progress value={60} />
<Slider min={0} max={100} step={1} value={40} />
<Carousel items={[
  { src: `${base}map-preview.svg`, alt: "Karte", title: "Standort" }
]}/>

<Pagination links={[
  { label: "«", href: `${base}produkte/?p=1`, rel: "prev" },
  { label: "1", href: `${base}produkte/?p=1` },
  { label: "2", href: `${base}produkte/?p=2`, current: true },
  { label: "3", href: `${base}produkte/?p=3`, rel: "next" }
]}/>
```

### 6.2 Tabs / Accordion
```astro
import Tabs from "@/components/ui/Tabs.astro";
import Accordion from "@/components/ui/Accordion.astro";

<Tabs items={[
  { value: "led", label: "LED", content: "LED-Inhalt …" },
  { value: "luft", label: "Lüftung", content: "Lüftungs-Inhalt …" }
]}/>

<Accordion items={[
  { value: "faq1", title: "Welche LED?", content: "~250–350 W …" }
]}/>
```

### 6.3 Sidebar (Desktop + mobil via Sheet)
```astro
import Sidebar from "@/components/ui/Sidebar.astro";

<Sidebar menu={[
  { label: "Grow-Sets", href: `${base}produkte/` },
  { label: "LED", href: `${base}produkte/led-grow-lampen/` }
]}/>
```

## 7) Daten & Visualisierung

### 7.1 ChartLine (Recharts, SSR-Liste Fallback)
```astro
import ChartLine from "@/components/ui/ChartLine.astro";

<ChartLine data={[
  { name: "KW1", value: 12 },
  { name: "KW2", value: 18 },
  { name: "KW3", value: 15 }
]} />
```

### 7.2 Progress / Slider
```astro
import Progress from "@/components/ui/Progress.astro";
import Slider from "@/components/ui/Slider.astro";

<Progress value={60} />
<Slider min={0} max={100} step={1} value={40} />
```

### 7.3 Table (+ Parts)
```astro
import Table from "@/components/ui/Table.astro";
import T from "@/components/ui/TableParts.astro";

<Table className="ui-glass rounded-xl">
  <T as="thead">
    <T as="tr">
      <T as="th">Feature</T>
      <T as="th">Wert</T>
    </T>
  </T>
  <T as="tbody">
    <T as="tr">
      <T as="td">PPFD</T>
      <T as="td">700 µmol/m²/s</T>
    </T>
  </T>
</Table>
```

### Calendar (DayPicker + Fallback)
```astro
import Calendar from "@/components/ui/Calendar.astro";

<Calendar selected="2025-10-25" name="date" />
```

### Command Palette & Kontextmenü
```astro
import CommandPalette from "@/components/ui/CommandPalette.astro";
import ContextMenu from "@/components/ui/ContextMenu.astro";

<CommandPalette
  items={[
    { label: "Kontakt", href: `${base}kontakt/` },
    { label: "Produkte", href: `${base}produkte/` }
  ]}
/>

<ContextMenu
  label="Kontext"
  entries={[{ label: "Route", href: `${base}standort/` }]}
/>
```

---

## 8) Bonus

- **Toggle & ToggleGroup:** `@/components/ui/Toggle.astro`, `@/components/ui/ToggleGroup.astro`
- **Tooltip + Popover kombinieren:** `<Popover trigger="Profil" content="VPD-Profile" />` & `<Tooltip trigger="i" content="Klick für Details" />`
- **Drawer (Vaul)** existiert weiter als Island (`islands/ui/Drawer.client.tsx`), empfohlen wird `Sheet`.

Happy coding! 🌱
## 8) Bilder & Modale

### 8.1 Image-Lightbox (Declarative Trigger)
```astro
import ImageLightbox from "@/components/ImageLightbox.astro";

<ImageLightbox images={[
  { url: "https://…/bild1.jpg", alt: "Laden", title: "Show & Lager" }
]} />

<!-- oder: eigener Block mit data-lightbox-* Attributen -->
<a
  href="https://…/bild1.jpg"
  data-lightbox-src="https://…/bild1.jpg"
  data-lightbox-alt="Laden"
  data-lightbox-title="Show & Lager"
>
  Bild
</a>
```

## 9) Resizable Panels (Split)
```astro
import Resizable from "@/components/ui/Resizable.astro";

<Resizable direction="horizontal">
  <div slot="a">Panel A</div>
  <div slot="b">Panel B</div>
</Resizable>
```

## 10) Sonstige

### 10.1 Popover/Tooltip kombinieren
```astro
<Popover trigger="Grow-Profil" content="Vordefiniertes Dimm-/VPD-Profil" />
<Tooltip trigger="i" content="Klick für Details" />
```

### 10.2 Button-Varianten
```astro
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link" as="a" href={`${base}kontakt/`}>
  Link
</Button>
```

## FAQ (kurz)

**Warum SSR + Islands?**  
SEO: Inhalte sind sofort im DOM; UX: Interaktion wird bei Bedarf nachgeladen.

**Warum BASE_URL?**  
Project Pages liegen unter `/the-jungle-growshop-dortmund/`. Root-absolute Links (`/…`) würden 404 liefern.

**Wo Styles anpassen?**  
`src/styles/ui.css` (Utilities), `src/styles/tokens.css` (Design-Tokens); für Seiten: `src/styles/home.css`.
