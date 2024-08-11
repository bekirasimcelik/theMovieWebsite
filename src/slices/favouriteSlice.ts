import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    addFavourite: (state, action) => {
      state.push(action.payload);
    },
    removeFavourite: (state, action) => {
      return state.filter((fav) => fav.id !== action.payload.id);
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export const selectFavourites = (state) => state.favourites;
export default favouriteSlice.reducer;
