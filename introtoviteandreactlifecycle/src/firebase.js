// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqso1DQ2H_VD_3rMu_By806BLXkfPjGBs",
  authDomain: "tasks-bd851.firebaseapp.com",
  databaseURL: "https://tasks-bd851-default-rtdb.firebaseio.com",
  projectId: "tasks-bd851",
  storageBucket: "tasks-bd851.firebasestorage.app",
  messagingSenderId: "919792920772",
  appId: "1:919792920772:web:38382672a6839c4a498191",
  measurementId: "G-1PR50910TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore functions and db
export { db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc };
