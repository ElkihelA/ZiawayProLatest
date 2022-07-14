import { authRoles } from "./auth/authRoles";

export const navigations = (t) => {
  return [
    {
      name: t("SideNav.1"),
      description: "Lorem ipsum dolor sit.",
      type: "link",
      path: "/dashboard/v0",
      icon: "i-Home1",
      role: authRoles.Essentiel,
    },
    {
      name: t("SideNav.2"),
      description: "Lorem ipsum dolor sit.",
      type: "link",
      path: "/evaluation-bien",
      icon: "i-Money-Bag",
      role: authRoles.Essentiel,
    },
    {
      name: t("SideNav.3"),
      description: "Lorem ipsum dolor sit.",
      type: "link",
      path: "/mes-biens",
      icon: "i-Library",
      role: authRoles.Essentiel,
    },
    {
      name: "Prospecter",
      description: "Lorem ipsum dolor sit.",
      type: "link",
      path: "/newleads",
      icon: "i-Target",
      role: authRoles.Performance,
    },
    {
      name: t("SideNav.6"),
      description: "Lorem ipsum dolor sit.",
      type: "link",
      path: "/retains",
      icon: "i-retain",
      role: authRoles.Expert,
    },
    {
      name: t("SideNav.5"),
      description: "Lorem ipsum dolor sit.",
      type: "link",
      path: "/moncompte",
      icon: "i-Administrator",
      role: authRoles.Essentiel,
    }
  ];
};
