import {recepeApi} from '../config/api/recepeApi';
import {type RecipeResponse} from '../infrastructure/interfaces/recipe.interfaces';
import {Recipe} from '../domain/entites/recipe';
import {RecipeMapper} from '../infrastructure/mappers/recipe.mapper';

export const getRecipes = async (
  page: number,
  limit: number = 10,
): Promise<Recipe[]> => {
  try {
    const url = `/recipes?page=${page * 10}&limit=${limit}`;
    const {data} = await recepeApi.get<RecipeResponse[]>(url);

    const recipes = data.map(recipe => RecipeMapper.recipeToEntity(recipe));
    return recipes;
  } catch (error: any) {
    throw new Error('Error getting recipes');
  }
};
