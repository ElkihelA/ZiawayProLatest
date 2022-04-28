import {
  HISTO_SUCCESS,
  HISTO_ERROR,
  HISTO_LOADING,
  COMPARABLES_ERROR,
  COMPARABLES_SUCCESS,
  COMPARABLES_LOADING,
  EVALUATION_LOADING,
  EVALUATION_SUCCESS,
  EVALUATION_INIT,
} from "../actions/RapportEvaluationActions";

const initialState = {
  histoSuccess: false,
  histoLoading: false,
  historique: {},
  comparables: {},
  result: {},
  evaluationSuccess: false,
  evaluationLoading: false,
};

const RapportEvaluationReducer = function (state = initialState, action) {
  switch (action.type) {
    case HISTO_LOADING: {
      return {
        ...state,
        histoLoading: true,
      };
    }
    case HISTO_SUCCESS: {
      return {
        ...state,
        histoSuccess: true,
        histoLoading: false,
        historique: action.payload,
      };
    }
    case EVALUATION_INIT: {
      return {
        ...state,
        evaluationSuccess: false,
      };
    }
    case EVALUATION_SUCCESS: {
      return {
        ...state,
        evaluationSuccess: true,
        comparablesLoading: false,
        evaluationLoading: false,
        comparables: action.payload.data.id,
        result: action.payload,
      };
    }
    case EVALUATION_LOADING: {
      return {
        ...state,
        evaluationLoading: action.payload,
      };
    }
    case HISTO_ERROR: {
      return {
        ...state,
        success: false,
        loading: false,
        error: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default RapportEvaluationReducer;
