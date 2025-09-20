import { createAsyncThunk } from "@reduxjs/toolkit";
import { contentServices } from "../api/contentServices";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const content = await contentServices.getContent();
    return content;
  }
);
