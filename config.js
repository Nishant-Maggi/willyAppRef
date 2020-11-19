import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ1kcpe-baGtG-h88tHLxXWgc96aB5qMk",
  authDomain: "willy-app-8b727.firebaseapp.com",
  databaseURL: "https://willy-app-8b727.firebaseio.com",
  projectId: "willy-app-8b727",
  storageBucket: "willy-app-8b727.appspot.com",
  messagingSenderId: "846049129741",
  appId: "1:846049129741:web:1bf08a74b6221e40476c44",
  measurementId: "G-6KGXQV576E"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
