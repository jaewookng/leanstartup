import React from 'react';
import { useAuth } from '../../utils/AuthContext';
import Button from '../shared/Button';

const Header: React.FC = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-blue-600">SkinHealth</h1>
        </div>
        <Button variant="outline" onClick={logout}>Logout</Button>
      </div>
    </header>
  );
};

export default Header;