import { auth } from '@/auth/lucia';
import { NextApiRequest, NextApiResponse } from 'next';
import gql from 'graphql-tag';

export interface ILoginUserInput {
  email: string;
  password: string;
}

export const loginUserTypeDefs = gql`
  input LoginUserInput {
    email: String!
    password: String!
  }
`;

async function login(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { email, password }: ILoginUserInput,
  { req, res }: { req: NextApiRequest; res: NextApiResponse },
) {
  try {
    // Check if logged in
    const key = await auth.useKey(
      'email',
      email.trim().toLowerCase(),
      password,
    );
    const session = await auth.createSession({
      userId: key.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest({
      req,
      res,
    });
    authRequest.setSession(session);
    return session;
  } catch (error) {
    console.log(error);
  }
}

export default login;
