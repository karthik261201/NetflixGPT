// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuFstELb6f9yelsFM66qBLwtT9tDt6AuY",
  authDomain: "https://netflix-gpt-karthiknarayanan.vercel.app",
  projectId: "netlifxgpt",
  storageBucket: "netlifxgpt.appspot.com",
  messagingSenderId: "1078324099047",
  appId: "1:1078324099047:web:65b85f41f114dddabe2f42",
  measurementId: "G-5GFQPN0535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();