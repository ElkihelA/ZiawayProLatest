import { lazy } from "react";
import { authRoles } from "../../../auth/authRoles";

const Homepage = lazy(() => import("./HomePage"));
const BlogPage = lazy(() => import("./BlogPage"));
const ContactUsPage = lazy(() => import("./ContactUsPage"));
const FaqPage = lazy(() => import("./FaqPage"));

export const homeRoute = [
  {
    path: "/homepage",
    component: Homepage,
    auth: authRoles.guest,
  },
];

export const blogRoute = [
  {
    path: "/blog",
    component: BlogPage,
    auth: authRoles.guest,
  },
];

export const contactRoute = [
  {
    path: "/contact",
    component: ContactUsPage,
    auth: authRoles.guest,
  },
];

export const faqRoute = [
  {
    path: "/faq",
    component: FaqPage,
    auth: authRoles.guest,
  },
];
