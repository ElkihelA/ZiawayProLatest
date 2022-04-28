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

const ButtonGroupForm = ({
  fieldName,
  options,
  handleOnChange,
  nextStep,
  previousStep,
  currentStep,
  isActive,
  state,
  setState,
}) => {
  const formik = useFormik({
    initialValues: {
      option: "",
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      console.log(`ButtonGroupForm ${fieldName} onSubmit`);
      console.log("ButtonGroupForm values", values);
      handleOnChange(values.option, state, setState);
      // setSubmitting(false);
      nextStep();
    },
  });

  return (
    <div className="">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group btn-group btn-group-lg btn-group-toggle">
          {options.map((e, i) => (
            <RadioButton
              key={i}
              radioGroupName="option"
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
      {/* {currentStep !== 1 && (
        <ReturnButton previousStep={previousStep} isActive={isActive} />
      )} */}
    </div>
  );
};

export default ButtonGroupForm;
