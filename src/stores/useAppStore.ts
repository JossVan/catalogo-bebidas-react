import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoriteSlice";
import {
  createNotificationSlice,
  NotificationsSliceType,
} from "./notificationSlice";
export const useAppStore = create<
  RecipesSliceType & FavoritesSliceType & NotificationsSliceType
>()(
  devtools((...args) => ({
    ...createRecipesSlice(...args),
    ...createFavoritesSlice(...args),
    ...createNotificationSlice(...args),
  }))
);
