import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SessionProvider } from 'next-auth/react';
import Header from 'components/Header';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity },
    },
  });

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <div className="px-36 ">
          <Header />
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </SessionProvider>
  );
}
