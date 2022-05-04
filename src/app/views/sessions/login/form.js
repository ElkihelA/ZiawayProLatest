import React, { Component } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  firebaseLoginEmailPassword,
  facebookLogin,
  googleLogin,
} from "app/redux/actions/LoginActions";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import SweetAlert from "sweetalert2-react";
import { withTranslation } from "react-i18next";
import GoogleLogin from "react-google-login";
import { Loading } from "@gull";

const SigninSchema = (t) =>
  yup.object().shape({
    email: yup.string().email("E-mail invalide").required(t("Sign_in.18")),
    password: yup.string().min(8, t("Sign_in.22")).required(t("Sign_in.19")),
  });

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      composeDialogOpen: false,
      warning: false,
      success: false,
      email: "",
      password: "",
    };
  }
  // componentDidMount = () => {
  //   console.log(this.props.location);
  // };

  // componentDidMount = () => {
  //   if (window.self !== window.top) {
  //     console.log("running in iframe");
  //   } else {
  //     console.log("not running in iframe");
  //   }
  // };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.loginError !== this.props.loginError) {
      if (this.props.loginError) {
        this.toggleAlert("warning");
      }
    }
  }

  toggleAlert = (name) => {
    this.setState({ [name]: !this.state[name] });
  };

  closeAlert = (name) => {
    this.setState({ [name]: false });
  };

  handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (value, { isSubmitting }) => {
    const { t } = this.props.t;
    // const pathForRedirect = this.props.pathForRedirect;
    this.props.firebaseLoginEmailPassword(value, this.props.t, this.props.nextStep);
  };

  responseGoogle = (resp) => {
    const { t, nextStep } = this.props;
    this.props.googleLogin(t, resp, nextStep)
  }

  responseFacebook = (resp) => {
    const {t, nextStep} = this.props;
    this.props.facebookLogin(t, resp, nextStep);
  }

  render() {
    // console.log("route", window.top.location.href);
    const { t, loading } = this.props;

    return (
      <>
      {loading && <Loading />}
      <>
            <div className="auth-content">
              <div className="card o-hidden">
                <div className="row">
                  <div className="col-md-6">
                    <div className="p-4">
                      <div className="auth-logo text-center mb-4">
                        <img src="/assets/images/logo.png" alt="" />
                      </div>
                      <h1 className="mb-3 text-18">{t("Sign_in.1")}</h1>
                      <Formik
                        initialValues={this.state}
                        validationSchema={SigninSchema(t)}
                        onSubmit={this.handleSubmit}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label htmlFor="email">{t("Sign_in.2")}</label>
                              <input
                                className="form-control form-control-rounded position-relative"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                              />
                              {errors.email && (
                                <div className="text-danger mt-1 ml-2">
                                  {errors.email}
                                </div>
                              )}
                            </div>
                            <div className="form-group">
                              <label htmlFor="password">{t("Sign_in.3")}</label>
                              <input
                                className="form-control form-control-rounded"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                              />
                              {errors.password && (
                                <div className="text-danger mt-1 ml-2">
                                  {errors.password}
                                </div>
                              )}
                            </div>
                            {/* <div style={{ paddingLeft: "22px" }}>
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
                                {t("Sign_in.13")} <br />
                                <a
                                  href="https://blog.ziaway.ca/politique-de-confidentialit%C3%A9"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {t("Sign_in.14")}
                                </a>
                              </label>
                              <ErrorMessage
                                name="acceptTerms"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div> */}
                            <button
                              className="btn btn-rounded btn-primary btn-block mt-2"
                              type="submit"
                            >
                              {t("Sign_in.4")}
                            </button>
                          </form>
                        )}
                      </Formik>

                      <div className="mt-3 text-center">
                        <Link
                          to="/session/forgot-password"
                          className="text-muted"
                        >
                          <u>{t("Sign_in.5")}</u>
                        </Link>
                      </div>
                      <div className="mt-1 text-center">
                        <a
                          href="https://blog.ziaway.ca/politiques-de-confidentialite/"
                          className="text-muted"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <u>{t("Sign_in.6")} </u>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 text-center "
                    style={{
                      backgroundSize: "cover",
                      backgroundImage: "url(/assets/images/photo-long-3.jpg)",
                    }}
                  >
                    <div className="pr-3 auth-right">
                      <Link
                        to="/session/signup"
                        //to="/evaluation-bien"
                        className="btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text"
                      >
                        <i className="i-Mail-with-At-Sign"></i>
                        {t("Sign_in.15")}
                      </Link>
                      <FacebookLogin
                        appId={"162395348999161"}
                        callback={this.responseFacebook}
                        fields="name,email,picture"
                        scope="public_profile, email"
                        render={(renderProps) => (
                            <Button
                              onClick={renderProps.onClick}
                              className="btn btn-rounded btn-block btn-icon-text btn-outline-facebook"
                            >
                              <i className="i-Facebook-2"></i> {t("Sign_in.16")}
                            </Button>
                        )}
                      />
                      <GoogleLogin
                        clientId={"224379580293-ph903a84q69uobrocoemkoh3u5at2td6.apps.googleusercontent.com"}
                        onSuccess={this.responseGoogle}
                        onFailure={(err) => {
                          console.log(err);
                        }}
                        render={props => (
                          <Button
                            onClick={props.onClick}
                            className="btn btn-rounded btn-outline-google btn-block btn-icon-text"
                          >
                            <i className="i-Google-Plus"></i> {t("Sign_in.17")}
                          </Button>
                        )}
                      />
                      {/** 
                  <Button className="btn btn-rounded btn-outline-google btn-block btn-icon-text">
                    <i className="i-Google-Plus"></i>S'inscrire avec  Google
                  </Button>
                  <Button className="btn btn-rounded btn-block btn-icon-text btn-outline-facebook">
                    <i className="i-Facebook-2"></i>S'inscrire avec Facebook
                  </Button>
                  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  firebaseLoginEmailPassword: PropTypes.func.isRequired,
  facebookLogin: PropTypes.func.isRequired,
  googleLogin: PropTypes.func.isRequired,
  pathForRedirect: PropTypes.string.isRequired,
  loginError: state.login.loginError,
  user: state.user,
  step: state.subscription.step,
  loading: state.subscription.loading
});

export default connect(mapStateToProps, {
  firebaseLoginEmailPassword,
  facebookLogin,
  googleLogin,
})(withTranslation()(Signin));
