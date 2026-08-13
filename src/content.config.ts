import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const settings = defineCollection({
  // The JSON file on disk holds the fields at its root (that's what Sveltia
  // CMS writes for a file collection). The parser wraps it into a single
  // { settings: {...} } entry so file() has an id to key the entry by.
  loader: file('src/content/settings.json', {
    parser: (text) => ({ settings: JSON.parse(text) }),
  }),
  schema: z.object({
    brandName: z.string(),
    brandInitials: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    hero: z.object({
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
    about: z.object({
      eyebrow: z.string(),
      title: z.string(),
      body: z.string(),
      cardTitle: z.string(),
      cardRev: z.string(),
      specs: z.array(z.object({ key: z.string(), value: z.string() })),
    }),
    skills: z.object({
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
    projectsSection: z.object({
      eyebrow: z.string(),
      title: z.string(),
      intro: z.string(),
    }),
    contact: z.object({
      eyebrow: z.string(),
      title: z.string(),
      lede: z.string(),
      email: z.string().optional(),
      phone: z.string().optional(),
      cvUrl: z.string().optional(),
    }),
    socials: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        url: z.string().optional(),
      }),
    ),
    footer: z.object({ left: z.string(), right: z.string() }),
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
        body: z.string(),
      }),
    ),
  }),
});

export const collections = { settings, projects };
