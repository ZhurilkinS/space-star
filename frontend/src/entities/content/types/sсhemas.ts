import z from "zod";

export const advantageSchema = z.object({
  id: z.number(),
  title: z.string(),
  title2: z.string(),
  description: z.string(),
  active: z.boolean(),
});

export const advantageListSchema = z.array(advantageSchema);

export type Advantage = z.infer<typeof advantageSchema>;

export const heroSchema = z.object({
  title: z.string(),
  title2: z.string(),
  placeholder: z.string(),
});

export type Hero = z.infer<typeof heroSchema>;

export const contentSchema = z.object({
  advantages: z.array(advantageSchema),
  hero: heroSchema,
});

export type Content = z.infer<typeof contentSchema>;
