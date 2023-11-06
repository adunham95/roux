import { gql } from 'graphql-request';
import { getClient } from './../client';
import { useQuery } from '@tanstack/react-query';

export const useGetMembershipTiers = () => {
  return useQuery({
    queryKey: ['membership-tiers'],
    queryFn: () => getMembershipTiers(),
  });
};

async function getMembershipTiers() {
  const client = getClient();
  const variables = {};

  const query = gql`
    query GetMembershipTiers {
      getMembershipTiers {
        id
        tierName
        features {
          description
          title
        }
        maxTeamSize
        maxRecipeCount
        yearlyCost
        monthlyCost
        visible
        default
        permissions {
          default
          permissions
          name
        }
      }
    }
  `;

  const { getMembershipTiers } = await client.request<{
    getMembershipTiers: IMembershipTier[];
  }>(query, variables);
  return getMembershipTiers;
}
