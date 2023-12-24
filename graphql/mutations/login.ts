import { auth } from '@/auth/lucia';
import { NextApiRequest, NextApiResponse } from 'next';
import gql from 'graphql-tag';
import teamMember from '@/db/models/teamMember';

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
    const teamMembers = await teamMember
      .find({ userID: key.userId })
      .populate({ path: 'access' });
    const teamRoles = teamMembers.map((member) => member.toJSON());
    console.log(teamRoles[0]);
    const session = await auth.createSession({
      userId: key.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest({
      req,
      res,
    });
    const newSession = {
      ...session,
      user: {
        ...session.user,
        teamRoles,
      },
    };
    authRequest.setSession(session);
    console.log('newSession', newSession);
    return newSession;
  } catch (error) {
    console.log(error);
  }
}

export default login;
