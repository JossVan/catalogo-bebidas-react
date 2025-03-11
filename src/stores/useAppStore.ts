import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoriteSlice";
export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(
  devtools((...args) => ({
    ...createRecipesSlice(...args),
    ...createFavoritesSlice(...args),
  }))
);
