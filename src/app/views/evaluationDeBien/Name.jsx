import React from "react";
import { useFormik } from "formik";
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

const Name = ({
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
      username: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Obligatoire";
      }
      // if (values.username < min) {
      //   errors.username = `Minimum ${min}`;
      // }

      // if (max) {
      //   if (values.username > max) {
      //     errors.username = `Maximum ${max}`;
      //   }
      // }

      return errors;
    },
    onSubmit: (values) => {
      if (isActive) {
        console.log(`NumberInputForm ${fieldName} onSubmit`, values);
        handleOnChange(values.username, state, setState);
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
            "valid-field": formik.touched.username && !formik.errors.username,
            "invalid-field": formik.touched.username && formik.errors.username,
          })}
        >
          <div className="input-group-prepend">
            {/* <button
              className="btn btn-outline-primary border-secondary"
              type="button"
              onClick={() => {
                let year = formik.values.username - 1;
                formik.setFieldTouched("username");
                formik.setFieldValue("username", year);
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button> */}
          </div>
          <input
            type="text"
            className="form-control"
            id={fieldName}
            name="username"
            placeholder="Enter Username"
            // min={min}
            // max={max}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <div className="input-group-append">
            {/* <button
              className="btn btn-outline-primary border border-secondary"
              type="button"
              onClick={() => {
                let year = formik.values.username + 1;
                formik.setFieldTouched("username");
                formik.setFieldValue("username", year);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button> */}
          </div>
        </div>
        <div className="invalid-feedback">{formik.errors.username}</div>
        <Button className="mt-4" type="submit" variant="outline-primary">
          Username
        </Button>
      </form>
      {/* {currentStep !== 1 && (
        <ReturnButton previousStep={previousStep} isActive={isActive} />
      )} */}
    </div>
  );
};

export default Name;
