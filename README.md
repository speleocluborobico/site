# Speleo Club Orobico website

Website of the Speleo Club Orobico, live at https://speleocluborobico.github.io/site/.

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

- **Framework**: Astro 7 + Starlight, TypeScript strict mode
- **Styling**: Tailwind CSS v4 via `@astrojs/starlight-tailwind`
- **Content**: Markdown in `src/content/docs/` — Italian at the root, English under `en/`
- **CMS**: Decap CMS at `/site/admin/` (`public/admin/`)
- **Deploy**: GitHub Pages on every push to `main`; pull requests are type-checked and built

## Commands

Requires Node ≥ 22.12 and pnpm (version pinned in `package.json`).

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `pnpm install`      | Install dependencies                               |
| `pnpm dev`          | Start the dev server at `localhost:4321/site/`     |
| `pnpm check`        | Type-check the project (`astro check`)             |
| `pnpm build`        | Build the production site to `./dist/`             |
| `pnpm preview`      | Preview the build locally                          |
| `pnpm astro ...`    | Run Astro CLI commands                             |

See [`AGENTS.md`](./AGENTS.md) for project conventions (translations, pnpm config, gotchas).

## Learn more

[Starlight docs](https://starlight.astro.build/) · [Astro docs](https://docs.astro.build)
