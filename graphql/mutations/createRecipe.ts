import recipe from '@/db/models/recipe';
import gql from 'graphql-tag';
import { Context } from '@/types/graphql';
import { SessionGate } from '@/utils/authGate';
import { UserPermissions } from '@/utils/permissions';

interface ICreateIngredient {
  name: string;
  count: number;
  type: string;
}

interface ICreateInstruction {
  description: string;
  order: number;
  ingredients: ICreateIngredient[];
}

interface ICreateRecipe {
  name: string;
  description: string;
  instructions: ICreateInstruction[];
}

export const createRecipeTypeDefs = gql`
  input CreateIngredientInput {
    name: String!
    type: String
    count: Int!
  }

  input CreateInstructionInput {
    description: String!
    order: Int!
    ingredients: [CreateIngredientInput]
  }

  input CreateRecipeInput {
    name: String!
    description: String
    instructions: [CreateInstructionInput]
  }
`;

async function createRecipe(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: unknown,
  { input }: { input: ICreateRecipe },
  context: Context,
) {
  console.log('input', input);
  console.log('context', context.session);
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
