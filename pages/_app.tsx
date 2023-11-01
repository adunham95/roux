import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider, useSession } from 'next-auth/react';

interface MyAppProps extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'] & { auth: boolean };
  session: Session;
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: MyAppProps) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Auth({ children }: { children: React.ReactNode }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}
