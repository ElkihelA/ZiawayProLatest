import { lazy } from "react";

const Formations = lazy(() => import("./Formations"));
const FormationDetails = lazy(() => import("./FormationDetails"));

const formationsRoutes = [
  {
    path: "/formations",
    component: Formations
  },
  {
    path: "/formation/:id",
    component: FormationDetails
  }

];

export default formationsRoutes;
