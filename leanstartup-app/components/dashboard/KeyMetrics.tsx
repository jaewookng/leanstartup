import React from 'react';
import Card from '../shared/Card';

interface KeyMetricsProps {
  healthScore: number;
  hydrationLevel: number;
}

const KeyMetrics: React.FC<KeyMetricsProps> = ({ healthScore, hydrationLevel }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
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
      </Card>
    </div>
  );
};

export default KeyMetrics;