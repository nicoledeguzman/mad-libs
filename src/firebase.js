import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCNlInO9ahW-ry3FCwudYkx07jZ5TZxMxE",
    authDomain: "mad-libs-25190.firebaseapp.com",
    projectId: "mad-libs-25190",
    storageBucket: "mad-libs-25190.appspot.com",
    messagingSenderId: "666125265387",
    appId: "1:666125265387:web:86ddae78e0a481440051ae"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase;
