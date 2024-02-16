import recipe from '@/db/models/recipe';
import gql from 'graphql-tag';
import { Context } from '@/types/graphql';
import { SessionGate } from '@/utils/authGate';
import { UserPermissions } from '@/utils/permissions';
import recipeHistory from '@/db/models/recipeHistory';

export interface ICreateIngredient {
  instructionRefId: string;
  refId: string;
  name: string;
  count: number;
  type: string;
}

export interface ICreateInstruction {
  refId: string;
  description: string;
  order: number;
}

export interface ICreateRecipe {
  name: string;
  description: string;
  servings: number;
  instructions: ICreateInstruction[];
  ingredients: ICreateIngredient[];
}

export const createRecipeTypeDefs = gql`
  input CreateIngredientInput {
    instructionRefId: String!
    refId: String!
    name: String!
    type: String
    count: Int!
  }

  input CreateInstructionInput {
    refId: String!
    description: String!
    order: Int!
  }

  input CreateRecipeInput {
    name: String!
    description: String
    servings: Int
    instructions: [CreateInstructionInput]
    ingredients: [CreateIngredientInput]
  }
`;

async function createRecipe(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: unknown,
  { input }: { input: ICreateRecipe },
  context: Context,
) {
  try {
    const { teamID, userID } = SessionGate(
      context?.session,
      UserPermissions.EDIT_RECIPE,
    );
    const newRecipe = new recipe({ ...input, teamID, userID });
    const newRecipeHistory = new recipeHistory({
      type: 'CREATE',
      recipeID: newRecipe._id,
      teamID,
      userID,
      recipe: newRecipe,
    });
    newRecipe.save();
    newRecipeHistory.save();
    return newRecipe.toJSON();
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default createRecipe;
