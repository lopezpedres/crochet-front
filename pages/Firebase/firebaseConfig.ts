// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgElH27aq2mXnp-uSZE0Cu-vQROvrz_Bg",
  authDomain: "personal-project-606b8.firebaseapp.com",
  projectId: "personal-project-606b8",
  storageBucket: "personal-project-606b8.appspot.com",
  messagingSenderId: "695248511007",
  appId: "1:695248511007:web:6071af7031e6012393b52a",
  measurementId: "G-6YRQP8PW3L"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);