// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt7GflOqcLbTEqZ0M_cpjyjJtCheX6PpQ",
  authDomain: "netflix-gpt-e6d43.firebaseapp.com",
  projectId: "netflix-gpt-e6d43",
  storageBucket: "netflix-gpt-e6d43.appspot.com",
  messagingSenderId: "567018479551",
  appId: "1:567018479551:web:618953d4a5a220357c0b0a",
  measurementId: "G-PNG6C2QTFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();