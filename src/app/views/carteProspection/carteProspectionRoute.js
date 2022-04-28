import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const CarteProspection = lazy(() => import("./CarteProspection"));
const detailsCourtiers = lazy(() => import("./ContactDetails"));

const carteProspectionRoute = [
  {
    path: "/mes-biens",
    component: CarteProspection,
    auth:authRoles.membre
  },
  {
    path: "/prospection/profilcourtier",
    component: detailsCourtiers,
    auth:authRoles.membre
  },
];

export default carteProspectionRoute;
