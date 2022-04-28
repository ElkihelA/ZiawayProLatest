import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";

import { classList } from "@utils";
import "./numberInput.css";

import { useTranslation } from "react-i18next";

const PhoneNumber = ({
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
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const { t } = useTranslation();
  const [info, setInfo] = useState([]);
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.phoneNumber) {
        errors.phoneNumber = "Obligatoire";
      }
      if (
        !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          values.phoneNumber
        )
      ) {
        errors.phoneNumber = "Invalid Phone Number";
      }

      return errors;
    },
    onSubmit: (values) => {
      handleOnChange(values.phoneNumber, state, setState);
      nextStep();

      //   firebase
      //     .firestore()
      //     .collection("users")
      //     .where("email", "==", values.email)
      //     .get()
      //     .then((querySnapshot) => {
      //       // Loop through the data and store
      //       // it in array to display
      //       console.log(querySnapshot.docs);
      //       if (querySnapshot.docs.length === 0) {
      //         handleOnChange(values.email);
      //         nextStep();
      //       } else {
      //         setShow(true);
      //         setEmail(values.email);
      //         // swal.fire(
      //         //   "Oups Erreur!",
      //         //   "Email Already Exists. Please login to your account to get evaluation",
      //         //   "error"
      //         // );
      //       }
      //     });
    },
  });

  return (
    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-xs-12">
      <form onSubmit={formik.handleSubmit}>
        <div
          className={classList({
            "input-group input-group-lg m-auto m-4 inline-group": true,
            "valid-field":
              formik.touched.phoneNumber && !formik.errors.phoneNumber,
            "invalid-field":
              formik.touched.phoneNumber && formik.errors.phoneNumber,
          })}
        >
          <div className="input-group-prepend">
            {/* <button
              className="btn btn-outline-primary border-secondary"
              type="button"
              onClick={() => {
                let year = formik.values.email - 1;
                formik.setFieldTouched("email");
                formik.setFieldValue("email", year);
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button> */}
          </div>

          <input
            type="phoneNumber"
            className="form-control"
            id={fieldName}
            name="phoneNumber"
            placeholder="Enter Contact Number"
            // min={min}
            // max={max}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          <div className="input-group-append">
            {/* <button
              className="btn btn-outline-primary border border-secondary"
              type="button"
              onClick={() => {
                let year = formik.values.email + 1;
                formik.setFieldTouched("email");
                formik.setFieldValue("email", year);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button> */}
          </div>
        </div>
        <div className="invalid-feedback">{formik.errors.phoneNumber}</div>
        <Button className="mt-4" type="submit" variant="outline-primary">
          Contact No
        </Button>
      </form>
      {/* {currentStep !== 1 && (
        <ReturnButton previousStep={previousStep} isActive={isActive} />
      )} */}
    </div>
  );
};

export default PhoneNumber;
