import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import RadioButton from "./RadioButton";
import { Button } from "react-bootstrap";
import ReturnButton from "./ReturnButton";
import { useTranslation } from "react-i18next";
import StepWizard from "react-step-wizard";
import VMZFormNav from "./VMZFormNav";
import { useDispatch } from "react-redux";
import { ObtenirEvaluation } from "../../redux/actions/RapportEvaluationActions";
import { useHistory } from "react-router";
import * as legoData from "./410-lego-loader.json";
import * as doneData from "./doneloading.json";
import * as analysisData from "./system-analytics.json";
import * as graphData from "./group-working.json";
import * as estimateData from "./graph-animation.json";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import firebase from "../../services/firebase/firebase";
import history from "@history.js";
import {
  PartOne,
  PartTwo,
  PartThree,
  PartFour,
  PartFive,
  PartSix,
  PartSeven,
  PartEight,
  PartNine,
  PartTen,
} from "./Questionnaire1";
import { FormNav } from "./Questionnaire1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert2";

let fakeNotifications = [
  { title: "Calcul de votre evaluation", isLoading: false },
  { title: "Termine", isLoading: false },
];
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const analysisOptions = {
  loop: true,
  autoplay: true,
  animationData: analysisData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const estimateOptions = {
  loop: true,
  autoplay: true,
  animationData: estimateData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const graphOptions = {
  loop: true,
  autoplay: true,
  animationData: graphData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const validate = (values) => {
  const errors = {};

  console.log("errors", errors);

  //   if (!values.estProprietaireReponse) {
  //     errors.estProprietaireReponse = "Obligatoire";
  //   }
  if (values.estProprietaireReponse === "oui" && !values.ceBienEstReponse) {
    errors.ceBienEstReponse = "Obligatoire";
  }
  if (
    values.estProprietaireReponse === "oui" &&
    !values.envisageVendreBienReponse
  ) {
    errors.envisageVendreBienReponse = "Obligatoire";
  }
  if (
    values.envisageVendreBienReponse === "ouiCommenceVente" &&
    !values.ouiCommenceVenteReponse
  ) {
    errors.ouiCommenceVenteReponse = "Obligatoire";
  }
  if (
    values.estProprietaireReponse === "oui" &&
    !values.ouiContacterParProfessionnel
  ) {
    errors.ouiContacterParProfessionnel = "Obligatoire";
  }
  if (values.estProprietaireReponse === "non" && !values.raisonEstimation) {
    errors.raisonEstimation = "Obligatoire";
  }
  if (
    values.raisonEstimation === "souhaiteAcheter" &&
    !values.statutRecherche
  ) {
    errors.statutRecherche = "Obligatoire";
  }
  if (
    values.raisonEstimation === "souhaiteAcheter" &&
    !values.projectionFinancement
  ) {
    errors.projectionFinancement = "Obligatoire";
  }
  if (values.raisonEstimation === "souhaiteAcheter" && !values.emprunter) {
    errors.emprunter = "Obligatoire";
  }
  console.log("errors", errors);
  return errors;
};

const QuestionnaireVMZForm = ({
  handleOnChange,
  nextStep,
  previousStep,
  currentStep,
  formAnswers,
  isActive,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const userAuth = useSelector((state) => state.firebase.auth);
  const user = useSelector((state) => state.firebase.profile);
  const profile = useSelector((state) => state.firebase.profile);
  const idRapport = useSelector((state) => state.rapport.comparables);
  const result = useSelector((state) => state.rapport.result);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [loadingStep, setStep] = useState();
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const evaluationLoading = useSelector(
    (state) => state.rapport.evaluationLoading
  );
  const evaluationSuccess = useSelector(
    (state) => state.rapport.evaluationSuccess
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (formAnswers.formCompleted) {
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      let infosBien = {
        dateCreation: new Date().toLocaleDateString("fr-ca", options),
        ...formAnswers,
        userData: user,
        sendEmail: true,
        emailIsVerified: userAuth.emailVerified,
      };
      dispatch(ObtenirEvaluation(infosBien));
    }
  }, [formAnswers]);

  function emailMessage(t) {
    swal.fire(t("swal.13"), t("swal.14"), "success");
  }

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setStep(1);
        setStep1(true);
      }, 2000);
      setTimeout(() => {
        setStep(2);
        setStep2(true);
      }, 4000);
      setTimeout(() => {
        setStep(3);
        setStep3(true);
      }, 6000);
      setTimeout(() => {
        setStep(4);
        setStep4(true);
      }, 8000);
    }
  }, [loading]);

  useEffect(() => {
    if (
      evaluationSuccess &&
      profile &&
      profile.isLoaded &&
      !profile.isEmpty &&
      loading === true
    ) {
      const indicePercent =
        result.data.ficheEstimation.comparables.length > 0
          ? parseInt(result.data.ficheEstimation.comparables[0].score * 100)
          : 0;

      const date = new Date(result.data.ficheEstimation.dateCreation);
      const [month, day, year] = [
        ("0" + (date.getMonth() + 1)).slice(-2),
        ("0" + date.getDate()).slice(-2),
        date.getFullYear(),
      ];
      const [hour, minutes, seconds] = [
        ("0" + date.getHours()).slice(-2),
        ("0" + date.getMinutes()).slice(-2),
        ("0" + date.getSeconds()).slice(-2),
      ];

      // const evalReport_json = {
      //   info: {
      //     data: [
      //       {
      //         SellToFinancePurchase: data.projectionFinancement,
      //         PlanningToSell: data.envisageVendreBienReponse,
      //         Bank_Prequalification: data.emprunter,
      //         Bathrooms: formAnswers.bains,
      //         Bedrooms: formAnswers.chambres,
      //         Category_Property: formAnswers.type,
      //         City: formAnswers.location.city,
      //         Confidence_Index: indicePercent,
      //         Email_Seller_Buyer: user.email,
      //         Raison_estimation: data.raisonEstimation,
      //         Address_Evaluation: formAnswers.location.value,
      //         Date_Evaluation: `${year}-${month}-${day}T${hour}:${minutes}:${seconds}-04:00`,
      //         Garage: formAnswers.garages,
      //         General_Property_Condition: formAnswers.standing,
      //         HowAreYouSelling: data.ouiCommenceVenteReponse,
      //         Municipal_Assessment: formAnswers.evaluationMunicipale,
      //         Municipal_Tax: formAnswers.taxesMunicipale,
      //         Name: user.displayName,
      //         Parking_slots: formAnswers.stationnements,
      //         Phone_Seller_Buyer: user.phoneNumber,
      //         Property_category: formAnswers.type,
      //         Property_owner_flag: data.estProprietaireReponse,
      //         Region: formAnswers.location.state.long_name,
      //         Rooms: formAnswers.Pieces,
      //         Search_Status: data.statutRecherche,
      //         Surface_in_square_feet: formAnswers.superficie,
      //         This_property_is: data.ceBienEstReponse,
      //         Type_of_bulding: formAnswers.typeBatiment,
      //         Type_propriete: formAnswers.genreProprietes,
      //         VM_Zia: result.data.ficheEstimation.ziaEstimation.prediction,
      //         VMZ_maxi: result.data.ficheEstimation.ziaEstimation.predictionEnd,
      //         VMZ_mini:
      //           result.data.ficheEstimation.ziaEstimation.predictionStart,
      //         WillingToBeContacted: data.ouiContacterParProfessionnel,
      //         Year_of_contruction: formAnswers.anneeConstruction,
      //         Code_postal: formAnswers.location.postcode,

      //         Courtiers_recommandes:
      //           result.data.ficheEstimation.courtiers.length !== 0
      //             ? result?.data?.ficheEstimation?.courtiers.map((v) => ({
      //                 Courtier_Agence: v.agenceCourtier,
      //                 Courtier_Nom: v.nomCourtier,
      //                 Courtier_Total_ventes: v.nbVentesTotal,
      //                 Logo_Agence_URL: v.logoAgence,
      //                 Photo_URL: v.Photo,
      //               }))
      //             : "",
      //         Comparables:
      //           result.data.ficheEstimation.comparables.length !== 0
      //             ? result?.data?.ficheEstimation?.comparables?.map((v) => ({
      //                 Comparables_address: v.adresse,
      //                 Comparables_Bathrooms: v.salleBains,
      //                 Comparables_Bedrooms: v.nbrChambres,
      //                 Comparables_Rooms: v.nbrPieces,
      //                 Comparables_Similarity_score: (v.score * 100).toFixed(2),
      //                 Comparables_Surface: v.superficieTerrain,
      //                 Comparables_Type_of_building: v.typeBatiment,
      //               }))
      //             : "",
      //       },
      //     ],
      //   },
      //   vmodule: "RapportEval",
      // };

      // axios
      //   .post(
      //     "https://us-central1-ziaapp-ac0eb.cloudfunctions.net/zohoPostNewLead",
      //     evalReport_json,
      //     {
      //       crossdomain: true,
      //     }
      //   )
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));

      const email_json = {
        id: result?.data?.id,
        name: result?.data?.ficheEstimation?.displayName,
        email: result?.data?.ficheEstimation?.userEmail,
        courtiers: result?.data?.ficheEstimation?.courtiers,
        VMZ: result.data.ficheEstimation.ziaEstimation.prediction,
        VMZ_maxi: result.data.ficheEstimation.ziaEstimation.predictionEnd,
        VMZ_mini: result.data.ficheEstimation.ziaEstimation.predictionStart,
        Adresse: result.data.ficheEstimation.location.value,
      };

      axios
        .post(
          "https://us-central1-ziaapp-ac0eb.cloudfunctions.net/sendMail",
          email_json
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      // console.log(JSON.stringify(evalReport_json, null, 2));

      firebase
        .firestore()
        .collection("RapportsEvaluations")
        .doc(idRapport)
        .update({ ...data })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      // if (userAuth.emailVerified === false) {
      //   firebase.auth().currentUser.sendEmailVerification({
      //     url: `https://ziaway.ca/vmz/${idRapport}`,
      //   });
      //   // emailMessage(t);
      // }

      history.push("/vmz/" + idRapport);
    }
  }, [evaluationSuccess, profile, loading, data]);

  const formik = useFormik({
    initialValues: {
      estProprietaireReponse: "",
      ceBienEstReponse: "",
      envisageVendreBienReponse: "",
      ouiCommenceVenteReponse: "",
      ouiContacterParProfessionnel: "",
      raisonEstimation: "",
      statutRecherche: "",
      projectionFinancement: "",
      emprunter: "",
    },

    validate,
    onSubmit: (values) => {
      setLoading(true);
      if (isActive) {
        console.log(`QuestionnaireVMZForm onSubmit`, values);
        // setData(values);
      }
    },
  });

  return (
    <>
      {evaluationLoading && loading === true ? (
        <>
          {step1 && (
            <div className="col-lg-12 col-md-12 col-xs-12 col-md-offset-2">
              <div className="d-flex  align-items-center m-4">
                <span className="text-18 text-primary ">
                  {t("Report_cal.1")}
                </span>
              </div>
              <FadeIn>
                <div className="d-flex justify-content-end align-items-center">
                  <h5> {t("Report_cal.2")}</h5>

                  {loadingStep === 1 ? (
                    <Lottie options={defaultOptions} height={120} width={120} />
                  ) : (
                    <Lottie options={defaultOptions2} height={60} width={60} />
                  )}
                </div>
              </FadeIn>
            </div>
          )}

          {step2 && (
            <div className="col-lg-12 col-md-12 col-xs-12">
              <FadeIn>
                <div className="d-flex justify-content-end align-items-center">
                  <h5> {t("Report_cal.3")}</h5>
                  {loadingStep === 2 ? (
                    <Lottie options={graphOptions} height={160} width={160} />
                  ) : (
                    <Lottie options={defaultOptions2} height={60} width={60} />
                  )}
                </div>
              </FadeIn>
            </div>
          )}

          {step3 && (
            <div className="col-lg-12 col-md-12 col-xs-12">
              <FadeIn>
                <div className="d-flex justify-content-end align-items-center">
                  <h5> {t("Report_cal.4")}</h5>
                  {loadingStep === 3 ? (
                    <Lottie
                      options={analysisOptions}
                      height={120}
                      width={120}
                    />
                  ) : (
                    <Lottie options={defaultOptions2} height={60} width={60} />
                  )}
                </div>
              </FadeIn>
            </div>
          )}
          {step4 && (
            <div className="col-lg-12 col-md-12 col-xs-12">
              <FadeIn>
                <div className="d-flex justify-content-end align-items-center">
                  <h5> {t("Report_cal.5")}</h5>
                  {loadingStep === 4 ? (
                    <Lottie
                      options={estimateOptions}
                      height={120}
                      width={120}
                    />
                  ) : (
                    <Lottie options={defaultOptions2} height={60} width={60} />
                  )}
                </div>
              </FadeIn>
            </div>
          )}
        </>
      ) : (
        <div className="w-100 ">
          <form onSubmit={formik.handleSubmit}>
            {/* <StepWizard initialStep={1}>
              <PartOne t={t} optionsEstProp={optionsEstProp} formik={formik} />

              {formik.values.estProprietaireReponse &&
              formik.values.estProprietaireReponse === "oui" ? (
                <PartTwo
                  t={t}
                  optionsCeBienEst={optionsCeBienEst}
                  formik={formik}
                />
              ) : (
                <PartSix
                  t={t}
                  optionsRaisonsEstimation={optionsRaisonsEstimation}
                  formik={formik}
                />
              )}

              {formik.values.estProprietaireReponse &&
                formik.values.estProprietaireReponse === "oui" &&
                formik.values.ceBienEstReponse && (
                  <PartThree
                    t={t}
                    optionsEnvisageVendreBien={optionsEnvisageVendreBien}
                    formik={formik}
                  />
                )}
              {formik.values.envisageVendreBienReponse &&
                formik.values.envisageVendreBienReponse ===
                  "ouiCommenceVente" && (
                  <PartFour
                    t={t}
                    optionsOuiCommenceVente={optionsOuiCommenceVente}
                    formik={formik}
                  />
                )}
              {formik.values.estProprietaireReponse &&
                formik.values.estProprietaireReponse === "oui" &&
                formik.values.envisageVendreBienReponse && (
                  <PartFive
                    t={t}
                    optionsContacterParProfessionnel={
                      optionsContacterParProfessionnel
                    }
                    formik={formik}
                  />
                )}

              {formik.values.raisonEstimation &&
                formik.values.raisonEstimation === "souhaiteAcheter" && (
                  <PartSeven
                    t={t}
                    optionsStatutRecherche={optionsStatutRecherche}
                    formik={formik}
                  />
                )}
              {formik.values.raisonEstimation &&
                formik.values.raisonEstimation === "souhaiteAcheter" &&
                formik.values.statutRecherche && (
                  <PartEight
                    t={t}
                    optionsProjectionFinancement={optionsProjectionFinancement}
                    formik={formik}
                  />
                )}
              {formik.values.raisonEstimation &&
                formik.values.raisonEstimation === "souhaiteAcheter" &&
                formik.values.projectionFinancement && (
                  <PartNine
                    t={t}
                    optionsEmprunter={optionsEmprunter}
                    formik={formik}
                  />
                )}
              {formik.values.raisonEstimation &&
                formik.values.raisonEstimation === "souhaiteAcheter" &&
                formik.values.emprunter && (
                  <PartTen
                    t={t}
                    optionsContacterParProfessionnel={
                      optionsContacterParProfessionnel
                    }
                    formik={formik}
                  />
                )}
            </StepWizard> */}

            <Button
              className="align-self-start mx-3"
              type="submit"
              variant="primary"
              // disabled={evaluationLoading ? true : false}
            >
              {/* {evaluationLoading ? "Report Loading..." :  */}
              {t("Estimate.23")}
              {/* } */}
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

const optionsEstProp = (t) => {
  return [
    {
      value: "oui",
      alt: t("Estimate.73"),
      name: "ouiEstProp",
    },
    {
      value: "non",
      alt: t("Estimate.74"),
      name: "nonEstProp",
    },
  ];
};
const optionsCeBienEst = (t) => {
  return [
    {
      value: "residencePrincipale",
      alt: t("Estimate.75"),
      name: "residencePrincipale",
    },
    {
      value: "residenceSecondaire",
      alt: t("Estimate.76"),
      name: "residenceSecondaire",
    },
    {
      value: "residenceLocative",
      alt: t("Estimate.77"),
      name: "residenceLocative",
    },
    // {
    //   value: "autreResidence",
    //   alt: t("Estimate.78"),
    //   name: "autreResidence",
    // },
  ];
};

const optionsEnvisageVendreBien = (t) => {
  return [
    {
      value: "ouiCommenceVente",
      alt: t("Estimate.79"),
      name: "ouiCommenceVente",
    },
    // {
    //   value: "ouiDesQuePossible",
    //   alt: t("Estimate.80"),
    //   name: "ouiDesQuePossible",
    // },
    {
      value: "ouiDici3Mois",
      alt: t("Estimate.81"),
      name: "ouiDici3Mois",
    },
    // {
    //   value: "ouiDici6Mois",
    //   alt: t("Estimate.82"),
    //   name: "ouiDici6Mois",
    // },
    // {
    //   value: "ouiDansPlus6mois",
    //   alt: t("Estimate.83"),
    //   name: "ouiDansPlus6mois",
    // },
    {
      value: "nonPasProjetVente",
      alt: t("Estimate.84"),
      name: "nonPasProjetVente",
    },
    // {
    //   value: "nonViensDeVendre",
    //   alt: t("Estimate.85"),
    //   name: "nonViensDeVendre",
    // },
  ];
};

const optionsOuiCommenceVente = (t) => {
  return [
    {
      value: "avecAideProfessionnel",
      alt: t("Estimate.86"),
      name: "avecAideProfessionnel",
    },
    {
      value: "parPropresMoyens",
      alt: t("Estimate.87"),
      name: "parPropresMoyens",
    },
  ];
};

const optionsContacterParProfessionnel = (t) => {
  return [
    {
      value: "oui",
      alt: t("Estimate.73"),
      name: "ouiVenteAvecProfessionel",
    },
    {
      value: "non",
      alt: t("Estimate.74"),
      name: "NonVenteAvecProfessionel",
    },
  ];
};

const optionsRaisonsEstimation = (t) => {
  return [
    {
      value: "souhaiteAcheter",
      alt: t("Estimate.88"),
      name: "souhaiteAcheter",
    },
    {
      value: "viensDeVendre",
      alt: t("Estimate.89"),
      name: "viensDeVendre",
    },
    {
      value: "information",
      alt: t("Estimate.90"),
      name: "information",
    },
  ];
};

const optionsStatutRecherche = (t) => {
  return [
    {
      value: "Information",
      alt: t("Estimate.91"),
      name: "statutInformation",
    },
    {
      value: "Debute",
      alt: t("Estimate.92"),
      name: "statutDebute",
    },
    {
      value: "RechercheActive",
      alt: t("Estimate.93"),
      name: "statutRechercheActive",
    },
    {
      value: "TrouveContinue",
      alt: t("Estimate.94"),
      name: "statutTrouveContinue",
    },
  ];
};

const optionsProjectionFinancement = (t) => {
  return [
    {
      value: "ouiCommenceProjectionFinancement",
      alt: t("Estimate.95"),
      name: "ouiCommenceProjectionFinancement",
    },
    {
      value: "ouiPasCommenceProjectionFinancement",
      alt: t("Estimate.96"),
      name: "ouiPasCommenceProjectionFinancement",
    },
    {
      value: "pasDeProjectionFinancement",
      alt: t("Estimate.97"),
      name: "pasDeProjectionFinancement",
    },
  ];
};

const optionsEmprunter = (t) => {
  return [
    {
      value: "oui",
      alt: t("Estimate.73"),
      name: "ouiEmprunter",
    },
    {
      value: "non",
      alt: t("Estimate.74"),
      name: "nonEmprunter",
    },
  ];
};

export default QuestionnaireVMZForm;
