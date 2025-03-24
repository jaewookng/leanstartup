import React from 'react';
import Head from 'next/head';
import { useAuth } from '../utils/AuthContext';
import LoginForm from '../components/auth/LoginForm';
import Dashboard from './dashboard';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <Head>
        <title>SkinHealth App</title>
        <meta name="description" content="Skin health analysis app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {user ? <Dashboard /> : <LoginForm />}
      </main>
    </div>
  );
};

export default Home;