import history from "@history.js";
import SearchResults from "app/views/pages/SearchResults";
import swal from "sweetalert2";
export const GET_METH_PAIMENT = "GET_METH_PAIMENT";
export const GET_ABONNEMENTS = "GET_ABONNEMENTS";
export const LOADING_ABONNEMENTS = "LOADING_ABONNEMENTS";
export const UPDATE_ABONNEMENTS_SUCCESS = "UPDATE_ABONNEMENTS_SUCCESS";
export const UPDATE_ABONNEMENTS_ERROR = "UPDATE_ABONNEMENTS_ERROR";
export const GET_FACTURES = "GET_FACTURES";

export function ObtenirMethodesPaiements(values) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    var methodesPaiements = firebase
      .functions()
      .httpsCallable("MethodesPaiements");
    console.log("values", values);
    methodesPaiements(values)
      .then((result) => {
        console.log("meth paiments :", result.data);
        //var abonnement = { statut: result.data.status,subscription:result.data};
        dispatch({
          type: UPDATE_ABONNEMENTS_SUCCESS,
        });

        return dispatch({
          type: GET_METH_PAIMENT,
          payload: result.data.data,
        });
        // firebase.updateProfile({ ...values, abonnement, role: "membre" });

        return result;
        // history.push({
        //    pathname: "/",
        //  });
      })
      .catch(function (error) {
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        dispatch({
          type: UPDATE_ABONNEMENTS_ERROR,
        });
        console.log("resultat", error);
      });
  };
}

export function ObtenirAbonnements(values) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    dispatch({
      type: LOADING_ABONNEMENTS,
      payload: true,
    });
    var abonnements = firebase.functions().httpsCallable("ObtenirAbonnements");
    console.log("values", values);
    abonnements(values)
      .then((result) => {
        console.log("abonnements:", result.data);
        //var abonnement = { statut: result.data.status,subscription:result.data};
        dispatch({
          type: LOADING_ABONNEMENTS,
          payload: false,
        });

        return dispatch({
          type: GET_ABONNEMENTS,
          payload: result.data.data,
        });
        // firebase.updateProfile({ ...values, abonnement, role: "membre" });

        return result;
        // history.push({
        //    pathname: "/",
        //  });
      })
      .catch(function (error) {
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        console.log("resultat", error);
        dispatch({
          type: LOADING_ABONNEMENTS,
          payload: false,
        });
      });
  };
}
export function MettreAJourAbonnements(values) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    var abonnement = firebase.functions().httpsCallable("updateAbonnement");
    console.log("values", values);
    abonnement(values)
      .then((result) => {
        console.log("abonnements:", result.data);
        //var abonnement = { statut: result.data.status,subscription:result.data};
        swal.fire(
          "Félicitations!",
          "Votre abonnement a été mis à jour",
          "success"
        );
        return dispatch({
          type: GET_ABONNEMENTS,
          payload: result.data.data,
        });
      })
      .catch(function (error) {
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        swal.fire(
          "Oups Erreur!",
          "Nous sommes désolés, une erreur s'est produite. Nos équipes ont été informées de l'incident.",
          "error"
        );
        console.log("resultat", error);
      });
  };
}

export function AnnulerAbonnement(values) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    var abonnement = firebase.functions().httpsCallable("AnnulerAbonnement");
    console.log("values", values);
    abonnement(values)
      .then((result) => {
        console.log("abonnements:", result.data);
        //var abonnement = { statut: result.data.status,subscription:result.data};
        swal.fire("Annulé!", "Votre abonnement a été annulé", "warning");
        return dispatch({
          type: GET_ABONNEMENTS,
          payload: result.data.data,
        });
      })
      .catch(function (error) {
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        swal.fire(
          "Oups Erreur!",
          "Nous sommes désolés, une erreur s'est produite. Nos équipes ont été informées de l'incident.",
          "error"
        );
        console.log("resultat", error);
      });
  };
}
export function ObtenirFactures(values) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    var factures = firebase.functions().httpsCallable("ObtenirFactures");
    console.log("values", values);
    factures(values)
      .then((result) => {
        console.log("abonnements:", result.data);
        //var abonnement = { statut: result.data.status,subscription:result.data};
        return dispatch({
          type: GET_FACTURES,
          payload: result.data.data,
        });
        // firebase.updateProfile({ ...values, abonnement, role: "membre" });

        return result;
        // history.push({
        //    pathname: "/",
        //  });
      })
      .catch(function (error) {
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        swal.fire(
          "Oups Erreur!",
          "Nous sommes désolés, une erreur s'est produite. Nos équipes ont été informées de l'incident.",
          "error"
        );
        console.log("resultat", error);
      });
  };
}
