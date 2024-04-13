// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authentication-server-8ea01.firebaseapp.com",
  projectId: "authentication-server-8ea01",
  storageBucket: "authentication-server-8ea01.appspot.com",
  messagingSenderId: "1054730866510",
  appId: "1:1054730866510:web:915cba008dfb9b8396181f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);