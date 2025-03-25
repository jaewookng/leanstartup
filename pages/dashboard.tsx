import React from 'react';
import { useAuth } from '../utils/AuthContext';
import DashboardContent from '../components/dashboard/DashboardContent';
import Loading from '../components/shared/Loading';

const Dashboard: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loading />;
  if (!user) {
    // Redirect to login if not authenticated
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    return <Loading />;
  }

  return <DashboardContent />;
};

export default Dashboard;