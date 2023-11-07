/* eslint-disable @typescript-eslint/no-explicit-any */
import connectDb from '@/db/config';
import User from '@/db/models/user';
import Auth from '@/services/auth.service';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log({ credentials });
        connectDb();
        const user = await User.findOne({ email: credentials?.email });
        //TODO get user permission based on
        if (!user) {
          console.log('no user found');
          return null;
        }

        const passwordMatch = await Auth.matchPasswords(
          credentials?.password || '',
          user.password,
        );

        if (!passwordMatch) {
          console.log('password doesnt match');
          return null;
        }

        return user.toJSON();
      },
    }),
  ],
  callbacks: {
    async session({
      session,
      user,
      token,
    }: {
      session: any;
      user: any;
      token: any;
    }) {
      console.log('session', { session, user, token });
      if (token) {
        session.user = {
          ...session.user,
          id: token.id,
          email: token.email,
          firstName: token.firstName,
          lastName: token.lastName,
        };
      }
      if (user) {
        session.user = {
          ...session.user,
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        };
      }
      return session;
    },
    async jwt({ token, user }: { token: any; user: any }) {
      console.log('jwt', { token, user });
      if (user) {
        token = {
          ...token,
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        };
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);
