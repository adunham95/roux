import { useMutation } from '@tanstack/react-query';
import gql from 'graphql-tag';
import { getClient } from '../client';
import { ICreateUserInput } from '@/graphql/mutations/createUser';

export const useCreateUser = () => {
  return useMutation({ mutationFn: createUser });
};

async function createUser(vars: {
  input: ICreateUserInput;
  teamID?: string;
  roleID?: string;
}) {
  const client = getClient();

  const variables = {
    ...vars,
  };

  const query = gql`
    mutation createUser(
      $input: CreateUserInput!
      $teamID: String
      $roleID: String
    ) {
      createUser(input: $input, teamID: $teamID, roleID: $roleID) {
        success
      }
    }
  `;

  const response = await client.request(query, variables);

  console.log('response', response);

  return response;
}
