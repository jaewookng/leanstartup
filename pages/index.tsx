import React from 'react';
import Head from 'next/head';
import { useAuth } from '../utils/AuthContext';
import LoginForm from '../components/auth/LoginForm';
import { useRouter } from 'next/router';
import Loading from '../components/shared/Loading';

const Home: React.FC = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  // Redirect to dashboard if logged in
  React.useEffect(() => {
    if (user && !isLoading) {
      router.push('/dashboard');
    }
  }, [user, isLoading, router]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <Head>
        <title>GlowVision App</title>
        <meta name="description" content="Skin health analysis app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {user ? <Loading /> : <LoginForm />}
      </main>
    </div>
  );
};

export default Home;