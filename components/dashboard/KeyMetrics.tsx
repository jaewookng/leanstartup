import React, { useState, useEffect } from 'react';
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
  const [animatedHealthScore, setAnimatedHealthScore] = useState(0);
  const [animatedHydrationLevel, setAnimatedHydrationLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Animation parameters
    const duration = 2000; // longer total duration for more dramatic effect
    const fps = 60;
    const totalFrames = Math.floor(duration / (1000 / fps));
    
    let healthFrame = 0;
    let hydrationFrame = 0;
    
    // Extremely non-linear easing function - very fast at first, then dramatically slows down
    const dramaticEasing = (t: number) => {
      // Super fast for first 80%, then extreme deceleration
      if (t < 0.8) {
        // Accelerated linear for first 80%
        return t / 0.8 * 0.92; // Get to 92% quickly
      } else {
        // Extreme deceleration for final 20%
        const normalized = (t - 0.8) / 0.2; // 0 to 1 in the final 20%
        // Use a higher power function for more dramatic slowdown
        return 0.92 + 0.08 * (1 - Math.pow(1 - normalized, 5));
      }
    };
    
    // Animation frame function
    const animateHealth = () => {
      healthFrame++;
      const progress = healthFrame / totalFrames;
      
      if (progress <= 1) {
        const easedProgress = dramaticEasing(progress);
        const currentValue = Math.min(Math.floor(easedProgress * healthScore), healthScore);
        setAnimatedHealthScore(currentValue);
        requestAnimationFrame(animateHealth);
      } else {
        setAnimatedHealthScore(healthScore);
      }
    };
    
    const animateHydration = () => {
      hydrationFrame++;
      const progress = hydrationFrame / totalFrames;
      
      if (progress <= 1) {
        const easedProgress = dramaticEasing(progress);
        const currentValue = Math.min(Math.floor(easedProgress * hydrationLevel), hydrationLevel);
        setAnimatedHydrationLevel(currentValue);
        requestAnimationFrame(animateHydration);
      } else {
        setAnimatedHydrationLevel(hydrationLevel);
      }
    };
    
    // Start animations with a slight delay offset
    const healthAnimationDelay = setTimeout(() => requestAnimationFrame(animateHealth), 100);
    const hydrationAnimationDelay = setTimeout(() => requestAnimationFrame(animateHydration), 400);
    
    return () => {
      clearTimeout(healthAnimationDelay);
      clearTimeout(hydrationAnimationDelay);
    };
  }, [healthScore, hydrationLevel]);

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
                strokeDasharray={`${isVisible ? animatedHealthScore * 2.83 : 0} 283`} 
                strokeLinecap="round" 
                transform="rotate(-90 50 50)" 
              />
            </svg>
            <span className="text-3xl font-bold">{animatedHealthScore}</span>
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
                strokeDasharray={`${isVisible ? animatedHydrationLevel * 2.83 : 0} 283`} 
                strokeLinecap="round" 
                transform="rotate(-90 50 50)" 
              />
            </svg>
            <span className="text-3xl font-bold">{animatedHydrationLevel}</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600 px-4">{content.hydrationDescription}</p>
      </Card>
    </div>
  );
};

export default KeyMetrics;