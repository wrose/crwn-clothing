import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDdQl8gMcIvSlQFaPnBy3qSrH3umkxTEUE",
  authDomain: "crwn-db-e36dd.firebaseapp.com",
  databaseURL: "https://crwn-db-e36dd.firebaseio.com",
  projectId: "crwn-db-e36dd",
  storageBucket: "crwn-db-e36dd.appspot.com",
  messagingSenderId: "156915960230",
  appId: "1:156915960230:web:93e4433dabd22bcb6e2767",
  measurementId: "G-L61VH4TN7X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;