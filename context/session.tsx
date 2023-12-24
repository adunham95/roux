import { useViewer } from '@/api/queries/getViewer';
import { createContext, useContext, useEffect, useState } from 'react';

interface ISessionContext {
  session: ISession | null;
  refreshSession: () => void;
}

const SessionContext = createContext<ISessionContext>({
  session: null,
  refreshSession: () => null,
});

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<ISession | null>(null);
  const { data, refetch } = useViewer(false);
  useEffect(() => {
    refetch();
    console.log('load session');
  }, []);
  useEffect(() => {
    console.log(data);
    if (data) {
      setSession(data);
    }
  }, [data]);

  return (
    <SessionContext.Provider value={{ session, refreshSession: refetch }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const session = useContext(SessionContext);
  return session;
}
