export const ADD_FILTER = "ADD_FILTER";
export const GET_EVALUATION = "DELETE_PRODUCT_FROM_CART"; 
export const    GET_EVALUATION_SUCCESS ="GET_EVALUATION_SUCCESS"
export const GET_INFO_COURTIER = "GET_INFO_COURTIER"; 
export const GET_RECOMMENDATION_COURTIERS = "GET_RECOMMENDATION_COURTIERS"; 
export const INFO_COURTIER_LOADING = "INFO_COURTIER_LOADING"; 
export const INFO_REC_COURTIERS_LOADING = "INFO_REC_COURTIERS_LOADING"; 
export const INFO_REC_COURTIERS_LOADED = "INFO_REC_COURTIERS_LOADED"; 
export const COURTIERS_INIT = "COURTIERS_INIT"; 

const collection = 'demandeEvaluationProd';



export function ObtenirEvaluations() {

    return (dispatch, getState, getFirebase) => {


        const firebase = getFirebase();
        const firestore = firebase.firestore();
        firestore.get({ collection });

        return dispatch({
            type: GET_EVALUATION_SUCCESS
          });

    };

}
export function InitRecommendations(params) {
  return (dispatch, getState, getFirebase) => {
   
    return dispatch({
      type : COURTIERS_INIT,
    });
    
  };
}

export function ObtenirInfoCourtier(values) {
    return (dispatch, getState, getFirebase) => {
      const firebase = getFirebase();
      dispatch({
        type: INFO_COURTIER_LOADING,
      });
      var infoCourtier = firebase.functions().httpsCallable("ObtenirInfoCourtier");
      console.log("infoCourtier", values);
      infoCourtier(values)
        .then((result) => {
          console.log("info courtier:", result);
          console.log("data", result.data);
          //var abonnement = { statut: result.data.status,subscription:result.data};
          return dispatch({
            type: GET_INFO_COURTIER,
            payload:result.data
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

  export function ObtenirRecomendationCourtiers(values) {
    return (dispatch, getState, getFirebase) => {
      const firebase = getFirebase();
      dispatch({
        type: INFO_REC_COURTIERS_LOADING,
        payload:true,
      });
      var infoCourtier = firebase.functions().httpsCallable("ObtenirCourtiersRecommandes");
      console.log("recommendations", values);
      infoCourtier(values)
        .then((result) => {
          console.log("recommendations:", result);
          console.log("data", result.data);
          //var abonnement = { statut: result.data.status,subscription:result.data};
          dispatch({
            type: GET_RECOMMENDATION_COURTIERS,
            payload:result.data
        });
         
          return dispatch({
            type: INFO_REC_COURTIERS_LOADED,
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