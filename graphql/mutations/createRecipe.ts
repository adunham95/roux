import recipe from '@/db/models/recipe';
import gql from 'graphql-tag';
import { Context } from '@/types/graphql';
import { SessionGate } from '@/utils/authGate';
import { UserPermissions } from '@/utils/permissions';

export interface ICreateIngredient {
  refId: string;
  name: string;
  count: number;
  type: string;
}

export interface ICreateInstruction {
  refId: string;
  description: string;
  order: number;
  ingredients: ICreateIngredient[];
}

export interface ICreateRecipe {
  name: string;
  description: string;
  servings: number;
  instructions: ICreateInstruction[];
}

export const createRecipeTypeDefs = gql`
  input CreateIngredientInput {
    refId: String!
    name: String!
    type: String
    count: Int!
  }

  input CreateInstructionInput {
    refId: String!
    description: String!
    order: Int!
    ingredients: [CreateIngredientInput]
  }

  input CreateRecipeInput {
    name: String!
    description: String
    servings: Int
    instructions: [CreateInstructionInput]
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
      UserPermissions.CREATE_RECIPE,
    );
    const newRecipe = new recipe({ ...input, teamID, userID });
    newRecipe.save();
    return newRecipe.toJSON();
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default createRecipe;
