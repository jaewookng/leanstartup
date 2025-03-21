import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/AuthContext';
import { mockSkinData, mockRecommendations } from '../utils/mockData';
import Header from '../components/dashboard/Header';
import KeyMetrics from '../components/dashboard/KeyMetrics';
import Recommendations from '../components/dashboard/Recommendations';
import FullReportSection from '../components/dashboard/FullReportSection';
import { SkinMetrics } from '../types';
import Loading from '../components/shared/Loading';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [skinData, setSkinData] = useState<SkinMetrics | null>(null);

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      setLoading(true);
      // In a real app, this would make an API call with the sample code
      // For demo purposes, we'll use the mock data
      setTimeout(() => {
        setSkinData(mockSkinData);
        setLoading(false);
      }, 1000);
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  if (!user) return null;
  if (loading) return <Loading />;
  if (!skinData) return <div>Error loading data</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6">Your Skin Analysis</h2>
        
        <div className="grid gap-6">
          <KeyMetrics 
            healthScore={skinData.healthScore} 
            hydrationLevel={skinData.hydrationLevel} 
          />
          
          <Recommendations recommendations={mockRecommendations} />
          
          <FullReportSection skinData={skinData} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;