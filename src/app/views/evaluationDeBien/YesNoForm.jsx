import React from "react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import { classList } from "@utils";

const YesNoForm = ({ fieldName, handleOnYesNoInputChange, nextStep }) => {
  const formik = useFormik({
    initialValues: {
      yesNoField: "non",
    },
    onSubmit: (values) => {
      console.log(`YesNoForm ${fieldName} onSubmit`, values);
      handleOnYesNoInputChange(values.yesNoField);
      nextStep();
    },
  });
  return (
    <div className="m-2 p-2">
      <form onSubmit={formik.handleSubmit}>
        <div
          className={classList({
            "form-group m-4": true,
          })}
        >
          {/* <label htmlFor="inputEmail5" className="ul-form__label">
            User Group:
          </label> */}
          <div className="ul-form__radio-inline">
            <label className=" ul-radio__position radio radio-primary form-check-inline">
              <input
                id={`yesField_${fieldName}`}
                type="radio"
                name="yesNoField"
                onChange={formik.handleChange}
                value="oui"
                checked={formik.values.yesNoField == "oui"}
              />
              <span className="ul-form__radio-font">Oui</span>
              <span className="checkmark"></span>
            </label>
            <label className="ul-radio__position radio radio-primary">
              <input
                id={`noField_${fieldName}`}
                type="radio"
                name="yesNoField"
                onChange={formik.handleChange}
                value="non"
                checked={formik.values.yesNoField === "non"}
              />
              <span className="ul-form__radio-font">Non</span>
              <span className="checkmark"></span>
            </label>
          </div>
          {/* <small id="passwordHelpBlock" className="ul-form__text form-text ">
            Please select user group
          </small> */}
          <Button className="m-4" type="submit" variant="outline-primary">
            Etape suivante
          </Button>
        </div>
      </form>
    </div>
  );
};

export default YesNoForm;
