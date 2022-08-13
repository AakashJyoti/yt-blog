// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuRuJw1RuOShw_gbfIsk3ccGb20985ajI",
  authDomain: "blog-4323d.firebaseapp.com",
  projectId: "blog-4323d",
  storageBucket: "blog-4323d.appspot.com",
  messagingSenderId: "670594851336",
  appId: "1:670594851336:web:2a6180d718dc92aa4be7bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
