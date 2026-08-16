#!/usr/bin/env node
// Rewrites every place this template hardcodes the deployed site's full
// URL, from one input, so switching a client to a new domain (or setting
// up a fresh client repo) is one command instead of hunting through
// astro.config.mjs and public/admin/config.yml by hand.
//
// Usage:
//   npm run set-site-url -- https://clientname.github.io
//   npm run set-site-url -- https://abda-s.github.io/portfolio-template
//   npm run set-site-url -- https://www.clientdomain.com
//
// Not covered here (still manual, on purpose — they're not URLs):
//   - public/admin/config.yml -> backend.repo (which GitHub repo the CMS writes to)
//   - the client's row in portfolio-cms-auth's D1 database (site_url column),
//     if this domain belongs to an already-onboarded client

import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const [, , rawUrl] = process.argv;

if (!rawUrl) {
  console.error('Usage: npm run set-site-url -- https://clientname.github.io[/repo-name]');
  process.exit(1);
}

let url;

try {
  url = new URL(rawUrl);
} catch {
  console.error(`"${rawUrl}" isn't a valid URL — include the protocol, e.g. https://clientname.github.io`);
  process.exit(1);
}

const origin = url.origin;
const base = url.pathname === '/' ? '/' : url.pathname.replace(/\/+$/, '');
const fullUrl = base === '/' ? origin : `${origin}${base}`;

const root = path.resolve(import.meta.dirname, '..');
const astroConfigPath = path.join(root, 'astro.config.mjs');
const adminConfigPath = path.join(root, 'public/admin/config.yml');

let astroConfig = readFileSync(astroConfigPath, 'utf8');

astroConfig = astroConfig.replace(/^(\s*site:\s*)'[^']*'(,?)$/m, `$1'${origin}'$2`);
astroConfig = astroConfig.replace(/^(\s*base:\s*)'[^']*'(,?)$/m, `$1'${base}'$2`);
writeFileSync(astroConfigPath, astroConfig);

let adminConfig = readFileSync(adminConfigPath, 'utf8');

adminConfig = adminConfig.replace(/^(logout_redirect_url:\s*).*$/m, `$1${fullUrl}/`);
adminConfig = adminConfig.replace(/^(\s*src:\s*).*$/m, `$1${fullUrl}/favicon.svg`);
writeFileSync(adminConfigPath, adminConfig);

console.log(`Updated astro.config.mjs and public/admin/config.yml for ${fullUrl}`);
console.log('Still manual: config.yml -> backend.repo, and portfolio-cms-auth\'s D1 site_url column if this is an existing client.');
