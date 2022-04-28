import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import BlogReducer from "./BlogReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import RapportEvaluationReducer from "./RapportEvaluationReducer";
import AbonnementReducer from "./AbonnementReducer";
import CarteProspectionReducer from "./CarteProspectionReducer";
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'
const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  notification: NotificationReducer,
  ecommerce: EcommerceReducer,
  rapport:RapportEvaluationReducer,
  abonnement:AbonnementReducer,
  courtiers:CarteProspectionReducer,
  blog:BlogReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default RootReducer;
