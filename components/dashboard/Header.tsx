import React from 'react';
import UserModeSlider from '../shared/UserModeSlider';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-blue-600">GlowVision</h1>
        </div>
        <div className="flex items-center space-x-4">
          <UserModeSlider />
        </div>
      </div>
    </header>
  );
};

export default Header;