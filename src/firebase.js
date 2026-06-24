// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGaNBF63Jc2z8ZkOTbpYBu9HbijMWMLRs",
  authDomain: "mgbjtravel.firebaseapp.com",
  projectId: "mgbjtravel",
  storageBucket: "mgbjtravel.firebasestorage.app",
  messagingSenderId: "1020467363704",
  appId: "1:1020467363704:web:ab9900c06e3347f6b9528d",
  measurementId: "G-WF4D0W2Q6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Initialize Firebase services
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);