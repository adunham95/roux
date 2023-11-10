import { Account, User } from 'next-auth';

interface ITeamRole {
  userID: string;
  teamID: string;
  roleID: string;
}
interface IAuthUser extends User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  teamRoles: ITeamRole[];
}

declare module 'next-auth' {
  interface Session {
    accessToken?: Account.accessToken;
    user: IAuthUser;
  }
}
