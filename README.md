# WaveMax website

The site for [wavemax.ai](https://wavemax.ai): React and Vite, with every page pre-rendered to static HTML and hosted on GitHub Pages.

## Run it locally

```bash
npm install
npm run dev       # live preview at http://localhost:5173
npm run build     # static site in dist/client
npm run preview   # serve the built site
```

## Deploying

Every push to `main` builds and publishes the site through `.github/workflows/deploy.yml`. In the repo's Settings → Pages, the source must be **GitHub Actions** and the custom domain **wavemax.ai**.

## Editing content

- Contact email, form, booking link and LinkedIn: `src/site.config.js`. The contact section adapts to what's filled in.
- Page titles and descriptions for search and link previews: `src/routes.js`
- Page content: `src/pages/`
- Colors and type: the variables at the top of `src/styles.css`

To add a page, create it in `src/pages/`, add a `<Route>` in `src/App.jsx` and an entry in `src/routes.js` so it gets pre-rendered and added to the sitemap.
