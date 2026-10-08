# AGENTS.md

Speleo Club Orobico website: Astro 7 + Starlight docs site, deployed to GitHub Pages.

## Commands
- Package manager is **pnpm** (pinned via `packageManager` in `package.json`). Do not use npm/yarn or commit other lockfiles.
- Verify changes with `pnpm build` — there are no tests, linter, or typecheck. `build` also surfaces config/integration errors that `dev` hides.
- `pnpm dev` (Astro 7) starts a **background** server and returns immediately. Use `pnpm astro dev status | logs | stop`; always `stop` when done. If it "exited before becoming ready", run `pnpm build` to see the real error.
- Site is served under base `/site` → local URL is `http://localhost:4321/site/`.

## pnpm config (`pnpm-workspace.yaml`)
- pnpm 12 fails install on unapproved dependency build scripts. Approve new ones under `allowBuilds` (currently `esbuild`, `sharp`) — not `onlyBuiltDependencies` (removed).
- `minimumReleaseAgeExclude` is auto-written by pnpm when installing very recent releases; keep it committed.

## Content
- Pages are Markdown in `src/content/docs/`; file path = URL. Italian is the `root` locale (`lang: it`).
- English lives under `src/content/docs/en/` with the same relative path as the Italian page. When adding or editing an Italian page, create or update its English counterpart in the same change. Pages with a custom `slug:` need `en/` prefixed in the English copy (e.g. `slug: en/documentazione/grotte`).
- Intentionally untranslated (fall back to Italian): `index.mdx` (still Starlight template content) and `biblioteca/catalogo-libri.md` (scraped PHP error, no real content).
- Translation conventions: keep cave names, toponyms, organisations, people, cadastral codes (`LoBg …`) and cited publication titles (*Ol Bus*, *BiblioSCO News*, journals, books) in Italian; never change URLs.
- Build warnings about a missing `i18n` collection and `404` entry are expected.
- Sidebar is auto-generated (no `sidebar` in `astro.config.mjs`).
- Many images are hot-linked from `https://www.speleocluborobico.org/site/images/...`, not stored in the repo.

## Customizations
- `src/components/ThemeSelect.astro` overrides Starlight's theme picker to default to **dark**.
- Styling: Tailwind v4 via `@tailwindcss/vite` + `@astrojs/starlight-tailwind`; theme tokens (accent/gray palette, fonts) live in `src/styles/global.css`.
- `starlight-image-zoom` must stay ≥ 0.16 (earlier versions break on Astro 7's default Sätteri Markdown processor).

## Decap CMS
- `public/admin/` is a Decap CMS (GitHub backend, repo `speleocluborobico/site`). The `pages` collection edits `src/content/docs/`.
- The `grotte` collection (`src/grotte`, `Layout.astro`, `code`/`comune` fields) is **planned, not stale**. Don't remove it or "fix" its paths; its targets and `src/assets/images` don't exist yet. Current cave pages live in `src/content/docs/grotte/`.

## Deploy
- `.github/workflows/astro.yml` builds with `withastro/action` (Node 24, pnpm 12.10.1) on push to `main`. Keep its `package-manager` in sync with `packageManager` in `package.json`.
