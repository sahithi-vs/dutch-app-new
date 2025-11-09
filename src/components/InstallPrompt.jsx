import React, { useState, useEffect } from 'react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(iOS);

    // Check if already installed
    const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    setIsStandalone(standalone);

    // Android install prompt
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Show iOS prompt after 3 seconds if not installed
    if (iOS && !standalone) {
      setTimeout(() => setShowInstall(true), 3000);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log(`User response: ${outcome}`);
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  const handleClose = () => {
    setShowInstall(false);
    // Don't show again for 7 days
    localStorage.setItem('installPromptClosed', Date.now().toString());
  };

  // Don't show if already installed or recently closed
  if (isStandalone || !showInstall) return null;

  const lastClosed = localStorage.getItem('installPromptClosed');
  if (lastClosed && Date.now() - parseInt(lastClosed) < 1 * 24 * 60 * 60 * 1000) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 shadow-2xl z-50 animate-slide-up">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              <p className="font-bold text-lg">Install Dutch Learning App</p>
            </div>
            <p className="text-sm opacity-90">
              {isIOS 
                ? 'Tap the Share button and select "Add to Home Screen"'
                : 'Get quick access and work offline!'
              }
            </p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-sm bg-white/20 rounded-lg hover:bg-white/30 transition-colors font-medium"
            >
              Not Now
            </button>
            {!isIOS && (
              <button
                onClick={handleInstall}
                className="px-4 py-2 text-sm bg-white text-indigo-600 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Install
              </button>
            )}
          </div>
        </div>
        
        {isIOS && (
          <div className="mt-3 flex items-center gap-2 text-xs opacity-90 bg-white/10 rounded-lg p-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Look for the Share icon at the bottom of Safari</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallPrompt;