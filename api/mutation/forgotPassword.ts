import { useMutation } from '@tanstack/react-query';
import { getClient } from '../client';
import gql from 'graphql-tag';

export const useForgotPassword = () => {
  return useMutation({ mutationFn: forgotPassword });
};

async function forgotPassword(vars: { email: string }) {
  const client = getClient();

  const variables = {
    ...vars,
  };

  const query = gql`
    mutation ForgotPassword($email: String!) {
      forgotPassword(email: $email) {
        resetLink
        success
      }
    }
  `;

  const response = await client.request(query, variables);

  return response;
}
