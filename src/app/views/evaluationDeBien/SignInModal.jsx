import React, { useState, useEffect, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { firebaseloginVMZform } from "../../../app/redux/actions/LoginActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SigninSchema = yup.object().shape({
  email: yup.string().email("E-mail invalide").required("L'e-mail est requis "),
  password: yup
    .string()
    .min(8, "Le mot de passe doit être formé d'au moins 8 caractères")
    .required("Le mot de passe est requis"),
  // acceptTerms: yup
  //   .bool()
  //   .oneOf([true], "Accept Terms & Conditions is required"),
});

const SignInModal = ({ show, setShow, email, address }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    composeDialogOpen: false,
    warning: false,
    success: false,
    email: email,
    password: "",

    // acceptTerms: false,
  });

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    setState({ email: email });
  }, [email]);

  const handleSubmit = (value, { isSubmitting }) => {
    localStorage.setItem("address", JSON.stringify(address));
    dispatch(firebaseloginVMZform(value, t));
  };

  return (
    <Fragment>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("Sign_in.9")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {state.email === undefined ? null : (
            <>
              <Formik
                initialValues={state}
                validationSchema={SigninSchema}
                onSubmit={handleSubmit}
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
                    {console.log("errors", errors)}
                    <p className="text-primary font-weight-bold">
                      {" "}
                      {t("Sign_in.10")}{" "}
                    </p>
                    <div className="form-group">
                      <label htmlFor="email">{t("Sign_in.2")}</label>
                      <input
                        className="form-control form-control-rounded position-relative"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                    <div className="mt-3 text-center mb-2">
                      <Link
                        to="/session/forgot-password"
                        className="text-muted"
                      >
                        <u>{t("Sign_in.5")}</u>
                      </Link>
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
                      <label htmlFor="acceptTerms" className="form-check-label">
                        {t("Sign_in.11")} <br />
                        <a
                          href="https://blog.ziaway.ca/politique-de-confidentialit%C3%A9"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("Sign_in.12")}
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
            </>
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default SignInModal;
