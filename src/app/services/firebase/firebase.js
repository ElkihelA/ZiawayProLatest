import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/functions";
import "firebase/storage";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export const cloudFunctions = firebase.app().functions();
if (process.env.NODE_ENV === 'development') {
    cloudFunctions.useFunctionsEmulator("http://localhost:5000");
}
export const storage = firebase.storage();
export default firebase;