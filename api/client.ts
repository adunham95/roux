import { GraphQLClient } from 'graphql-request';

export const getClient = () => {
  const url = process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL || '';
  const client = new GraphQLClient(url);
  return client;
};
