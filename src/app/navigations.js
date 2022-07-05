import { authRoles } from "./auth/authRoles";

export const navigations = (t) => {
  return [
    {
      name: t("SideNav.1"),
      description: "Lorem ipsum dolor sit.",
      type: "link",
      path: "/dashboard/v0",
      icon: "i-Home1",
      role: authRoles.membre,
      // sub: [
      //   {
      //     icon: "i-Clock-4",
      //     name: "Version 0",
      //     path: "/dashboard/v0",
      //     type: "link",
      //     role: authRoles.membre,
      //   },
      //   {
      //     icon: "i-Clock-3",
      //     name: "Version 1",
      //     path: "/dashboard/v1",
      //     type: "link",
      //     role: authRoles.membre,
      //   },
      //   {
      //     icon: "i-Clock-4",
      //     name: "Version 2",
      //     path: "/dashboard/v2",
      //     type: "link",
      //     role: "ADMIN"
      //   }
      // ]
    },

    {
      name: t("SideNav.2"),
      description: "Lorem ipsum dolor sit.",
      type: "link",
      path: "/evaluation-bien",
      icon: "i-Money-Bag",
      role: authRoles.membre,
    },
    // {
    //   name: 'leads',
    //   description: 'Lorem ipsum dolor sit.',
    //   type: 'link',
    //   path: '/leads',
    //   icon: 'i-Money-Bag',
    //   role: authRoles.membre,
    // },

    {
      name: t("SideNav.3"),
      description: "Lorem ipsum dolor sit.",
      type: "link",
      path: "/mes-biens",
      icon: "i-Library",
      role: authRoles.membre,
    },
    {
      name: "Prospecter",
      description: "Lorem ipsum dolor sit.",
      type: "link",
      path: "/newleads",
      icon: "i-Target",
      role: authRoles.membre,
    },
    // {
    //   name: t("SideNav.4"),
    //   description: "Lorem ipsum dolor sit.",
    //   type: "link",
    //   path: "/formations",
    //   icon: "i-Book",
    //   role: authRoles.membre,
    // },
    {
      name: t("SideNav.5"),
      description: "Lorem ipsum dolor sit.",
      type: "link",
      path: "/moncompte",
      icon: "i-Administrator",
      role: authRoles.membre,
    },
    // {
    //   name: "Mon compte",
    //   description: "Lorem ipsum dolor sit.",
    //   type: "link",
    //   path: "/moncompte",
    //   icon: "i-File-Clipboard-File--Text",
    //   role: authRoles.membre,
    // },
    // {
    //   name: "Widgets",
    //   description: "Lorem ipsum dolor sit.",
    //   type: "dropDown",
    //   icon: "i-Windows-2",
    //   sub: [
    //     {
    //       icon: "i-Receipt-4",
    //       name: "Card",
    //       path: "/widgets/card",
    //       type: "link"
    //     },
    //     {
    //       icon: "i-Receipt-4",
    //       name: "Statistics",
    //       path: "/widgets/statistics",
    //       type: "link"
    //     },
    //     {
    //       icon: "i-Receipt-4",
    //       name: "List",
    //       path: "/widgets/list",
    //       type: "link"
    //     },
    //     {
    //       icon: "i-Receipt-4",
    //       name: "App",
    //       path: "/widgets/app",
    //       type: "link"
    //     },
    //     {
    //       icon: "i-Receipt-4",
    //       name: "Weather App",
    //       path: "/widgets/weather-app",
    //       type: "link"
    //     }
    //   ]
    // },

    {
      name: "Data Tables",
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-File-Horizontal-Text",
      sub: [
        {
          icon: "i-File-Horizontal-Text",
          name: "Basic",
          path: "/data-table/basic",
          type: "link",
        },
        {
          icon: "i-Full-View-Window",
          name: "Default Sorted",
          path: "/data-table/default-sorted",
          type: "link",
        },
        {
          icon: "i-Filter-2",
          name: "Multi Column Ordering",
          path: "/data-table/multi-column-ordering",
          type: "link",
        },
        {
          icon: "i-Code-Window",
          name: "Search in Table",
          path: "/data-table/search",
          type: "link",
        },
        {
          icon: "i-Filter-2",
          name: "Cell Editor",
          path: "/data-table/cell-editor",
          type: "link",
        },
      ],
    },
    {
      name: "Sessions",
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-Administrator",
      sub: [
        {
          icon: "i-Add-User",
          name: "Sign up",
          path: "/sessions/signup",
          type: "link",
        },
        {
          icon: "i-Checked-User",
          name: "Sign in",
          path: "/sessions/signin",
          type: "link",
        },
        {
          icon: "i-Find-User",
          name: "Forgot",
          path: "/sessions/forgot",
          type: "link",
        },
      ],
    },
    {
      name: "Pages",
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-Windows-2",
      sub: [
        {
          icon: "i-Error-404-Window",
          name: "Not Found",
          path: "/sessions/404",
          type: "link",
        },
        {
          icon: "i-Billing",
          name: "Pricing Table",
          path: "/pages/pricing-table",
          type: "link",
        },
        {
          icon: "i-File-Search",
          name: "Search Results",
          path: "/pages/search-results",
          type: "link",
        },
        {
          icon: "i-Administrator",
          name: "User Profile",
          path: "/pages/user-profile",
          type: "link",
        },
        {
          icon: "i-Speach-Bubble-Asking",
          name: "FAQ",
          path: "/pages/faq",
          type: "link",
        },
        {
          icon: "i-File",
          name: "Blank Page",
          path: "/pages/blank-page",
          type: "link",
        },
      ],
    },
    {
      name: "Icons",
      description: "600+ premium icons",
      type: "link",
      icon: "i-Cloud-Sun",
      path: "/icons",
    },
    {
      name: "Others",
      description: "Lorem ipsum dolor sit.",
      type: "dropDown",
      icon: "i-Double-Tap",
      sub: [
        {
          icon: "i-Error-404-Window",
          name: "Not found",
          path: "/others/404",
          type: "link",
        },
      ],
    },
    {
      name: "Doc",
      type: "extLink",
      description: "Lorem ipsum dolor sit.",
      tooltip: "Documentation",
      icon: "i-Safe-Box1",
      path: "http://demos.ui-lib.com/gull-doc",
    },
  ];
};
