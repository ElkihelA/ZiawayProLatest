import history from "@history.js";
import swal from "sweetalert2";
import jwtAuthService from "../../services/jwtAuthService";
import FirebaseAuthService from "../../services/firebase/firebaseAuthService";
import firebase, { cloudFunctions } from "app/services/firebase/firebase";

export const SET_USER_DATA = "USER_SET_DATA";
export const REMOVE_USER_DATA = "USER_REMOVE_DATA";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";
export const PAIEMENT_INTENT = "PAIEMENT_INTENT";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export function setUserData(user) {
  return (dispatch) => {
    dispatch({
      type: SET_USER_DATA,
      data: user,
    });
  };
}

export function setSecretKey(customerId) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase.updateProfile({ customerId: customerId });
    dispatch({
      type: SET_USER_DATA,
      data: { customerId: customerId },
    });
  };
}
export function setAbonnement(values) {
  return (dispatch, getState, getFirebase) => {
    //const firebase = getFirebase();
    //firebase.updateProfile(values);
    console.log("value abonnement", values);
    dispatch({
      type: SET_USER_DATA,
      data: values,
    });
  };
}

export function updateProfile(values) {
  return (dispatch, getState, getFirebase) => {
    try {
      const firebase = getFirebase();
      firebase.updateProfile(values);

      dispatch({
        type: SET_USER_DATA,
        data: values,
      });
    } catch (error) {
      // Getting the Error details.
      var code = error.code;
      var message = error.message;
      var details = error.details;
      swal.fire(
        "Oups erreur!",
        "Nous sommes désolés, une erreur s'est produite. Nos équipes ont été informées de l'incident.",
        "error"
      );
    }
  };
}
export function updateInfosPersonnelles(values) {
  console.log(values);
  return (dispatch, getState, getFirebase) => {
    try {
      console.log("this is workign");
      const firebase = getFirebase();
      firebase.updateProfile(values);
      swal.fire(
        "Profil mis à jour !!",
        "Votre profil a été mis à jour avec succès  ",
        "success"
      );

      dispatch({
        type: SET_USER_DATA,
        data: values,
      });
    } catch (error) {
      // Getting the Error details.
      console.log(error);
      var code = error.code;
      var message = error.message;
      var details = error.details;
      swal.fire(
        "Oups erreur!",
        "Nous sommes désolés, une erreur s'est produite. Nos équipes ont été informées de l'incident.",
        "error"
      );
    }
  };
}

export function ResetPasword(values, resetForm) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    console.log("values", values, firebase.auth().currentUser);
    const emailCred = firebase.auth.EmailAuthProvider.credential(
      firebase.auth().currentUser.email,
      values.currentPassword
    );
    console.log(emailCred);
    firebase
      .auth()
      .currentUser.reauthenticateWithCredential(emailCred)
      .then((res) => {
        // User successfully reauthenticated.
        swal.fire(
          "Mis à jour avec succés",
          "Le mot de passe a été changé ",
          "success"
        );
        resetForm({ values: "" });
        return firebase.auth().currentUser.updatePassword(values.newPassword);
      })
      .catch((error) => {
        swal.fire("Oups erreur!", error.message, "error");
        console.log(error);
        // Handle error.
      });
  };
}

export function logoutUser() {
  return (dispatch) => {
    FirebaseAuthService.signOut();

    history.push({
      pathname: "/session/signin",
    });

    dispatch({
      type: USER_LOGGED_OUT,
    });
  };
}

export function manageSubscription() {
  return (dispatch) => {
    dispatch(setUserData({loading: true}));
    const httpsCallable = cloudFunctions.httpsCallable("getCurrentUserPortal");
    httpsCallable().then(res => {
      if(res.data.error) {
        console.log(res.data.message);
        dispatch(setUserData({loading: false}));
        swal.fire(
          "Oups erreur!",
          "Nous sommes désolés, une erreur s'est produite. Nos équipes ont été informées de l'incident.",
          "error"
        );
      } else {
        window.location.replace(res.data.url);
      }
    }).catch(err => {
      dispatch(setUserData({loading: false}));
      console.log(err);
      swal.fire(
        "Oups erreur!",
        "Nous sommes désolés, une erreur s'est produite. Nos équipes ont été informées de l'incident.",
        "error"
      );
    })
  }
}

export function getUserSubscriptionDetails() {
  return (dispatch, getState) => {
    const state = getState();
    const uid = state.firebase.auth.uid;
    firebase.firestore().collection("account").doc(uid).get().then(res => {
      if(res.exists) {
        dispatch(setUserData({account: {id: res.id, ...res.data()}, loading: false}));
      } else {
        dispatch(setUserData({loading: false}));
        swal.fire(
          "Oups erreur!",
          "Nous sommes désolés, une erreur s'est produite. Nos équipes ont été informées de l'incident.",
          "error"
        );
      }
    }).catch(err => {
      console.log(err);
      dispatch(setUserData({loading: false}));
      swal.fire(
        "Oups erreur!",
        "Nous sommes désolés, une erreur s'est produite. Nos équipes ont été informées de l'incident.",
        "error"
      );
    })
  }
}