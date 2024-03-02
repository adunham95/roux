import { useMutation } from '@tanstack/react-query';
import gql from 'graphql-tag';
import { getClient } from '../client';
import { IUpdateUserInput } from '@/graphql/mutations/updateUser';

export const useUpdateUser = () => {
  return useMutation({ mutationFn: updateUser });
};

async function updateUser(vars: { input: IUpdateUserInput }) {
  const client = getClient();

  const variables = {
    ...vars,
  };

  const query = gql`
    mutation updateUser($input: UpdateUserInput) {
      updateUser(input: $input) {
        firstName
        lastName
        email
        createdAt
        updatedAt
      }
    }
  `;

  const response = await client.request(query, variables);

  console.log('response', response);

  return response;
}
