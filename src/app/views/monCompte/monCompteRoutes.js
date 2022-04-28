import { lazy } from "react";



const MonCompte = lazy(() => import("./MonCompte"));
const UserProfile = lazy(() => import("./UserProfile"));

const monCompteRoutes = [
 

  {
    path: "/moncompte",
    component: UserProfile
  }
];

export default monCompteRoutes;
