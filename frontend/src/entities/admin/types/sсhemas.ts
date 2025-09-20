import z from "zod";
import {
  contentSchema,
  type Advantage,
  type Hero,
} from "../../content/types/sсhemas";
import { menuArraySchema, type MenuArray } from "../../menu/types/sсhemas";

export type updateContentDto = {
  advantages?: Advantage[];
  hero?: Hero;
};

export type updateMenuDto = {
  menu: MenuArray;
};

export const adminDataSchema = z.object({
  content: contentSchema,
  menu: menuArraySchema,
});

export type AdminData = z.infer<typeof adminDataSchema>;
