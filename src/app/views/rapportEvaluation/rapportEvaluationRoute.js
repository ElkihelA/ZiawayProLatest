import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const RapportEvaluation = lazy(() => import("./RapportEvaluation"));

const rapportEvaluationRoute = [
  {
    path: "/prospection/rapportEvaluation/:id",
    component: RapportEvaluation,
    auth:authRoles.Essentiel
  }
];

export default rapportEvaluationRoute;
