import recipeHistory from '@/db/models/recipeHistory';
import { Context } from '@/types/graphql';
import { SessionGate } from '@/utils/authGate';
import { UserPermissions } from '@/utils/permissions';
import gql from 'graphql-tag';

export interface ICreateRecipeHistory {
  add: string[];
  delete: string[];
  update: { key: string; value: unknown }[];
}

export const createRecipeHistoryTypeDefs = gql`
  input CreateRecipeUpdateHistory {
    key: String
    value: String
  }

  input CreateRecipeHistory {
    add: [String]
    delete: [String]
    update: [CreateRecipeUpdateHistory]
  }
`;

async function createRecipeHistory(
  parent: unknown,
  { input, id }: { input: ICreateRecipeHistory; id: string },
  context: Context,
) {
  try {
    const { teamID, userID } = SessionGate(
      context?.session,
      UserPermissions.EDIT_RECIPE,
    );
    const newHistoryItem = new recipeHistory({
      ...input,
      recipeID: id,
      teamID,
      userID,
    });
    newHistoryItem.save();
    return newHistoryItem.toJSON();
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default createRecipeHistory;
