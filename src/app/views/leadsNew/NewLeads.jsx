import React, { useState, useEffect } from "react";
import Map from "../carteProspection/Map";
import { useTranslation } from "react-i18next";
import TabsSection from "./sections/TabsSection";
import { Loading } from "@gull";
import moment from "moment";
import Filters from "./filters";
import firebase, { cloudFunctions } from "../../services/firebase/firebase";
import { useSelector, connect } from "react-redux";

const NewLeads = ({profile}) => {
  const { t } = useTranslation();
  const [All, setAll] = useState(null);
  const [allProspects, setAllProspects] = useState(null);
  const [evaluations, setEvals] = useState([]);
  const [prospects, setProspects] = useState([]);
  const [initialDate, setInitialDate] = useState(null);
  const [finalDate, setFinalDate] = useState(null);
  const [buyers, setBuyers] = useState([]);
  const [sellers, setSellers] = useState(null);
  const [defaultFilters, setDefaultFilters] = useState({});
  const [filters, setFilters] = useState({});
  const [userFilters, setUserFilters] = useState({});
  const [reports, setReports] = useState([]);
  const [selectedMarker, setSelectedMarkers] = useState(false);
  const [cities, setCities] = useState(null);
  const [muncipalities, setMuncipal] = useState(null);
  const [projectStatus, setStatus] = useState(null);
  const [buyerCheck, setBuyerCheck] = useState(null);
  const [coordinates, setCordinates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tobecontacted, setToBeContacted] = useState([]);
  const [usersContact, setUsersContacts] = useState([]);

  const [cityValue, setCityValue] = useState(null);
  const [munciValue, setMunciValue] = useState(null);
  const [projectValue, setProjectValue] = useState(null);
  const [ownerValue, setOwnerValue] = useState(null);
  const [dateInfo, setDate] = useState(false);
  const [usersProspects, setUsersProspects] = useState([]);
  
  const [dateFilterType, setDateFilterType] = useState("31days");

  const getUserFilters = () => {
    const httpCallable = cloudFunctions.httpsCallable("defaultFilters");
    httpCallable()
      .then((res) => {
        const cities = [];
        for (const [key, val] of Object.entries(res.data.filters)) {
          cities.push(key);
          if (key === res.data.defaultFilters.city) {
            setMuncipal(formatter(val.municipalities));
          }
        }
        if (res.data.defaultFilters.dateFilterType === "custom") {
          setInitialDate(res.data.defaultFilters.startDate);
          setFinalDate(res.data.defaultFilters.endDate);
        }
        setDateFilterType(res.data.defaultFilters.dateFilterType);
        setCities(formatter(cities));
        setFilters(res.data.filters);
        const city = res.data.defaultFilters.city;
        const municipalite = res.data.defaultFilters.municipalite;
        setCityValue({ label: city, value: city });
        setMunciValue({ label: municipalite, value: municipalite });
        setUserFilters(res.data.defaultFilters);
        setDefaultFilters(res.data.defaultFilters);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserData = (filters = {}) => {
    setLoading(true);
    const httpCallable = cloudFunctions.httpsCallable("newleads");
    httpCallable(filters)
      .then((res) => {
        setLoading(false);
        const reports = res.data.data || [];
        setUserData(reports.filter((item) => item.estProprietaireReponse));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getUserFilters();
  }, []);

  useEffect(() => {
    if(profile && profile.bookmarks) {
      setUsersProspects(profile.bookmarks || [])
    }
  }, [profile])

  useEffect(() => {
    getToBeContactedData();
  }, []);

  const refreshUserData = () => {
    getUserData(userFilters);
    setProjectValue(null);
    setOwnerValue(null)
  }

  const getToBeContactedData = async () => {
    const httpCallable = cloudFunctions.httpsCallable("loadUsersContacts");
    httpCallable()
      .then((res) => {
        if (!res.error) {
          setUsersContacts(res.data.contacts);
        } else {
          console.log("contacts error", res.data.emessage);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    if (userFilters.city) {
      getUserData(userFilters);
    }
    console.log("userFilters", userFilters);
  }, [userFilters]);

  const handleClick = (marker, event) => {
    console.log('userProspects', usersProspects);
    setSelectedMarkers(marker);
  };

  const formatter = (data) => {
    return data?.map((v) => ({
      value: v,
      label: v,
    }));
  };

  const statusFormatter = (data = []) => {
    let filters = [];
    for (let i = 0; i < data.length; i++) {
      if (filters.includes(data[i]) === false) {
        filters.push(data[i]);
      }
    }
    const idx = filters.findIndex((item) => item === "");
    if (idx >= 0) {
      filters[idx] = "RecherchInformations";
    }
    return filters;
  };

  const setUserData = (reports = []) => {
    const filtered = reports.filter(
      (v) =>
        v?.broker?.length === 0 || v?.broker[0]?.brokerId === profile.userId
    );
    const seller = filtered?.filter((v) => v.estProprietaireReponse === "oui");
    const buyer = filtered?.filter((v) => v.estProprietaireReponse === "non");
    const tobecontacted = filtered?.filter(
      (v) => v.ouiContacterParProfessionnel === "oui"
    );
    const toBeProspected = filtered?.filter(
      (v) =>
        !v.ouiContacterParProfessionnel ||
        v.ouiContacterParProfessionnel === "non"
    );

    setBuyers(buyer);
    setSellers(seller);
    setAllProspects(toBeProspected);
    setProspects(toBeProspected);
    setAll(filtered);
    setEvals(filtered);
    setToBeContacted(tobecontacted);
    setReports(filtered);
  };

  useEffect(() => {
    if (evaluations) {
      const seller = evaluations?.filter(
        (v) => v.estProprietaireReponse === "oui"
      );
      const buyer = evaluations?.filter(
        (v) => !v.estProprietaireReponse || v.estProprietaireReponse === "non"
      );
      const tobecontacted = evaluations?.filter(
        (v) => v.ouiContacterParProfessionnel === "oui"
      );
      const toBeProspected = evaluations?.filter(
        (v) =>
          !v.ouiContacterParProfessionnel ||
          v.ouiContacterParProfessionnel === "non"
      );
      setBuyers(buyer);
      setSellers(seller);
      setToBeContacted(tobecontacted);
      setProspects(toBeProspected);
    }
  }, [evaluations]);

  const competitiveList = [
    {
      title: t("Leads.12"),
      value: "165",
      subTitle: `${sellers?.length + buyers?.length}`,
      subValue: "100%",
      subValueColor: "text-body",
    },
    {
      title: t("Leads.13"),
      value: "$57.2m",
      subTitle: `${buyers?.length}`,
      subValue:
        buyers?.length === 0
          ? "0%"
          : `${((buyers?.length * 100) / reports?.length).toFixed()}%`,
      subValueColor:
        ((buyers?.length * 100) / evaluations?.length).toFixed() >= 50
          ? "text-success"
          : "text-danger",
    },
    {
      title: t("Leads.14"),
      value: "14.3%",
      subTitle: `${sellers?.length}`,
      subValue:
        sellers?.length === 0
          ? "0%"
          : `${((sellers?.length * 100) / reports?.length).toFixed()}%`,
      subValueColor:
        ((sellers?.length * 100) / reports?.length).toFixed() >= 50
          ? "text-success"
          : "text-danger",
    },
  ];

  const onCityChange = (e) => {
    setDate(false);
    setCityValue(e);
    for (const [key, val] of Object.entries(filters)) {
      if (key === e.value) {
        setMuncipal(formatter(val.municipalities));
        setMunciValue({
          value: val.municipalities[0],
          label: val.municipalities[0],
        });
        setUserFilters({
          ...userFilters,
          city: e.value,
          municipalite: val.municipalities[0],
        });
      }
    }
  };

  const onMuncipleChange = (e) => {
    setDate(false);
    setMunciValue(e);
    setUserFilters({ ...userFilters, municipalite: e.value });
  };

  const onOwnerChange = (e) => {
    const value = e.value;
    setOwnerValue(e);
    setDate(false);
    setProjectValue(null);
    if (value !== "all") {
      const evals = All.filter((v) => v.estProprietaireReponse === value);
      setEvals(evals);
      if (value === "oui") {
        const test2 = evals.map((v) => v.envisageVendreBienReponse);
        setStatus(statusFormatter(test2));
      } else {
        const test3 = evals.map((v) => v.statutRecherche);
        setStatus(statusFormatter(test3));
      }
    } else {
      setEvals(All);
    }
  };

  const onStatusChange = (e) => {
    setProjectValue(e);
    const value = e.value === "RecherchInformations" ? "" : e.value;
    setDate(false);
    if (ownerValue && ownerValue.value === "non") {
      const evals = All.filter(
        (v) => v.estProprietaireReponse === "non" && v.statutRecherche === value
      );
      setEvals(evals);
    } else {
      const evals = All.filter(
        (v) =>
          v.estProprietaireReponse === "oui" &&
          v.envisageVendreBienReponse === value
      );
      setEvals(evals);
    }
  };

  const onDateChange = () => {
    setUserFilters({
      ...userFilters,
      endDate: finalDate,
      startDate: initialDate,
      dateFilterType: "custom",
    });
  };

  const onDaysSubtract = (value) => {
    const endDate = moment().format("YYYY-MM-DD");
    const startDate = moment().subtract(value, "days").format("YYYY-MM-DD");
    setInitialDate(null);
    setFinalDate(null);
    setDateFilterType(value == 7 ? "7days" : "31days");
    setUserFilters({
      ...userFilters,
      endDate,
      startDate,
      dateFilterType: value == 7 ? "7days" : "31days",
    });
  };

  const refreshFilter = () => {
    setEvals(All);
    setProspects(allProspects);
    setCityValue({ label: defaultFilters.city, value: defaultFilters.city });
    setMunciValue({
      label: defaultFilters.municipalite,
      value: defaultFilters.municipalite,
    });
    setDateFilterType(defaultFilters.dateFilterType);
    setProjectValue(null);
    setBuyerCheck(null);
    setOwnerValue(null);
    setDate(false);
    setUserFilters({
      ...userFilters,
      city: defaultFilters.city,
      municipalite: defaultFilters.municipalite,
    });
  };

  useEffect(() => {
    return () => {
      firebase
        .firestore()
        .collection("newleads-default-filters")
        .doc(userFilters.id)
        .set(userFilters)
        .then((res) => {
          console.log("Testing Updates");
        });
    };
  }, []);

  const updateToBeContacted = (item) => {
    const tbc = [...tobecontacted];
    const idx = tbc.findIndex((elem) => elem.id === item.id);
    tbc[idx] = item;
    setToBeContacted(tbc);
    saveAllTobeContactedWithSameAddress(item)
  };

  const saveAllTobeContactedWithSameAddress = (lead) => {
    const {location = {}, broker = []} = lead
    const allElem = [...All];
    const tbc = [...tobecontacted];
    for(let i = 0; i< allElem.length; i++) {
      const item = allElem[i];
      if(item.ouiContacterParProfessionnel === "oui" 
        && item.location.value === location.value 
        && item.userEmail === lead.userEmail) {
        item.broker = broker;
        allElem[i] = item;
        const idx = tbc.findIndex((elem) => elem.id === item.id);
        if(idx >= 0) {
          tbc[idx] = item;
          addBrokerToLead(item)
        }
      }
    }
    setAll(allElem);
    setToBeContacted(tbc);
  }

  const addBrokerToLead = (lead) => {
    firebase
        .firestore()
        .collection("RapportsEvaluations")
        .doc(lead.id)
        .update({ broker: lead.broker })
        .catch((err) => console.log(err));
  }

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
            dateFilterType={dateFilterType}
            setDateFilterType={setDateFilterType}
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
                  markers={[...reports, ...usersContact, ...usersProspects]}
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
                        data={reports}
                        prospects={prospects}
                        reports={reports}
                        onClick={handleClick}
                        tobecontacted={tobecontacted}
                        usersContact={usersContact}
                        updateToBeContacted={updateToBeContacted}
                        refreshUserData={refreshUserData}
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
const mapStateToProps = (state) => ({profile: state.firebase.profile})
export default connect(mapStateToProps)(NewLeads);
