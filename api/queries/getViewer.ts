import { useQuery } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useViewer = (enabled = true) => {
  return useQuery({
    queryKey: ['viewer'],
    queryFn: () => getViewer(),
    enabled,
  });
};

export async function getViewer() {
  const client = getClient();
  const variables = {};

  const query = gql`
    query GetViewer {
      getViewer {
        user {
          email
          firstName
          lastName
          status
          userId
          teamRoles {
            userID
            teamID
            roleID
            access {
              permissions
              name
            }
          }
        }
        sessionId
        state
        fresh
      }
    }
  `;

  const { getViewer } = await client.request<{
    getViewer: ISession;
  }>(query, variables);
  return getViewer;
}
