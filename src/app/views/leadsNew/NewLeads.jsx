import React, { useState, useEffect } from "react";
import Map from "../carteProspection/Map";
import { useTranslation } from "react-i18next";
import TabsSection from "./sections/TabsSection";
import { Loading } from "@gull";
import moment from 'moment';
import Filters from "./filters";
import firebase, {cloudFunctions} from "../../services/firebase/firebase";

const NewLeads = () => {
  const { t } = useTranslation();
  const [All, setAll] = useState(null);
  const [allProspects, setAllProspects] = useState(null);
  const [evaluations, setEvals] = useState([]);
  const [prospects, setProspects] = useState([]);
  const [initialDate, setInitialDate] = useState(null);
  const [finalDate, setFinalDate] = useState(null);
  const [buyers, setBuyers] = useState(null);
  const [sellers, setSellers] = useState(null);
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
  const [loading, setLoading] = useState(true);

  const [cityValue, setCityValue] = useState(null);
  const [munciValue, setMunciValue] = useState(null);
  const [projectValue, setProjectValue] = useState(null);
  const [ownerValue, setOwnerValue] = useState(null);
  const [dateInfo, setDate] = useState(false);

  const getUserFilters = () => {
    const httpCallable = cloudFunctions.httpsCallable('defaultFilters');
    httpCallable().then(res => {
      const cities = [];
      for(const [key, val] of Object.entries(res.data.filters)) {
        cities.push(key);
        if(key === res.data.defaultFilters.city) {
          setMuncipal(formatter(val.municipalities));
        }
      }
      if(res.data.defaultFilters.dateFilterType === 'custom') {
        setInitialDate(res.data.defaultFilters.startDate);
        setFinalDate(res.data.defaultFilters.endDate);
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
        setLoading(false);
        setUserData(res.data.data);
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
    console.log('userFilters', userFilters)
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

  const setUserData = (reports = []) => {
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
    setReports(reports);
  }

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

  const competitiveList = [
    {
      title: t("Leads.12"),
      value: "165",
      subTitle: `${evaluations?.length}`,
      subValue: "100%",
      subValueColor: "text-body",
    },
    {
      title: t("Leads.13"),
      value: "$57.2m",
      subTitle: `${buyers?.length}`,
      subValue: buyers?.length === 0
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
      subTitle: `${sellers?.length}`,
      subValue: sellers?.length === 0
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
    setOwnerValue(e);
    setDate(false);
    setProjectValue(null);
    if (value !== "all") {
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
      } else {
        setBuyerCheck(true);
        const test3 = All.map((v) => v.statutRecherche);
        setStatus(statusFormatter(test3));
      }
    } else {
      setProjectValue(null);
      //put a check for other fields
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
    }
  };

  const onStatusChange = (e) => {
    setProjectValue(e);
    const value = e.value;
    setDate(false);
    if (buyerCheck === true) {
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
      }
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
      }
    }
  };

  const onDateChange = () => {
    setDate(true);
    setUserFilters({...userFilters, endDate: finalDate, startDate: initialDate, dateFilterType: 'custom'});
  };

  const onDaysSubtract = (value) => {
    const endDate = moment().format('YYYY-MM-DD');
    const startDate = moment().subtract(value, 'days').format('YYYY-MM-DD')
    setUserFilters({...userFilters, endDate, startDate, dateFilterType: value == 7 ? '7days': '31days'});
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

  useEffect(() => {
    return () => {
      debugger;
      firebase.firestore()
          .collection('newleads-default-filters')
          .doc(userFilters.id).set(userFilters)
          .then((res) => {
            console.log('Testing Updates')
          });
    }
  }, [])

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
              dateFilterType={userFilters.dateFilterType}
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
                        data={evaluations}
                        prospects={prospects}
                        reports={reports}
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
