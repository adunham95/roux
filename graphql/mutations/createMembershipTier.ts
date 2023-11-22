import MembershipPermissions from '@/db/models/membershipPermissions';
import MembershipTier from '@/db/models/membershipTier';
import gql from 'graphql-tag';

export interface IMembershipTierInput {
  tierName: string;
  tierDescription: string;
  features?: string[];
  maxTeamSize: number;
  maxRecipeCount: number;
  yearlyCost: number;
  monthlyCost: number;
  default?: boolean;
  visible?: boolean;
  defaultPermission?: { name: string; permissions: string[]; locked: boolean };
}

export const createMembershipTierTypeDefs = gql`
  input CreateMembershipTierPermission {
    name: String!
    permissions: [String]
    locked: Boolean
  }

  input CreateMembershipFeaturePermission {
    title: String!
    description: String!
  }

  input CreateMembershipTierInput {
    tierName: String!
    tierDescription: String
    features: [CreateMembershipFeaturePermission]
    maxTeamSize: Int!
    maxRecipeCount: Int!
    yearlyCost: Int!
    monthlyCost: Int!
    default: Boolean
    visible: Boolean
    defaultPermission: CreateMembershipTierPermission
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function createMembershipTier(
  _: unknown,
  { input }: { input: IMembershipTierInput },
) {
  try {
    const newTier = new MembershipTier(input);
    const newPermission = new MembershipPermissions(input.defaultPermission);
    newTier.defaultPermission = newPermission._id;
    newTier.save();
    newPermission.save();
    return { ...newTier.toJSON(), defaultPermission: newPermission.toJSON() };
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default createMembershipTier;
