import React, { useState, useEffect } from 'react';

const UpdateNotification = () => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Get the service worker registration
      navigator.serviceWorker.ready.then((reg) => {
        setRegistration(reg);

        // Check for updates every 30 seconds when tab is active
        const checkForUpdates = () => {
          if (document.visibilityState === 'visible') {
            reg.update().catch((err) => {
              console.log('Update check failed:', err);
            });
          }
        };

        // Check immediately
        checkForUpdates();

        // Check periodically
        const interval = setInterval(checkForUpdates, 30000); // 30 seconds

        // Check when tab becomes visible
        document.addEventListener('visibilitychange', checkForUpdates);

        return () => {
          clearInterval(interval);
          document.removeEventListener('visibilitychange', checkForUpdates);
        };
      });

      // Listen for updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('🔄 New service worker activated');
        // Auto-reload the page when new service worker takes control
        window.location.reload();
      });
    }
  }, []);

  useEffect(() => {
    if (!registration) return;

    // Detect when a new service worker is waiting
    const handleWaiting = () => {
      if (registration.waiting) {
        console.log('🆕 New version available!');
        setShowUpdate(true);
      }
    };

    // Check if there's already a waiting service worker
    handleWaiting();

    // Listen for new service workers
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          console.log('📦 New version installed and waiting');
          setShowUpdate(true);
        }
      });
    });
  }, [registration]);

  const handleUpdate = () => {
    if (!registration || !registration.waiting) return;

    // Tell the waiting service worker to skip waiting
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    
    // Don't hide the notification, let the page reload handle it
    // The page will reload automatically when controllerchange fires
    // But as backup, reload after a short delay
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  // REMOVED: No more dismiss option - notification stays until user updates

  if (!showUpdate) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-2xl p-5 max-w-md mx-auto border-2 border-white/20">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="bg-white/20 rounded-full p-2">
              <svg 
                className="w-7 h-7" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                />
              </svg>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
              🎉 New Update Available!
            </h3>
            <p className="text-sm opacity-95 mb-4 leading-relaxed">
              A new version of Dutch Learn is ready with the latest features and improvements. Click below to update now!
            </p>
            
            <button
              onClick={handleUpdate}
              className="w-full bg-white text-green-600 px-6 py-3 rounded-xl font-bold text-base hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95"
            >
              ✨ Update Now
            </button>
            
            <p className="text-xs opacity-75 mt-3 text-center">
              This notification will stay until you update
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateNotification;