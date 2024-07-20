// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5oEMmhn-VAB_93a26JAKf1N34dOZ640U",
  authDomain: "crud-ayudantia.firebaseapp.com",
  projectId: "crud-ayudantia",
  storageBucket: "crud-ayudantia.appspot.com",
  messagingSenderId: "992458053678",
  appId: "1:992458053678:web:f57a8515d223145be7e7bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app