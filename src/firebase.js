import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// PASTE YOUR CONFIG HERE (from Step 3)
const firebaseConfig = {
  apiKey: "AIzaSyDDuegKIIwgD_4bwX1_1dsPnXREy_tDFgc",
  authDomain: "dutch-word-game-3d31a.firebaseapp.com",
  databaseURL: "https://dutch-word-game-3d31a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dutch-word-game-3d31a",
  storageBucket: "dutch-word-game-3d31a.firebasestorage.app",
  messagingSenderId: "581938418501",
  appId: "1:581938418501:web:97ed99dcfb8dea4ac9e42c",
  measurementId: "G-WVF9EDBNYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const database = getDatabase(app);