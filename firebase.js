import firebase from 'firebase/compat/app';

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
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase