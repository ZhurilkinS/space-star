import { createAsyncThunk } from "@reduxjs/toolkit";
import { menuServices } from "../api/menuServices";

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const menu = await menuServices.getMenu();
  return menu;
});
