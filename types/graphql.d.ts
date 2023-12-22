import { Session } from 'next-auth';

interface Context {
  session: Session;
}

interface ISession {
  user: IBaseUser;
  sessionId: string;
  state: string;
  fresh: boolean;
}
