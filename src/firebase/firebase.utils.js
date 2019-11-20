import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =

{
    //api key
}

firebase.initializeApp(config);

// Auth
export const auth = firebase.auth();

// Database
export const firestore = firebase.firestore();

// Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;