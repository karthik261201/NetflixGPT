// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR7GDeye5OgazVdhxpdUMXKlG__8WyKZs",
  authDomain: "netflix-gpt-f9079.firebaseapp.com",
  projectId: "netflix-gpt-f9079",
  storageBucket: "netflix-gpt-f9079.appspot.com",
  messagingSenderId: "535563795002",
  appId: "1:535563795002:web:01cd6a625aacbf21239303",
  measurementId: "G-R3J7T6M74W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();