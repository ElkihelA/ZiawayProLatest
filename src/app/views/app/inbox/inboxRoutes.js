import { lazy } from "react";

const Inbox = lazy(() => import("./AppInbox"));

const inboxRoutes = [
  {
    path: "/vmz/:id",
    exact: true,
    component: Inbox
  }
];

export default inboxRoutes;
