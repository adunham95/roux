import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import typeDefs from '@/graphql/typedefs';
import resolvers from '@/graphql/resolvers';
import connectDb from '@/db/config';
import { NextApiRequest, NextApiResponse } from 'next';

connectDb();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req: NextApiRequest, res: NextApiResponse) => ({ req, res }),
});

export default handler;
