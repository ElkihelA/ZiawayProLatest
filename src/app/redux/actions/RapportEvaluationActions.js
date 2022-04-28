import swal from "sweetalert2";
import axios from "axios";
import { stringify } from "algolia-places-react";
import { useTranslation } from "react-i18next";

export const HISTO_ERROR = "HISTO_ERROR";
export const HISTO_SUCCESS = "HISTO_SUCCESS";
export const HISTO_LOADING = "HISTO_LOADING";
export const COMPARABLES_ERROR = "COMPARABLES_ERROR";
export const COMPARABLES_SUCCESS = "COMPARABLES_SUCCESS";
export const COMPARABLES_LOADING = "COMPARABLES_LOADING";
export const EVALUATION_ERROR = "EVALUATION_ERROR";
export const EVALUATION_SUCCESS = "EVALUATION_SUCCESS";
export const EVALUATION_LOADING = "EVALUATION_LOADING";
export const EVALUATION_INIT = "EVALUATION_INIT";

const collection = "RapportsEvaluations";

export function ObtenirHistorique(adresseQuery) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    var searchHistorique = firebase.functions().httpsCallable("searchHistory");
    searchHistorique({ adresseQuery: adresseQuery })
      .then((result) => {
        console.log("result search", result.data);
        return dispatch({
          type: HISTO_SUCCESS,
          payload: result.data,
        });
      })
      .catch(function (error) {
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        console.log("resultat", error);
      });
  };
}

export function MajAvis(avis) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    // Set the "capital" field of the city 'DC'
    console.log("avis", avis);
    firestore
      .collection(collection)
      .doc(avis.idRapport)
      .update({
        avisClient: avis.avisEstimation,
      })
      .then((res) => {
        swal.fire(avis.t("swal.16"), avis.t("swal.17"), "Success");
        console.log("resultat", res);
        return res;
      })
      .catch(function (error) {
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        console.log("resultat", error);
      });
  };
}
export function ObtenirComparables(params) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    var searchHistorique = firebase
      .functions()
      .httpsCallable("ObtenirComparables");
    searchHistorique({ rapport: params })
      .then((result) => {
        console.log("result search", result.data);
        return dispatch({
          type: COMPARABLES_SUCCESS,
          payload: result.data,
        });
      })
      .catch(function (error) {
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        console.log("resultat error", message);
      });
  };
}

export function InitEvaluation(params) {
  return (dispatch, getState, getFirebase) => {
    return dispatch({
      type: EVALUATION_INIT,
    });
  };
}
export function ObtenirEvaluation(params) {
  return (dispatch, getState, getFirebase) => {
    console.log("appel d'obtenir evaluation :", params);
    const firebase = getFirebase();
    dispatch({
      type: EVALUATION_LOADING,
      payload: true,
    });
    console.log("formdata for testing:", params);
    var EvaluerBien = firebase.functions().httpsCallable("EvaluerBien");
    EvaluerBien({ infobien: params })
      .then((result) => {
        console.log("resullt evaluation", result);

        const indicePercent =
          result.data.ficheEstimation.comparables.length > 0
            ? parseInt(result.data.ficheEstimation.comparables[0].score * 100)
            : 0;

        const date = new Date(result.data.ficheEstimation.dateCreation);
        const [month, day, year] = [
          ("0" + date.getMonth()).slice(-2),
          ("0" + (date.getMonth() + 1)).slice(-2),
          date.getFullYear(),
        ];
        const [hour, minutes, seconds] = [
          ("0" + date.getHours()).slice(-2),
          ("0" + date.getMinutes()).slice(-2),
          ("0" + date.getSeconds()).slice(-2),
        ];

        if (params.sendEmail === false) {
          const email_json = {
            id: result?.data?.id,
            email: result?.data?.ficheEstimation?.userEmail,
            courtiers: result?.data?.ficheEstimation?.courtiers,
            VMZ: result.data.ficheEstimation.ziaEstimation.prediction,
            VMZ_maxi: result.data.ficheEstimation.ziaEstimation.predictionEnd,
            VMZ_mini: result.data.ficheEstimation.ziaEstimation.predictionStart,
            Adresse: result.data.ficheEstimation.location.value,
          };

          localStorage.setItem("emailData", JSON.stringify(email_json));
        }

        dispatch({
          type: EVALUATION_LOADING,
          payload: false,
        });
        localStorage.removeItem("formData");
        return dispatch({
          type: EVALUATION_SUCCESS,
          payload: result,
        });
      })

      .catch(function (error) {
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        swal.fire(
          "Oups erreur!",
          "Nous sommes désolés, une erreur s'est produite. Nos équipes ont été informées de l'incident.",
          "error"
        );
        dispatch({
          type: EVALUATION_LOADING,
          payload: false,
        });
        console.log("resultat error", message);
        console.log("resultat error", details);
        console.log("resultant", error);
      });
  };
}
