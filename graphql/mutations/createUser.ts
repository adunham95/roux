import MembershipTier from '@/db/models/membershipTier';
import betaTokens from '@/db/models/betaTokens';
import User from '@/db/models/user';
import Auth from '@/services/auth.service';
import gql from 'graphql-tag';
import Membership from '@/db/models/membership';
import Team from '@/db/models/teams';
import TeamMember from '@/db/models/teamMember';
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
async function createUser(
  _: unknown,
  {
    input,
    teamID,
    roleID,
  }: { input: IUserInput; teamID?: string; roleID?: string },
) {
  const betaTokenRequired = false;
  try {
    const currentUsers = await User.find({ email: input.email.trim() });
    if (currentUsers.length > 0) {
      throw new Error('User Already Exists');
    }
    if (betaTokenRequired && !input.betaToken) {
      throw new Error('Beta Token Require');
    }
    if (betaTokenRequired && input.betaToken) {
      const token = await betaTokens.findOne({ token: input.betaToken });
      if (token.redeemed) {
        throw new Error('Beta token already redeemed');
      }
      token.set({ redeemed: true });
      token.save();
    }
    if (!teamID) {
      const membershipTierData = await MembershipTier.findOne({
        default: true,
        visible: true,
      }).sort({ monthlyCost: 1 });

      console.log(membershipTierData);

      roleID = membershipTierData.defaultPermission;

      const newMembership = new Membership({
        tierID: membershipTierData._id,
      });

      const newTeam = new Team({
        name: `${input.firstName} ${input.lastName}'s Kitchen`,
        membershipID: newMembership._id,
      });

      teamID = newTeam._id;
      console.log({ newMembership, newTeam });
      newMembership.save({ new: true });
      newTeam.save({ new: true });
    }
    const password = await Auth.hashPassword(input.password);
    const email = input.email.trim();
    const user = new User({ ...input, password, email });
    const newTeamMember = new TeamMember({
      roleID,
      teamID,
      userID: user._id,
    });
    user.save({ new: true });
    newTeamMember.save({ new: true });

    return user.toJSON();
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default createUser;
