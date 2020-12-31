import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config={
    apiKey: "AIzaSyD4-a1_yMGVNG7sY8e4i_5SS-d3MpcaWKQ",
    authDomain: "sparsh-furniture.firebaseapp.com",
    databaseURL: "https://sparsh-furniture.firebaseio.com",
    projectId: "sparsh-furniture",
    storageBucket: "sparsh-furniture.appspot.com",
    messagingSenderId: "944299765758",
    appId: "1:944299765758:web:0aa1437eb7b3beba955aaf"
}

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = userRef.get();

    if(!snapShot.exists)
    {
        var {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error)
        {
        console.log('Error creating user',error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore=firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle =()=> auth.signInWithPopup(provider);
export default firebase;

