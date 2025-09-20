import { createSlice } from "@reduxjs/toolkit";
import type { AdminData } from "../types/sсhemas";
import { fetchAdminData, updateContent, updateMenu } from "./adminThunks";

type AdminState = {
  data: AdminData;
  loading: boolean;
  error: string | null;
  saved: boolean;
};

const initialState: AdminState = {
  data: {
    content: {
      advantages: [],
      hero: {
        title: "",
        title2: "",
        placeholder: "",
      },
    },
    menu: [],
  },
  loading: false,
  error: null,
  saved: false,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdvantages: (state, action) => {
      state.data.content.advantages = action.payload;
      state.saved = false;
    },
    setHero: (state, action) => {
      state.data.content.hero = action.payload;
      state.saved = false;
    },
    setMenu: (state, action) => {
      state.data.menu = action.payload;
      state.saved = false;
    },
    resetSaved: (state) => {
      state.saved = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchAdminData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Ошибка при получении данных";
      })
      .addCase(updateContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateContent.fulfilled, (state, action) => {
        state.data.content = action.payload;
        state.loading = false;
      })
      .addCase(updateContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Ошибка при обновлении контента";
      })
      .addCase(updateMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMenu.fulfilled, (state, action) => {
        state.data.menu = action.payload;
        state.loading = false;
      })
      .addCase(updateMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Ошибка при обновлении меню";
      });
  },
});

export const { setAdvantages, setHero, setMenu, resetSaved } =
  adminSlice.actions;

export default adminSlice.reducer;
