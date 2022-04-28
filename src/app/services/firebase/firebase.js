import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

import "firebase/storage";

firebase.initializeApp(firebaseConfig);
firebase.firestore();
const storage = firebase.storage();

export { storage, firebase as default };
