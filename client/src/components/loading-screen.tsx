import { useState, useEffect } from 'react';
import logoImage from '@assets/logo.png';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="logo-container mb-6">
          <div className="logo-glow"></div>
          <div className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center relative z-10 overflow-hidden">
            <img 
              src={logoImage} 
              alt="CODICORE Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="text-2xl font-bold gradient-text mb-4">CODICORE</div>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
