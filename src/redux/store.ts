import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import themeSlice from "./slices/themeStice";
import alertSlice from "./slices/aletSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSlice,
    alert: alertSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
