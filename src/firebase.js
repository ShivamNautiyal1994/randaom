// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZZMxJVfa14LrK_l4osXHQRIF8w1eLL7E",
  authDomain: "watsappclone-65b46.firebaseapp.com",
  projectId: "watsappclone-65b46",
  storageBucket: "watsappclone-65b46.appspot.com",
  messagingSenderId: "692092967345",
  appId: "1:692092967345:web:64229ea9c71b7603ce0590",
  measurementId: "G-JVMP2SX6Y6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
