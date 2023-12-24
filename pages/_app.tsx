import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Toasts from '@/components/toast/toast';
import { SessionProvider } from '@/context/session';

interface MyAppProps extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'] & { auth: boolean };
}

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { ...pageProps },
}: MyAppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Component {...pageProps} />
        <Toasts />
        <ReactQueryDevtools initialIsOpen={false} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
