// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import InstallPrompt from './components/InstallPrompt';
import InstallButton from './components/InstallButton';
import App from './App.jsx';
import './index.css';


// ADD THIS: Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('✅ Service Worker registered:', registration);
      })
      .catch(error => {
        console.log('❌ Service Worker registration failed:', error);
      });
  });
}

const GOOGLE_CLIENT_ID = '80422664631-39g4j6puub6r7i6jea8stjrj20b3qeh9.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <InstallPrompt />
      <InstallButton /> 
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
);