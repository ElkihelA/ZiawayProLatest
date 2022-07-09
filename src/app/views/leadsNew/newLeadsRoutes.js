import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Leads = lazy(() => import("./NewLeads"));

const newLeadRoutes = [
  {
    path: "/newleads",
    component: Leads,
    auth: authRoles.Performance,
  },
];

export default newLeadRoutes;
