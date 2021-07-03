// import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDeztHLVnkWBCnvJ6fq-8gXbV0fcDnLWf4",
    authDomain: "vapeando-c3576.firebaseapp.com",
    projectId: "vapeando-c3576",
    storageBucket: "vapeando-c3576.appspot.com",
    messagingSenderId: "562408414963",
    appId: "1:562408414963:web:e3cfe37eeadb90870ee186",
    measurementId: "G-XMLFV1ZCCW"
  };

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const auth= fire.auth();
export {db,auth}