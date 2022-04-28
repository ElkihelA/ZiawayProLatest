import React, { useState, useEffect } from "react";
import StepWizard from "react-step-wizard";
import VMZFormNav from "./VMZFormNav";
import AdresseVMZForm from "./AdresseVMZForm";
import RadioIconForm from "./RadioIconForm";
import ButtonGroupForm from "./ButtonGroupForm";
import NumberInputForm from "./NumberInputForm";
import DimensionTerrainVMZForm from "./DimensionTerrainVMZForm";
import EvaluationMunicipaleVMZForm from "./EvaluationMunicipaleVMZForm";
import TaxesMunicipaleVMZForm from "./TaxesMunicipaleVMZForm";
import QuestionnaireVMZForm from "./QuestionnaireVMZForm";
import { InitEvaluation } from "app/redux/actions/RapportEvaluationActions";
import firebase from "../../services/firebase/firebase";
import "./evaluationBien.css";
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";
import PhoneNumber from "./PhoneNumber";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  type,
  stepsUniLoggedOut,
  stepsUni,
  optionsGarages,
  optionsStationnementExt,
  optionsEtatPropriete,
} from "./formulaizHelper";

import {
  handleOnAddressChange,
  handleOnTypeProprieteChange,
  handleOnGenreProprieteChange,
  handleOnTypeBatimentChange,
  handleOnNombrePiecesChange,
  handleOnNombreChambresChange,
  handleOnNombreSallesEauChange,
  handleOnNombreGaragesChange,
  handleOnNombreStationnementExterieurChange,
  handleOnSuperficieChange,
  handleOnEvaluationMunicipaleChange,
  handleOnTaxesMunicipaleChange,
  handlePasswordChange,
  handleOnEtatGeneralProprieteChange,
  handleOnReponsesQuestionsChange,
  handlePhoneNumberChange,
  handleNameChange,
  handleOnAnneeConstructionChange,
} from "./formulaizeStateUpdater";

const FormulaireVMZ = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const { t } = useTranslation();
  const [state, setState] = useState({
    formCompleted: false,
    location: {},
    genreProprietes: "",
    typeBatiment: "",
    anneeConstruction: 1900,
    username: "",
    email: "",
    phoneNumber: "",
    superficie: 0,
    standing: "",
    pieces: 0,
    chambres: 0,
    bains: 0,
    pool: "",
    garages: "",
    stationnement: 0,
    evaluationMunicipale: 0,
    taxesMunicipale: 0,
    nbrComparables: 3,
    proprietaire: "false",
    raison: "",
    type: "",
    password: "",
    genreOptions: [],
    typeOptions: [],
    steps: stepsUni(t),
  });

  useEffect(() => {
    if (auth.uid) {
      setState({ ...state, steps: stepsUni(t) });
    } else {
      setState({ ...state, steps: stepsUniLoggedOut(t) });
    }

    const data = localStorage.getItem("address");
    console.log("data", data);
    if (data !== null) {
      const location = JSON.parse(data);
      setState({ ...state, location });
    }
    dispatch(InitEvaluation());
  }, [auth.uid]);

  return (
    <div className="full-width">
      <div
        className="main-content-wrap d-flex flex-column"
        style={{
          minHeight: "auto",
          overflow: "hidden",
          padding: "0px",
          marginTop: "0px",
        }}
      >
        <div className="row text-center m-0 p-0">
          {!state.formCompleted && (
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="m-4">
                <h3>
                  {t("Estimate.1")}{" "}
                  <strong className="text-primary">{t("Estimate.2")}</strong>
                  {t("Estimate.3")}{" "}
                  <strong className="text-primary">{t("Estimate.4")}</strong>
                  {t("Estimate.5")}{" "}
                  <strong className="text-primary">{t("Estimate.6")}</strong>
                  {t("Estimate.7")}
                </h3>
              </div>
            </div>
          )}
          <div className="container align-items-center">
            <div className="row align-items-center h-100 ">
              <div className="col-lg-10 col-md-10 col-xs-12 m-auto text-center align-items-center ">
                <StepWizard
                  nav={<VMZFormNav steps={state.steps} />}
                  initialStep={localStorage.getItem("address") === null ? 1 : 2}
                >
                  <AdresseVMZForm
                    t={t}
                    queryAdresse={state.location}
                    handleOnAdresseChange={handleOnAddressChange}
                    location={state.location}
                    state={state}
                    setState={setState}
                  />
                  {!auth.uid && (
                    <Email
                      fieldName="email"
                      // handleOnChange={handleEmailChange}
                      address={state.location}
                      state={state}
                      setState={setState}
                    />
                  )}
                  {!auth.uid && (
                    <PhoneNumber
                      fieldName="phoneNumber"
                      handleOnChange={handlePhoneNumberChange}
                      state={state}
                      setState={setState}
                    />
                  )}
                  {!auth.uid && (
                    <Name
                      fieldName="username"
                      min={state.anneeConstruction}
                      max={new Date().getFullYear()}
                      handleOnChange={handleNameChange}
                      state={state}
                      setState={setState}
                    />
                  )}
                  <NumberInputForm
                    fieldName="anneeConstruction"
                    min={state.anneeConstruction}
                    max={new Date().getFullYear()}
                    state={state}
                    setState={setState}
                    handleOnChange={handleOnAnneeConstructionChange}
                  />

                  <RadioIconForm
                    fieldName="type"
                    options={type(t)}
                    handleOnChange={handleOnTypeProprieteChange}
                    state={state}
                    setState={setState}
                  />

                  <RadioIconForm
                    fieldName="genreProprietes"
                    options={state.genreOptions}
                    handleOnChange={handleOnGenreProprieteChange}
                    state={state}
                    setState={setState}
                  />

                  {state.type === "Unifamiliale" && (
                    <RadioIconForm
                      fieldName="typeBatiment"
                      options={state.typeOptions}
                      handleOnChange={handleOnTypeBatimentChange}
                      state={state}
                      setState={setState}
                    />
                  )}

                  <NumberInputForm
                    fieldName="pieces"
                    min={0}
                    handleOnChange={handleOnNombrePiecesChange}
                    state={state}
                    setState={setState}
                  />
                  <NumberInputForm
                    fieldName="chambres"
                    min={0}
                    handleOnChange={handleOnNombreChambresChange}
                    state={state}
                    setState={setState}
                  />
                  <NumberInputForm
                    fieldName="bains"
                    min={0}
                    handleOnChange={handleOnNombreSallesEauChange}
                    state={state}
                    setState={setState}
                  />

                  <ButtonGroupForm
                    fieldName="garages"
                    options={optionsGarages}
                    handleOnChange={handleOnNombreGaragesChange}
                    state={state}
                    setState={setState}
                  />
                  <ButtonGroupForm
                    fieldName="stationnement"
                    options={optionsStationnementExt}
                    handleOnChange={handleOnNombreStationnementExterieurChange}
                    state={state}
                    setState={setState}
                  />

                  <DimensionTerrainVMZForm
                    handleOnChange={handleOnSuperficieChange}
                    state={state}
                    setState={setState}
                  />

                  <EvaluationMunicipaleVMZForm
                    handleOnChange={handleOnEvaluationMunicipaleChange}
                    state={state}
                    setState={setState}
                  />
                  <TaxesMunicipaleVMZForm
                    handleOnChange={handleOnTaxesMunicipaleChange}
                    state={state}
                    setState={setState}
                  />
                  {!auth.uid && (
                    <Password
                      fieldName="password"
                      handleOnChange={handlePasswordChange}
                      state={state}
                      setState={setState}
                    />
                  )}
                  <RadioIconForm
                    fieldName="standing"
                    options={optionsEtatPropriete(t)}
                    handleOnChange={handleOnEtatGeneralProprieteChange}
                    state={state}
                    setState={setState}
                  />
                  <QuestionnaireVMZForm
                    handleOnChange={handleOnReponsesQuestionsChange}
                    formAnswers={state}
                    state={state}
                    setState={setState}
                  />
                </StepWizard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaireVMZ;
