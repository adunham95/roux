import { useQuery } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLogout = () => {
  return useQuery({
    queryKey: [],
    queryFn: () => getLogout(),
    enabled: false,
  });
};

export async function getLogout() {
  const client = getClient();
  const variables = {};

  const query = gql`
    query Logout {
      logout {
        success
      }
    }
  `;

  const { logout } = await client.request<{
    logout: { success: true };
  }>(query, variables);
  return logout;
}
