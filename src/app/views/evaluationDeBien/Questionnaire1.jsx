import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import RadioButton from "./RadioButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export const PartOne = ({
  t,
  optionsEstProp,
  nextStep,
  previousStep,
  currentStep,
  formik,
}) => {
  return (
    <div className="form-group  mx-3" style={{ minWidth: 250 }}>
      <div>
        <label
          htmlFor="estProprietaireReponse"
          className="action-bar-horizontal-label questionaireVMZ"
        >
          {t("Estimate.13")}
        </label>
      </div>
      <div className="btn-group btn-group-toggle row p-0 m-0">
        {optionsEstProp(t).map((e, i) => (
          <RadioButton
            key={i}
            radioGroupName="estProprietaireReponse"
            element={e}
            isSelected={formik.values.estProprietaireReponse === e.value}
            handleOnChange={() => {
              formik.resetForm({});
              formik.setFieldTouched("estProprietaireReponse");
              formik.setFieldValue("estProprietaireReponse", e.value);
            }}
            handleOnClick={() => nextStep()}
            errors={
              formik.touched.estProprietaireReponse &&
              formik.errors.estProprietaireReponse
            }
          />
        ))}
      </div>
    </div>
  );
};

export const PartTwo = ({
  t,
  optionsCeBienEst,
  nextStep,
  previousStep,
  formik,
}) => {
  return (
    <div className="d-flex align-item-center justify-content-center">
      <h3
        className="d-inline text-primary cursor-pointer "
        onClick={() => {
          previousStep();
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </h3>
      <div className="form-group mx-3" style={{ minWidth: 250 }}>
        <div>
          <label
            htmlFor="ceBienEstReponse"
            className="action-bar-horizontal-label questionaireVMZ"
          >
            {t("Estimate.14")}
          </label>
        </div>
        <div className="btn-group-vertical btn-group-toggle row m-0 p-0">
          {optionsCeBienEst(t).map((e, i) => (
            <RadioButton
              key={i}
              radioGroupName="ceBienEstReponse"
              element={e}
              isSelected={formik.values.ceBienEstReponse === e.value}
              handleOnChange={() => {
                formik.setFieldTouched("ceBienEstReponse");
                formik.setFieldValue("ceBienEstReponse", e.value);
                //nextStep();
              }}
              handleOnClick={() => nextStep()}
              errors={
                formik.touched.ceBienEstReponse &&
                formik.errors.ceBienEstReponse
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const PartThree = ({
  t,
  optionsEnvisageVendreBien,
  nextStep,
  formik,
  previousStep,
}) => {
  return (
    <div className="d-flex align-item-center justify-content-center">
      <h3
        className="d-inline text-primary cursor-pointer"
        onClick={() => {
          previousStep();
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </h3>
      <div className="form-group mx-3" style={{ minWidth: 250 }}>
        <div>
          <label
            htmlFor="envisageVendreBienReponse"
            className="action-bar-horizontal-label questionaireVMZ"
          >
            {t("Estimate.15")}
          </label>
        </div>
        <div className="btn-group-vertical btn-group-toggle row m-0 p-0">
          {optionsEnvisageVendreBien(t).map((e, i) => (
            <RadioButton
              key={i}
              radioGroupName="envisageVendreBienReponse"
              element={e}
              isSelected={formik.values.envisageVendreBienReponse === e.value}
              handleOnChange={() => {
                formik.setFieldTouched("envisageVendreBienReponse");
                formik.setFieldValue("envisageVendreBienReponse", e.value);
                setTimeout(() => {
                  formik.setFieldValue("ouiCommenceVenteReponse", "");
                }, 100);
                //nextStep();
              }}
              handleOnClick={() => nextStep()}
              errors={
                formik.touched.envisageVendreBienReponse &&
                formik.errors.envisageVendreBienReponse
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const PartFour = ({
  t,
  optionsOuiCommenceVente,
  nextStep,
  previousStep,
  formik,
}) => {
  return (
    <div className="d-flex align-item-center justify-content-center">
      <h3
        className="d-inline text-primary cursor-pointer"
        onClick={() => {
          previousStep();
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </h3>
      <div className="form-group mx-3" style={{ minWidth: 250 }}>
        <div>
          <label
            htmlFor="ouiCommenceVenteReponse"
            className="action-bar-horizontal-label questionaireVMZ"
          >
            {t("Estimate.16")}
          </label>
        </div>
        <div className="btn-group-vertical btn-group-toggle row m-0 p-0">
          {optionsOuiCommenceVente(t).map((e, i) => (
            <RadioButton
              key={i}
              radioGroupName="ouiCommenceVenteReponse"
              element={e}
              isSelected={formik.values.ouiCommenceVenteReponse === e.value}
              handleOnChange={() => {
                formik.setFieldTouched("ouiCommenceVenteReponse");
                formik.setFieldValue("ouiCommenceVenteReponse", e.value);
                //nextStep();
              }}
              handleOnClick={() => nextStep()}
              errors={
                formik.touched.ouiCommenceVenteReponse &&
                formik.errors.ouiCommenceVenteReponse
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const PartFive = ({
  t,
  optionsContacterParProfessionnel,
  nextStep,
  previousStep,
  formik,
}) => {
  return (
    <div className="d-flex align-item-center justify-content-center">
      <h3
        className="d-inline text-primary cursor-pointer"
        onClick={() => {
          previousStep();
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </h3>
      <div className="form-group mx-3" style={{ minWidth: 250 }}>
        <div>
          <label
            htmlFor="ouiContacterParProfessionnel"
            className="action-bar-horizontal-label questionaireVMZ"
          >
            {t("Estimate.17")} <br />
            {t("Estimate.98")}
          </label>
        </div>
        <div className="btn-group btn-group-toggle row p-0 m-0">
          {optionsContacterParProfessionnel(t).map((e, i) => (
            <RadioButton
              title="Souhaitez-vous être contacté par un professionnel"
              key={i}
              radioGroupName="ouiContacterParProfessionnel"
              element={e}
              isSelected={
                formik.values.ouiContacterParProfessionnel === e.value
              }
              handleOnChange={() => {
                formik.setFieldTouched("ouiContacterParProfessionnel");
                formik.setFieldValue("ouiContacterParProfessionnel", e.value);
                //nextStep();
              }}
              handleOnClick={() => nextStep()}
              errors={
                formik.touched.ouiContacterParProfessionnel &&
                formik.errors.ouiContacterParProfessionnel
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const PartSix = ({
  t,
  optionsRaisonsEstimation,
  nextStep,
  previousStep,
  goToStep,
  formik,
}) => {
  return (
    <div className="d-flex align-item-center justify-content-center">
      <h3
        className="d-inline text-primary cursor-pointer"
        onClick={() => {
          previousStep();
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </h3>
      <div className="form-group mx-3" style={{ minWidth: 250 }}>
        <div>
          <label
            htmlFor="raisonEstimation"
            className="action-bar-horizontal-label questionaireVMZ"
          >
            {t("Estimate.18")}
          </label>
        </div>
        <div className="btn-group-vertical btn-group-toggle row m-0 p-0">
          {optionsRaisonsEstimation(t).map((e, i) => (
            <RadioButton
              key={i}
              radioGroupName="raisonEstimation"
              element={e}
              isSelected={formik.values.raisonEstimation === e.value}
              handleOnChange={() => {
                formik.setFieldTouched("raisonEstimation");
                formik.setFieldValue("raisonEstimation", e.value);
                setTimeout(() => {
                  formik.setFieldValue("statutRecherche", "");
                  formik.setFieldValue("projectionFinancement", "");
                  formik.setFieldValue("emprunter", "");
                }, 100);
              }}
              handleOnClick={() => {
                if (e.value === "souhaiteAcheter") {
                  console.log("value 1", e.value);
                  goToStep(4);
                } else {
                  console.log("value 2", e.value);
                  nextStep();
                }
              }}
              errors={
                formik.touched.raisonEstimation &&
                formik.errors.raisonEstimation
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const PartSeven = ({
  t,
  optionsStatutRecherche,
  nextStep,
  previousStep,
  goToStep,
  formik,
}) => {
  return (
    <div className="d-flex align-item-center justify-content-center">
      <h3
        className="d-inline text-primary cursor-pointer"
        onClick={() => {
          goToStep(2);
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </h3>
      <div className="form-group mx-3" style={{ minWidth: 250 }}>
        <div>
          <label
            htmlFor="statutRecherche"
            className="action-bar-horizontal-label questionaireVMZ"
          >
            {t("Estimate.19")}
          </label>
        </div>
        <div className="btn-group-vertical btn-group-toggle row m-0 p-0">
          {optionsStatutRecherche(t).map((e, i) => (
            <RadioButton
              key={i}
              radioGroupName="statutRecherche"
              element={e}
              isSelected={formik.values.statutRecherche === e.value}
              handleOnChange={() => {
                formik.setFieldTouched("statutRecherche");
                formik.setFieldValue("statutRecherche", e.value);
                //nextStep();
              }}
              handleOnClick={() => nextStep()}
              errors={
                formik.touched.statutRecherche && formik.errors.statutRecherche
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const PartEight = ({
  t,
  optionsProjectionFinancement,
  nextStep,
  previousStep,
  formik,
}) => {
  return (
    <div className="d-flex align-item-center justify-content-center">
      <h3
        className="d-inline text-primary cursor-pointer"
        onClick={() => {
          previousStep();
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </h3>
      <div className="form-group mx-3" style={{ minWidth: 250 }}>
        <div>
          <label
            htmlFor="projectionFinancement"
            className="action-bar-horizontal-label questionaireVMZ"
          >
            {t("Estimate.20")}
          </label>
        </div>
        <div className="btn-group-vertical btn-group-toggle row m-0 p-0">
          {optionsProjectionFinancement(t).map((e, i) => (
            <RadioButton
              key={i}
              radioGroupName="projectionFinancement"
              element={e}
              isSelected={formik.values.projectionFinancement === e.value}
              handleOnChange={() => {
                formik.setFieldTouched("projectionFinancement");
                formik.setFieldValue("projectionFinancement", e.value);
                //nextStep();
              }}
              handleOnClick={() => nextStep()}
              errors={
                formik.touched.projectionFinancement &&
                formik.errors.projectionFinancement
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const PartNine = ({
  t,
  optionsEmprunter,
  nextStep,
  previousStep,
  formik,
}) => {
  return (
    <div className="d-flex align-item-center justify-content-center">
      <h3
        className="d-inline text-primary cursor-pointer"
        onClick={() => {
          previousStep();
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </h3>
      <div className="form-group mx-3" style={{ minWidth: 250 }}>
        <div>
          <label
            htmlFor="emprunter"
            className="action-bar-horizontal-label questionaireVMZ"
          >
            {t("Estimate.21")}
          </label>
        </div>
        <div className="btn-group btn-group-toggle row p-0 m-0">
          {optionsEmprunter(t).map((e, i) => (
            <RadioButton
              key={i}
              radioGroupName="emprunter"
              element={e}
              isSelected={formik.values.emprunter === e.value}
              handleOnChange={() => {
                formik.setFieldTouched("emprunter");
                formik.setFieldValue("emprunter", e.value);
                //nextStep();
              }}
              handleOnClick={() => nextStep()}
              errors={formik.touched.emprunter && formik.errors.emprunter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const PartTen = ({
  t,
  optionsContacterParProfessionnel,
  nextStep,
  previousStep,
  formik,
}) => {
  return (
    <div className="d-flex align-item-center justify-content-center">
      <h3
        className="d-inline text-primary cursor-pointer"
        onClick={() => {
          previousStep();
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </h3>
      <div className="form-group mx-3" style={{ minWidth: 250 }}>
        <div>
          <label
            htmlFor="ouiContacterParProfessionnel"
            className="action-bar-horizontal-label questionaireVMZ"
          >
            {t("Estimate.22")}
          </label>
        </div>
        <div className="btn-group btn-group-toggle row p-0 m-0">
          {optionsContacterParProfessionnel(t).map((e, i) => (
            <RadioButton
              title="Souhaitez-vous être contacté par un professionnel"
              key={i}
              radioGroupName="ouiContacterParProfessionnel"
              element={e}
              isSelected={
                formik.values.ouiContacterParProfessionnel === e.value
              }
              handleOnChange={() => {
                formik.setFieldTouched("ouiContacterParProfessionnel");
                formik.setFieldValue("ouiContacterParProfessionnel", e.value);
                //nextStep();
              }}
              handleOnClick={() => nextStep()}
              errors={
                formik.touched.ouiContacterParProfessionnel &&
                formik.errors.ouiContacterParProfessionnel
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const FormNav = ({ previousStep }) => {
  return (
    <Fragment>
      <div className="">
        {/* {currentStep !== 1 && ( */}
        <h3
          className="d-inline text-primary cursor-pointer"
          onClick={() => {
            previousStep();
          }}
        >
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
        </h3>
        {/* )} */}
        {/* <h4 className="d-inline text-primary p-4">
          {steps[currentStep - 1].title}
        </h4>
        {steps[currentStep - 1].information && (
          <h2
            className="d-inline text-info cursor-pointer"
            onClick={() => setShow(true)}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </h2>
        )}
        <div className="progress mt-2">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${percentage}%` }}
          ></div>
        </div> */}
      </div>
      {/* {steps[currentStep - 1].information && (
        <InformationModal
          show={show}
          handleClose={handleClose}
          title={steps[currentStep - 1].information.title}
          body={steps[currentStep - 1].information.body}
        />
      )} */}
    </Fragment>
  );
};
