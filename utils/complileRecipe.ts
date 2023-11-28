import { IRecipe } from '@/types/recipe';

export function compileRecipe(recipe: IRecipe) {
  console.log(recipe.history);
  if (recipe.history) {
    return recipe;
  }
  return recipe;
}
