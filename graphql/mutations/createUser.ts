import MembershipTier from '@/db/models/membershipTier';
import User from '@/db/models/user';
import gql from 'graphql-tag';
import Membership from '@/db/models/membership';
import Team from '@/db/models/teams';
import TeamMember from '@/db/models/teamMember';
import { auth } from '@/auth/lucia';
import { NextApiRequest, NextApiResponse } from 'next';
export interface ICreateUserInput {
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
async function createUser(
  _: unknown,
  {
    input,
    teamID,
    roleID,
  }: { input: ICreateUserInput; teamID?: string; roleID?: string },
  { req, res }: { req: NextApiRequest; res: NextApiResponse },
) {
  try {
    console.log('Create User');
    const { password, firstName, lastName } = input;
    const currentUsers = await User.find({ email: input.email.trim() });
    if (currentUsers.length > 0) {
      throw new Error('User Already Exists');
    }
    if (!teamID) {
      const membershipTierData = await MembershipTier.findOne({
        default: true,
        visible: true,
      }).sort({ monthlyCost: 1 });

      roleID = membershipTierData.defaultPermission;

      const newMembership = new Membership({
        tierID: membershipTierData._id,
      });

      const newTeam = new Team({
        name: `${input.firstName} ${input.lastName}'s Kitchen`,
        membershipID: newMembership._id,
      });

      teamID = newTeam._id;
      newMembership.save({ new: true });
      newTeam.save({ new: true });
    }
    if (!teamID && !roleID) {
      throw new Error('No team or role');
    }

    const email = input.email.trim();
    console.log({ email });

    const user = await auth.createUser({
      key: {
        providerId: 'email', // auth method
        providerUserId: email, // unique id when using "username" auth method
        password, // hashed by Lucia
      },
      attributes: {
        email,
        firstName,
        lastName,
      },
    });
    console.log('user', user);
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });
    console.log({ session, user });
    const authRequest = auth.handleRequest({
      req,
      res,
    });
    authRequest.setSession(session);

    const newTeamMember = new TeamMember({
      roleID,
      teamID,
      userID: user.userId,
    });

    await newTeamMember.save({ new: true });

    return { success: true };
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default createUser;
