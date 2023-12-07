// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaFFzctqkhgCvwJYT0XChcl-hcMCn7YTo",
  authDomain: "react-crs-6ba17.firebaseapp.com",
  projectId: "react-crs-6ba17",
  storageBucket: "react-crs-6ba17.appspot.com",
  messagingSenderId: "145392658952",
  appId: "1:145392658952:web:7f0b16ccfaeec3bf483fbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();