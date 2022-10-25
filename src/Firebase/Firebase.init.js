// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH-aBDCl94wBC2c2L7jk_jSmKUCpUFEHA",
  authDomain: "pro-learner-auth.firebaseapp.com",
  projectId: "pro-learner-auth",
  storageBucket: "pro-learner-auth.appspot.com",
  messagingSenderId: "324333176049",
  appId: "1:324333176049:web:89441df553dd4b84179550",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;