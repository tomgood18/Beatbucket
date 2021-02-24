import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { functions } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDgMRyEEhhQ8hWd6rV6Co4pFXkHogu6i3k",
    authDomain: "beatbucket-2860f.firebaseapp.com",
    projectId: "beatbucket-2860f",
    storageBucket: "beatbucket-2860f.appspot.com",
    messagingSenderId: "126811993825",
    appId: "1:126811993825:web:0efa871a45b7364d4fa9a0",
    measurementId: "G-ZMQ8B30GZX"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const generateBucket = async (user, file) => {
  if (!user) return;

  //const bucketRef = firestore.doc(`users/${user.uid}/bucket/file`);
  const bucketStorage = firebase.storage();
  bucketStorage.ref = `users/${user.uid}/file`; 
  // const snapshot = await bucketStorage.get();



  // if (!snapshot.exists)
    try {
      await bucketStorage.set({
        file
      });

    } catch (error) {
      console.error("Error generating bucket", error);
    };
  };

//   if (!snapshot.exists) {
//     try {
//       await bucketRef.set({
//         file
//       });
//     } catch (error) {
//       console.error("Error generating bucket", error);
//     }
//   }
// };
