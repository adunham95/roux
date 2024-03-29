import { Context } from '@/types/graphql';
import { SessionGate } from '@/utils/authGate';
import { UserPermissions } from '@/utils/permissions';
import recipe from '@/db/models/recipe';
import recipeHistory from '@/db/models/recipeHistory';
import { gql } from 'graphql-request';

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

export const updateRecipeTypeDefs = gql`
  input UpdateRecipeElementsInput {
    key: String
    value: JSON
  }
`;

async function updateRecipe(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: unknown,
  {
    recipe: recipeData,
    id,
    elements = [],
  }: { recipe: IUpdateRecipe; elements: RecipeHistory[]; id: string },
  context: Context,
) {
  try {
    console.log(elements);
    if (!id) {
      throw new Error('No Recipe ID');
    }
    const { teamID, userID } = SessionGate(
      context?.session,
      UserPermissions.EDIT_RECIPE,
    );
    const newRecipe = await recipe.findByIdAndUpdate(id, recipeData);
    const newRecipeHistory = new recipeHistory({
      type: 'UPDATE',
      recipeID: newRecipe._id,
      teamID,
      userID,
      recipe: recipeData,
      elements,
    });
    newRecipe.save();
    newRecipeHistory.save();
    return newRecipe.toJSON();
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default updateRecipe;
