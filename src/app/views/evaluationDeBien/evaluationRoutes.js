import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const FormulaireVMZ = lazy(() => import("./FormulaireVMZ"));
const FormulaireVMZLanding = lazy(() => import("./FormulaireVMZLanding"));

const evaluationRoute = [
  {
    path: "/evaluation-bien",
    component: FormulaireVMZLanding,
    auth: authRoles.guest,
  },
];

export default evaluationRoute;
