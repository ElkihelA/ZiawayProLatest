import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import Map from "../carteProspection/Map";
import { useTranslation } from "react-i18next";
import axios from "axios";
import TabsSection from "./sections/TabsSection";
import { Loading } from "@gull";
import Filters from "./filters";
import {cloudFunctions} from "../../services/firebase/firebase";

const NewLeads = () => {
  const { t } = useTranslation();
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
  const [defaultFilters, setDefaultFilters] = useState({});
  const [filters, setFilters] = useState({});
  const [userFilters, setUserFilters] = useState({});
  const [reports, setReports] = useState([])
  const [selectedMarker, setSelectedMarkers] = useState(false);
  const [cities, setCities] = useState(null);
  const [muncipalities, setMuncipal] = useState(null);
  const [projectStatus, setStatus] = useState(null);
  const [buyerCheck, setBuyerCheck] = useState(null);
  const [coordinates, setCordinates] = useState([]);
  const [loading, setLoading] = useState(true)

  const [cityValue, setCityValue] = useState(null);
  const [munciValue, setMunciValue] = useState(null);
  const [projectValue, setProjectValue] = useState(null);
  const [ownerValue, setOwnerValue] = useState(null);
  const [dateInfo, setDate] = useState(false);

  const getUserFilters = () => {
    const httpCallable = cloudFunctions.httpsCallable('defaulsFilters');
    httpCallable().then(res => {
      debugger;
      const cities = [];
      for(const [key, val] of Object.entries(res.data.filters)) {
        cities.push(key);
        if(key === res.data.defaultFilters.city) {
          setMuncipal(formatter(val.municipalities));
        }
      }
      setCities(formatter(cities));
      setFilters(res.data.filters);
      const city = res.data.defaultFilters.city;
      const municipalite = res.data.defaultFilters.municipalite;
      setCityValue({label: city, value: city});
      setMunciValue({label: municipalite, value: municipalite});
      setUserFilters(res.data.defaultFilters);
      setDefaultFilters(res.data.defaultFilters);
      setLoading(false)
    }).catch(err => {
      console.log(err)
    })
  }

  const getUserData = (filters = {}) => {
    setLoading(true);
    const httpCallable = cloudFunctions.httpsCallable('newleads');
    httpCallable(filters)
        .then(res => {
          debugger;
        setLoading(false);
        setReports(res.data.data);
      }).catch(err => {
        console.log('err', err)
      })
  }

  useEffect(() => {
    getUserFilters();
  },[]);

  useEffect(() => {
    if(userFilters.city) {
      getUserData(userFilters);
    }
  }, [userFilters])


  const handleClick = (marker, event) => {
    setSelectedMarkers(marker);
  };

  const formatter = (data) => {
    return data?.map((v) => ({
      value: v,
      label: v,
    }));
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

  const onCityChange = (e) => {
    setDate(false);
    setCityValue(e)
    for(const [key, val] of Object.entries(filters)) {
      if(key === e.value) {
        setMuncipal(formatter(val.municipalities));
        setMunciValue({value: val.municipalities[0], label: val.municipalities[0]});
        setUserFilters({...userFilters, city: e.value, municipalite: val.municipalities[0]});
      }
    }
  };

  const onMuncipleChange = (e) => {
    setDate(false);
    setMunciValue(e);
    setUserFilters({...userFilters, municipalite: e.value});
  };

  const onOwnerChange = (e) => {
    const value = e.value;
    setDate(false);
    setProjectValue(null);
    setOwnerValue(e);
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
    if (value === "oui") {
      const test2 = All.map((v) => v.envisageVendreBienReponse);
      setBuyerCheck(false);
      setStatus(statusFormatter(test2));
    } else if(value == 'non') {
      setBuyerCheck(true);
      const test3 = All.map((v) => v.statutRecherche);
      setStatus(statusFormatter(test3));
    }
  };

  const onStatusChange = (e) => {
    setProjectValue(e);
    const value = e.value;
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
    const endDate = new Date();
    const d = new Date();
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
    setCityValue({label: defaultFilters.city, value: defaultFilters.city});
    setMunciValue({label: defaultFilters.municipalite, value: defaultFilters.municipalite});
    setProjectValue(null);
    setBuyerCheck(null);
    setOwnerValue(null);
    setDate(false);
    setUserFilters({...userFilters, city: defaultFilters.city, municipalite: defaultFilters.municipalite})
  };

  console.log("Leads:", evaluations);
  console.log('munciValue', munciValue)

  return (
    <>
      {loading && <Loading />}
      <section className="pb-4">
        <div className="mb-4">
          <Filters
              cities={cities}
              cityValue={cityValue}
              onCityChange={onCityChange}
              muncipalities={muncipalities}
              munciValue={munciValue}
              onMuncipleChange={onMuncipleChange}
              ownerValue={ownerValue}
              onOwnerChange={onOwnerChange}
              buyerCheck={buyerCheck}
              onStatusChange={onStatusChange}
              onDaysSubtract={onDaysSubtract}
              refreshFilter={refreshFilter}
              onDateChange={onDateChange}
              setDate={setDate}
              finalDate={finalDate}
              setFinalDate={setFinalDate}
              initialDate={initialDate}
              setInitialDate={setInitialDate}
              projectValue={projectValue}
              projectStatus={projectStatus}
          />
        </div>
        <div>
          <ul className="nav row gy-3">
            <li className="col-12 col-lg-12 col-xl-6">
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
            <li className="col col-xl-6 px-0">
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
