export const typesBatimentCondo = [
  {
    icon: "i-Home1",
    name: "Isolé (détaché)",
    alt: "Isolé (détaché)",
    value: "Isolé (détaché)",
  },
  {
    icon: "i-Building",
    name: "En rangée sur coin",
    alt: "En rangée sur coin",
    value: "En rangée sur coin",
  },
  {
    icon: "i-Home1",
    name: "	En rangée",
    alt: "En rangée",
    value: "En rangée",
  },
  {
    icon: "i-Home1",
    name: "	Jumelé",
    alt: "Jumelé",
    value: "Jumelé",
  },
  {
    icon: "i-Home1",
    name: "Quadrex",
    alt: "Quadrex",
    value: "Quadrex",
  },
];

export const genreProprietesCondo = (t) => {
  return [
    {
      icon: "i-Building",
      name: "Loft-Studio",
      alt: "Loft-Studio",
      value: "Loft/Studio",
    },
    {
      icon: "i-Building",
      name: "Appartement",
      alt: t("Estimate.37"),
      value: "Appartement",
    },
    {
      icon: "i-Home1",
      name: "Maison",
      alt: t("Estimate.38"),
      value: "Maison",
    },
  ];
};

export const genreProprietesUni = (t) => {
  return [
    {
      icon: "i-Home1",
      name: "maison-plain-pied",
      alt: t("Estimate.31"),
      value: "Maison de plain-pied",
    },
    {
      icon: "i-Building",
      name: "maison-etages",
      alt: t("Estimate.32"),
      value: "Maison à étages",
    },
    {
      icon: "i-Home1",
      name: "maison-etage-et-demi",
      alt: t("Estimate.33"),
      value: "Maison à un étage et demi",
    },
  ];
};

export const type = (t) => {
  return [
    {
      icon: "i-Home1",
      name: "Unifamiliale",
      alt: t("Estimate.29"),
      value: "Unifamiliale",
    },
    {
      icon: "i-Building",
      name: "condo",
      alt: t("Estimate.30"),
      value: "condo",
    },
  ];
};

export const typesBatimentUni = (t) => {
  return [
    {
      icon: "i-Building",
      value: "Isolé (détaché)",
      alt: t("Estimate.34"),
      name: "detache",
    },
    {
      icon: "i-Building",
      value: "jumele",
      alt: t("Estimate.35"),
      name: "jumele",
    },
    {
      icon: "i-Building",
      value: "enRange",
      alt: t("Estimate.36"),
      name: "enRange",
    },
  ];
};

export const stepsUniLoggedOut = (t) => {
  return [
    { title: t("Estimate.24") },

    {
      title: t("Estimate.100"),
    },
    { title: t("Estimate.102") },
    { title: t("Estimate.99") },
    { title: t("Estimate.25") },
    { title: t("Estimate.26") },
    { title: t("Estimate.27") },
    { title: t("Estimate.28") },

    {
      title: t("Estimate.43"),
      information: {
        body: t("Estimate.44"),
      },
    },
    { title: t("Estimate.45") },
    {
      title: t("Estimate.46"),
      information: {
        body: t("Estimate.47"),
      },
    },
    { title: t("Estimate.48") },
    { title: t("Estimate.49") },
    {
      title: t("Estimate.50"),
    },
    {
      title: t("Estimate.51"),
    },
    {
      title: t("Estimate.52"),
    },

    {
      title: t("Estimate.101"),
    },
    { title: t("Estimate.53") },
    {
      title: t("Estimate.54"),
      information: {
        body: t("Estimate.55"),
      },
    },
    // { title: "Calcul de votre estimation" },
  ];
};

export const stepsUni = (t) => {
  return [
    {
      title: t("Estimate.24"),
    },

    { title: t("Estimate.25") },
    {
      title: t("Estimate.26"),
      information: {
        title: t("Estimate.26"),
        t1: t("Estimate.103"),
        b1: t("Estimate.105"),
        t2: t("Estimate.106"),
        b2: t("Estimate.107"),
      },
    },
    {
      title: t("Estimate.27"),
      information: {
        t1: t("Estimate.108"),
        b1: t("Estimate.109"),
        t2: t("Estimate.110"),
        b2: t("Estimate.111"),
        t3: t("Estimate.112"),
        b3: t("Estimate.113"),
      },
    },
    {
      title: t("Estimate.28"),
      information: {
        t1: t("Estimate.114"),
        b1: t("Estimate.115"),
        t2: t("Estimate.116"),
        b2: t("Estimate.117"),
        t3: t("Estimate.118"),
        b3: t("Estimate.119"),
      },
    },
    {
      title: t("Estimate.43"),
      information: {
        body: t("Estimate.44"),
      },
    },
    { title: t("Estimate.45") },
    {
      title: t("Estimate.46"),
      information: {
        body: t("Estimate.47"),
      },
    },
    { title: t("Estimate.48") },
    { title: t("Estimate.49") },
    {
      title: t("Estimate.50"),
    },
    {
      title: t("Estimate.51"),
    },
    {
      title: t("Estimate.52"),
    },
    { title: t("Estimate.53") },
    {
      title: t("Estimate.54"),
      information: {
        body: t("Estimate.55"),
      },
    },
    // { title: "Calcul de votre estimation" },
  ];
};

export const stepsCondoLoggedOut = (t) => {
  return [
    { title: t("Estimate.56") },
    {
      title: t("Estimate.100"),
    },
    { title: t("Estimate.102") },
    {
      title: t("Estimate.100"),
    },
    { title: t("Estimate.57") },
    { title: t("Estimate.58") },
    { title: t("Estimate.59") },

    {
      title: t("Estimate.60"),
      information: {
        body: t("Estimate.61"),
      },
    },
    { title: t("Estimate.62") },
    {
      title: t("Estimate.63"),
      information: {
        body: t("Estimate.64"),
      },
    },
    { title: t("Estimate.65") },
    { title: t("Estimate.66") },
    {
      title: t("Estimate.67"),
    },
    {
      title: t("Estimate.68"),
    },
    {
      title: t("Estimate.69"),
    },
    { title: t("Estimate.70") },

    {
      title: t("Estimate.101"),
    },
    {
      title: t("Estimate.71"),
      information: {
        body: t("Estimate.72"),
      },
    },
    // { title: "Calcul de votre estimation" },
  ];
};

export const stepsCondo = (t) => {
  return [
    { title: t("Estimate.56") },
    { title: t("Estimate.57") },
    { title: t("Estimate.58") },
    {
      title: t("Estimate.59"),
      information: {
        t1: t("Estimate.120"),
        b1: t("Estimate.121"),
        t2: t("Estimate.122"),
        b2: t("Estimate.123"),
      },
    },

    {
      title: t("Estimate.60"),
      information: {
        body: t("Estimate.61"),
      },
    },
    { title: t("Estimate.62") },
    {
      title: t("Estimate.63"),
      information: {
        body: t("Estimate.64"),
      },
    },
    { title: t("Estimate.65") },
    { title: t("Estimate.66") },
    {
      title: t("Estimate.67"),
    },
    {
      title: t("Estimate.68"),
    },
    {
      title: t("Estimate.69"),
    },
    { title: t("Estimate.70") },

    {
      title: t("Estimate.71"),
      information: {
        body: t("Estimate.72"),
      },
    },
    // { title: "Calcul de votre estimation" },
  ];
};

export const optionsPiscine = [
  {
    value: "yes",
    alt: "Oui",
    name: "ouiPiscine",
  },
  {
    value: "no",
    alt: "Non",
    name: "nonPiscine",
  },
];

export const optionsGarages = [
  { value: "0", alt: "0", name: "0garage" },
  { value: "1", alt: "1", name: "1garage" },
  { value: "2", alt: "2", name: "2garages" },
  { value: "3", alt: "3", name: "3garages" },
  { value: "4", alt: "3+", name: "3plusGarages" },
];

export const optionsStationnementExt = [
  { value: "0", alt: "0", name: "0stationnementExt" },
  { value: "1", alt: "1", name: "1stationnementExt" },
  { value: "2", alt: "2", name: "2stationnementsExt" },
  { value: "3", alt: "3", name: "3stationnementsExt" },
  { value: "4", alt: "4", name: "3plusStationnementsExt" },
];

export const optionsEtatPropriete = (t) => {
  return [
    {
      value: "refaitNeuf",
      alt: t("Estimate.39"),
      name: "refaitNeufEtatProp",
    },
    {
      value: "bon",
      alt: t("Estimate.40"),
      name: "bonEtatProp",
    },
    {
      value: "rafraichissement",
      alt: t("Estimate.41"),
      name: "rafraichissementEtatProp",
    },
    {
      value: "travaux",
      alt: t("Estimate.42"),
      name: "travauxEtatProp",
    },
  ];
};
