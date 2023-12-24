interface ISession {
  user: IUser;
  sessionId: string;
  state: string;
  fresh: boolean;
}
