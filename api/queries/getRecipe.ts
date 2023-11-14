import { useQuery } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';
import { IRecipe } from '@/types/recipe';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetRecipe = (id: string, initialData: any) => {
  return useQuery({
    queryKey: ['membership-tiers', id],
    queryFn: () => getRecipe(id),
    initialData,
  });
};

export async function getRecipe(id: string) {
  const client = getClient();
  const variables = {
    getRecipeId: id,
  };

  const query = gql`
    query GetRecipe($getRecipeId: ID!) {
      getRecipe(id: $getRecipeId) {
        id
        user {
          firstName
          id
          lastName
          status
          email
        }
        team {
          name
          id
        }
        name
        description
        instructions {
          id
          description
          order
          ingredients {
            id
            name
            type
            count
          }
        }
      }
    }
  `;

  const { getRecipe } = await client.request<{
    getRecipe: IRecipe;
  }>(query, variables);
  return getRecipe;
}
