import { lazy } from "react";
import { authRoles } from "../../../auth/authRoles";

const Homepage = lazy(() => import("./HomePage"));
const BlogPage = lazy(() => import("./BlogPage"));
const ContactUsPage = lazy(() => import("./ContactUsPage"));
const FaqPageLogIn = lazy(() => import("./FaqPageLogIn"));

export const faqRouteLogIn = [
  {
    path: "/faqIn",
    component: FaqPageLogIn,
    auth: authRoles.membre,
  },
];
