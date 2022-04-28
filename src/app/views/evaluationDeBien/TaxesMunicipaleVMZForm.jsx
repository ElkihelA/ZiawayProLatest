import React from "react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import ReturnButton from "./ReturnButton";
import { classList } from "@utils";
import { useTranslation } from "react-i18next";

const validate = (values) => {
  const errors = {};
  if (!values.taxesMunicipale) {
    errors.taxesMunicipale = "Obligatoire";
  }

  return errors;
};

const TaxesMunicipaleVMZForm = ({
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
      taxesMunicipale: "",
    },
    validate,
    onSubmit: (values) => {
      if (isActive) {
        console.log("TaxesMunicipaleVMZForm onSubmit");
        console.log(values);
        handleOnChange(values.taxesMunicipale, state, setState);
        nextStep();
      }
    },
  });

  return (
    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-xs-12">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="taxesMunicipale">
        <h5>Dimension du terrain:</h5>
      </label> */}
          <div
            className={classList({
              "input-group input-group-lg": true,
              "valid-field":
                formik.touched.taxesMunicipale &&
                !formik.errors.taxesMunicipale,
              "invalid-field":
                formik.touched.taxesMunicipale && formik.errors.taxesMunicipale,
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
              id="taxesMunicipale"
              placeholder="ex. 2161"
              name="taxesMunicipale"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.taxesMunicipale}
              required
            />
            <div className="invalid-feedback">
              {formik.errors.taxesMunicipale}
            </div>
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

export default TaxesMunicipaleVMZForm;
