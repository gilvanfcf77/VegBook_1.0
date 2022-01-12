// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAya8ihlP6mpUORbf2mMVxdxa88IwB8sRw",
  authDomain: "vegbook1.firebaseapp.com",
  projectId: "vegbook1",
  storageBucket: "vegbook1.appspot.com",
  messagingSenderId: "374071388907",
  appId: "1:374071388907:web:0d42357cde8263de6decae",
  measurementId: "G-6KESGDQ4J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore();

export { app, db }