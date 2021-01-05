import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config={
    apiKey: "AIzaSyBPx-Ems2SAPjMEuKA_zKjCf5f344ROn9I",
    authDomain: "movielookup-70dab.firebaseapp.com",
    projectId: "movielookup-70dab",
    storageBucket: "movielookup-70dab.appspot.com",
    messagingSenderId: "103287162564",
    appId: "1:103287162564:web:9d5cbc154e2e6dce24eb91",
    measurementId: "G-4RNS3L5MQZ"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
   
    const userRef = firestore.doc(`users/${userAuth.uid}`);
   
    const snapShot = await userRef.get();
   
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          nominations: [],
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
   
    return userRef;
  };
export const updateNominations = async (userAuth, nominations) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

        try{
            await userRef.update({"nominations":nominations})
        }
        catch(error)
        {
        console.log('Error creating user',error.message);
        }
}


export const getNominations = async (userAuth) =>{
    if(!userAuth) return;


    const userRef= firestore.doc(`users/${userAuth.uid}`);
    userRef.get().then((response)=>{console.log(response.data()); return response.data()})

}




firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore=firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle =()=> auth.signInWithPopup(provider);
export default firebase;

