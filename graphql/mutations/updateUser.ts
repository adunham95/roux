import User from '@/db/models/user';
import Auth from '@/services/auth.service';
import gql from 'graphql-tag';

export interface IUserInput {
  userID: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export const updateUserTypeDefs = gql`
  input UpdateUserInput {
    userID: String!
    firstName: String
    lastName: String
    email: String
    password: String
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function updateUser(_: unknown, { input }: { input: IUserInput }) {
  const updatedUser = await User.findById(input.userID);
  if (input.password) {
    const password = await Auth.hashPassword(input.password);
    updatedUser.password = password;
  }
  if (input.email) {
    const email = input.email.trim();
    updatedUser.email = email;
  }
  updatedUser.save();

  return updatedUser.toJSON();
}

export default updateUser;
