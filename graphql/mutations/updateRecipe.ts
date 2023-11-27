import { Context } from '@/types/graphql';
import { SessionGate } from '@/utils/authGate';
import { UserPermissions } from '@/utils/permissions';
import recipe from '@/db/models/recipe';

export interface IUpdateIngredient {
  name: string;
  count: number;
  type: string;
}

export interface IUpdateInstruction {
  description: string;
  order: number;
  ingredients: IUpdateIngredient[];
}

export interface IUpdateRecipe {
  name: string;
  description: string;
  servings: number;
  instructions: IUpdateInstruction[];
}

async function updateRecipe(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: unknown,
  { recipe: recipeData, id }: { recipe: IUpdateRecipe; id: string },
  context: Context,
) {
  try {
    if (!id) {
      throw new Error('No Recipe ID');
    }
    const {} = SessionGate(context?.session, UserPermissions.EDIT_RECIPE);
    const newRecipe = await recipe.findByIdAndUpdate(id, recipeData);
    newRecipe.save();
    return newRecipe.toJSON();
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default updateRecipe;
