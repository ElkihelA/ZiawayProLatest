import { lazy } from "react";

const Signup = lazy(() => import("./register"));

const Signin = lazy(() => import("./login"));

const ForgotPassword = lazy(() => import("./ForgotPassword"));

const Error404 = lazy(() => import("./Error"));

const EmailVerfied = lazy(() => import("./emailVerfication"));

const sessionsRoutes = [
  {
    path: "/session/signup",
    component: Signup,
  },
  {
    path: "/session/signin",
    component: Signin,
  },
  {
    path: "/session/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/session/404",
    component: Error404,
  },
  {
    path: "/emailnotVerfied",
    component: EmailVerfied,
  },
];

export default sessionsRoutes;
