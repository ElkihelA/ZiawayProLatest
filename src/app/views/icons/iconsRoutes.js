import { lazy } from "react";

const AppIcon = lazy(() => import("./AppIcon"));

const iconsRoutes = [
  {
    path: "/icons",
    component: AppIcon
  }
];

export default iconsRoutes;
