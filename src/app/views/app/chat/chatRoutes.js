import { lazy } from "react";

const AppChat = lazy(() => import("./AppChat"));

const chatRoutes = [
  {
    path: "/chat",
    component: AppChat
  }
];

export default chatRoutes;
