import { configureStore } from "@reduxjs/toolkit";
import { movieApiSlice } from "../slices/movieApiSlice";
import favouriteReducer from "../slices/favouriteSlice";

const store = configureStore({
  reducer: {
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
    favourites: favouriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApiSlice.middleware),
});

export default store;
