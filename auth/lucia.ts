import { lucia } from 'lucia';
import { nextjs_future } from 'lucia/middleware';
import { mongoose } from '@lucia-auth/adapter-mongoose';
import User from '@/db/models/user';
import Key from '@/db/models/key';
import Session from '@/db/models/session';
import connectDb from '@/db/config';

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

export type Auth = typeof auth;
