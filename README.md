# Portfolio Template — Astro + Sveltia CMS

A git-backed portfolio site. No database, no backend — content lives as
files in this repo (`src/content/`) and is edited through a CMS at `/admin`
that commits directly to GitHub. Deploys as a static site to GitHub Pages
today, Cloudflare Pages later with no code changes.

This is the base template. **Each client gets their own copy of this repo**
(one repo = one CMS instance = one site).

## How content is wired up

- `src/content/settings.json` — the site-wide singleton: hero, about, skills,
  contact, social links, footer. Edited via the "Site Settings" collection
  in `/admin`.
- `src/content/projects/*.md` — one file per project. Edited via the
  "Projects" collection in `/admin`.
- `src/content.config.ts` — the schema both the Astro pages and the CMS
  fields are validated against. If you add a field in `public/admin/config.yml`,
  add the matching field here too (and vice versa) — they must stay in sync.
- `src/pages/index.astro` and `src/pages/projects/[slug].astro` — render the
  content. Styling is plain Tailwind; restyle freely per client, the content
  model underneath doesn't need to change.

## One-time setup per new client site

### 1. Create the repo

Use this repo as a GitHub template ("Use this template" → "Create a new
repository") under your own account (per our earlier decision — you hold
the repos, clients get collaborator access). Name it
`clientname.github.io` for a root user/project page, or anything else for a
project page (see step 4).

### 2. Point the CMS backend at the new repo

Edit `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/clientname.github.io
  branch: main
  base_url: https://sveltia-cms-auth.YOUR_SUBDOMAIN.workers.dev
```

### 3. Deploy the GitHub OAuth proxy (one-time, reused across all clients)

Sveltia CMS is entirely client-side, so the GitHub OAuth token exchange
needs a small server. [`sveltia/sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth)
is the official one — a Cloudflare Worker, free tier, host-independent (it
works no matter where the actual site is hosted).

1. Deploy it once: click the deploy button in that repo, or clone it and
   run `wrangler deploy`.
2. Create **one** GitHub OAuth App (GitHub → Settings → Developer settings →
   OAuth Apps → New OAuth App). Set the callback URL to
   `https://sveltia-cms-auth.YOUR_SUBDOMAIN.workers.dev/callback`.
3. Set the Worker's `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` env vars
   (or `wrangler secret put`) to that OAuth App's credentials.
4. Reuse this same Worker + OAuth App for every client repo — `base_url`
   in every client's `config.yml` points at the same Worker URL. A client
   only needs to be a **collaborator on their own repo** to authenticate;
   the OAuth App itself is shared.

### 4. Set the Astro `site` (and `base` if needed)

In `astro.config.mjs`:

```js
site: 'https://YOUR_GITHUB_USERNAME.github.io', // or a custom domain
// base: '/repo-name',  // ONLY for a project repo, e.g. username.github.io/repo-name
```

Skip `base` entirely if the repo is named `username.github.io` (root user
page) or a custom domain is attached — that's the simpler path and avoids
every internal link needing the `/repo-name` prefix. Prefer that for new
clients.

### 5. Enable GitHub Pages

Repo → Settings → Pages → Source: **GitHub Actions**. The included
`.github/workflows/deploy.yml` builds and deploys on every push to `main`.

### 6. Invite the client

Repo → Settings → Collaborators → Add. They'll go to
`https://yoursite.com/admin`, click "Sign in with GitHub", authorize once,
and get the CMS UI — no git, no code, no terminal.

## Moving a client to Cloudflare Pages later

No changes needed to content or the CMS — just connect the repo in the
Cloudflare Pages dashboard (build command `npm run build`, output dir
`dist`), point the domain there instead of GitHub Pages, and optionally
drop the `.github/workflows/deploy.yml` step (Cloudflare builds on push
itself). The `sveltia-cms-auth` Worker doesn't move; it already works
independently of where the site is hosted.

## Local development

```sh
npm install
npm run dev        # site at localhost:4321
```

The CMS at `/admin` needs the real GitHub OAuth flow to save changes, so it
won't do much locally without also running against a real repo/backend.
Edit `src/content/settings.json` and `src/content/projects/*.md` directly
while developing locally — those are the same files the CMS writes to.

## Known limitation: login is GitHub-only

Sveltia CMS supports GitHub, GitLab, and Gitea as backends — there's no
email/password identity layer. Clients need a (free) GitHub account and
collaborator access to their repo. If a client ever needs a fully
white-labeled login with no GitHub exposure, that requires switching that
site to a different CMS (e.g. Pages CMS, Keystatic Cloud, Tina Cloud) — not
a config change here.

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start local dev server at `localhost:4321`  |
| `npm run build`     | Build production site to `./dist/`          |
| `npm run preview`   | Preview the build locally                   |
