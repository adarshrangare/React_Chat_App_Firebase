// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRPySy5gN6BFVmtUJn5x2f6mIbbRpWzBk",
  authDomain: "react-chat-app-4ee82.firebaseapp.com",
  projectId: "react-chat-app-4ee82",
  storageBucket: "react-chat-app-4ee82.appspot.com",
  messagingSenderId: "176399384943",
  appId: "1:176399384943:web:b601ef362aa9fc0a79e89a",
  measurementId: "G-8RRBGNCG4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);