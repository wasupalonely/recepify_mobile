import {
  Category,
  Ingredient,
  Step,
} from '../../infrastructure/interfaces/recipe.interfaces';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  steps: Step[];
  image: string;
  userId: string;
  categories: Category[];
}
