import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['frameworks', 'case-studies', 'dialogues', 'notes']),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const postmem = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/postmem' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    pageType: z.string(),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, postmem };
