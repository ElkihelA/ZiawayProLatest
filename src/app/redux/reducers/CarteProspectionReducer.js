import {
    ADD_FILTER,
    GET_EVALUATION,
    EVALUATION_LOADING,
    GET_EVALUATION_SUCCESS,
    GET_INFO_COURTIER,
    GET_RECOMMENDATION_COURTIERS,
    INFO_COURTIER_LOADING,
    INFO_REC_COURTIERS_LOADING,
    INFO_REC_COURTIERS_LOADED,
    COURTIERS_INIT
  } from "../actions/CarteProspectionActions";
import CarteProspection from "app/views/carteProspection/CarteProspection";
  
  const initialState = {
    error: "",
    infoCourtierLoading: false,
    infoRecCourtierLoading: false
  };
  
  const CarteProspectionReducer = function(state = initialState, action) {
    switch (action.type) {
    
      case   GET_EVALUATION_SUCCESS: {
        return {
          ...state,
          evaluationSuccess :true,
          loadingEvaluation: false
        };
      }
      case  INFO_COURTIER_LOADING: {
        return {
          ...state,
          infoCourtierLoading: true
        };
      }
      case INFO_REC_COURTIERS_LOADING : {

        return {
          ...state,
          recommendationcourtiers :[],
          infoRecCourtierLoading: true
        };
      }
      case COURTIERS_INIT : {

        return {
          ...state,
          recommendationcourtiers :[],
        };
      }
      case INFO_REC_COURTIERS_LOADED: {

        return {
          ...state,
          infoRecCourtierLoading: false
        };
      }
      case GET_INFO_COURTIER: {
        return {
          ...state,
          infoCourtier: action.payload,
          infoCourtierLoading: false
        };
      }
      case GET_RECOMMENDATION_COURTIERS: {
        return {
          ...state,
          recommendationcourtiers: action.payload
        };
      }
     
      default: {
        return state;
      }
    }
  };
  
  export default CarteProspectionReducer;
  