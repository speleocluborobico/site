## 🚀 Speleocluborobico.org project structure.
The website is an Astro 5/Starlight static site with Tailwind CSS v4.
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Key features:
- **Framework**: Astro 5.x with TypeScript strict mode
- **Starlight**: Starter Kit: Tailwindcss
- **Styling Engine**: Tailwind CSS v4 (latest version)
- **CMS**: DecapCMS (former Netlify CMS)
- **Architecture Pattern**: File-based routing with reusable components and layout wrappers
- **Main Components**:
  - [`astro.config.mjs`](../0) : Tailwind CSS v4 Vite plugin configuration
  - [`package.json`](../0) : Dependencies including @tailwindcss/vite

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help`       | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/) or read [the Astro documentation](https://docs.astro.build).
