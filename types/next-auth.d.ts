import { Account, User } from 'next-auth';

interface IAuthUser extends User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
}

declare module 'next-auth' {
  interface Session {
    accessToken?: Account.accessToken;
  }
}
