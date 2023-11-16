import { useMutation } from '@tanstack/react-query';
import { getClient } from '../client';
import gql from 'graphql-tag';

export const useResetPassword = () => {
  return useMutation({ mutationFn: resetPassword });
};

async function resetPassword(vars: { resetCode: string; newPassword: string }) {
  const client = getClient();

  const variables = {
    ...vars,
  };

  const query = gql`
    mutation ResetPassword($restCode: String!, $password: String!) {
      resetPassword(resetCode: $restCode, newPassword: $password)
    }
  `;

  const response = await client.request(query, variables);

  return response;
}
