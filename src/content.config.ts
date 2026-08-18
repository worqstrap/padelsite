import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Getting Started', 'Technique & Tactics', 'Padel in Kenya']),
    publishedDate: z.coerce.date(),
    author: z.string().default('Shayaan'),
    image: z.string().url(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
