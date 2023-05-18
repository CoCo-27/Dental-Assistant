import { QueryClient, QueryClientProvider } from 'react-query';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import { AuthContextProvider } from '@/context/AuthContext';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps<{}>) {
  const queryClient = new QueryClient();

  return (
    <AuthContextProvider>
      <div className="notification-box flex flex-col items-center justify-center fixed w-full z-50 p-3"></div>
      <div className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
    </AuthContextProvider>
  );
}

export default appWithTranslation(App);
