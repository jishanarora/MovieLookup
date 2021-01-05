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

