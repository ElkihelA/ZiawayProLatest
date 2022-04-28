import { lazy } from "react";

const ContactTable = lazy(() => import("./ContactTable"));

const ContactList = lazy(() => import("./ContactList"));

const ContactCard = lazy(() => import("./ContactCard"));

const ContactDetails = lazy(() => import("./ContactDetails"));

const contactRoutes = [
  {
    path: "/contact/table",
    component: ContactTable
  },
  {
    path: "/contact/list",
    component: ContactList
  },
  {
    path: "/contact/card",
    component: ContactCard
  },
  {
    path: "/contact/details",
    component: ContactDetails
  }
];

export default contactRoutes;
