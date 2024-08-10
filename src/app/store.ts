import { configureStore } from "@reduxjs/toolkit";
import { movieApiSlice } from "../slices/movieApiSlice";

const store = configureStore({
  reducer: {
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApiSlice.middleware),
});

export default store;
