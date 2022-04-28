import React from "react";
import { useFormik } from "formik";
import RadioButton from "./RadioButton";
import ReturnButton from "./ReturnButton";

const validate = (values) => {
  const errors = {};
  if (!values.option) {
    errors.option = "Obligatoire";
  }

  return errors;
};

const YesNoButtonGroupForm = ({
  fieldName,
  handleOnChange,
  nextStep,
  previousStep,
  currentStep,
}) => {
  const formik = useFormik({
    initialValues: {
      option: "",
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      console.log(`YesNoButtonGroupForm ${fieldName} onSubmit`);
      console.log("YesNoButtonGroupForm values", values);
      handleOnChange(values.option);
      setSubmitting(false);
      nextStep();
    },
  });

  return (
    <div className="col-lg-10 col-md-10 col-xs-12">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group btn-group btn-group-toggle">
          {options.map((e, i) => (
            <RadioButton
              key={i}
              radioGroupName={fieldName}
              element={e}
              isSelected={formik.values.option === e.value}
              handleOnChange={() => {
                formik.setFieldValue("option", e.value);
              }}
              handleOnClick={() => {
                setTimeout(() => {
                  formik.submitForm();
                }, 100);
              }}
              errors={formik.touched.option && formik.errors.option}
            />
          ))}
        </div>
      </form>
      {/* {currentStep !== 1 && <ReturnButton previousStep={previousStep} />} */}
    </div>
  );
};

const options = [
  {
    value: "oui",
    alt: "Oui",
    name: "oui",
  },
  {
    value: "non",
    alt: "Non",
    name: "non",
  },
];

export default YesNoButtonGroupForm;
