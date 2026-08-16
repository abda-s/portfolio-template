# Portfolio Template — Astro + Sveltia CMS

A git-backed portfolio site. No database, no backend — content lives as
files in this repo (`src/content/`) and is edited through a CMS at `/admin`
that commits directly to GitHub. Deploys as a static site to GitHub Pages
today, Cloudflare Pages later with no code changes.

This is the base template. **Each client gets their own copy of this repo**
(one repo = one CMS instance = one site).

## How content is wired up

Each page section is its own file, edited on its own dedicated screen in
`/admin` — not one long form covering the whole site. The sidebar shows Site
Info, Hero, About, Skills, Projects Intro, and Contact & Socials as separate
clicks (via Sveltia's `singletons` config), so "update my phone number"
opens a small Contact screen instead of scrolling through everything else
to find it:

- `src/content/settings/site.json` — brand name, page title/description, footer.
- `src/content/settings/hero.json` — homepage intro, headline, stats strip.
- `src/content/settings/about.json` — About section text and the side-card facts.
- `src/content/settings/skills.json` — skill categories and their bars.
- `src/content/settings/projects-section.json` — the heading/intro above the project grid.
- `src/content/settings/contact.json` — contact info and social/link rows.
- `src/content/projects/*.md` — one file per project, in its own "Projects"
  collection (create/delete supported, unlike the singletons above). Each
  project is a numbered list of write-up sections; each section has three
  optional parts an editor fills in with no HTML or Markdown syntax
  knowledge needed: **Text** (a real WYSIWYG editor — bold/italic/lists via
  toolbar buttons), **Table** (add rows with a label + value, e.g. a
  "Results Summary"), and **Highlighted Note** (a title + text callout
  box). Leave whichever parts a section doesn't need blank.
- `src/lib/markdown.ts` — renders the About text and project Text fields
  (stored as Markdown, written via the CMS's WYSIWYG editor) to HTML at
  build time.
- `src/content.config.ts` — the schema both the Astro pages and the CMS
  fields are validated against. If you add a field to a singleton in
  `public/admin/config.yml`, add the matching field to that singleton's
  schema here too (and vice versa) — they must stay in sync.
- `src/pages/index.astro` and `src/pages/projects/[slug].astro` — render the
  content.
- `src/styles/global.css` — the whole design system, ported from
  raad04.github.io: a CAD title-block aesthetic (ink/paper theme, Big
  Shoulders Display + IBM Plex type, dimension-line callouts). Hand-authored
  CSS classes (`.hero`, `.proj-card`, `.skill-grid`, etc.), not Tailwind
  utilities — restyle freely per client by editing this file and the markup
  in the two pages above; the content model underneath doesn't need to
  change.

Every image uploaded through the CMS (hero photo, project thumbnails) is
automatically converted to WebP, capped at 2048px, and stripped of EXIF
metadata — right in the browser at upload time, before it's committed. See
`media_libraries` in `public/admin/config.yml`. This only applies to new
uploads; it doesn't retroactively touch images already in the repo.

The CMS itself is rebranded via `app_title` and `logo` in
`public/admin/config.yml` — the client sees our name/mark in the header,
login page, and browser tab, not "Sveltia CMS". This is config, not a fork:
Sveltia isn't a white-label product, so one small "Powered by Sveltia CMS"
credit remains in the UI footer regardless. Removing that fully would mean
forking and self-hosting the CMS bundle, which trades one footer line for
manually porting every future Sveltia update/security fix ourselves —
not worth it for a single credit line.

Adding a whole new page section later (say, a Testimonials block) means:
add one JSON file under `src/content/settings/`, one singleton block in
`config.yml`, one schema entry in `content.config.ts`, and the markup in
`index.astro` — each addition mirrors the existing ones, so copy whichever
section is most similar (e.g. `projects-section.json` for something with no
list, `skills.json` for something with a repeatable list) as a starting
point.

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
```

(No `base_url` here — login doesn't go through Sveltia's GitHub-OAuth
screen at all; see below.)

Also update the two other absolute URLs further down in the same file to
match the new site's real domain (and `base`, if it has one, per step 4):
`logout_redirect_url` and `logo.src`. Both need the full URL — a relative
path won't resolve correctly once the CMS is served under a different
domain/base than this template's.

### 3. Add the client to the shared auth Worker (one-time Worker setup, then per-client)

Clients log in with a plain email/password — no GitHub account needed. This
is handled by a separate project, [`portfolio-cms-auth`](../portfolio-cms-auth/README.md),
a Cloudflare Worker + D1 database that serves a real login page and, on
success, signs the client straight into their CMS using Sveltia's built-in
magic-link URL — the same mechanism Sveltia uses for its own QR-code mobile
sign-in. Sveltia's GitHub-branded splash screen is never shown.

1. Deploy the Worker once (see that project's README) — it's shared across
   every client.
2. For each new client: create a **fine-grained GitHub PAT** scoped to only
   their repo (`Contents: Read and write`, nothing else), then run
   `npm run add-client` in `portfolio-cms-auth/` and give it their email, a
   password, their repo, their site's URL, and that token.
3. `public/admin/index.html` in this template already points signed-out
   visitors at that same Worker's `/login` page — no per-client edit needed
   there.

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

### 6. Give the client their login

No GitHub invite needed — just tell them the email and password you set up
in step 3, and the URL: `https://yoursite.com/admin`. They'll be sent
straight to a plain login page, enter both, and land in the CMS UI signed
in — no git, no code, no GitHub account, no GitHub branding anywhere in
the flow.

## Moving a client to Cloudflare Pages later

No changes needed to content or the CMS — just connect the repo in the
Cloudflare Pages dashboard (build command `npm run build`, output dir
`dist`), point the domain there instead of GitHub Pages, and optionally
drop the `.github/workflows/deploy.yml` step (Cloudflare builds on push
itself). The `portfolio-cms-auth` Worker doesn't move; it already works
independently of where the site is hosted.

## Local development

```sh
npm install
npm run dev        # site at localhost:4321
```

The CMS at `/admin` needs the real login flow to save changes, so it won't
do much locally without also running against the deployed auth Worker and a
real repo. Edit `src/content/settings.json` and `src/content/projects/*.md`
directly while developing locally — those are the same files the CMS
writes to.

## How client login actually works

Sveltia CMS itself only supports GitHub/GitLab/Gitea as backends — no
email/password identity layer built in. `portfolio-cms-auth` (a sibling
project) works around that: `public/admin/index.html` sends signed-out
visitors to that Worker's login page before Sveltia's UI ever renders, and
on a correct password it redirects them back to
`{site}/admin/#/signin/<token>` — a magic-link URL Sveltia natively
consumes to sign in silently, with a GitHub token scoped to just that
client's repo. Sveltia's GitHub-branded screen is never reached. See
[`../portfolio-cms-auth/README.md`](../portfolio-cms-auth/README.md) for
the full mechanism and its security notes (read those before onboarding a
real client — token scoping matters here).

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start local dev server at `localhost:4321`  |
| `npm run build`     | Build production site to `./dist/`          |
| `npm run preview`   | Preview the build locally                   |
