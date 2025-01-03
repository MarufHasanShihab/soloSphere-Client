// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";;
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const all = import.meta.env
const firebaseConfig = {
  apiKey: all.VITE_apiKey,
  authDomain: all.VITE_authDomain,
  projectId: all.VITE_projectId,
  storageBucket: all.VITE_storageBucket,
  messagingSenderId: all.VITE_messagingSenderId,
  appId: all.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;