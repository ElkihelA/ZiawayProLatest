import React, { Component } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import history from "@history.js";
import {
  firebaseSignUpEmailPassword,
  signUpUsingGoogle,
  signUpUsingFacebook,
  resetPassword,
  PaiementIntentSecret,
} from "app/redux/actions/LoginActions";
import { SimpleCard } from "@gull";
import StepWizard from "react-step-wizard";
import FormWizardNav from "../forms/FormWizardNav";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import FactureView from "././FactureView";
import DangerAlert from "./DangerAlert";
import { updateProfile } from "app/redux/actions/UserActions";
import { withTranslation } from "react-i18next";
import firebaseAuthService from "../../services/firebase/firebaseAuthService";
import axios from "axios";
import firebase from "../../services/firebase/firebase";
import Select from "react-select";

const InjectedCheckoutForm = (props) => (
  <ElementsConsumer>
    {({ stripe, elements, fncSubmit }) => (
      <CheckoutForm
        stripe={stripe}
        elements={elements}
        submit={fncSubmit}
        clientInfo={props.clientInfo}
      />
    )}
  </ElementsConsumer>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={`btn btn-primary ${error ? "SubmitButton--error" : ""}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Validation en cours..." : children}
  </button>
);
const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
    },
  ],
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_live_j1kzjRe8JQK4HuIIDTdUwrDy00pWwQGoC1");

class Signup extends Component {
  state = {
    email: "",
    username: "",
    phoneno: "",
    password: "",
    repassword: "",
    plan: "",
    login: "",
    showError: false,
  };

  handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    this.props.firebaseSignUpEmailPassword(values, this.props.t);

    this.setState({ ...this.state, email: values.email });
    this.setState({ ...this.state, displayName: values.username });
    this.setState({ ...this.state, phoneno: values.phoneno });
  };

  // componentDidMount = () => {
  //   const user = firebaseAuthService.checkAuthStatus((user) => {
  //     if (user) {
  //       console.log(user.uid);
  //       console.log(user.email);
  //       console.log(user.emailVerified);
  //       history.push({
  //         pathname: "/dashboard/v0",
  //       });
  //     }
  //     //  else if (user && !user.emailVerified) {
  //     //   history.push({
  //     //     pathname: "/emailnotVerfied",
  //     //   });
  //     // }
  //     // }
  //     else {
  //       history.push({
  //         pathname: "/session/signin",
  //       });
  //       console.log("not logged in");
  //     }
  //   });
  // };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.login.error !== this.props.login.error) {
      if (this.props.login.error) {
        this.setState({
          ...this.state,
          showError: true,
          error: this.props.login.error.message,
        });
      }
    }

    if (prevProps.login !== this.props.login) {
      this.setState({ ...this.state, login: this.props.login });

      // if (!this.props.profile.isEmpty) {
      //   if (this.state.plan == "gratuit") {
      //     // history.push({
      //     //  pathname: "/dashboard/v0",
      //     // });
      //   } else {
      //     this.state.SW.goToStep(4);
      //   }
      // }
    }

    if (prevProps.customerId !== this.props.customerId) {
      this.setState({ ...this.state, customerId: this.props.user.customerId });

      if (this.props.user.customerId) {
        console.log("le plan ", this.props.user.titre_plan);
        this.state.SW.goToStep(4);
      }
    }
  }

  setSubscriptionInfo = (value) => {
    this.setState(value);
    this.state.SW.nextStep();
  };
  setInstance = (SW) =>
    this.setState({
      ...this.state,
      SW,
    });
  render() {
    const { t } = this.props;
    return (
      <div
        className="auth-layout-wrap"
        style={{
          backgroundImage: "url(/assets/images/photo-wide-3.jpg)",
        }}
      >
        <div className="auth-content ">
          <div className=" d-flex flex-column text-align-center  justify-content-center">
            {/* <h2
              className="font-weight-bold text-align-center"
              style={{ textAlign: "center", color: "white", fontSize: "50px" }}
            >
              Dernière étape
            </h2> */}

            <p
              className="font-weight-bold text-align-center"
              style={{ textAlign: "center", color: "white", fontSize: "15px" }}
            >
              {t("Sign_up.17")}
            </p>
          </div>

          <div className="card o-hidden">
            <div className="row">
              <div className="col-md-12">
                <SignupForm
                  t={t}
                  googleSignUp={this.props.signUpUsingGoogle}
                  facebookSignUp={this.props.signUpUsingFacebook}
                  error={this.props.login.error}
                  showError={this.state.showError}
                  fncSubmit={this.handleSubmit}
                  hashkey={"step2"}
                ></SignupForm>
                {/* <StepWizard
                 
                  initialStep={2}
                  isHashEnabled={true}
                  instance={this.setInstance}
                >
                 
                  <FirstComponent
                    setSubscriptionInfo={this.setSubscriptionInfo}
                    hashkey={"step1"}
                  ></FirstComponent>
                  <SignupForm
                    t={t}
                    googleSignUp={this.props.signUpUsingGoogle}
                    facebookSignUp={this.props.signUpUsingFacebook}
                    error={this.props.login.error}
                    showError={this.state.showError}
                    fncSubmit={this.handleSubmit}
                    hashkey={"step2"}
                  ></SignupForm>
                  <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                    <InjectedCheckoutForm clientInfo={this.state} />
                  </Elements>
                  <FactureView
                    clientInfo={this.props.profile}
                    item={[
                      {
                        plan: {
                          planId: this.state.plan,
                          plan_unit: this.state.plan_unit,
                          titre_plan: this.state.titre_plan,
                          prix_plan: this.state.prix_plan,
                        },
                      },
                    ]}
                  />
                </StepWizard> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const SignupSchema = (t) =>
  yup.object().shape({
    username: yup.string().required("Le nom et prénom sont obligatoire"),
    licenseId: yup.string().required("License is Required"),
    phoneno: yup
      .string()
      .required("Le numéro de téléphone est requis")
      .matches(
        phoneRegExp,
        "Format non valide, XXX-XXX-XXXX est le bon format"
      ),
    email: yup
      .string()
      .email("E-mail invalide")
      .required("L'E-mail est requis"),
    password: yup
      .string()
      .min(8, "Le mot de passe doit contenir au minimum 8 caractères")
      .required("Le mot de passe est requis"),
    repassword: yup
      .string()
      .required("Répéter le mot de passe")
      .oneOf([yup.ref("password")], "Les mots de passe ne concordent pas"),

    policy: yup.boolean(true).required(t("Sign_in.20")),
    acceptTerms: yup.bool().oneOf([true], t("Sign_in.21")),
  });

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
});

export default connect(mapStateToProps, {
  firebaseSignUpEmailPassword,
  signUpUsingGoogle,
  signUpUsingFacebook,
  updateProfile,
})(withTranslation()(Signup));

class SignupForm extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    repassword: "",
    plan: "",
    licenseId: "",
    showError: false,
    error: "",
    policy: false,
    acceptTerms: false,
    brokers: "",
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("previous", prevProps);
    console.log("props", this.props);
    if (prevProps.error !== this.props.error) {
      if (this.props.error) {
        this.setState({
          ...this.state,
          showError: true,
          error: this.props.error.code,
        });
      }
    }
  }

  formatter(data) {
    const test = data.map((v) => ({
      label: v.numeroPermis,
      value: v.numeroPermis,
    }));
    return test;
  }

  componentDidMount(async) {
    // var GetAllBrokers = firebase.functions().httpsCallable("GetAllBrokers");
    // GetAllBrokers()
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // console.log(test);

    axios
      .get("https://us-central1-ziaapp-ac0eb.cloudfunctions.net/GetAllBrokers")
      .then((res) => {
        console.log("res", res);
        this.setState({
          ...this.state,
          brokers: this.formatter(res.data),
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {window.self !== window.top ? (
          <div className="row">
            <div
              className="col-md-6 text-center "
              style={{
                height: "250px",
                backgroundSize: "cover",
                backgroundImage: "url(/assets/images/photo-long-3.jpg)",
              }}
            >
              <div className="pl-3 auth-right">
                <div className="auth-logo text-center mt-4">
                  <img src="/assets/images/logo.png" alt="" />
                </div>
                <div className="flex-grow-1"></div>
                <div className="w-100 mb-4">
                  <i className="i-Mail-with-At-Sign"></i>{" "}
                  <a
                    className="btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text"
                    href="https://ziaway.ca/evaluation-bien"
                    target="_blank"
                  >
                    {" "}
                    Visitez le tableau de bord Ziaway
                  </a>
                </div>
                <div className="flex-grow-1"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div
              className="col-md-6 text-center "
              style={{
                backgroundSize: "cover",
                backgroundImage: "url(/assets/images/photo-long-3.jpg)",
              }}
            >
              <div className="pl-3 auth-right">
                <div className="auth-logo text-center mt-4">
                  <img src="/assets/images/logo.png" alt="" />
                </div>
                <div className="flex-grow-1"></div>
                <div className="w-100 mb-4">
                  <Link
                    to="/session/signin"
                    className="btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text"
                  >
                    <i className="i-Mail-with-At-Sign"></i>{" "}
                    {this.props.t("Sign_up.1")}
                  </Link>
                </div>
                <Button
                  onClick={() => this.props.googleSignUp(this.props.t)}
                  className="btn btn-rounded btn-outline-google btn-block btn-icon-text"
                >
                  <i className="i-Google-Plus"></i> {this.props.t("Sign_up.15")}
                </Button>
                <Button
                  onClick={() => this.props.facebookSignUp(this.props.t)}
                  className="btn btn-rounded btn-block btn-icon-text btn-outline-facebook"
                >
                  <i className="i-Facebook-2"></i> {this.props.t("Sign_up.16")}
                </Button>
                <div className="flex-grow-1"></div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4">
                <h1 className="mb-3 text-18">{this.props.t("Sign_up.2")}</h1>
                <Formik
                  initialValues={this.state}
                  validationSchema={SignupSchema(this.props.t)}
                  onSubmit={this.props.fncSubmit}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="username">
                          {this.props.t("Sign_up.3")}*
                        </label>
                        <input
                          className="form-control form-control-rounded"
                          name="username"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                        />
                        {errors.username && touched.username && (
                          <div className="text-danger mt-1 ml-2">
                            {errors.username}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="licenseId">License No*</label>
                        <Select
                          // className="form-control form-control-rounded"
                          name="licenseId"
                          // value={values.licenseId}
                          onChange={(option) => {
                            setFieldValue("licenseId", option.value);
                          }}
                          onBlur={handleBlur}
                          options={this.state.brokers}
                          // style={{ display: 'block' }}
                        ></Select>
                        {/* <input
                          className="form-control form-control-rounded"
                          name="licenseId"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.licenseId}
                        /> */}
                        {errors.licenseId && touched.licenseId && (
                          <div className="text-danger mt-1 ml-2">
                            {errors.licenseId}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="phoneno">
                          {this.props.t("Sign_up.12")}*
                        </label>
                        <input
                          className="form-control form-control-rounded"
                          name="phoneno"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneno}
                        />
                        {errors.phoneno && touched.phoneno && (
                          <div className="text-danger mt-1 ml-2">
                            {errors.phoneno}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">
                          {this.props.t("Sign_up.4")}*{" "}
                        </label>
                        <input
                          name="email"
                          className="form-control form-control-rounded"
                          type="email"
                          data-deltad-checkmail="1"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email && touched.email && (
                          <div className="text-danger mt-1 ml-2">
                            {errors.email}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">
                          {this.props.t("Sign_up.5")}*
                        </label>
                        <input
                          name="password"
                          className="form-control form-control-rounded"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {errors.password && touched.password && (
                          <div className="text-danger mt-1 ml-2">
                            {errors.password}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="repassword">
                          {this.props.t("Sign_up.6")}*
                        </label>
                        <input
                          name="repassword"
                          className="form-control form-control-rounded"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.repassword}
                        />
                        {errors.repassword && touched.repassword && (
                          <div className="text-danger mt-1 ml-2">
                            {errors.repassword}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-10">
                        <DangerAlert
                          show={this.state.showError}
                          error={this.state.error}
                        ></DangerAlert>
                      </div>
                      <div style={{ paddingLeft: "22px" }}>
                        <Field
                          type="checkbox"
                          name="acceptTerms"
                          className={
                            "form-check-input " +
                            (errors.acceptTerms && touched.acceptTerms
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <label
                          htmlFor="acceptTerms"
                          className="form-check-label"
                        >
                          {this.props.t("Sign_in.13")} <br />
                          <a
                            href="https://blog.ziaway.ca/politique-de-confidentialit%C3%A9"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {this.props.t("Sign_in.14")}
                          </a>
                        </label>
                        <ErrorMessage
                          name="acceptTerms"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <button
                        className="btn btn-primary btn-block btn-rounded mt-3"
                        type="submit"
                        disabled={isSubmitting && !this.state.showError}
                      >
                        {isSubmitting && !this.state.showError ? (
                          <span>{this.props.t("Sign_up.7")}...</span>
                        ) : (
                          <span>{this.props.t("Sign_up.8")}</span>
                        )}
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

class FirstComponent extends Component {
  state = {};

  handleSubscription = (value) => {
    console.log("props", this.props);
  };
  render() {
    let {
      nextStep,
      previousStep,
      lastStep,
      firstStep,
      currentStep,
      totalSteps,
    } = this.props;
    const { setSubscriptionInfo } = this.props;

    return (
      <div>
        <div>
          <div className="row" style={{ margin: 20 }}>
            <div className="col-lg-4 col-xl-4 m-0 p-0">
              <div className="ul-pricing__table-1">
                <div className="ul-pricing__header">
                  <div className="ul-pricing__main-number m-0">
                    <div className="pt-4"></div>
                  </div>
                  <div className="ul-pricing__main-number m-0">
                    <h1 className="heading text-primary t-font-boldest">
                      {" "}
                      <div style={{ minHeight: 70 }}></div>
                    </h1>
                  </div>
                  <div className="ul-pricing__month">
                    <small className="text-purple-100"> </small>
                  </div>
                </div>
                <div className="ul-pricing__title pt-8">
                  <h2 className="heading text-primary">Offre de lancement</h2>
                </div>
                <div className="ul-pricing__table-listing mb-4">
                  <ul>
                    <li className="t-font-bolder">
                      (Réservée aux particuliers)
                      <br />
                      <br />
                      <h3>Vous auriez tort de vous en priver ! </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 m-0 p-0">
              <div className="ul-pricing__table-2 ">
                <div className="ul-pricing__header">
                  <div className="ul-pricing__image text-warning m-0">
                    <div className="pt-4"></div>
                  </div>
                  <div className="ul-pricing__main-number m-0">
                    <h1 className="heading text-warning t-font-boldest">
                      <strike>$19.99</strike>
                    </h1>
                    0$ par mois
                  </div>
                  <div className="ul-pricing__month">
                    <small className="text-purple-100">
                      {" "}
                      Offre de lancement <br />
                    </small>
                  </div>
                </div>
                <div className="ul-pricing__title">
                  <h2 className="heading text-warning">Prémium</h2>
                </div>
                <div className="ul-pricing__table-listing mb-4">
                  <ul>
                    <li className="t-font-bolder">Espace personnel</li>
                    <li className="t-font-bolder">Valeur marchande Ziaway</li>
                    <li className="t-font-bolder">Articles spécialisés</li>
                    <li className="t-font-bolder">Vidéos de formation</li>
                    <li className="t-font-bolder">
                      Prix de ventes réels <br />
                      des biens comparables
                    </li>
                    <li className="t-font-bolder">
                      Recommandation et <br /> performance des courtiers
                    </li>
                    <li className="text-mute">
                      Visite privée avant <br />
                      la mise sur le marché
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  className="btn btn-lg btn-warning btn-rounded m-1"
                  onClick={() =>
                    setSubscriptionInfo({
                      plan_unit: "1",
                      plan: "price_1I5tXuBdgxbr2FVSWQJwxUzR",
                      titre_plan: "Plan Prémium",
                      prix_plan: "0",
                    })
                  }
                >
                  Souscrire
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 m-0 p-0">
              <div className="ul-pricing__table-2 ">
                <div className="ul-pricing__header">
                  <div className="ul-pricing__image text-danger m-0">
                    <div className="pt-4"></div>
                  </div>
                  <div className="ul-pricing__main-number m-0">
                    <h1 className="heading text-danger t-font-boldest">
                      <strike>$49.99</strike>{" "}
                    </h1>
                    0$ par mois
                  </div>
                  <div className="ul-pricing__month">
                    <small className="text-purple-100">
                      {" "}
                      Offre de lancement <br />
                    </small>
                  </div>
                </div>
                <div className="ul-pricing__title">
                  <h2 className="heading text-danger">Privilège</h2>
                </div>
                <div className="ul-pricing__table-listing mb-4">
                  <ul>
                    <li className="t-font-bolder">Espace personnel</li>
                    <li className="t-font-bolder">Valeur marchande Ziaway</li>
                    <li className="t-font-bolder">Articles spécialisés</li>
                    <li className="t-font-bolder">Vidéos de formation</li>
                    <li className="t-font-bolder">
                      Prix de ventes réels <br />
                      des biens comparables
                    </li>
                    <li className="t-font-bolder">
                      Recommandation et <br /> performance des courtiers
                    </li>
                    <li className="t-font-bolder">
                      Visite privée avant <br />
                      la mise sur le marché
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  className="btn btn-lg btn-danger btn-rounded m-1"
                  onClick={() =>
                    setSubscriptionInfo({
                      plan_unit: "1",
                      plan: "price_1HyJiBBdgxbr2FVSx5CiRzFq",
                      titre_plan: "Plan Privilège",
                      prix_plan: "0",
                    })
                  }
                >
                  Souscrire
                </button>
              </div>
            </div>
            {/*} <div className="col-lg-3 col-xl-3 m-0 p-0">
              <div className="ul-pricing__table-2 border-right-0">
                <div className="ul-pricing__header">
                  <div className="ul-pricing__image text-success m-0">
                    <i className="i-Plane-2"></i>
                  </div>
                  <div className="ul-pricing__main-number m-0">
                    <h1 className="heading text-success t-font-boldest">
                      $500
                    </h1>
                  </div>
                  <div className="ul-pricing__month">
                    <small className="text-purple-100">per month</small>
                  </div>
                </div>
                <div className="ul-pricing__title">
                  <h2 className="heading text-success">Premium</h2>
                </div>
                <div className="ul-pricing__table-listing mb-4">
                  <ul>
                    <li className="t-font-bolder">Disk Space 250gb</li>
                    <li className="t-font-bolder">Bandwidth 250gb</li>
                    <li className="t-font-bolder">Databases</li>
                    <li className="text-mute">E-mail accounts NO</li>
                  </ul>
                </div>

                <button
                  type="button"
                  className="btn btn-lg btn-success btn-rounded m-1"
                  onClick={() =>
                    setSubscriptionInfo({
                      plan_unit: "1",
                      plan: "plan_HBgBNBFl4Je54V",
                      titre_plan: "Plan découverte",
                      prix_plan: "89",
                    })
                  }
                >
                  Purchase
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/*    <div className="d-flex justify-content-end">
          <Button className="mx-2" variant="danger" onClick={firstStep}>
            Cancel
          </Button>
          <Button
            disabled={currentStep === 1}
            className="mx-1"
            variant="info"
            onClick={previousStep}
          >
            Previous
          </Button>
          <Button
            disabled={currentStep === totalSteps}
            className="mx-1"
            variant="info"
            onClick={nextStep}
          >
            Next
          </Button>
          <Button
            disabled={false}
            className="mx-1"
            variant="primary"
            onClick={lastStep}
          >
            Finish
          </Button>
        </div>
   */}
      </div>
    );
  }
}
