import React, { useState } from "react";
import { Formik } from "formik";
import { classList } from "@utils";
import {
  updateInfosPersonnelles,
  ResetPasword,
} from "app/redux/actions/UserActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PhoneInput from "react-phone-number-input/input";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ErrorFactory } from "@firebase/util";

const ResetPassword = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          changepassword: "",
        }}
        enableReinitialize={true}
        validate={(values) => {
          const errors = {};
          if (!values.currentPassword) {
            errors.currentPassword = `${props.t("profile.13")}`;
          }
          if (!/^.{8,}$/i.test(values.newPassword)) {
            errors.newPassword = `${props.t("profile.19")}`;
          }
          if (
            values.newPassword !== values.changepassword &&
            values.changepassword !== ""
          ) {
            errors.changepassword = `${props.t("profile.14")}`;
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          console.log(values);
          props.ResetPasword(values, resetForm);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          resetForm,
          setFieldValue,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={classList({
                "col-md-6 mb-3 position-relative": true,
                // "valid-field":
                //   !errors.currentPassword && touched.currentPassword,
                // "invalid-field":
                //   errors.currentPassword && touched.currentPassword,
              })}
            >
              <label htmlFor="validationCustom202">
                {props.t("profile.9")}
              </label>
              <input
                type={show ? "text" : "password"}
                className="form-control"
                name="currentPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.currentPassword || ""}
              />
              {show ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  style={{
                    position: "absolute",
                    right: 23,
                    bottom: 10,
                  }}
                  onClick={() => setShow(false)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  style={{
                    position: "absolute",
                    right: 23,
                    bottom: 10,
                  }}
                  onClick={() => setShow(true)}
                />
              )}
            </div>

            <div
              className={classList({
                "col-md-6 mb-3 position-relative": true,
                "valid-field": !errors.newPassword && touched.newPassword,
                "invalid-field": errors.newPassword && touched.newPassword,
              })}
            >
              <label htmlFor="validationCustom202">
                {props.t("profile.10")}
              </label>
              <input
                type={show ? "text" : "password"}
                className="form-control"
                name="newPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newPassword}
              />
              <span class="error" style={{ color: "red" }}>
                {errors.newPassword}
              </span>
              {show ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  style={{
                    position: "absolute",
                    right: 23,
                    bottom: 10,
                  }}
                  onClick={() => setShow(false)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  style={{
                    position: "absolute",
                    right: 23,
                    bottom: 10,
                  }}
                  onClick={() => setShow(true)}
                />
              )}
            </div>

            <div
              className={classList({
                "col-md-6 mb-3 position-relative": true,
                "valid-field": !errors.changepassword && touched.changepassword,
                "invalid-field":
                  errors.changepassword && touched.changepassword,
              })}
            >
              <label htmlFor="validationCustom202">
                {props.t("profile.11")}
              </label>

              <input
                className="form-control"
                type={show ? "text" : "password"}
                name="changepassword"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.changepassword}
              />
              <span class="error" style={{ color: "red" }}>
                {errors.changepassword}
              </span>
              {show ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  style={{
                    position: "absolute",
                    right: 23,
                    bottom: 10,
                  }}
                  onClick={() => setShow(false)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  style={{
                    position: "absolute",
                    right: 23,
                    bottom: 10,
                  }}
                  onClick={() => setShow(true)}
                />
              )}
            </div>

            <div className="col-12 col-md-5 col-lg-3">
              <Button block type="submit" disabled={isSubmitting}>
                {props.t("profile.12")}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  updateInfosPersonnelles: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, {
  updateInfosPersonnelles,
  ResetPasword,
})(ResetPassword);
