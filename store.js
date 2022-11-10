import { configureStore } from "@reduxjs/toolkit";
import backetSlicer from "./src/features/basketSlicer";

export const store = configureStore({
  reducer: {
    basket: backetSlicer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
