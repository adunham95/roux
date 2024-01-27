import { useQuery } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';
import { IRecipe } from '@/types/recipe';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetKitchen = (teamID: string, initialData?: any) => {
  return useQuery({
    queryKey: ['kitchen', teamID],
    queryFn: () => getKitchen(teamID),
    initialData,
  });
};

export async function getKitchen(teamID: string) {
  const client = getClient();
  const variables = {
    teamID,
  };

  const query = gql`
    query GetKitchen($teamID: ID!) {
      getTeam(teamID: $teamID) {
        id
        name
      }
      getRecipesByTeam(teamID: $teamID) {
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
        }
        ingredients {
          instructionRefId
          refId
          name
          type
          count
        }
      }
    }
  `;

  const { getRecipesByTeam } = await client.request<{
    getRecipesByTeam: IRecipe;
  }>(query, variables);
  return getRecipesByTeam;
}
