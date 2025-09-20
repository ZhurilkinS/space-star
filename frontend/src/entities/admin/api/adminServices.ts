import axiosInstance from "../../../shared/api/axiosInstance";
import { contentSchema, type Content } from "../../content/types/sсhemas";
import { menuArraySchema, type MenuArray } from "../../menu/types/sсhemas";
import { adminDataSchema, type AdminData } from "../types/sсhemas";

export const adminServices = {
  getAllData: async (): Promise<AdminData> => {
    try {
      const response = await axiosInstance.get("/admin/all-data");
      const validateData = adminDataSchema.parse(response.data);
      return validateData;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      throw error;
    }
  },

  updateContent: async (contentData: Content): Promise<Content> => {
    try {
      const response = await axiosInstance.put("/admin/content", contentData);
      const validateData = contentSchema.parse(response.data);
      return validateData;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      throw error;
    }
  },

  updateMenu: async ({
    menu: menuData,
  }: {
    menu: MenuArray;
  }): Promise<MenuArray> => {
    try {
      const response = await axiosInstance.put("/admin/menu", {
        menu: menuData,
      });
      const validateData = menuArraySchema.parse(response.data);
      return validateData;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      throw error;
    }
  },
};
