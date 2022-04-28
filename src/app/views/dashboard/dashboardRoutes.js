import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Dashboard = lazy(() => import("./dashboard0/Dashboard"));

const Dashboard1 = lazy(() => import("./dashboard1/Dashboard1"));

const Dashboard2 = lazy(() => import("./dashboard2/Dashboard2"));

const dashboardRoutes = [
  {
    path: "/dashboard/v0",
    component: Dashboard,
    auth: authRoles.membre,
  },
  {
    path: "/dashboard/v1",
    component: Dashboard1,
    auth: authRoles.membre,
  },
  {
    path: "/dashboard/v2",
    component: Dashboard2,
    auth: authRoles.membre,
  },
];

export default dashboardRoutes;
