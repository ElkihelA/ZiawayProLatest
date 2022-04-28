import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const video = lazy(() => import("./VideoChat"));
const incomingVideo = lazy(() => import("./IncomingVideo"));

const videoCallRoutes = [
  {
    path: "/videoChat",
    component: video,
    auth: authRoles.membre,
  },
  {
    path: "/incomingVideo",
    component: incomingVideo,
    auth: authRoles.membre,
  },
];

export default videoCallRoutes;
