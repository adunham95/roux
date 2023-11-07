interface IMembershipTierFeature {
  title: string;
  description: string;
}

interface IMembershipTierPermission {
  name: string;
  permissions: string[];
  locked?: boolean;
}

interface IMembershipTier {
  id: string;
  tierName: string;
  tierDescription: string;
  features?: IMembershipTierFeature[];
  maxTeamSize: number;
  maxRecipeCount: number;
  yearlyCost: number;
  monthlyCost: number;
  default?: boolean;
  visible?: boolean;
  defaultPermission?: IMembershipTierPermission;
  customPermissions?: IMembershipTierPermission[];
}
