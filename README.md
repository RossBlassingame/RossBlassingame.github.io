# rossblassingame.com

Personal site for Ross Blassingame. Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), deployed to GitHub Pages at [rossblassingame.com](https://rossblassingame.com).

## Develop

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # output to ./dist
npm run preview
```

## Structure

- `src/pages/` — routes
- `src/layouts/` — shared layouts
- `src/components/` — components
- `src/content/` — MDX content collections (posts, projects)
- `src/styles/` — global CSS / Tailwind config
- `public/` — static assets (CNAME, favicon, images)
- `.github/workflows/deploy.yml` — Pages deploy

## Deploy

Pushing to `main` triggers a build via `withastro/action@v6` and deploys via `actions/deploy-pages@v5`. Configure once: **Settings → Pages → Source → GitHub Actions**.
