import { auth } from '@/auth/lucia';
import { NextApiRequest, NextApiResponse } from 'next';

async function getViewer(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  data: null,
  { req, res }: { req: NextApiRequest; res: NextApiResponse },
) {
  try {
    const authRequest = auth.handleRequest({ req, res });
    // check if user is authenticated
    const session = await authRequest.validate();
    console.log('session', session);
    return session;
  } catch (error) {
    console.log(error);
  }
}

export default getViewer;
