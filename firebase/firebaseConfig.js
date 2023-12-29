// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc,getDocs,updateDoc, doc, deleteDoc, setDoc, arrayUnion} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBINBKLMNkBV5PhA7Kh9DSuu1cO5bnTweI",
  authDomain: "elista-2d21e.firebaseapp.com",
  projectId: "elista-2d21e",
  storageBucket: "elista-2d21e.appspot.com",
  messagingSenderId: "460672436830",
  appId: "1:460672436830:web:21275eef09e7f02a8a42cf",
  measurementId: "G-PHS5F13SKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db, getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, setDoc, arrayUnion}