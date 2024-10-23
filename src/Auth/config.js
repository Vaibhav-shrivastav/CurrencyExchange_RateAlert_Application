import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC_HVrQ4io49-rSHoDZjy1yzbgGf0rx9c8",
  authDomain: "vancetask-auth.firebaseapp.com",
  projectId: "vancetask-auth",
  storageBucket: "vancetask-auth.appspot.com",
  messagingSenderId: "991592346887",
  appId: "1:991592346887:web:6ce56f6e9fc5c540c141a2",
  measurementId: "G-K20HZTG1CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};