import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  RESET_PASSWORD,
  PAIEMENT_INTENT,
  UPDATE_PAYMENT,
  PAIEMENT_ERROR,
} from "../actions/LoginActions";

const initialState = {
  success: false,
  loading: false,
  updateProfile:false,
  loginError:false,
  paimentError:false,
  secret:"",
  error: {
    username: null,
    password: null
  }
};

const LoginReducer = function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        loginError:false,
      };
    }
    case UPDATE_PAYMENT: {
      return {
        ...state,
        updateProfile: true,
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        success: true,
        loading: false
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        success: false,
        loading: false,
        loginError:true,
        error: action.data
      };
    }
    case PAIEMENT_INTENT: {
      return {
      
        secret: action.data
      };
    }
    case PAIEMENT_ERROR: {
      return {
      
        paiementError: action.data
      };
    }
    default: {
      return state;
    }
  }
};

export default LoginReducer;
