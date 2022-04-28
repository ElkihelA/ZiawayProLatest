import { lazy } from "react";

const InvoiceList = lazy(() => import("./InvoiceList"));

const InvoiceDetails = lazy(() => import("./InvoiceDetails"));

const invoiceRoutes = [
  {
    path: "/invoice/list",
    component: InvoiceList
  },
  {
    path: "/invoice/:id",
    component: InvoiceDetails
  }
];

export default invoiceRoutes;
