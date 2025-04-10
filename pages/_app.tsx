import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../utils/AuthContext';
import { UserModeProvider } from '../utils/UserModeContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UserModeProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="SkinHealth app for analyzing skin health" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </UserModeProvider>
    </AuthProvider>
  );
}

export default MyApp;