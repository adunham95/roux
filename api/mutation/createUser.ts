import { useMutation } from '@tanstack/react-query';
import gql from 'graphql-tag';
import { getClient } from '../client';

export const useCreateUser = () => {
  return useMutation({ mutationFn: createUser });
};

async function createUser() {
  const client = getClient();

  const variables = {};

  const query = gql`
    mutation createUser($input: CreateUserInput) {
      createUser(input: $input) {
        user
      }
    }
  `;

  const response = await client.request(query, variables);

  return response;
}
