/**
 * Joins Astro's configured `base` (no guaranteed trailing slash) with a
 * root-relative path. Used both for CMS media paths (e.g. /images/uploads/x.jpg,
 * from config.yml's public_folder) and internal route links, since a project-page
 * GitHub Pages deploy serves everything under /repo-name.
 */
export function withBase(path: string | undefined): string {
  if (!path) return '';
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
