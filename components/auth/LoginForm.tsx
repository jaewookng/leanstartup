import React, { useState } from 'react';
import { useAuth } from '../../utils/AuthContext';
import Button from '../shared/Button';
import Input from '../shared/Input';
import Loading from '../shared/Loading';
import { QrReader } from 'react-qr-reader';

const LoginForm: React.FC = () => {
  const [sampleCode, setSampleCode] = useState('');
  const [error, setError] = useState('');
  const [showScanner, setShowScanner] = useState(false);
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

  const handleScan = (result: any) => {
    if (result) {
      setSampleCode(result?.text || '');
      setShowScanner(false);
    }
  };

  const handleScanError = (error: any) => {
    console.error('QR scan error:', error);
    setError('Failed to scan QR code. Please try again or enter the code manually.');
  };

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {!showScanner ? (
        <>
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

          <div className="mt-4 text-center">
            <p className="text-gray-500 mb-2">- OR -</p>
            <Button 
              type="button" 
              variant="secondary" 
              onClick={() => setShowScanner(true)}
            >
              Scan QR Code
            </Button>
          </div>
        </>
      ) : (
        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2 text-center">Scan QR Code</h2>
            <p className="text-center text-sm text-gray-600 mb-4">
              Position the QR code in the center of the camera view
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <QrReader
              constraints={{ facingMode: 'environment' }}
              onResult={handleScan}
              scanDelay={300}
              videoStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
              videoContainerStyle={{ 
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem',
              }}
            />
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-1/2 h-1/2 mx-auto my-auto border-2 border-white opacity-70 rounded-lg"></div>
            </div>
          </div>

          <div className="mt-4">
            <Button 
              type="button" 
              variant="secondary" 
              onClick={() => setShowScanner(false)}
              fullWidth
            >
              Cancel Scan
            </Button>
          </div>
          
          {error && (
            <p className="mt-2 text-center text-red-500 text-sm">{error}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginForm;