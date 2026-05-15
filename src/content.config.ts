import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts. New post: drop an .mdx file under `src/content/posts/`.
// Frontmatter schema is type-checked at build time.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
