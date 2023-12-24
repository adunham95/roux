interface ISession {
  user: IBaseUser;
  sessionId: string;
  state: string;
  fresh: boolean;
}
