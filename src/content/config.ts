import { defineCollection, z } from "astro:content";
const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    order: z.number().optional(),
    lastUpdated: z.date().optional(),
  }),
});
export const collections = {
docs: docsCollection,
};
