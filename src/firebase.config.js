// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnwYbKG8V3VAVOmWJlnUXKuN23_ek1Szc",
  authDomain: "clonerjs.firebaseapp.com",
  projectId: "clonerjs",
  storageBucket: "clonerjs.appspot.com",
  messagingSenderId: "314450355149",
  appId: "1:314450355149:web:671589942d68b4819c5a84",
  measurementId: "G-Y88FRQ1962"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig 

