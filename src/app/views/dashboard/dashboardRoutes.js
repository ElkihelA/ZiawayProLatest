import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Dashboard = lazy(() => import("./dashboard0/Dashboard"));
const dashboardRoutes = [
  {
    path: "/dashboard/v0",
    component: Dashboard,
    auth: authRoles.Essentiel,
  },
];

export default dashboardRoutes;
