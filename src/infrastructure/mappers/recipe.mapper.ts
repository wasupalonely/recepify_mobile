import {Recipe} from '../../domain/entites/recipe';
import {RecipeResponse} from '../interfaces/recipe.interfaces';

export class RecipeMapper {
  static recipeToEntity(recipe: RecipeResponse): Recipe {
    return {
      id: recipe.ID.toString(),
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
      steps: recipe.steps,
      image: recipe.image,
      userId: recipe.user_id.toString(),
      categories: recipe.categories,
    };
  }
}
