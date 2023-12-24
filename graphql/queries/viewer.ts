import { getSessionData } from '@/auth/lucia';
import { NextApiRequest, NextApiResponse } from 'next';

async function getViewer(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  data: null,
  { req, res }: { req: NextApiRequest; res: NextApiResponse },
) {
  try {
    const session = getSessionData({ req, res });
    if (!session) {
      throw new Error('Not Authenticated');
    }
    return session;
  } catch (error) {
    console.log(error);
  }
}

export default getViewer;
