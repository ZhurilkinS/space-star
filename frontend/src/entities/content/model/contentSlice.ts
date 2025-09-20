import { createSlice } from "@reduxjs/toolkit";
import type { Content } from "../types/sсhemas";
import { fetchContent } from "./contentThunks";

type ContentState = {
  content: Content;
  loading: boolean;
  error: string | null;
};

const initialState: ContentState = {
  content: {
    advantages: [],
    hero: {
      title: "",
      title2: "",
      placeholder: "",
    },
  },
  loading: false,
  error: null,
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.content = action.payload;
        state.loading = false;
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Ошибка при получении контента";
      });
  },
});

export default contentSlice.reducer;
