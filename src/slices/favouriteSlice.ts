import { createSlice } from "@reduxjs/toolkit";

const getFavouritesFromLocalStorage = () => {
  const storedFavourites = localStorage.getItem("favourites");
  return storedFavourites ? JSON.parse(storedFavourites) : [];
};

const saveFavouritesToLocalStorage = (favourites) => {
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: getFavouritesFromLocalStorage(),
  reducers: {
    addFavourite: (state, action) => {
      state.push(action.payload);
      saveFavouritesToLocalStorage(state);
    },
    removeFavourite: (state, action) => {
      const updatedFavourites = state.filter(
        (fav) => fav.id !== action.payload.id
      );
      saveFavouritesToLocalStorage(updatedFavourites);
      return updatedFavourites;
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export const selectFavourites = (state) => state.favourites;
export default favouriteSlice.reducer;
