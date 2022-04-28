import { lazy } from "react";

const AppTodo = lazy(() => import("./AppTodo"));

const todoRoutes = [
  {
    path: "/todo/list",
    component: AppTodo
  }
];

export default todoRoutes;
