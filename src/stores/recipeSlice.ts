import { StateCreator } from "zustand";
import {
  getCategories,
  getDrinks,
  getRecipesById,
} from "../services/RecipeService";
import { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";

export type RecipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
  getRecipesById: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },

  selectedRecipe: {} as Recipe,

  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories });
  },

  searchRecipes: async (filters) => {
    const drinks = await getDrinks(filters);

    set({ drinks });
  },

  getRecipesById: async (id) => {
    const selectedRecipe = await getRecipesById(id);

    if (selectedRecipe) set({ modal: true, selectedRecipe });
  },
  closeModal: () => set({ modal: false, selectedRecipe: {} as Recipe }),
});
