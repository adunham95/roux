import { auth } from '@/auth/lucia';
import { NextApiRequest, NextApiResponse } from 'next';

async function logout(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  data: null,
  { req, res }: { req: NextApiRequest; res: NextApiResponse },
) {
  try {
    // Check if logged in
    const authRequest = auth.handleRequest({ req, res });
    // check if user is authenticated
    const session = await authRequest.validate();
    if (!session) {
      return { success: false };
    }
    // make sure to invalidate the current session!
    await auth.invalidateSession(session.sessionId);
    // delete session cookie
    authRequest.setSession(null);
    return { success: true };
  } catch (error) {
    console.log(error);
  }
}

export default logout;
