import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "pokemon-api-286ca.firebaseapp.com",
    projectId: "pokemon-api-286ca",
    storageBucket: "pokemon-api-286ca.appspot.com",
    messagingSenderId: "400569170544",
    appId: "1:400569170544:web:2688b3dc51fb925f6752b5"
  };

  

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  
  
  export {db}

