import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

/**
 * Each settings file below is a single-entry Astro collection loaded from
 * its own JSON file, matching one Sveltia CMS "singleton" (see
 * public/admin/config.yml). Splitting the old single settings.json into
 * one focused file per page section means editing, say, just the contact
 * info touches one small file/CMS screen instead of one giant one covering
 * the whole site.
 */

const site = defineCollection({
  loader: file('src/content/settings/site.json', { parser: (text) => ({ site: JSON.parse(text) }) }),
  schema: z.object({
    brandName: z.string(),
    brandInitials: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    footerLeft: z.string(),
    footerRight: z.string(),
  }),
});

const hero = defineCollection({
  loader: file('src/content/settings/hero.json', { parser: (text) => ({ hero: JSON.parse(text) }) }),
  schema: z.object({
    eyebrow: z.string(),
    titleLine1: z.string(),
    titleLine2: z.string(),
    titleAccent: z.string(),
    lede: z.string(),
    ctaPrimary: z.string(),
    ctaSecondary: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    caption: z.string().optional(),
    captionRight: z.string().optional(),
    stats: z.array(z.object({ value: z.string(), label: z.string() })),
  }),
});

const about = defineCollection({
  loader: file('src/content/settings/about.json', { parser: (text) => ({ about: JSON.parse(text) }) }),
  schema: z.object({
    eyebrow: z.string(),
    title: z.string(),
    // Markdown, rendered to HTML in the page (see src/lib/markdown.ts) —
    // written with Sveltia's WYSIWYG editor, no HTML typed by hand.
    body: z.string(),
    cardTitle: z.string(),
    cardRev: z.string(),
    specs: z.array(z.object({ key: z.string(), value: z.string() })),
  }),
});

const skills = defineCollection({
  loader: file('src/content/settings/skills.json', { parser: (text) => ({ skills: JSON.parse(text) }) }),
  schema: z.object({
    eyebrow: z.string(),
    title: z.string(),
    intro: z.string(),
    categories: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        items: z.array(
          z.object({
            name: z.string(),
            level: z.string(),
            pct: z.number(),
          }),
        ),
      }),
    ),
  }),
});

const projectsSection = defineCollection({
  loader: file('src/content/settings/projects-section.json', {
    parser: (text) => ({ projectsSection: JSON.parse(text) }),
  }),
  schema: z.object({
    eyebrow: z.string(),
    title: z.string(),
    intro: z.string(),
  }),
});

const contact = defineCollection({
  loader: file('src/content/settings/contact.json', { parser: (text) => ({ contact: JSON.parse(text) }) }),
  schema: z.object({
    eyebrow: z.string(),
    title: z.string(),
    lede: z.string(),
    email: z.string().optional(),
    phone: z.string().optional(),
    cvUrl: z.string().optional(),
    socials: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        url: z.string().optional(),
      }),
    ),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/projects' }),
  schema: z.object({
    sheet: z.string(),
    tag: z.string(),
    title: z.string(),
    subtitle: z.string(),
    thumb: z.string().optional(),
    result: z.string(),
    published: z.boolean().default(true),
    order: z.number().default(0),
    metrics: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
        placement: z.enum(['card', 'detail']),
      }),
    ),
    sections: z.array(
      z.object({
        number: z.string(),
        heading: z.string(),
        // Markdown, rendered to HTML in the page (see src/lib/markdown.ts) —
        // written with Sveltia's WYSIWYG editor, no HTML typed by hand.
        // Sveltia writes `null` (not just omitting the key) for an unused
        // optional field, hence `.nullish()` rather than `.optional()`.
        body: z.string().nullish(),
        // A simple data table (e.g. "Results Summary"), built from rows
        // instead of typed HTML — Sveltia's editor has no table button yet.
        table: z
          .object({
            columnOneHeader: z.string(),
            columnTwoHeader: z.string(),
            rows: z.array(z.object({ label: z.string(), value: z.string() })),
          })
          .nullish(),
        // A highlighted note box, built from a title + text instead of
        // hand-typed <div class="callout-box"> markup.
        callout: z.object({ title: z.string(), text: z.string() }).nullish(),
      }),
    ),
  }),
});

export const collections = { site, hero, about, skills, projectsSection, contact, projects };
