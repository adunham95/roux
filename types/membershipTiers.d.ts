interface IMembershipTier {
  id: string;
  tierName: string;
  tierDescription: string;
  features?: { title: string; description: string }[];
  maxTeamSize: number;
  maxRecipeCount: number;
  yearlyCost: number;
  monthlyCost: number;
  default?: boolean;
  visible?: boolean;
  permissions?: { name: string; permissions: string[]; default: boolean };
}
