import React, { useState, useEffect } from "react";
import Select from "react-select";
import TabsSection from "./sections/TabsSection";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import Map from "../carteProspection/Map";
import { formatters } from "algolia-places-react";
import { Dropdown } from "react-bootstrap";
import AcceptCallModal from "../videoCall/AcceptCallModal";
import { useTranslation } from "react-i18next";

const NewLeads = () => {
  const { t } = useTranslation();
  const Meetings = useSelector((state) => state.firestore.ordered.Meetings);
  const [menu, setMenu] = useState(false);
  const [All, setAll] = useState(null);
  const [allProspects, setAllProspects] = useState(null);
  const [evaluations, setEvals] = useState([]);
  const [datedEval, setDatedEvals] = useState([]);
  const [prospects, setProspects] = useState([]);
  const [datedProsp, setDatedProsp] = useState([]);
  const [initialDate, setInitialDate] = useState(null);
  const [finalDate, setFinalDate] = useState(null);
  const [buyers, setBuyers] = useState(null);
  const [datedBuyers, setDatedBuyers] = useState([]);
  const [sellers, setSellers] = useState(null);
  const [datedSellers, setDatedSellers] = useState([]);
  const reports = useSelector(
    (state) => state.firestore.ordered.RapportsEvaluations
  );

  const [selectedMarker, setSelectedMarkers] = useState(false);
  const [cities, setCities] = useState(null);
  const [muncipalities, setMuncipal] = useState(null);
  const [projectStatus, setStatus] = useState(null);
  const [buyerCheck, setBuyerCheck] = useState(null);
  const [coordinates, setCordinates] = useState([]);

  const [cityValue, setCityValue] = useState(null);
  const [munciValue, setMunciValue] = useState(null);
  const [projectValue, setProjectValue] = useState(null);
  const [ownerValue, setOwnerValue] = useState(null);
  const [dateInfo, setDate] = useState(false);

  const options = [
    { value: "oui", label: t("Leads.77") },
    { value: "non", label: t("Leads.78") },
    { value: "all", label: t("Leads.79") },
  ];

  const oui = "oui";
  useFirestoreConnect([
    {
      collection: "RapportsEvaluations",
      // where: ["ouiContacterParProfessionnel", "==", "oui"],
      orderBy: [["dateCreation", "desc"]],
    },
  ]);

  const handleClick = (marker, event) => {
    setSelectedMarkers(marker);
  };

  const formatter = (data) => {
    const test = data?.map((v) => ({
      value: v,
      label: v,
    }));
    return test;
  };

  const cityFormatter = (data) => {
    let test = [];

    for (let i = 0; i <= data?.length; i++) {
      if (test.includes(data[i]?.location?.city) === false) {
        test.push(data[i]?.location?.city);
      }
    }

    return test;
  };

  const muncipalFormatter = (data) => {
    let test = [];

    for (let i = 0; i <= data?.length; i++) {
      if (test.includes(data[i]?.municipalite) === false) {
        test.push(data[i]?.municipalite);
      }
    }

    return test;
  };

  const statusFormatter = (data) => {
    let test = [];

    for (let i = 0; i <= data?.length; i++) {
      if (test.includes(data[i]) === false) {
        test.push(data[i]);
      }
    }

    return test;
  };

  useEffect(() => {
    const test = reports?.filter(
      (v) => v.ouiContacterParProfessionnel === "oui"
      // && v.courtiers.length === 0
    );
    const test2 = reports?.filter(
      (v) => v.ouiContacterParProfessionnel === "non"
    );

    const seller = reports?.filter((v) => v.estProprietaireReponse === "oui");

    const buyer = reports?.filter((v) => v.estProprietaireReponse === "non");

    setBuyers(buyer);
    setSellers(seller);
    setAllProspects(test2);
    setProspects(test2);
    setAll(test);
    setEvals(test);
  }, [reports]);

  useEffect(() => {
    if (datedEval?.length !== 0) {
      const test = datedEval?.filter(
        (v) => v.ouiContacterParProfessionnel === "oui"
      );

      const test2 = datedEval?.filter(
        (v) => v.ouiContacterParProfessionnel === "non"
      );
      setDatedBuyers(test);
      setDatedSellers(test2);
    }
  }, [datedEval]);

  useEffect(() => {
    if (All) {
      setCities(cityFormatter(All));
      setMuncipal(muncipalFormatter(All));
    }
  }, [All]);

  useEffect(() => {
    if (evaluations) {
      const seller = evaluations?.filter(
        (v) => v.estProprietaireReponse === "oui"
      );

      const buyer = evaluations?.filter(
        (v) => v.estProprietaireReponse === "non"
      );

      setBuyers(buyer);
      setSellers(seller);
    }
  }, [evaluations]);

  console.log("dated", datedEval, datedBuyers, datedSellers);

  const competitiveList = [
    {
      title: t("Leads.12"),
      value: "165",
      subTitle:
        dateInfo === true ? `${datedEval?.length}` : `${evaluations?.length}`,
      subValue: "100%",
      subValueColor: "text-body",
    },
    {
      title: t("Leads.13"),
      value: "$57.2m",
      subTitle:
        dateInfo === true ? `${datedBuyers?.length}` : `${buyers?.length}`,
      subValue:
        dateInfo === true
          ? datedBuyers?.length === 0
            ? "0%"
            : `${((datedBuyers?.length * 100) / datedEval?.length).toFixed()}%`
          : buyers?.length === 0
          ? "0%"
          : `${((buyers?.length * 100) / evaluations?.length).toFixed()}%`,
      subValueColor:
        ((buyers?.length * 100) / evaluations?.length).toFixed() >= 50
          ? "text-success"
          : "text-danger",
    },
    {
      title: t("Leads.14"),
      value: "14.3%",
      subTitle:
        dateInfo === true ? `${datedSellers?.length}` : `${sellers?.length}`,
      subValue:
        dateInfo === true
          ? datedSellers?.length === 0
            ? "0%"
            : `${((datedSellers?.length * 100) / datedEval?.length).toFixed()}%`
          : sellers?.length === 0
          ? "0%"
          : `${((sellers?.length * 100) / evaluations?.length).toFixed()}%`,
      subValueColor:
        ((sellers?.length * 100) / evaluations?.length).toFixed() >= 50
          ? "text-success"
          : "text-danger",
    },
  ];

  const onCityChange = (value) => {
    setDate(false);
    setMunciValue(null);
    const test = All.filter((v) => v.location.city === value);
    const test2 = allProspects.filter((v) => v.location.city === value);
    let filteredmunci = All.filter((v) => v.location.city === value).map(
      (v) => v
    );

    setEvals(test);
    setProspects(test2);
    setMuncipal(muncipalFormatter(filteredmunci));
  };

  const onMuncipleChange = (value) => {
    setDate(false);
    const test = All.filter(
      (v) => v.municipalite === value && v.location.city === cityValue.value
    );

    const test2 = allProspects.filter(
      (v) => v.municipalite === value && v.location.city === cityValue.value
    );

    setEvals(test);
    setProspects(test2);
  };

  const onOwnerChange = (value) => {
    setDate(false);
    setProjectValue(null);
    if (value !== "all") {
      if (cityValue === null && munciValue === null) {
        const test = All.filter((v) => v.estProprietaireReponse === value);
        const test2 = allProspects.filter(
          (v) => v.estProprietaireReponse === value
        );
        setEvals(test);
        setProspects(test2);
      } else {
        if (cityValue !== null && munciValue !== null) {
          const test = All.filter(
            (v) =>
              v.estProprietaireReponse === value &&
              v.location.city === cityValue.value &&
              v.municipalite === munciValue.value
          );
          const test2 = allProspects.filter(
            (v) =>
              v.estProprietaireReponse === value &&
              v.location.city === cityValue.value &&
              v.municipalite === munciValue.value
          );
          setEvals(test);
          setProspects(test2);
        } else {
          if (cityValue === null) {
            const test = All.filter(
              (v) =>
                v.estProprietaireReponse === value &&
                v.municipalite === munciValue.value
            );
            const test2 = allProspects.filter(
              (v) =>
                v.estProprietaireReponse === value &&
                v.municipalite === munciValue.value
            );
            setEvals(test);
            setProspects(test2);
          } else {
            if (munciValue === null) {
              const test = All.filter(
                (v) =>
                  v.estProprietaireReponse === value &&
                  v.location.city === cityValue.value
              );
              const test2 = allProspects.filter(
                (v) =>
                  v.estProprietaireReponse === value &&
                  v.location.city === cityValue.value
              );
              setEvals(test);
              setProspects(test2);
            }
          }
        }
      }

      if (value === "oui") {
        const test2 = All.map((v) => v.envisageVendreBienReponse);
        setBuyerCheck(false);
        setStatus(statusFormatter(test2));
      } else {
        setBuyerCheck(true);
        const test3 = All.map((v) => v.statutRecherche);
        setStatus(statusFormatter(test3));
      }
    } else {
      setProjectValue(null);
      //put a check for other fields
      if (cityValue === null && munciValue === null) {
        setEvals(All);
        setProspects(allProspects);
      } else {
        if (cityValue !== null && munciValue !== null) {
          const test = All.filter(
            (v) =>
              v.location.city === cityValue.value &&
              v.municipalite === munciValue.value
          );
          const test2 = allProspects.filter(
            (v) =>
              v.location.city === cityValue.value &&
              v.municipalite === munciValue.value
          );
          setEvals(test);
          setProspects(test2);
        } else {
          if (cityValue === null) {
            const test = All.filter((v) => v.municipalite === munciValue.value);
            const test2 = allProspects.filter(
              (v) => v.municipalite === munciValue.value
            );
            setEvals(test);
            setProspects(test2);
          } else {
            if (munciValue === null) {
              const test = All.filter(
                (v) => v.location.city === cityValue.value
              );
              const test2 = allProspects.filter(
                (v) => v.location.city === cityValue.value
              );
              setEvals(test);
              setProspects(test2);
            }
          }
        }
      }
    }
  };

  const onStatusChange = (value) => {
    setDate(false);
    if (buyerCheck === true) {
      if (cityValue === null && munciValue === null) {
        const test2 = All.filter((v) => v.statutRecherche === value);
        const test4 = allProspects.filter((v) => v.statutRecherche === value);
        setEvals(test2);
        setProspects(test4);
      } else {
        if (cityValue !== null && munciValue !== null) {
          const test2 = All.filter(
            (v) =>
              v.statutRecherche === value &&
              v.location.city === cityValue.value &&
              v.municipalite === munciValue.value
          );
          const test4 = allProspects.filter(
            (v) =>
              v.statutRecherche === value &&
              v.location.city === cityValue.value &&
              v.municipalite === munciValue.value
          );
          setEvals(test2);
          setProspects(test4);
        } else {
          if (cityValue === null) {
            const test2 = All.filter(
              (v) =>
                v.statutRecherche === value &&
                v.municipalite === munciValue.value
            );
            const test4 = allProspects.filter(
              (v) =>
                v.statutRecherche === value &&
                v.municipalite === munciValue.value
            );
            setEvals(test2);
            setProspects(test4);
          } else {
            if (munciValue === null) {
              const test2 = All.filter(
                (v) =>
                  v.statutRecherche === value &&
                  v.location.city === cityValue.value
              );
              const test4 = allProspects.filter(
                (v) =>
                  v.statutRecherche === value &&
                  v.location.city === cityValue.value
              );
              setEvals(test2);
              setProspects(test4);
            }
          }
        }
      }
    } else {
      if (cityValue === null && munciValue === null) {
        const test3 = evaluations.filter(
          (v) => v.envisageVendreBienReponse === value
        );
        const test5 = prospects.filter(
          (v) => v.envisageVendreBienReponse === value
        );
        setEvals(test3);
        setProspects(test5);
      } else {
        if (cityValue !== null && munciValue !== null) {
          const test3 = All.filter(
            (v) =>
              v.envisageVendreBienReponse === value &&
              v.location.city === cityValue.value &&
              v.municipalite === munciValue.value
          );
          const test5 = allProspects.filter(
            (v) =>
              v.envisageVendreBienReponse === value &&
              v.location.city === cityValue.value &&
              v.municipalite === munciValue.value
          );
          setEvals(test3);
          setProspects(test5);
        } else {
          if (cityValue === null) {
            const test3 = All.filter(
              (v) =>
                v.envisageVendreBienReponse === value &&
                v.municipalite === munciValue.value
            );
            const test5 = allProspects.filter(
              (v) =>
                v.envisageVendreBienReponse === value &&
                v.municipalite === munciValue.value
            );
            setEvals(test3);
            setProspects(test5);
          } else {
            if (munciValue === null) {
              const test3 = All.filter(
                (v) =>
                  v.envisageVendreBienReponse === value &&
                  v.location.city === cityValue.value
              );
              const test5 = allProspects.filter(
                (v) =>
                  v.envisageVendreBienReponse === value &&
                  v.location.city === cityValue.value
              );
              setEvals(test3);
              setProspects(test5);
            }
          }
        }
      }
    }
  };

  const onDateChange = () => {
    setDate(true);
    var startDate = new Date(initialDate);
    var endDate = new Date(finalDate);

    var resultProductData = evaluations.filter(function (a) {
      var date = new Date(a.dateCreation);
      return date >= startDate && date <= endDate;
    });

    var resultProductDataProspect = prospects.filter(function (a) {
      var date = new Date(a.dateCreation);
      return date >= startDate && date <= endDate;
    });

    setDatedEvals(resultProductData);
    setDatedProsp(resultProductDataProspect);
  };

  const onDaysSubtract = (value) => {
    setDate(true);
    var endDate = new Date();
    var d = new Date();
    d.setDate(d.getDate() - value);

    var resultProductData = evaluations.filter(function (a) {
      var date = new Date(a.dateCreation);
      return date >= d && date <= endDate;
    });

    var resultProductDataProspect = prospects.filter(function (a) {
      var date = new Date(a.dateCreation);
      return date >= d && date <= endDate;
    });

    setDatedEvals(resultProductData);
    setDatedProsp(resultProductDataProspect);
  };

  const refreshFilter = () => {
    setEvals(All);
    setProspects(allProspects);
    setCityValue(null);
    setMunciValue(null);
    setProjectValue(null);
    setBuyerCheck(null);
    setOwnerValue(null);
    setDate(false);
  };

  console.log("Leads:", evaluations);

  return (
    <>
      <section className="pb-4">
        <div className="mb-4">
          <ul className="nav row gy-3">
            {/* <li className="col-6 col-lg-4 col-xl-8">
            <div>
              <Select
                placeholder="Select City"
                options={options}
                onChange={(e) => onCityChange(e.value)}
              />
            </div>
          </li> */}
            <li className="col">
              <div>
                <ul className="nav row gy-3">
                  <li className="col-12 col-md-8">
                    <div>
                      <Select
                        placeholder={t("Leads.1")}
                        options={formatter(cities)}
                        value={cityValue}
                        onChange={(e) => {
                          onCityChange(e.value);
                          setCityValue(e);
                        }}
                      />
                    </div>
                  </li>
                  <li className="col-12 col-md-4">
                    <div>
                      <Select
                        placeholder={t("Leads.2")}
                        options={formatter(muncipalities)}
                        value={munciValue}
                        onChange={(e) => {
                          onMuncipleChange(e.value);
                          setMunciValue(e);
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li className="col-12 col-xl-5">
              <div>
                <ul className="nav row gy-3">
                  <li className="col-12 col-md-5">
                    <div>
                      <Select
                        placeholder={t("Leads.3")}
                        options={options}
                        value={ownerValue}
                        onChange={(e) => {
                          onOwnerChange(e.value);
                          setOwnerValue(e);
                        }}
                      />
                    </div>
                  </li>

                  <li className="col-12 col-md-5">
                    <div>
                      <Select
                        isDisabled={
                          buyerCheck === null || ownerValue.value === "all"
                        }
                        placeholder={t("Leads.4")}
                        value={projectValue}
                        options={formatter(projectStatus)}
                        onChange={(e) => {
                          onStatusChange(e.value);
                          setProjectValue(e);
                        }}
                      />
                    </div>
                  </li>

                  <li className="col-2 col-md-1 px-md-0">
                    <div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          // onClick={() => setMenu(!menu)}
                          onMouseEnter={() => setMenu(!menu)}
                        >
                          <i className="i-Filter-2"></i>
                        </button>

                        <div
                          className={`dropdown-menu dropdown-menu-right ${
                            menu && "show"
                          }`}
                          onMouseLeave={() => setMenu(!menu)}
                        >
                          <div className="px-3 border-bottom pb-2 mb-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="days"
                                id="31days"
                                onClick={(e) => onDaysSubtract(31)}
                              />
                              <label class="form-check-label" for="31days">
                                {t("Leads.5")}
                              </label>
                            </div>
                          </div>
                          <div className="px-3 border-bottom pb-2 mb-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="days"
                                id="7days"
                                onClick={(e) => onDaysSubtract(7)}
                              />
                              <label class="form-check-label" for="7days">
                                {t("Leads.6")}
                              </label>
                            </div>
                          </div>
                          <div className="px-3 border-bottom pb-2 mb-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="days"
                                id="31days"
                                // onClick={(e) => onDaysSubtract(31)}
                              />
                              <ul className="nav gy-2">
                                <li>
                                  <b>{t("Leads.7")}</b>
                                </li>
                                <li>
                                  <div>
                                    <input
                                      className="form-control "
                                      type="date"
                                      onChange={(e) =>
                                        setInitialDate(e.target.value)
                                      }
                                    />
                                  </div>
                                </li>
                                <li className="w-100">
                                  <div className="text-center">
                                    {t("Leads.8")}
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <input
                                      disabled={initialDate === null}
                                      className="form-control "
                                      type="date"
                                      onChange={(e) =>
                                        setFinalDate(e.target.value)
                                      }
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <button
                                      disabled={initialDate === null}
                                      className="btn btn-primary btn-block mb-2 "
                                      type="date"
                                      onClick={onDateChange}
                                    >
                                      {t("Leads.9")}
                                    </button>
                                    <button
                                      className="btn btn-primary btn-block  "
                                      type="date"
                                      onClick={() => setDate(false)}
                                    >
                                      {t("Leads.10")}
                                    </button>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-2 col-md-1 px-md-0">
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={refreshFilter}
                      >
                        <i className="i-Reload"></i>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="nav row gy-3">
            <li className="col-12 col-lg-6 col-xl-7">
              <div className="h-100" style={{ minHeight: "20rem" }}>
                {/* <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26371661.859564565!2d-113.72360706725826!3d36.210406270518746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1642545660973!5m2!1sen!2s"
                className="h-100 w-100 border-0"
                allowFullScreen
                loading="lazy"
              ></iframe> */}
                <Map
                  selectedMarker={selectedMarker}
                  q
                  markers={reports}
                  onClick={handleClick}
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCd2d_otf6zxLsyj9OVyzJoZVAPiGgpfsY&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `500px` }} />}
                  containerElement={
                    <div style={{ height: `100%`, width: `100%` }} />
                  }
                  mapElement={<div style={{ height: `100%` }} />}
                  polygon={coordinates}
                  h
                />
              </div>
            </li>
            <li className="col px-0">
              <div>
                <ul className="nav flex-column gy-3">
                  <li>
                    <div className="border rounded-lg">
                      <div className="text-center py-2">
                        <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                          {t("Leads.11")}
                        </span>
                      </div>
                      <div className="border-top border-bottom">
                        <ul className="nav row row-cols-3 mx-0">
                          {competitiveList.map((item) => (
                            <li className="p-3">
                              <div className="text-center">
                                <div className="font-weight-bold text-uppercase text-12">
                                  {item.title}
                                </div>
                                {/* <div>
                                <i className="i-Pie-Chart-3 font-weight-bold" />
                                <span className="ml-1">{item.value}</span>
                              </div> */}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-200">
                        <ul className="nav row row-cols-3 mx-0">
                          {competitiveList.map((item) => (
                            <li className="p-3">
                              <div className="text-center">
                                <div className="font-weight-bold text-uppercase text-16">
                                  {item.subTitle}
                                </div>
                                <div className="mt-1">
                                  <span
                                    className={`bg-white px-2 py-1 rounded-lg ${item.subValueColor}`}
                                  >
                                    {item.subValue}
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <TabsSection
                        data={dateInfo === true ? datedEval : evaluations}
                        prospects={dateInfo === true ? datedProsp : prospects}
                        onClick={handleClick}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NewLeads;
