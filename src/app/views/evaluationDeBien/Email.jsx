import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import ReturnButton from "./ReturnButton";
import { classList } from "@utils";
import "./numberInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import firebase from "../../services/firebase/firebase";
import axios from "axios";
import swal from "sweetalert2";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Obligatoire";
  }

  return errors;
};

const Email = ({
  fieldName,
  min,
  max,
  handleOnChange,
  nextStep,
  previousStep,
  currentStep,
  isActive,
  address,
}) => {
  const [show, setShow] = useState(false);
  const [signUpShow, setSignUp] = useState(false);
  const [email, setEmail] = useState();
  const { t } = useTranslation();
  const [info, setInfo] = useState([]);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Obligatoire";
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      // if (values.email < min) {
      //   errors.email = `Minimum ${min}`;
      // }

      // if (max) {
      //   if (values.email > max) {
      //     errors.email = `Maximum ${max}`;
      //   }
      // }

      return errors;
    },
    onSubmit: (values) => {
      console.log("initiated");
      firebase
        .firestore()
        .collection("users")
        .where("email", "==", values.email)
        .get()
        .then((querySnapshot) => {
          // Loop through the data and store
          // it in array to display
          console.log(querySnapshot.docs);
          if (querySnapshot.docs.length === 0) {
            setSignUp(true);
            setEmail(values.email);
            // handleOnChange(values.email);
            // nextStep();
          } else {
            setShow(true);
            setEmail(values.email);

            // swal.fire(
            //   "Oups Erreur!",
            //   "Email Already Exists. Please login to your account to get evaluation",
            //   "error"
            // );
          }
        });
    },
  });

  return (
    <div className="mx-auto col-md-6 col-xs-12">
      <SignInModal
        show={show}
        setShow={setShow}
        email={email}
        address={address}
      />
      <SignUpModal
        show={signUpShow}
        setShow={setSignUp}
        email={email}
        address={address}
      />
      <form onSubmit={formik.handleSubmit}>
        <div
          className={classList({
            "input-group input-group-lg m-auto m-4 inline-group": true,
            "valid-field": formik.touched.email && !formik.errors.email,
            "invalid-field": formik.touched.email && formik.errors.email,
          })}
        >
          <div className="input-group-prepend">
            {/* <button
              className="btn btn-outline-primary border-secondary"
              type="button"
              onClick={ () => {
                let year = formik.values.email - 1;
                formik.setFieldTouched("email");
                formik.setFieldValue("email", year);
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button> */}
          </div>
          <div className="w-100">
            <h5 className="text-primary mb-1">
              Note: Email adress to receive immediately your complete report
            </h5>
            <input
              type="email"
              className="form-control"
              id={fieldName}
              name="email"
              placeholder="Enter Email"
              // min={min}
              // max={max}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
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
        <div className="invalid-feedback">{formik.errors.email}</div>
        <Button className="mt-4" type="submit" variant="outline-primary">
          Email
        </Button>
      </form>
      {/* {currentStep !== 1 && (
        <ReturnButton previousStep={previousStep} isActive={isActive} />
      )} */}
    </div>
  );
};

export default Email;
