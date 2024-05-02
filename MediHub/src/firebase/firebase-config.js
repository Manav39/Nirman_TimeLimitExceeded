// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-kVrQGMiygQ2Iebaftv-bm2qz6snPNzs",
  authDomain: "medihub-b4ec9.firebaseapp.com",
  projectId: "medihub-b4ec9",
  storageBucket: "medihub-b4ec9.appspot.com",
  messagingSenderId: "503059893481",
  appId: "1:503059893481:web:bda599b6ebd97aab9cf478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
export const db = getFirestore(app);
