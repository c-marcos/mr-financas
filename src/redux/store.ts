import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import themeSlice from "./slices/themeStice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
