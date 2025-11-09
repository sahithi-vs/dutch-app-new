import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import InstallPrompt from './components/InstallPrompt';
import InstallButton from './components/InstallButton';
import UpdateNotification from './components/UpdateNotification';
import App from './App.jsx';
import './index.css';

// Register Service Worker with update detection
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('✅ Service Worker registered:', registration);

        // Check for updates on page load
        registration.update();

        // Check for updates every hour
        setInterval(() => {
          registration.update();
          console.log('🔍 Checking for service worker updates...');
        }, 60 * 60 * 1000); // 1 hour

        // Log when new service worker is found
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          console.log('🆕 New service worker found!');

          newWorker.addEventListener('statechange', () => {
            console.log('Service Worker state:', newWorker.state);
          });
        });
      })
      .catch(error => {
        console.log('❌ Service Worker registration failed:', error);
      });

    // Reload page when new service worker takes control
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        console.log('🔄 New service worker activated - reloading page');
        window.location.reload();
      }
    });
  });
}

const GOOGLE_CLIENT_ID = '80422664631-39g4j6puub6r7i6jea8stjrj20b3qeh9.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <UpdateNotification />
      <InstallPrompt />
      <InstallButton /> 
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
);