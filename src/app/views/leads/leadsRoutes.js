import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Leads = lazy(() => import("./Leads"));

const dashboardRoutes = [
  {
    path: "/leads",
    component: Leads,
    auth: authRoles.membre,
  },
];

export default dashboardRoutes;
