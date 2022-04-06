import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA2-eMXviszgyMdxkZCDg8vazVss6kFfTY",
  authDomain: "wyzr-345809.firebaseapp.com",
  projectId: "wyzr-345809",
  storageBucket: "wyzr-345809.appspot.com",
  messagingSenderId: "333646857460",
  appId: "1:333646857460:web:e627bb8931786bcb6c0aa1",
  measurementId: "G-ZJKM5XB3F9",
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database();

export default database;

