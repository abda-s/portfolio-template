// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Set this per client site, e.g. 'https://username.github.io' (root repo)
  // or 'https://username.github.io/repo-name' (project repo).
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  // Only needed for a project repo (user.github.io/repo-name), not a root
  // user/org repo or a custom domain. Must match the repo name exactly.
  // base: '/repo-name',
  vite: {
    plugins: [tailwindcss()]
  }
});