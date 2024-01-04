import { useMutation } from '@tanstack/react-query';
import { getClient } from '../client';
import { ICreateRecipe } from '@/graphql/mutations/createRecipe';
import { gql } from 'graphql-request';

export const useCreateRecipe = () => {
  return useMutation({ mutationFn: createRecipe });
};

async function createRecipe(input: ICreateRecipe) {
  const client = getClient();

  const variables = { input };

  const query = gql`
    mutation CreateRecipe($input: CreateRecipeInput) {
      createRecipe(input: $input) {
        id
      }
    }
  `;

  const response = await client.request<{
    createRecipe: { id: string };
  }>(query, variables);

  return response;
}
