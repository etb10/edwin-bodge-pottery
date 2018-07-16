// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyC0tKZbjPdt55s2DB_VtpH0UPFDdJewy4w",
    authDomain: "edwin-bodge-pottery.firebaseapp.com",
    databaseURL: "https://edwin-bodge-pottery.firebaseio.com",
    projectId: "edwin-bodge-pottery",
    storageBucket: "gs://edwin-bodge-pottery.appspot.com",
    messagingSenderId: "150321880459"
  };
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;