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
          <title>GlowVision</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="GlowVision app for analyzing skin health" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </UserModeProvider>
    </AuthProvider>
  );
}

export default MyApp;