import { defineCollection, z } from "astro:content";
// z -> zod schema

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      mexico: z.string().url(),
      usa: z.string().url(),
    }),
  })
})

export const collections = { books }