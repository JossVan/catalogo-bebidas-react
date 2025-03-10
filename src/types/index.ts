import { z } from "zod";
import { CategoriesAPIResponseSchema } from "../schemas/recipes-schemas";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
