import { lucia } from 'lucia';
import { nextjs_future } from 'lucia/middleware';
import { mongoose } from '@lucia-auth/adapter-mongoose';
import User from '@/db/models/user';
import Key from '@/db/models/key';
import Session from '@/db/models/session';
import connectDb from '@/db/config';
import teamMember from '@/db/models/teamMember';

// handle connection
connectDb();

export const auth = lucia({
  env: process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD',
  middleware: nextjs_future(),
  adapter: mongoose({
    User,
    Key,
    Session,
  }),
  sessionCookie: {
    expires: false,
  },
  getUserAttributes: (data) => {
    return {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      status: data.status || 'ACTIVE',
    };
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getSessionData(context: any) {
  const authRequest = auth.handleRequest(context);
  // check if user is authenticated
  const session = await authRequest.validate();
  if (!session) {
    return {};
  }
  const teamMembers = await teamMember
    .find({ userID: session.user.userId })
    .populate({ path: 'access' });
  const teamRoles = teamMembers.map((member) => member.toJSON());

  const newSession = {
    ...session,
    user: {
      ...session.user,
      teamRoles,
    },
  };
  return newSession;
}

export type Auth = typeof auth;
