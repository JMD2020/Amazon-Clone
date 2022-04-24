import firebase from 'firebase/compat'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDsC3f5-ITl79ur-QS-l3UpnTO4QpWPBb4",
    authDomain: "clone-26fa8.firebaseapp.com",
    databaseURL: "https://amazon-clone-26fa8.firebaseio.com",
    projectId: "clone-26fa8",
    storageBucket: "clone-26fa8.appspot.com",
    messagingSenderId: "610452975532",
    appId: "1:610452975532:web:70637bb5ebbcfde2889409",
    measurementId: "G-0FNWWG67JV",
  };
  
    
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };
 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()