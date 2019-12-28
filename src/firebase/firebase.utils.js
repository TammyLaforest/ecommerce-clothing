import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =

{
    apiKey: "AIzaSyBbl3wHuoTb82fYwGl6kncHHEp8aczkkRY",
    authDomain: "ecommerce-clothing-db.firebaseapp.com",
    databaseURL: "https://ecommerce-clothing-db.firebaseio.com",
    projectId: "ecommerce-clothing-db",
    storageBucket: "ecommerce-clothing-db.appspot.com",
    messagingSenderId: "629447815328",
    appId: "1:629447815328:web:d233d1de671ed24df899c5",
    measurementId: "G-NEZ6MWCLG3"

}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) { return }

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    // console.log(snapShot)
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef
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