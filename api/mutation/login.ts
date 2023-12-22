import { useMutation } from '@tanstack/react-query';
import { getClient } from '../client';
import gql from 'graphql-tag';

export const useLogin = () => {
  return useMutation({ mutationFn: login });
};

async function login(vars: { email: string; password: string }) {
  const client = getClient();

  const variables = {
    ...vars,
  };

  const query = gql`
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        user {
          email
          firstName
          lastName
          status
          userId
        }
        sessionId
        state
        fresh
      }
    }
  `;

  const response = await client.request(query, variables);

  return response;
}
