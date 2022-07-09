import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const FormulaireVMZLanding = lazy(() => import("./FormulaireVMZLanding"));

const evaluationRoute = [
  {
    path: "/evaluation-bien",
    component: FormulaireVMZLanding,
    auth: authRoles.membre,
  },
];

export default evaluationRoute;
