import axiosInstance from "../../../shared/api/axiosInstance";
import { menuArraySchema, type MenuArray } from "../types/sсhemas";

export const menuServices = {
  getMenu: async (): Promise<MenuArray> => {
    try {
      const response = await axiosInstance.get("/menu");
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
