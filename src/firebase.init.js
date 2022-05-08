// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};

/* apiKey: "AIzaSyCa-hvKtN_LUiW7hI_CTz3O3qC_guC_uNY",
authDomain: "assignment-11-e988e.firebaseapp.com",
projectId: "assignment-11-e988e",
storageBucket: "assignment-11-e988e.appspot.com",
messagingSenderId: "125178063563",
appId: "1:125178063563:web:39aabc762209c6fe3ec94e", */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;