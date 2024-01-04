import Recipe from '@/db/models/recipe';
import { compileRecipe } from '@/utils/complileRecipe';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getRecipe(_: unknown, { id }: { id: string }) {
  try {
    const recipe = await Recipe.findById(id)
      .populate({ path: 'user' })
      .populate({ path: 'history' })
      .populate({ path: 'team' });
    console.log('recipe', recipe.history);
    return compileRecipe(recipe.toJSON());
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getRecipe;
