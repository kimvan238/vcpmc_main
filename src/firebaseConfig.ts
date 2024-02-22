import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
console.log("Firebase API Key:", process.env.REACT_APP_FIREBASE_API_KEY);
console.log(
  "Firebase Auth Domain:",
  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // Sử dụng biến môi trường
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, // Sử dụng biến môi trường
  projectId: "vcpmc-6febb",
  storageBucket: "vcpmc-6febb.appspot.com",
  messagingSenderId: "634423417497",
  appId: "1:634423417497:web:53ab9ae9eb84b2ca32f608",
  measurementId: "G-HRBN5D2GT6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the auth service
export const auth = getAuth(app);

// Get a reference to the database service
export const database = getDatabase(app);
