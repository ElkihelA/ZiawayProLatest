import React from "react";
import { useFormik } from "formik";
import RadioIcon from "./RadioIcon";
import ReturnButton from "./ReturnButton";
import { useTranslation } from "react-i18next";

const validate = (values) => {
  const errors = {};
  if (!values.option) {
    errors.option = "Obligatoire";
  }

  return errors;
};

const RadioIconForm = ({
  fieldName,
  options,
  handleOnChange,
  nextStep,
  previousStep,
  currentStep,
  goToStep,
  isActive,
  state,
  setState,
}) => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      option: "",
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      if (isActive) {
        console.log("RadioIconForm onSubmit");
        console.log("RadioIconForm values", values);
        handleOnChange(values.option, state, setState, t);
        setSubmitting(false);
        nextStep();
      }
    },
  });

  return (
    <div className="">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group d-flex flex-row justify-content-center flex-wrap">
          {options?.map((e, i) => (
            <RadioIcon
              key={i}
              radioGroupName={fieldName}
              element={e}
              isSelected={formik.values.option === e.value}
              handleOnRadioIconChange={() => {
                if (isActive) {
                  formik.setTouched("option");
                  formik.setFieldValue("option", e.value);
                  setTimeout(() => {
                    formik.submitForm();
                  }, 100);
                }
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

export default RadioIconForm;
