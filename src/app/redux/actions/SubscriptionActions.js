import {cloudFunctions} from "../../services/firebase/firebase"
import { setUserData, setSecretKey } from "./UserActions";
import history from "@history.js";
import firebase, { firestore } from "firebase";
import { ObtenirEvaluation } from "./RapportEvaluationActions";
import { ToastContainer, toast } from "react-toastify";

export const actions = {
    SET_STATE: "register/SET_STATE",
}
export function setSubscriptionData(data) {
    return (dispatch) => {
        dispatch({
            type: actions.SET_STATE,
            payload: data
        })
    }
}
export function createNewAccount(values) {
  return (dispatch) => {
    dispatch({
        type: actions.SET_STATE,
        payload: {isSubmitting: true}
    })
    const httpsCallable = cloudFunctions.httpsCallable("createNewAccount");
    httpsCallable({...values}).then(res => {
      if(res.data && res.data.error) {
        dispatch({
            type: actions.SET_STATE,
            payload: {isSubmitting: false}
        })
        toast(res.data.message)
      } else {
          dispatch({
              type: actions.SET_STATE,
              payload: {current: res.data, isSubmitting: false, step: 2}
          })
      }
      return res
    }).catch(err => {
        toast.error(err.message);
    })
  }
}

export function getAllPlans() {
  return (dispatch) => {
    const httpsCallable = cloudFunctions.httpsCallable("getAllPlans");
    httpsCallable().then(res => {
      if(res.data && res.data.error) {
        toast.error(res.data.message);
      } else {
        dispatch({
          type: actions.SET_STATE,
          payload: {plans: res.data}
        })
      }
    }).catch(err => {
      toast.error(err.message);
    })
  }
}

export function createSubscription(data, goToStep) {
  return (dispatch) => {
    dispatch({
      type: actions.SET_STATE,
      payload: {loading: true}
    })
    const httpsCallable = cloudFunctions.httpsCallable("createSubscription");
    httpsCallable(data).then(res => {
      if(res.data && res.data.error) {
        toast.error(res.data.message);
        dispatch({
          type: actions.SET_STATE,
          payload: {loading: false}
        })
      } else {
        toast.success("Welcome to the board");
        firebase.auth().signInWithCustomToken(res.data.token).then(result => {
          firebase.firestore()
            .collection("users")
            .doc(result.user.uid)
            .get({})
            .then((res) => {
              const role = res.data().role;
              dispatch(
                setUserData({
                  userId: result.uid,
                  role: role,
                  displayName: result.user.displayName,
                  email: result.user.email,
                  ...result.user,
                })
              );
              history.push({
                pathname: "/dashboard/v0",
              });
            })
        })
        dispatch({
          type: actions.SET_STATE,
          payload: {loading: false}
        })
      }
    }).catch(err => {
      toast.error(err.message);
    })
  }
}