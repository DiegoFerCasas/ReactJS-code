import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD1Syrs6X8SKMTdyDwTmidtcuO-yRLears",
  authDomain: "coderproyectreactjs.firebaseapp.com",
  projectId: "coderproyectreactjs",
  storageBucket: "coderproyectreactjs.appspot.com",
  messagingSenderId: "835500946436",
  appId: "1:835500946436:web:29be9813dd2da781e8f151"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
