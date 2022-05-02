import React, { useEffect } from "react";
import PropTypes from "prop-types";
import StepWizard from "react-step-wizard";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import Sigin from "./form";
import PlansList from "../register/plans"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "../register/payment";
import { setSubscriptionData } from "app/redux/actions/SubscriptionActions";
const stripePromise = loadStripe(process.env.REACT_APP_API_STRIPE_PUBLIC_KEY);

const Login = ({t, subscription, dispatch}) => {

    useEffect(() => {
        return () => {
            dispatch(setSubscriptionData({account: {}, step: 1}))
        }
    }, [])

    return (
        <div
        className="auth-layout-wrap"
        style={{
          backgroundImage: "url(/assets/images/photo-wide-3.jpg)",
        }}
      >
        <div className="auth-content ">
          <div className="card o-hidden">
            <div className="row">
              <div className="col-md-12">
                <StepWizard initialStep={1} >
                    <Sigin />
                    <PlansList />
                    <StripeElements />
                </StepWizard>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

const StripeElements = ({goToStep}) => (
    <Elements stripe={stripePromise}>
      <Payment goToStep={goToStep} />
    </Elements>
)
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

export default connect(mapStateToProps)(withTranslation()(Login))
