// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnkUbb9CltL1rudhkiFeMivmPE6YyYA50",
  authDomain: "house-marketplace-app-re-b4e2a.firebaseapp.com",
  projectId: "house-marketplace-app-re-b4e2a",
  storageBucket: "house-marketplace-app-re-b4e2a.firebasestorage.app",
  messagingSenderId: "1075016267237",
  appId: "1:1075016267237:web:f3f0f6e4c3c4e15e562b0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
