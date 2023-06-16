// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC08QPfcPbietAvlpQ53sYkX_rgTPuDhSU",
  authDomain: "fir-95f64.firebaseapp.com",
  projectId: "fir-95f64",
  storageBucket: "fir-95f64.appspot.com",
  messagingSenderId: "283350599727",
  appId: "1:283350599727:web:ef4c2fd60c7e1f042fdeda"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);