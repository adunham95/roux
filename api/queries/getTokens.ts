import { gql } from 'graphql-request';
import { getClient } from '../client';
import { useQuery } from '@tanstack/react-query';

export const useGetBetaTokens = () => {
  return useQuery({
    queryKey: ['beta-tokens'],
    queryFn: () => getBetaTokens(),
  });
};

async function getBetaTokens() {
  const client = getClient();
  const variables = {};

  const query = gql`
     query ($: !){
       (input:$){
          
       }
     }
   }`;

  const data = await client.request(query, variables);
  return data;
}
