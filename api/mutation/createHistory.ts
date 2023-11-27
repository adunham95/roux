import { useMutation } from '@tanstack/react-query';
import { getClient } from '../client';
import { ICreateRecipeHistory } from '@/graphql/mutations/createRecipeHistory';
import { gql } from 'graphql-request';
export const useCreateRecipeHistory = () => {
  return useMutation({ mutationFn: createRecipeHistory });
};

async function createRecipeHistory({
  input,
  id,
}: {
  input: ICreateRecipeHistory;
  id: string;
}) {
  const client = getClient();

  const variables = { input, id };

  const query = gql`
    mutation CreateRecipeHistory(
      $input: CreateRecipeHistory
      $createRecipeHistoryId: String
    ) {
      createRecipeHistory(input: $input, id: $createRecipeHistoryId) {
        add
        update {
          key
          value
        }
        delete
      }
    }
  `;

  const response = await client.request(query, variables);

  return response;
}
