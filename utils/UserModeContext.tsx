import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserMode = 'consumer' | 'student' | 'scientist';

interface UserModeContextType {
  mode: UserMode;
  setMode: (mode: UserMode) => void;
}

const UserModeContext = createContext<UserModeContextType | undefined>(undefined);

export const UserModeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [mode, setMode] = useState<UserMode>('consumer');

  return (
    <UserModeContext.Provider value={{ mode, setMode }}>
      {children}
    </UserModeContext.Provider>
  );
};

export const useUserMode = (): UserModeContextType => {
  const context = useContext(UserModeContext);
  if (context === undefined) {
    throw new Error('useUserMode must be used within a UserModeProvider');
  }
  return context;
};