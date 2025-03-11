import axios from "axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponseSchema,
  RecipeAPIResponseSchema,
} from "../schemas/recipes-schemas";
import { Drink, SearchFilter } from "../types";

const host = `https://www.thecocktaildb.com/api/json/v1/1`;
export async function getCategories() {
  const url = `${host}/list.php?c=list`;
  const { data } = await axios(url);

  const result = CategoriesAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getDrinks(filters: SearchFilter) {
  const url = `${host}/filter.php?i=${filters.ingredient}&c=${filters.category}`;
  const { data } = await axios(url);

  const result = DrinksAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipesById(id: Drink["idDrink"]) {
  const url = `${host}/lookup.php?i=${id}`;
  const {
    data: { drinks },
  } = await axios(url);

  const result = RecipeAPIResponseSchema.safeParse(drinks[0]);
  if (result.success) {
    console.log(`Receta encontrada`);
    return result.data;
  }
}
