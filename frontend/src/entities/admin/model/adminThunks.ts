import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminServices } from "../api/adminServices";
import type { Content } from "../../content/types/sсhemas";
import type { MenuArray } from "../../menu/types/sсhemas";

export const fetchAdminData = createAsyncThunk(
  "admin/fetchAdminData",
  async () => {
    const AdminData = await adminServices.getAllData();
    return AdminData;
  }
);

export const updateContent = createAsyncThunk(
  "admin/updateContent",
  async (contentData: Content) => {
    const AdminData = await adminServices.updateContent(contentData);
    return AdminData;
  }
);

export const updateMenu = createAsyncThunk(
  "admin/updateMenu",
  async ({ menu: menuData }: { menu: MenuArray }) => {
    const AdminData = await adminServices.updateMenu({ menu: menuData });
    return AdminData;
  }
);
