import jwtAuthService from "../../services/jwtAuthService";
import FirebaseAuthService from "../../services/firebase/firebaseAuthService";
import {cloudFunctions} from "../../services/firebase/firebase"
import { setUserData, setSecretKey } from "./UserActions";
import history from "@history.js";
import firebase, { firestore } from "firebase";
import { ObtenirEvaluation } from "./RapportEvaluationActions";
import { ToastContainer, toast } from "react-toastify";
import {
  GET_METH_PAIMENT,
  GET_ABONNEMENTS,
  GET_FACTURES,
} from "../actions/AbonnementActions";
import { truncate } from "lodash";
import swal from "sweetalert2";
import { actions, setSubscriptionData } from "./SubscriptionActions";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const PAIEMENT_INTENT = "PAIEMENT_INTENT";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";
export const PAIEMENT_ERROR = "PAIEMENT_ERROR";

export function loginWithEmailAndPassword({ email, password }) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    jwtAuthService
      .loginWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(setUserData(user));

        history.push({
          pathname: "/",
        });

        return dispatch({
          type: LOGIN_SUCCESS,
        });
      })
      .catch((error) => {
        return dispatch({
          type: LOGIN_ERROR,
          payload: error,
        });
      });
  };
}

export function resetPassword({ email }) {
  return (dispatch) => {
    const result = FirebaseAuthService.sendResetEmail(email);
    console.log("result login", result);
  };
}

export function facebookLogin(t, resp, nextStep, isRegister = false) {
  return (dispatch) => {
    // const firestore = getFirestore();
    dispatch({
      type: actions.SET_STATE,
      payload: { loading: true }
    })
    const createOrLoginWithFacebook = cloudFunctions.httpsCallable("createOrLoginWithFacebook");
    createOrLoginWithFacebook(resp).then(res => {
      if (res.data.token && !isRegister) {
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
          payload: { loading: false }
        })
      } else if (res.data.error) {
        dispatch({
          type: actions.SET_STATE,
          payload: { loading: false }
        })
        swal.fire(t("swal.1"), res.data.error.message, "error");
      } else if (nextStep) {
        dispatch({
          type: actions.SET_STATE,
          payload: { loading: false }
        })
        // redirect to next step
        dispatch(setSubscriptionData({ current: res.data.user }))
        nextStep()
      }

    }).catch(e => {
      console.log(e)
      dispatch({
        type: actions.SET_STATE,
        payload: { loading: false }
      })
      swal.fire(t("swal.1"), t("swal.10"), "error");
    })
  };
}

export function googleLogin(t, resp, nextStep, isRegister = false) {
  return (dispatch, getState) => {
    // const firestore = getFirestore();
    dispatch({
      type: actions.SET_STATE,
      payload: { loading: true }
    })
    const createOrLoginWithGoogle = cloudFunctions.httpsCallable("createOrLoginWithGoogle");
    createOrLoginWithGoogle({
      profileObj: resp.profileObj,
      tokenId: resp.tokenId,
      googleId: resp.googleId
    }).then(res => {
      if (res.data.token && !isRegister) {
        firebase.auth().signInWithCustomToken(res.data.token).then(result => {
          firebase.firestore()
            .collection("users")
            .doc(result.user.uid)
            .get()
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
      } else if (res.data.error) {
        dispatch({
          type: actions.SET_STATE,
          payload: { loading: false }
        })
        swal.fire(t("swal.1"), t("swal.10"), "error");
      } else if (nextStep) {
        dispatch({
          type: actions.SET_STATE,
          payload: { loading: false }
        })
        // redirect to next step
        dispatch(setSubscriptionData({ current: res.data.user }))
        nextStep()
      }

    }).catch(e => {
      console.log(e)
      dispatch({
        type: actions.SET_STATE,
        payload: { loading: false }
      })
      swal.fire(t("swal.1"), t("swal.10"), "error");
    })
  };
}

export function firebaseloginVMZform(value, t) {
  return (dispatch, getState, getFirebase) => {
    FirebaseAuthService.signInWithEmailAndPassword(value.email, value.password)
      .then((user) => {
        if (user && user.user.uid) {
          const state = getState();

          const userid = user.user.uid;
          const firebase = getFirebase();
          const firestore = firebase.firestore();
          firestore
            .collection("users")
            .doc(userid)
            .get({})
            .then((res) => {
              const role = res.data().role;
              dispatch(
                setUserData({
                  userId: user.uid,
                  role: role,
                  displayName: user.displayName,
                  email: user.email,
                  photoURL: "/assets/images/face-7.jpg",
                  age: 25,
                  token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
                  ...user,
                })
              );
              toast.success(`Welcome ! You have been Logged In`);
              // if (user.emailVerified === false) {
              //   history.push({
              //     pathname: "/emailnotVerfied",
              //   });
              // } else {
              //   history.push({
              //     pathname: "/evaluation-bien",
              //   });
              // }

              history.push({
                pathname: "/evaluation-bien",
              });

              return dispatch({
                type: LOGIN_SUCCESS,
              });
            });
        } else {
          swal.fire(t("swal.1"), t("swal.9"), "error");
          return dispatch({
            type: LOGIN_ERROR,
            payload: "Login Failed",
          });
        }
      })
      .catch((error) => {
        console.log("erreur dans le catch de logingactions");

        swal.fire(t("swal.1"), t("swal.10") + error.message, "error");

        return dispatch({
          type: LOGIN_ERROR,
          payload: error,
        });
      });
  };
}

export function firebaseLoginEmailPassword(value, t, nextStep) {
  return (dispatch, getState, getFirebase) => {
    FirebaseAuthService.signInWithEmailAndPassword(value.email, value.password)
      .then((user) => {
        if (user && user.user.uid) {
          const state = getState();

          const userid = user.user.uid;
          const firebase = getFirebase();
          const firestore = firebase.firestore();
          firestore
            .collection("users")
            .doc(userid)
            .get({})
            .then((res) => {
              const role = res.data().role;
              dispatch(
                setUserData({
                  userId: user.uid,
                  role: role,
                  displayName: user.displayName,
                  email: user.email,
                  photoURL: "/assets/images/face-7.jpg",
                  age: 25,
                  token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
                  ...user,
                })
              );
              history.push({
                pathname: "/dashboard/v0",
              });

              return dispatch({
                type: LOGIN_SUCCESS,
              });
            });
        } else {
          console.log("i am running", user);
          return dispatch({
            type: LOGIN_ERROR,
            payload: "Login Failed",
          });
        }
      })
      .catch((error) => {
        console.log("erreur dans le catch de logingactions");
        if(error.code === "auth/user-disabled") {
            swal.fire({
              title: 'Your account has been suspended, please reactive your subscription by clicking on Continue',
              showCancelButton: true,
              confirmButtonText: 'Continue',
              showLoaderOnConfirm: true,
              preConfirm: () => {
                const httpsCallable = cloudFunctions.httpsCallable("fixCustomerSubscription");
                return httpsCallable({email: value.email}).then(res => {
                  if(res.data.error) {
                    swal.fire(t("swal.1"), t("swal.9"), "error");
                  } else {
                    dispatch(setSubscriptionData({current: res.data.current}))
                    if(nextStep) {
                      nextStep()
                    }
                  }
                }).catch(err => {
                  swal.showValidationMessage(
                    `Request failed: ${err.message}`
                  )
                })
              },
              allowOutsideClick: () => !swal.isLoading()
            }).then(res => {
              console.log(res);
            })
          } else {
            swal.fire(t("swal.1"), t("swal.9"), "error");
          }
          console.log("error", error.code, error.message);
        return dispatch({
          type: LOGIN_ERROR,
          payload: error,
        });
      });
  };
}

export const signUpUsingGoogle = (t) => {
  return (dispatch, getState, getFirebase, getFirestore) => {
    const firebase = getFirebase();
    // const firestore = getFirestore();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        if (user) {
          console.log("this is user", user);
          dispatch(
            setUserData({
              userId: user.user.uid,
              //role: "guest",
              displayName: user.displayName,
              email: user.email,
              photoURL: "/assets/images/face-7.jpg",
              age: 25,
              token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
              ...user,
            })
          );
          const state = getState();

          const userid = user.user.uid;
          // const firebase = getFirebase();
          const firestore = firebase.firestore();

          firestore
            .collection("users")
            .doc(userid)
            .set({
              userId: userid,
              role: "membre",
              displayName: user.user.displayName,
              email: user.user.email,
              phoneNumber: user.user.phoneNumber,
            })
            .then((res) => {
              // if (user.user.emailVerified === false) {
              //   user.user.sendEmailVerification({
              //     url: "https://ziaway.ca/dashboard/v0",
              //   });

              // }
              emailMessage(t);
              /* history.push({
               pathname: "/dashboard/v0"
             });
       */
              history.push({
                pathname: "/evaluation-bien",
              });
              return dispatch({
                type: LOGIN_SUCCESS,
              });
            });
        } else {
          return dispatch({
            type: LOGIN_ERROR,
            payload: "Login Failed",
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        // Getting the Error details.
        errorAlert(error, t);
        return dispatch({
          type: LOGIN_ERROR,
          data: error,
        });
      });
  };
};

export const signUpUsingFacebook = (t) => {
  return (dispatch, getState, getFirebase, getFirestore) => {
    const firebase = getFirebase();
    // const firestore = getFirestore();
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        if (user) {
          console.log("this is user", user);
          dispatch(
            setUserData({
              userId: user.user.uid,
              //role: "guest",
              displayName: user.displayName,
              email: user.email,
              photoURL: "/assets/images/face-7.jpg",
              age: 25,
              token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
              ...user,
            })
          );
          const state = getState();

          const userid = user.user.uid;
          // const firebase = getFirebase();
          const firestore = firebase.firestore();

          firestore
            .collection("users")
            .doc(userid)
            .set({
              userId: userid,
              role: "membre",
              displayName: user.user.displayName,
              email: user.user.email,
            })
            .then((res) => {
              // if (user.user.emailVerified === false) {
              //   user.user.sendEmailVerification({
              //     url: "https://ziaway.ca/dashboard/v0",
              //   });

              // }
              emailMessage(t);
              /* history.push({
               pathname: "/dashboard/v0"
             });
       */
              history.push({
                pathname: "/evaluation-bien",
              });
              return dispatch({
                type: LOGIN_SUCCESS,
              });
            });
        } else {
          return dispatch({
            type: LOGIN_ERROR,
            payload: "Login Failed",
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        // Getting the Error details.
        errorAlert(error, t);
        return dispatch({
          type: LOGIN_ERROR,
          data: error,
        });
      });
  };
};

export function firebaseSignUpforVMZ(formAnswers) {
  return (dispatch, getState, getFirebase) => {
    FirebaseAuthService.signUpWithEmailAndPassword(
      formAnswers.email,
      formAnswers.password
    )
      .then((user) => {
        if (user) {
          const options = { year: "numeric", month: "numeric", day: "numeric" };
          let infosBien = {
            dateCreation: new Date().toLocaleDateString("fr-ca", options),
            ...formAnswers,
            userData: {
              userId: user.user.uid,
              displayName: user.displayName,
              email: user.email,
              photoURL: "/assets/images/face-7.jpg",
              age: 25,
              token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
            },
            sendEmail: false,
          };
          console.log("firebaseSignUpforVMZ", infosBien);

          dispatch(ObtenirEvaluation(infosBien));

          dispatch(
            setUserData({
              userId: user.user.uid,
              //role: "guest",
              displayName: user.displayName,
              email: user.email,
              photoURL: "/assets/images/face-7.jpg",
              age: 25,
              token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
              ...user,
            })
          );
          const state = getState();

          const userid = user.user.uid;
          const firebase = getFirebase();
          const firestore = firebase.firestore();
          console.log("user", firebase.auth());

          firestore
            .collection("users")
            .doc(userid)
            .set({
              userId: userid,
              role: "membre",
              displayName: formAnswers?.username,
              // phoneNumber: formAnswers?.phoneno,
              email: user.user.email,
            })
            .then((res) => {
              console.log("email verification", user);
              // user.user.sendEmailVerification({
              //   url: "https://ziaway.ca/dashboard/v0",
              // });
              // emailMessage();
              /* history.push({
               pathname: "/dashboard/v0"
             });
       */
              // history.push({
              //   pathname: "/evaluation-bien",
              // });
              return dispatch({
                type: LOGIN_SUCCESS,
              });
            });
        } else {
          return dispatch({
            type: LOGIN_ERROR,
            payload: "Login Failed",
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        // Getting the Error details.
        errorAlert(error);
        history.push({
          pathname: "/session/signin",
        });

        // history.push({pathname: "/"});
        return dispatch({
          type: LOGIN_ERROR,
          data: error,
        });
      });
  };
}

export function firebaseSignUpforModal(values, t) {
  return (dispatch, getState, getFirebase) => {
    FirebaseAuthService.signUpWithEmailAndPassword(
      values.email,
      values.password
    )
      .then((user) => {
        if (user) {
          dispatch(
            setUserData({
              userId: user.user.uid,
              //role: "guest",
              displayName: user.displayName,
              email: user.email,
              photoURL: "/assets/images/face-7.jpg",
              age: 25,
              token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
              ...user,
            })
          );

          const state = getState();
          console.log("state", state);

          const userid = user.user.uid;
          const firebase = getFirebase();
          const firestore = firebase.firestore();

          firestore
            .collection("users")
            .doc(userid)
            .set({
              userId: userid,
              role: "membre",
              displayName: values.username,
              phoneNumber: values.phoneno,
              email: user.user.email,
            })
            .then((res) => {
              console.log("email verification", user);
              // user.user.sendEmailVerification({
              //   url: "https://ziaway.ca/dashboard/v0",
              // });
              // emailMessage();
              /* history.push({
               pathname: "/dashboard/v0"
             });
       */
              emailMessage(t);
              toast.success(`Welcome ! You have been Logged In`);
              history.push({
                pathname: "/evaluation-bien",
              });
              return dispatch({
                type: LOGIN_SUCCESS,
              });
            });
        } else {
          return dispatch({
            type: LOGIN_ERROR,
            payload: "Login Failed",
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        // Getting the Error details.
        errorAlert(error, t);
        return dispatch({
          type: LOGIN_ERROR,
          data: error,
        });
      });
  };
}

export function firebaseSignUpEmailPassword(values, t) {
  return (dispatch, getState, getFirebase) => {
    FirebaseAuthService.signUpWithEmailAndPassword(
      values.email,
      values.password
    )
      .then((user) => {
        if (user) {
          dispatch(
            setUserData({
              userId: user.user.uid,
              //role: "guest",
              displayName: user.displayName,
              email: user.email,
              photoURL: "/assets/images/face-7.jpg",
              age: 25,
              token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
              ...user,
            })
          );

          const state = getState();
          console.log("state", state);

          const userid = user.user.uid;
          const firebase = getFirebase();
          const firestore = firebase.firestore();

          const data = {
            emailText:
              "I confirm that I have received your request and I thank you for your confidence. ​\n I will contact you very soon to have more information on your project before agreeing on an appointment as soon as possible. ​\n ​\n Feel free to contact me directly, you will find my contact information below.​\n ​\n I look forward to our next meeting and wish you a very nice day.​\n xxxxxx",
            smsText:
              " I confirm that I have received your request and I thank you for your confidence. ​\n I will contact you very soon ​\n xxxxxx",
          };

          firestore
            .collection("users")
            .doc(userid)
            .set({
              userId: userid,
              role: "membre",
              displayName: values.username,
              phoneNumber: values.phoneno,
              email: user.user.email,
              licenseId: values.licenseId,
              messages: data,
            })
            .then((res) => {
              console.log("email verification", user);
              // user.user.sendEmailVerification({
              //   url: "https://ziaway.ca/dashboard/v0",
              // });
              emailMessage(t);
              history.push({
                pathname: "/dashboard/v0",
              });

              // history.push({
              //   pathname: "/evaluation-bien",
              // });
              return dispatch({
                type: LOGIN_SUCCESS,
              });
            });
        } else {
          return dispatch({
            type: LOGIN_ERROR,
            payload: "Login Failed",
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        // Getting the Error details.
        errorAlert(error, t);
        return dispatch({
          type: LOGIN_ERROR,
          data: error,
        });
      });
  };
}

function errorAlert(error, t) {
  switch (error.code) {
    case "auth/email-already-in-use":
      swal.fire(t("swal.1"), t("swal.11"), "error");
      break;
    default:
      swal.fire(t("swal.1"), t("swal.12") + error.message, "error");
  }
}

function emailMessage(t) {
  swal.fire(t("swal.15"), t("swal.13"), "success");
}

export function firebaseAnonymousSignIn() {
  return (dispatch) => {
    FirebaseAuthService.signInAnonymously()
      .then((user) => {
        if (user) {
          console.log("anon user sign in success", user);
          dispatch(
            setUserData({
              userId: user.uid,
              role: "guest",
              // displayName: user.displayName,
              // email: user.email,
              // photoURL: "/assets/images/face-7.jpg",
              // age: 25,
              // token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
              ...user,
            })
          );
          return dispatch({
            type: LOGIN_SUCCESS,
          });
        } else {
          return dispatch({
            type: LOGIN_ERROR,
            payload: "Login Failed",
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        return dispatch({
          type: LOGIN_ERROR,
          data: error,
        });
      });
  };
}

export function PaiementIntentSecret(planMembre) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    console.log("plan membre", planMembre);
    var getSecret = firebase.functions().httpsCallable("secret");

    getSecret(planMembre)
      .then((result) => {
        var customerId = result.data;
        dispatch(setSecretKey(customerId));
        dispatch({
          type: PAIEMENT_ERROR,
          payload: false,
        });
        return customerId;
      })
      .catch(function (error) {
        // Getting the Error details.
        swal.fire(
          "Oups Erreur!",
          "Nous sommes désolés, une erreur s'est produite. Nos équipes ont été informées de l'incident." +
            error.message,
          "error"
        );
        var code = error.code;
        var message = error.message;
        var details = error.details;

        dispatch({
          type: PAIEMENT_ERROR,
          payload: true,
        });
        console.log("resultat", error);
      });
  };
}

export function MiseAjourCarte(infoPaiement) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    console.log("Information paiement", infoPaiement);
    var updateCarte = firebase.functions().httpsCallable("MajMethodePaiement");

    updateCarte(infoPaiement)
      .then((result) => {
        var confirmation = result.data;
        //dispatch(setSecretKey(customerId));
        console.log("confirmation", confirmation);
        let arr = [];
        arr.push(confirmation);
        dispatch({
          type: GET_METH_PAIMENT,
          payload: arr,
        });
        dispatch({
          type: UPDATE_PAYMENT,
        });
        return arr;
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

export function inscriptionMembre(values) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    var setAbonnement = firebase.functions().httpsCallable("CreerAbonnement");
    console.log("values", values);
    setAbonnement(values)
      .then((result) => {
        console.log("abonnement", result);
        var abonnement = {
          statut: result.data.status,
          subscription: result.data,
        };

        firebase.updateProfile({ ...values, abonnement, role: "membre" });

        history.push({
          pathname: "/",
        });

        return dispatch({
          type: LOGIN_SUCCESS,
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
