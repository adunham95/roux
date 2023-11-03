import betaTokens from '@/db/models/betaTokens';
import User from '@/db/models/user';
import Auth from '@/services/auth.service';
import gql from 'graphql-tag';

export interface IUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  betaToken: string;
}

export const createUserTypeDefs = gql`
  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    betaToken: String
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function createUser(_: unknown, { input }: { input: IUserInput }) {
  const betaTokenRequired = true;
  try {
    console.log('input', input);
    const currentUsers = await User.find({ email: input.email.trim() });
    console.log('currentUsers', currentUsers);
    if (currentUsers.length > 0) {
      throw new Error('User Already Exists');
    }
    if (betaTokenRequired && !input.betaToken) {
      throw new Error('Beta Token Require');
    }
    if (betaTokenRequired && input.betaToken) {
      const token = await betaTokens.findOne({ token: input.betaToken });
      console.log({ token: input.betaToken, response: token });
      if (token.redeemed) {
        throw new Error('Beta token already redeemed');
      }
      token.set({ redeemed: true });
      token.save();
    }
    const password = await Auth.hashPassword(input.password);
    const email = input.email.trim();
    const user = new User({ ...input, password, email });
    user.save({ new: true });

    return user.toJSON();
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default createUser;
