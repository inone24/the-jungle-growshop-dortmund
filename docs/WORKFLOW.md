# Team-Workflow – Modus B (empfohlen): Sicher über Pull Request

Ziel: Im Codex arbeiten, immer **denselben Feature-Branch** verwenden, PR öffnen, CI prüfen, am Ende mergen – der Deploy läuft automatisch.

---

## 0) Einmalige Repo-Einstellungen

1. **Settings ▸ Branches ▸ Branch protection rule für `main`:**
   - Require a pull request before merging → **ein**
   - Require approvals → **1** (oder **0** bei Solo-Projekten)
   - Require status checks to pass before merging → **ein**
     - Nach dem ersten CI-Lauf den Check **“CI / Build (Astro)”** auswählen
   - Require branches to be up to date before merging → **ein**
   - (Optional) Require linear history → **ein**
   - Restrict who can push → **aus**
   - (Optional) Include administrators → **aus**
2. **Settings ▸ Actions ▸ General**
   - Allow all actions and reusable workflows → **ein**
   - Workflow permissions → **Read repository contents and packages**
3. **Settings ▸ Pages**
   - Build & deployment = **GitHub Actions**

> ✅ Die Workflows sind so eingestellt, dass **PRs/Feature-Branches** bauen (CI), aber Deploy nur bei Push auf **`main`** startet.

---

## 1) Arbeiten im Codex – immer derselbe Branch

### A) Branch anlegen

Erster Commit auf einem dauerhaften Feature-Branch (z. B. `codex/ui-library`):

```
REPO: the-jungle-growshop-dortmund
BRANCH: codex/ui-library
COMMIT: "feat(docs): add Astro UI docs (draft)"

[pfad] docs/ASTRO_UI_LIBRARY.md
[code]
…Inhalt…
[/code]
```

### B) Weiterarbeiten – gleicher Branch!

Weitere Änderungen immer auf **demselben** Branch:

```
REPO: the-jungle-growshop-dortmund
BRANCH: codex/ui-library
COMMIT: "docs: refine tooltip examples"

[pfad] docs/UI_SNIPPETS.md
[code]
…neuer Abschnitt…
[/code]
```

**Tipp:** Kleine Zwischenschritte ohne CI: Commit-Message mit `[skip ci]`, z. B. `"docs: polish wording [skip ci]"`.

---

## 2) Pull Request öffnen & aktuell halten

1. GitHub zeigt **“Compare & pull request”** → PR von `codex/ui-library` nach `main` öffnen.
2. Der Check **“CI / Build (Astro)”** läuft automatisch.
3. Meldet GitHub “Update branch” → Button klicken.
   - Alternativ im Codespace:
     ```bash
     git fetch origin
     git merge origin/main
     git push
     ```

---

## 3) Merge & Deploy

1. Im PR **“Merge pull request”** → “Confirm”.
2. Workflow **Deploy Pages** startet automatisch (nur auf `main`).
3. Live-URL in *Settings ▸ Pages* → “Visit site”.

> “Last deployed …” zeigt den letzten **erfolgreichen** Deploy. Änderungen im Feature-Branch werden erst nach dem Merge live.

---

## 4) Aufräumen

- Nach dem Merge Branch behalten (für weitere Arbeit) oder löschen.
- Alte `codex/update-*` oder `feature/*`-Branches schließen und löschen.

---

## 5) Troubleshooting (Kurz)

| Problem | Lösung |
| --- | --- |
| Seite ist nicht aktuell / “Last deployed …” alt | PR noch offen? → Merge. Actions → “Deploy Pages” grün? Notfall: `git commit --allow-empty -m "trigger deploy"` → `git push`. |
| PR meldet “out of date” | Button **“Update branch”** oder `git fetch origin && git merge origin/main && git push`. |
| Viele Merge-Konflikte / “unrelated histories” | Auf dem Feature-Branch: `git fetch origin`, `git merge --allow-unrelated-histories origin/main --no-commit`, `git checkout --ours .`, `git add -A`, `git commit -m "merge main into feature preferring feature content"`, `git push`. Oder neuen Branch von aktuellem `main` starten. |
| Lockfile-Konflikte (`pnpm-lock.yaml`) | Wenn reproduzierbare Builds nicht kritisch sind: `git rm -f pnpm-lock.yaml`, `git commit -m "chore: drop lockfile (regenerate in CI)"`, `git push`. |
| Build-Artefakte im Repo | `.gitignore` muss `dist/`, `docs/`, `sitemap*.xml` abdecken. |
| Project Pages: BASE_URL fehlt | In Astro immer `import.meta.env.BASE_URL` verwenden: `const base = import.meta.env.BASE_URL;` → `<a href={`${base}kontakt/`}>Kontakt</a>`. |

---

## 6) Commit-Vorlagen

**Feature-Commit (ohne CI):**
```
REPO: the-jungle-growshop-dortmund
BRANCH: codex/ui-library
COMMIT: "docs: iterating on cookbook [skip ci]"

[pfad] docs/UI_SNIPPETS.md
[code]
…kleine Änderung…
[/code]
```

**Finaler Commit (mit CI, vor Merge):**
```
REPO: the-jungle-growshop-dortmund
BRANCH: codex/ui-library
COMMIT: "docs: finalize UI docs & snippets"

[pfad] docs/ASTRO_UI_LIBRARY.md
[code]
…final…
[/code]
```

---

## 7) Wo was gebaut wird

- **CI**: `.github/workflows/ci.yml` – läuft bei PRs und Branches `feature/**`, `codex/**`, `hotfix/**`.
- **Deploy**: `.github/workflows/deploy-pages.yml` – nur bei Push auf `main`.
- **SEO/Head**: `src/layouts/PageLayout.astro` (SSR) pflegt Title/Meta/JSON-LD.
- **Project Pages**: `astro.config.mjs` setzt `site` + `base`.

---

Happy shipping! 🚀
