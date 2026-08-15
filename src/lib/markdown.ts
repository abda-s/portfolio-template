import { marked } from 'marked';

/**
 * Renders content-collection Markdown (written via Sveltia CMS's WYSIWYG
 * editor) to block-level HTML (paragraphs, lists) for use with Astro's
 * `set:html`.
 */
export function renderMarkdown(source: string | undefined | null): string {
  if (!source) return '';
  return marked.parse(source, { async: false });
}

/**
 * Same as `renderMarkdown`, but without wrapping the result in a <p> tag —
 * for markdown used inline inside an existing block element, e.g. a table
 * cell (<td>**117.7 JD**</td> should stay inline, not gain a nested <p>).
 */
export function renderMarkdownInline(source: string | undefined | null): string {
  if (!source) return '';
  return marked.parseInline(source, { async: false });
}
