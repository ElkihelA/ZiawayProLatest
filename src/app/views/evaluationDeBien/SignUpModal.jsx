import React, { useState, Fragment, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { firebaseSignUpforModal } from "../../../app/redux/actions/LoginActions";
import { useDispatch } from "react-redux";

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const SigninSchema = (t) =>
  yup.object().shape({
    username: yup.string().required("Le nom et prénom sont obligatoire"),
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
      .required("L'e-mail est requis "),
    password: yup
      .string()
      .min(8, "Le mot de passe doit être formé d'au moins 8 caractères")
      .required("Le mot de passe est requis"),
    acceptTerms: yup
      .bool()
      .oneOf([true], "Accept Terms & Conditions is required"),
    repassword: yup
      .string()
      .required("Répéter le mot de passe")
      .oneOf([yup.ref("password")], "Les mots de passe ne concordent pas"),
    policy: yup.boolean(true).required(t("Sign_in.20")),
  });

const SignUpModal = ({ show, setShow, email, address }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    composeDialogOpen: false,
    warning: false,
    success: false,
    username: "",
    phoneno: "",
    email: email,
    password: "",
    repassword: "",
    policy: false,
    acceptTerms: false,
  });

  useEffect(() => {
    setState({ email: email });
  }, [email]);

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = (value, { isSubmitting }) => {
    localStorage.setItem("address", JSON.stringify(address));
    dispatch(firebaseSignUpforModal(value, t));
    console.log(value);
  };

  console.log(address);

  return (
    <Fragment>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("Sign_up.9")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {state.email === undefined ? null : (
            <Formik
              initialValues={state}
              validationSchema={SigninSchema(t)}
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
                  {console.log(errors)}
                  <p className="text-primary font-weight-bold">
                    {" "}
                    {t("Sign_up.10")}{" "}
                  </p>
                  <div className="form-group">
                    <label htmlFor="username">{t("Sign_up.3")}*</label>
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
                    <label htmlFor="phoneno">{t("Sign_up.12")}*</label>
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
                    <label htmlFor="email">{t("Sign_in.2")}*</label>
                    <input
                      className="form-control form-control-rounded position-relative"
                      type="email"
                      name="email"
                      data-deltad-checkmail="1"
                      defaultValue={email}
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
                    <label htmlFor="password">{t("Sign_in.3")}*</label>
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
                  <div className="form-group">
                    <label htmlFor="repassword">{t("Sign_up.6")}*</label>
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
                    <label htmlFor="acceptTerms" className="form-check-label">
                      {t("Sign_up.13")} <br />
                      <a
                        href="https://blog.ziaway.ca/politique-de-confidentialit%C3%A9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("Sign_up.14")}
                      </a>
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <button
                    className="btn btn-rounded btn-primary btn-block mt-2"
                    type="submit"
                  >
                    {t("Sign_in.4")}
                  </button>
                </form>
              )}
            </Formik>
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default SignUpModal;
