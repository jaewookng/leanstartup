import React, { useState } from 'react';
import { useAuth } from '../../utils/AuthContext';
import Button from '../shared/Button';
import Input from '../shared/Input';
import Loading from '../shared/Loading';

const LoginForm: React.FC = () => {
  const [sampleCode, setSampleCode] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!sampleCode) {
      setError('Please enter a sample code');
      return;
    }
    
    const success = await login(sampleCode);
    if (!success) {
      setError('Invalid sample code. Please try again.');
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Enter Sample Code</h2>
      
      <form onSubmit={handleSubmit}>
        <Input
          id="sampleCode"
          label="Sample Code"
          value={sampleCode}
          onChange={(e) => setSampleCode(e.target.value)}
          placeholder="Enter your sample code"
          required
          error={error}
        />
        
        <div className="mt-6">
          <Button type="submit" fullWidth>
            Analyze Skin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;