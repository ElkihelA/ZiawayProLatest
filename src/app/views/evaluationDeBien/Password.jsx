import React from "react";
import { useFormik, ErrorMessage, Field } from "formik";
import { Button } from "react-bootstrap";
import ReturnButton from "./ReturnButton";
import { classList } from "@utils";
import "./numberInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Obligatoire";
  }

  return errors;
};

const Password = ({
  fieldName,
  min,
  max,
  handleOnChange,
  nextStep,
  previousStep,
  currentStep,
  isActive,
  state,
  setState,
}) => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      password: "",
      repassword: "",
      acceptTerms: false,
    },
    validate: (values) => {
      const errors = {};
      if (!values.password) {
        errors.password = "Obligatoire";
      }

      if (!/^.{8}$/i.test(values.password)) {
        errors.password = "Minimum 8 letters";
      }
      if (values.acceptTerms === false) {
        errors.acceptTerms = "Obligatoire";
      }

      if (values.repassword !== values.password) {
        errors.repassword = "Password Doesnt match";
      }

      // if (values.password < min) {
      //   errors.password = `Minimum ${min}`;
      // }

      // if (max) {
      //   if (values.password > max) {
      //     errors.password = `Maximum ${max}`;
      //   }
      // }
      console.log(errors);
      return errors;
    },
    onSubmit: (values) => {
      if (isActive) {
        console.log(`NumberInputForm ${fieldName} onSubmit`, values);
        handleOnChange(values.password, state, setState);
        nextStep();
      }
    },
  });

  return (
    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-xs-12">
      <form onSubmit={formik.handleSubmit}>
        <div
          className={classList({
            "input-group input-group-lg m-auto m-4 inline-group": true,
            "valid-field": formik.touched.password && !formik.errors.password,
            "invalid-field": formik.touched.password && formik.errors.password,
          })}
        >
          <div className="input-group-prepend">
            {/* <button
              className="btn btn-outline-primary border-secondary"
              type="button"
              onClick={() => {
                let year = formik.values.password - 1;
                formik.setFieldTouched("password");
                formik.setFieldValue("password", year);
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button> */}
          </div>
          <div className="d-flex flex-column">
            <input
              type="password"
              // className="form-control"
              className={
                "form-control  " +
                (formik.errors.password && formik.touched.password
                  ? " is-invalid"
                  : "")
              }
              id={fieldName}
              name="password"
              placeholder="Enter password"
              // min={8}
              // max={max}

              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-danger mt-1 ml-2">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className="d-flex flex-column mt-2">
            <input
              type="password"
              // className="form-control"
              className={
                "form-control  " +
                (formik.errors.repassword && formik.touched.repassword
                  ? " is-invalid"
                  : "")
              }
              id={fieldName}
              name="repassword"
              placeholder="Re-Enter password"
              // min={8}
              // max={max}

              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.repassword}
            />
            {formik.errors.repassword && formik.touched.repassword && (
              <div className="text-danger mt-1 ml-2">
                {formik.errors.repassword}
              </div>
            )}
          </div>
          <div className="input-group-append">
            {/* <button
              className="btn btn-outline-primary border border-secondary"
              type="button"
              onClick={() => {
                let year = formik.values.password + 1;
                formik.setFieldTouched("password");
                formik.setFieldValue("password", year);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button> */}
          </div>
        </div>
        <div style={{ paddingLeft: "22px" }}>
          <input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            className={
              "form-check-input " +
              (formik.errors.acceptTerms && formik.touched.acceptTerms
                ? " is-invalid"
                : "")
            }
            onChange={formik.handleChange}
            value={formik.values.acceptTerms}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            J'accepte la politique de confidentialité <br />
            <a
              href="https://blog.ziaway.ca/politique-de-confidentialit%C3%A9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lire la politique de confidentialité
            </a>
          </label>
          {/* <ErrorMessage
            name="acceptTerms"
            component="div"
            className="invalid-feedback"
          /> */}
        </div>
        <div className="invalid-feedback">{formik.errors.password}</div>
        <Button className="mt-4" type="submit" variant="outline-primary">
          Password
        </Button>
      </form>
      {/* {currentStep !== 1 && (
        <ReturnButton previousStep={previousStep} isActive={isActive} />
      )} */}
    </div>
  );
};

export default Password;
