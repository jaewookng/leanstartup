import React from 'react';
import Card from '../shared/Card';
import { useUserMode } from '../../utils/UserModeContext';
import { modeSpecificContent } from '../../utils/mockData';

interface KeyMetricsProps {
  healthScore: number;
  hydrationLevel: number;
}

const KeyMetrics: React.FC<KeyMetricsProps> = ({ healthScore, hydrationLevel }) => {
  const { mode } = useUserMode();
  const content = modeSpecificContent[mode];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="text-center">
        <h3 className="text-lg text-gray-600">Health Score</h3>
        <div className="mt-2 flex justify-center">
          <div className="relative h-24 w-24 flex items-center justify-center">
            <svg className="absolute" width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="5" />
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="5" 
                strokeDasharray={`${healthScore * 2.83} 283`} 
                strokeLinecap="round" 
                transform="rotate(-90 50 50)" 
              />
            </svg>
            <span className="text-3xl font-bold">{healthScore}</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600 px-4">{content.healthScoreDescription}</p>
      </Card>
      
      <Card className="text-center">
        <h3 className="text-lg text-gray-600">Hydration</h3>
        <div className="mt-2 flex justify-center">
          <div className="relative h-24 w-24 flex items-center justify-center">
            <svg className="absolute" width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="5" />
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="5" 
                strokeDasharray={`${hydrationLevel * 2.83} 283`} 
                strokeLinecap="round" 
                transform="rotate(-90 50 50)" 
              />
            </svg>
            <span className="text-3xl font-bold">{hydrationLevel}</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600 px-4">{content.hydrationDescription}</p>
      </Card>
    </div>
  );
};

export default KeyMetrics;