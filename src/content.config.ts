import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Projects. One .mdx file per project in src/content/projects/.
 * The frontmatter drives the cards on the home page; the MDX body (if any)
 * becomes the case-study page at /work/<slug>/.
 * The schema rejects a malformed project at build time, so a typo fails CI
 * instead of shipping a broken page.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      status: z.enum(['shipped', 'planned']).default('shipped'),
      featured: z.boolean().default(false),
      kicker: z.array(z.string()).min(1),
      summary: z.string(),
      roles: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      caseStudy: z
        .object({
          title: z.string(),
          summary: z.string(),
          meta: z.array(z.object({ k: z.string(), v: z.string() })).length(4),
          next: z.string().optional(),
          nextLabel: z.string().optional(),
        })
        .optional(),
      highlights: z
        .object({
          numbers: z
            .array(z.object({ n: z.number(), dec: z.number().default(0), suf: z.string().default(''), label: z.string() }))
            .max(4),
          built: z.array(z.string()),
          runs: z.array(z.string()),
          gallery: z.array(z.object({ src: image(), alt: z.string(), name: z.string(), short: z.string(), cap: z.string(), dark: z.boolean().default(true) })),
        })
        .optional(),
    }),
});

export const collections = { projects };
