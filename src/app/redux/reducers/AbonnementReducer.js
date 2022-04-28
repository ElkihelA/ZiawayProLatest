
import {
  GET_METH_PAIMENT,
  GET_ABONNEMENTS,
  GET_FACTURES,
 UPDATE_ABONNEMENTS_SUCCESS,
 UPDATE_ABONNEMENTS_ERROR,
 LOADING_ABONNEMENTS,
} from "../actions/AbonnementActions";

const initialState = [{updateAbonnementSuccess:false,updateAbonnementError:false}];

const NotificationReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_METH_PAIMENT: {
      return  {...state,metho_paiements:action.payload};
    }
    case GET_ABONNEMENTS: {
      return  {...state,subscriptions:action.payload,updateAbonnementError:false};
    }
    case LOADING_ABONNEMENTS: {
      return  {...state,loadingAbonnements:action.payload};
    }
    case GET_FACTURES: {
      return  {...state,factures:action.payload};
    }
    case UPDATE_ABONNEMENTS_SUCCESS: {
      return  {...state,updateAbonnementSuccess:true};
    }
    case UPDATE_ABONNEMENTS_ERROR: {
      return  {...state,updateAbonnementError:true};
    }
    default: {
      return {...state};
    }
  }
};

export default NotificationReducer;
