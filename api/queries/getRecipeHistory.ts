import { useQuery } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetRecipeHistory = (id: string, initialData?: any) => {
  return useQuery({
    queryKey: ['recipeHistory', id],
    queryFn: () => getRecipeHistory(id),
    initialData,
    enabled: false,
    staleTime: 0,
  });
};

export async function getRecipeHistory(id: string) {
  const client = getClient();
  const variables = {
    getRecipeId: id,
  };

  const query = gql`
    query GetRecipeHistory($getRecipeId: ID!) {
      getRecipeHistory(id: $getRecipeId) {
        id
        user {
          firstName
          id
          lastName
        }
        elements {
          key
          value
        }
        type
        createdAt
        changelog
      }
    }
  `;

  const { getRecipeHistory } = await client.request<{
    getRecipeHistory: RecipeHistoryArray[];
  }>(query, variables);
  return getRecipeHistory;
}
