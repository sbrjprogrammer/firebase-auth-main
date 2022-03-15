import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB58mOvOWUpoiPATAFY9F8CicneklHmMOU",
  authDomain: "react-redux-login-bc584.firebaseapp.com",
  projectId: "react-redux-login-bc584",
  storageBucket: "react-redux-login-bc584.appspot.com",
  messagingSenderId: "814836955453",
  appId: "1:814836955453:web:13614e1f0ad56b37b72d54",
  measurementId: "G-GLQCQXLFPM"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
