import { Account, User } from 'next-auth';

interface ITeamRole {
  userID: string;
  teamID: string;
  roleID: string;
  access?: { id: string; name: string; permissions: string[] };
}
interface IAuthUser extends User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  status: string;
  teamRoles: ITeamRole[];
}

declare module 'next-auth' {
  interface Session {
    accessToken?: Account.accessToken;
    user: IAuthUser;
  }
}
