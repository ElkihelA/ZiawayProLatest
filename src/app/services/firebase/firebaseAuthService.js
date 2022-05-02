//import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import firebaseConfig from "./firebaseConfig";
import firebase from "./firebase";
import swal from "sweetalert2";
class FirebaseAuthService {
  auth;
  firestore;
  // firebase;
  //   database;
  //   storage;

  googleProvider;
  facebookProvider;
  twitterProvider;

  constructor() {
    // UNCOMMENT IF YOU WANT TO USE FIREBASE

    this.init();
    this.auth = firebase.auth();
   
    this.firestore = firebase.firestore();
    
    //this.firebase=firebase;
    //  this.database  = firebase.database();
    //this.storage = firebase.storage();

    // this.googleProvider = new firebase.auth.GoogleAuthProvider();
    // this.facebookProvider = new firebase.auth.FacebookAuthProvider();
    // this.twitterProvider = new firebase.auth.TwitterAuthProvider();
  }

   init = async () => {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  };

  checkAuthStatus = (callback) => {
    this.auth.onAuthStateChanged(callback);
  };

  signUpWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  sendResetEmail =  (email) => {
   
   this.auth
      .sendPasswordResetEmail(email).then((result) => {
      
        swal.fire(
          "Mot de passe oublié!",
          "Un email a été envoyé à votre adresse courriel",
          "success"
        );
      return true
      })
      .catch((error) => {

        if (error.code === "auth/user-not-found"){
          swal.fire(
            "Oups Erreur!",
            " Il n'y a pas d'enregistrement d'utilisateur correspondant à cet identifiant. L'utilisateur a peut-être été supprimé.",
            "error"
          );

       
        }else {

          swal.fire(
            "Oups Erreur!",
            error.message,
            "error"
          );

        }
   
       return false
      });
  };

  signInWithEmailAndPassword = (email, password) => {
    return this.auth
      .signInWithEmailAndPassword(email, password)      
  };

  signInWithPopup = (media) => {
    switch (media) {
      case "google":
        return this.auth.signInWithPopup(this.googleProvider);

      case "facebook":
        return this.auth.signInWithPopup(this.facebookProvider);

      case "twitter":
        return this.auth.signInWithPopup(this.twitterProvider);

      default:
        break;
    }
  };

  signInWithPhoneNumber = (phoneNumber) => {
    return this.auth.signInWithPhoneNumber(phoneNumber);
  };

  signInAnonymously = () => {
    return this.auth.signInAnonymously().catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log("error anonymous signin", errorCode, errorMessage);
    });
  };

  getUserData = (docId) => {
    //   generally it's better to use uid for docId
    this.firestore
      .collection("users")
      .doc(docId)
      .get()
      .then((doc) => {
        console.log(doc.data());
      });
  };

  getAllUser = () => {
    this.firestore
      .collection("users")
      .get()
      .then((docList) => {
        docList.forEach((doc) => {
          console.log(doc.data());
        });
      });
  };

  signOut = () => {
    return this.auth.signOut();
  };
}

const instance = new FirebaseAuthService();

export default instance;
