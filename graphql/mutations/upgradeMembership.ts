import gql from 'graphql-tag';

export interface IUpgradeMembershipInput {
  userID: string;
  teamID: string;
  membershipStripeKey: string;
}

export const updateUserTypeDefs = gql`
  input UpdateUserInput {
    userID: String!
    firstName: String
    lastName: String
    email: String
    password: String
    status: String
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function updateMembership(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: unknown,
  { input }: { input: IUpgradeMembershipInput },
) {}
