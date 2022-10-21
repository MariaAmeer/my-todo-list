// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCbWzSVN1wbjI9eaECY5zzb3GzFFHm95E",
  authDomain: "todo-app-21c24.firebaseapp.com",
  projectId: "todo-app-21c24",
  storageBucket: "todo-app-21c24.appspot.com",
  messagingSenderId: "434773304551",
  appId: "1:434773304551:web:2c63fba18dca9242f3ee42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)