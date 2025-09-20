import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "../entities/content/model/contentSlice";
import menuSlice from "../entities/menu/model/menuSlice";
import adminSlice from "../entities/admin/model/adminSlice";

export const store = configureStore({
  reducer: {
    content: contentSlice,
    menu: menuSlice,
    admin: adminSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
