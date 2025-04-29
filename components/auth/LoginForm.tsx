import React, { useState, useEffect } from 'react';
import { useAuth } from '../../utils/AuthContext';
import Button from '../shared/Button';
import Input from '../shared/Input';
import Loading from '../shared/Loading';
import { QrReader } from 'react-qr-reader';

const LoginForm: React.FC = () => {
  const [sampleCode, setSampleCode] = useState('');
  const [error, setError] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const [cameraPermission, setCameraPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');
  const { login, isLoading } = useAuth();

  useEffect(() => {
    // Check for camera permissions when scanner is shown
    if (showScanner) {
      checkCameraPermission();
    }
  }, [showScanner]);

  const checkCameraPermission = async () => {
    try {
      // Check if the browser supports the permissions API
      if (navigator.permissions && navigator.permissions.query) {
        const result = await navigator.permissions.query({ name: 'camera' as PermissionName });
        setCameraPermission(result.state as 'granted' | 'denied' | 'prompt');
        
        // Listen for permission changes
        result.addEventListener('change', () => {
          setCameraPermission(result.state as 'granted' | 'denied' | 'prompt');
        });
      } else {
        // Fallback for browsers that don't support permissions API
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(() => setCameraPermission('granted'))
          .catch(() => setCameraPermission('denied'));
      }
    } catch (err) {
      console.error('Error checking camera permission:', err);
      setCameraPermission('denied');
    }
  };

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
      // Auto-submit the form with the scanned code
      login(result.text).catch(() => {
        setError('Invalid sample code from QR. Please try again.');
      });
    }
  };

  const handleScanError = (error: any) => {
    console.error('QR scan error:', error);
    setError('Failed to scan QR code. Please try again or enter the code manually.');
  };

  const startScanner = () => {
    setError('');
    setShowScanner(true);
  };

  const renderCameraPermissionView = () => {
    if (cameraPermission === 'denied') {
      return (
        <div className="text-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Camera Access Required</h3>
          <p className="text-gray-600 mb-4">Please allow camera access in your browser settings to scan QR codes.</p>
          <Button 
            type="button" 
            onClick={() => setShowScanner(false)} 
            fullWidth
          >
            Back to Manual Entry
          </Button>
        </div>
      );
    }
    
    return (
      <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <QrReader
          constraints={{ 
            facingMode: 'environment',
            aspectRatio: 1,
          }}
          onResult={handleScan}
          scanDelay={300}
          videoStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
          videoContainerStyle={{ 
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem',
          }}
          videoId="qr-video-element" // Adding an ID can help with debugging
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-1/2 h-1/2 mx-auto my-auto border-2 border-white opacity-70 rounded-lg"></div>
        </div>
      </div>
    );
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
              onClick={startScanner}
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

          {renderCameraPermissionView()}

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