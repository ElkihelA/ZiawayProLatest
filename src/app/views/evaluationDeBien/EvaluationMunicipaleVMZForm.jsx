import React from "react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import { classList } from "@utils";
import ReturnButton from "./ReturnButton";
import { useTranslation } from "react-i18next";

const validate = (values) => {
  const errors = {};
  if (!values.evaluationMunicipale) {
    errors.evaluationMunicipale = "Obligatoire";
  }

  return errors;
};

const EvaluationMunicipaleVMZForm = ({
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
      evaluationMunicipale: "",
    },
    validate,
    onSubmit: (values) => {
      if (isActive) {
        console.log("EvaluationMunicipaleVMZForm onSubmit");
        console.log(values);
        handleOnChange(values.evaluationMunicipale, state, setState);
        nextStep();
      }
    },
  });

  return (
    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-xs-12">
      <form onSubmit={formik.handleSubmit}>
        <div
          className={classList({
            "input-group input-group-lg": true,
            "valid-field":
              formik.touched.evaluationMunicipale &&
              !formik.errors.evaluationMunicipale,
            "invalid-field":
              formik.touched.evaluationMunicipale &&
              formik.errors.evaluationMunicipale,
          })}
        >
          <div className="input-group-prepend">
            <span
              className="input-group-text"
              id="dimensionTerrainGroupPrepend"
            >
              <i className="i-Dollar-Sign-2" />
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            id="evaluationMunicipale"
            placeholder="ex. 208900"
            name="evaluationMunicipale"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.evaluationMunicipale}
            required
          />
          <div className="invalid-feedback">
            {formik.errors.evaluationMunicipale}
          </div>
        </div>
        <Button className="mt-4" type="submit" variant="outline-primary">
          {t("Estimate.12")}
        </Button>
        {/* {currentStep !== 1 && (
          <ReturnButton previousStep={previousStep} isActive={isActive} />
        )} */}
      </form>
    </div>
  );
};

export default EvaluationMunicipaleVMZForm;
