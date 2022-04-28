import React from "react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import { classList } from "@utils";
import ReturnButton from "./ReturnButton";

const validate = (values) => {
  const errors = {};
  if (!values.superficie) {
    errors.superficie = "Obligatoire";
  }

  return errors;
};

const SuperficieVMZForm = ({
  handleOnChange,
  nextStep,
  previousStep,
  currentStep,
  isActive,
}) => {
  const formik = useFormik({
    initialValues: {
      superficie: "",
    },
    validate,
    onSubmit: (values) => {
      if (isActive) {
        console.log("SuperficieVMZForm onSubmit");
        console.log(values);
        handleOnChange(values.superficie);
        nextStep();
      }
    },
  });

  return (
    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-xs-12">
      <form onSubmit={formik.handleSubmit} className="">
        <div className="form-group m-auto">
          {/* <label htmlFor="superficieTerrain">
        <h5>Dimension du terrain:</h5>
      </label> */}
          <div
            className={classList({
              "input-group input-group-lg": true,
              "valid-field":
                formik.touched.superficie &&
                !formik.errors.superficie,
              "invalid-field":
                formik.touched.superficie &&
                formik.errors.superficie,
            })}
          >
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="superficieTerrainGroupPrepend"
              >
                pied²
              </span>
            </div>
            <input
              type="number"
              className="form-control"
              id="superficieTerrain"
              placeholder="ex. 1200"
              name="superficieTerrain"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.superficie}
            />
            <div className="invalid-feedback">
              {formik.errors.superficie}
            </div>
          </div>
        </div>
        <Button className="mt-4" type="submit" variant="outline-primary">
          Etape suivante
        </Button>
        {/* {currentStep !== 1 && (
          <ReturnButton previousStep={previousStep} isActive={isActive} />
        )} */}
      </form>
    </div>
  );
};

export default SuperficieVMZForm;
