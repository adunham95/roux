import { useQuery } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';
import { IRecipe } from '@/types/recipe';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetMyRecipes = (initialData?: any) => {
  return useQuery({
    queryKey: ['my-recipes'],
    queryFn: () => getMyRecipes(),
    initialData,
  });
};

export async function getMyRecipes() {
  const client = getClient();
  const variables = {};

  const query = gql`
    query GetMyRecipes {
      getMyRecipes {
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
        servings
        instructions {
          refId
          description
          order
          ingredients {
            refId
            name
            type
            count
          }
        }
      }
    }
  `;

  const { getMyRecipes } = await client.request<{
    getMyRecipes: IRecipe[];
  }>(query, variables);
  return getMyRecipes;
}
