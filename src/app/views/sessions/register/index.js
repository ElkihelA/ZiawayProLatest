import React, { useEffect } from "react";
import PropTypes from "prop-types";
import StepWizard from "react-step-wizard";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import Signup from "./form";
import PlansList from "./plans"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./payment";
import { Loading } from "@gull";
import { actions } from "app/redux/actions/SubscriptionActions";
const stripePromise = loadStripe(process.env.REACT_APP_API_STRIPE_PUBLIC_KEY);

const Register = ({t, subscription = {}, dispatch}) => {
  useEffect(() => {
    dispatch({
      type: actions.SET_STATE,
      payload: {
        loading: false
      }
    })
  }, [])

    return (
        <div
        className="auth-layout-wrap"
        style={{
          backgroundImage: "url(/assets/images/photo-wide-3.jpg)",
        }}
      >
        {subscription.loading && <Loading />}
        <div className="auth-content ">
          <div className=" d-flex flex-column text-align-center  justify-content-center">
            <h1 
              style={{ textAlign: "center", color: "white" }}
              className="font-weight-bold text-align-center">
              {t("Sign_up.18")}
            </h1>
            <h2
              className="font-weight-bold text-align-center"
              style={{ textAlign: "center", color: "white" }}
            >
              {t("Sign_up.19")}
            </h2>
            <p
              className="font-weight-bold text-align-center"
              style={{ textAlign: "center", color: "white", fontSize: "15px" }}
            >
              {t("Sign_up.20")}
            </p>
          </div>

          <div className="card o-hidden">
            <div className="row">
              <div className="col-md-12">
                <StepWizard
                  initialStep={subscription.step || 1}
                  instance={(e) => console.log(e)}
                >
                    <Signup/>
                    <PlansList />
                    <Elements stripe={stripePromise}>
                      <Payment />
                    </Elements>
                </StepWizard>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
const mapStateToProps = (state) => ({
  firebaseSignUpEmailPassword: PropTypes.func.isRequired,
  signUpUsingGoogle: PropTypes.func.isRequired,
  signUpUsingFacebook: PropTypes.func.isRequired,
  PaiementIntentSecret: PropTypes.func.isRequired,
  user: state.user,
  login: state.login,
  profile: state.firebase.profile,
  customerId: state.firebase.profile.customerId,
  updateProfile: PropTypes.func.isRequired,
  subscription: state.subscription
});

export default connect(mapStateToProps)(withTranslation()(Register))
