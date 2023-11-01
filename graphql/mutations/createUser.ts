import User from '@/db/models/user';
import Auth from '@/services/auth.service';
import gql from 'graphql-tag';

export interface IUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const createUserTypeDefs = gql`
  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function createUser(_: unknown, { input }: { input: IUserInput }) {
  const password = await Auth.hashPassword(input.password);
  const email = input.email.trim();
  const user = new User({ ...input, password, email });
  user.save();

  return user.toJSON();
}

export default createUser;
