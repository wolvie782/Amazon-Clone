// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZ9FM0w2Z4VVk5Bl_YGBKEWG2xZJO_9H8",
    authDomain: "clone-d672c.firebaseapp.com",
    projectId: "clone-d672c",
    storageBucket: "clone-d672c.appspot.com",
    messagingSenderId: "1067749454478",
    appId: "1:1067749454478:web:5a6d47a1d85b6669f9cfdf",
    measurementId: "G-62X39Z22TP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore()

const auth = firebase.auth();

export { db, auth };




