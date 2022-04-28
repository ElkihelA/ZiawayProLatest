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
  if (!values.numberInput) {
    errors.numberInput = "Obligatoire";
  }

  return errors;
};

const NumberInputForm = ({
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
      numberInput: min,
    },
    validate: (values) => {
      const errors = {};
      if (!values.numberInput) {
        errors.numberInput = "Obligatoire";
      }
      if (values.numberInput < min) {
        errors.numberInput = `Minimum ${min}`;
      }

      if (max) {
        if (values.numberInput > max) {
          errors.numberInput = `Maximum ${max}`;
        }
      }

      return errors;
    },
    onSubmit: (values) => {
      if (isActive) {
        console.log(`NumberInputForm ${fieldName} onSubmit`, values);
        handleOnChange(values.numberInput, state, setState);
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
            "valid-field":
              formik.touched.numberInput && !formik.errors.numberInput,
            "invalid-field":
              formik.touched.numberInput && formik.errors.numberInput,
          })}
        >
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary border-secondary"
              type="button"
              onClick={() => {
                let year = formik.values.numberInput - 1;
                formik.setFieldTouched("numberInput");
                formik.setFieldValue("numberInput", year);
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <input
            type="number"
            className="form-control"
            id={fieldName}
            name="numberInput"
            placeholder="ex: 1958"
            min={min}
            max={max}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.numberInput}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary border border-secondary"
              type="button"
              onClick={() => {
                let year = formik.values.numberInput + 1;
                formik.setFieldTouched("numberInput");
                formik.setFieldValue("numberInput", year);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="invalid-feedback">{formik.errors.numberInput}</div>
        <Button className="mt-4" type="submit" variant="outline-primary">
          {t("Estimate.10")}
        </Button>
      </form>
      {/* {currentStep !== 1 && (
        <ReturnButton previousStep={previousStep} isActive={isActive} />
      )} */}
    </div>
  );
};

export default NumberInputForm;
