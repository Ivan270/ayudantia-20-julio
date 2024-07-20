// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc1sbnCMZjG3B03wlhnhqPLN7sGtIvB74",
  authDomain: "auth-ayudantia.firebaseapp.com",
  projectId: "auth-ayudantia",
  storageBucket: "auth-ayudantia.appspot.com",
  messagingSenderId: "649230082566",
  appId: "1:649230082566:web:5779e8aa322834e9b51987"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;