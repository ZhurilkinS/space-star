import z from "zod";

export const menuSchema = z.object({
  id: z.number(),
  title: z.string(),
  url: z.string(),
  visible: z.boolean(),
});

export const menuArraySchema = z.array(menuSchema);

export type Menu = z.infer<typeof menuSchema>;

export type MenuArray = z.infer<typeof menuArraySchema>;
