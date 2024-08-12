export interface RecipeResponse {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  title: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  user_id: number;
  steps: Step[];
  categories: Category[];
  category_ids: null;
}

export interface Category {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  name: string;
  image: string;
  recipes: null;
}

export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Step {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  title: string;
  description: string;
  image: string;
  recipe_id: number;
}
