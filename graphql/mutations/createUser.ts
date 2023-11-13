import MembershipTier from '@/db/models/membershipTier';
import User from '@/db/models/user';
import Auth from '@/services/auth.service';
import gql from 'graphql-tag';
import Membership from '@/db/models/membership';
import Team from '@/db/models/teams';
import TeamMember from '@/db/models/teamMember';
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
) {
  try {
    const currentUsers = await User.find({ email: input.email.trim() });
    if (currentUsers.length > 0) {
      throw new Error('User Already Exists');
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
    if (!teamID && !roleID) {
      throw new Error('No team or role');
    }
    const password = await Auth.hashPassword(input.password);
    const email = input.email.trim();
    const user = new User({ ...input, password, email });
    const newTeamMember = new TeamMember({
      roleID,
      teamID,
      userID: user._id,
    });
    await user.save({ new: true });
    await newTeamMember.save({ new: true });

    return { success: true };
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default createUser;
