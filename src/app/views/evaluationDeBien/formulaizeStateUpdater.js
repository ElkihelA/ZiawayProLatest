import { useTranslation } from "react-i18next";
import {
  typesBatimentCondo,
  genreProprietesCondo,
  genreProprietesUni,
  typesBatimentUni,
  stepsUni,
  stepsCondo,
} from "./formulaizHelper";

export const handleOnAddressChange = (location, state, setState) => {
  console.log("handleOnAddressChange", location);
  setState({ ...state, location });
};
export const handleOntypeChange = (type, state, setState) => {
  console.log("handleOnAddressChange", type);
  setState({ ...state, type });
};

export const handleOnTypeProprieteChange = (type, state, setState, t) => {
  console.log("handleOnTypeProprieteChange", type);
  switch (type) {
    case "Unifamiliale":
      setState({
        ...state,
        genreOptions: genreProprietesUni(t),
        typeOptions: typesBatimentUni(t),
        steps: stepsUni(t),
        type,
      });

      break;
    case "condo":
      setState({
        ...state,
        genreOptions: genreProprietesCondo(t),
        typeOptions: typesBatimentCondo,
        steps: stepsCondo(t),
        type,
      });
      break;
    default:
      setState({ ...state, options: [], type });
  }
};

export const handleOnGenreProprieteChange = (
  genreProprietes,
  state,
  setState
) => {
  console.log("handleOnGenreProprieteChange", genreProprietes);
  setState({ ...state, genreProprietes });
};

export const handleOnTypeBatimentChange = (typeBatiment, state, setState) => {
  console.log("handleOnTypeBatimentChange", typeBatiment);
  setState({ ...state, typeBatiment });
};

export const handleOnAnneeConstructionChange = (
  anneeConstruction,
  state,
  setState
) => {
  console.log("handleOnAnneeConstructionChange", anneeConstruction);
  localStorage.removeItem("address");
  setState({ ...state, anneeConstruction });
};

export const handleNameChange = (username, state, setState) => {
  console.log("username", username);
  setState({ ...state, username });
};

export const handleEmailChange = (email, state, setState) => {
  console.log("email", email);
  setState({ ...state, email });
};

export const handlePhoneNumberChange = (phoneNumber, state, setState) => {
  console.log("phone number", phoneNumber);
  setState({ ...state, phoneNumber });
};

export const handlePasswordChange = (password, state, setState) => {
  console.log("email", password);
  setState({ ...state, password });
};

export const handleOnNombrePiecesChange = (pieces, state, setState) => {
  console.log("handleOnNombrePiecesChange", pieces);
  setState({ ...state, pieces });
};

export const handleOnNombreChambresChange = (chambres, state, setState) => {
  console.log("handleOnNombreChambresChange", chambres);
  setState({ ...state, chambres });
};

export const handleOnNombreSallesEauChange = (bains, state, setState) => {
  console.log("handleOnNombreSallesEauChange", bains);
  setState({ ...state, bains });
};

export const handleOnPiscineChange = (pool, state, setState) => {
  console.log("handleOnPiscineChange", pool);
  setState({ ...state, pool });
};

export const handleOnNombreGaragesChange = (garages, state, setState) => {
  console.log("handleOnNombreGaragesChange", garages);
  setState({ ...state, garages });
};

export const handleOnNombreStationnementExterieurChange = (
  stationnement,
  state,
  setState
) => {
  console.log("handleOnNombreStationnementExterieurChange", stationnement);
  setState({ ...state, stationnement });
};

export const handleOnSuperficieChange = (superficie, state, setState) => {
  console.log("handleOnSuperficieChange", superficie);
  setState({ ...state, superficie });
};

export const handleOnDimensionTerrainChange = (
  superficieHabitable,
  state,
  setState
) => {
  console.log("handleOnSuperficieHabitableChange", superficieHabitable);
  setState({ ...state, superficieHabitable });
};

export const handleOnEvaluationMunicipaleChange = (
  evaluationMunicipale,
  state,
  setState
) => {
  console.log("handleOnEvaluationMunicipaleChange", evaluationMunicipale);
  setState({ ...state, evaluationMunicipale });
};

export const handleOnTaxesMunicipaleChange = (
  taxesMunicipale,
  state,
  setState
) => {
  console.log("handleOnTaxesMunicipaleChange", taxesMunicipale);
  setState({ ...state, taxesMunicipale });
};

export const handleOnEtatGeneralProprieteChange = (
  standing,
  state,
  setState
) => {
  console.log("handleOnEtatGeneralProprieteChange", standing);
  setState({ ...state, standing, formCompleted: true });
};

export const handleOnReponsesQuestionsChange = (
  reponsesQuestions,
  state,
  setState
) => {
  console.log("handleOnReponsesQuestionsChange", reponsesQuestions);
  setState({ ...state, ...reponsesQuestions });
};
