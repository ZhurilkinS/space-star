import axiosInstance from "../../../shared/api/axiosInstance";
import { contentSchema, type Content } from "../types/sсhemas";

export const contentServices = {
  getContent: async (): Promise<Content> => {
    try {
      const response = await axiosInstance.get("/content");
      const validateData = contentSchema.parse(response.data);
      return validateData;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      throw error;
    }
  },
};
