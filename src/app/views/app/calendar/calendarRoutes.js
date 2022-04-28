import { lazy } from "react";

const AppCalendar = lazy(() => import("./AppCalendar"));

const calendarRoutes = [
  {
    path: "/calendar",
    component: AppCalendar
  }
];

export default calendarRoutes;
