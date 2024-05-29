import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdeTpPkZkix0P5JxVz78d89-YEbJJjmtA",
  authDomain: "e-commerce-reactjs-270df.firebaseapp.com",
  projectId: "e-commerce-reactjs-270df",
  storageBucket: "e-commerce-reactjs-270df.appspot.com",
  messagingSenderId: "230653258588",
  appId: "1:230653258588:web:2c653b5b611b7e78e2af99"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)