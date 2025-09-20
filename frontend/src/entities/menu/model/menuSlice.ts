import { createSlice } from "@reduxjs/toolkit";
import { fetchMenu } from "./menuThunks";
import type { MenuArray } from "../types/sсhemas";

type MenuState = {
  menu: MenuArray;
  loading: boolean;
  error: string | null;
};

const initialState: MenuState = {
  menu: [],
  loading: false,
  error: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.menu = action.payload;
        state.loading = false;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Ошибка при получении меню";
      });
  },
});

export default menuSlice.reducer;
