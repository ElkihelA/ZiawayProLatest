import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const MesBiens = lazy(() => import("./MesBiens"));

const carteProspectionRoute = [
  {
    path: "/mes",
    component: MesBiens,
    auth: authRoles.membre,
  },
];

export default carteProspectionRoute;
