 import firebase from "firebase"; //importing firebase

firebase.initializeApp({   /// using the initializeApp firebase method to run with the configuration info as an object 
     //created .env file and created enviroment variable with all the sensative information 
     // then added it to the gitignore file 

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  });


  export const firebaseRef = firebase;  //  rename firebase 
  export const auth = firebase.auth();  // authentification for loggin in and out 
  export const db = firebase.firestore(); // the fire base database
