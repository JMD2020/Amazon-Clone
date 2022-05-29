import firebase from 'firebase/compat'
import 'firebase/firestore'


const firebaseConfig = {
   
    authDomain: "clone-26fa8.firebaseapp.com",
    databaseURL: "https://amazon-clone-26fa8.firebaseio.com",
    projectId: "clone-26fa8",
    storageBucket: "clone-26fa8.appspot.com",
  };
  
    
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };
 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
