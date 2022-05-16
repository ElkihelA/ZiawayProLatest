import React, { useState } from "react";

import NewLeadLists from "./NewLeadLists";
import NewLeadSearchHistory from "./NewLeadSearchHistory";
import NewLeadStatus from "./NewLeadStatus";
import firebase from "../../../services/firebase/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ContactCard from "./ContactCard";
import CurrencyFormat from "react-currency-format";
import notesModal from "./NotesModal";
import NotesModal from "./NotesModal";
import MyNotes from "./MyNotes";
import Zoom from "./Zoom";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

const NewLeadCard = ({ data, onClick, prospect }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const [joinMeeting, setJoinMeeting] = useState(false);
  const reports = useSelector(
    (state) => state.firestore.ordered.RapportsEvaluations
  );

  const profile = useSelector((state) => state.firebase.profile);
  const [show, setShow] = useState(false);
  const [tabs, setTabs] = useState(0);
  const [openCard, setOpenCard] = useState(false);
  const [avaliableMenu, setAvaliableMenu] = useState(false);
  const [evaluationCount, setCount] = useState(null);
  const [key, setKey] = useState(null);
  const [participant, setParticipant] = useState(null);
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2IxOGE4ZGYxNTVjNDBjNTE5MzA1ZDYxODg0NWYwOWU4LTE2NDk5NDc4OTYiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJzaGFoemFkIiwidmlkZW8iOnt9fSwiaWF0IjoxNjQ5OTQ3ODk2LCJleHAiOjE2NDk5NTE0OTYsImlzcyI6IlNLYjE4YThkZjE1NWM0MGM1MTkzMDVkNjE4ODQ1ZjA5ZTgiLCJzdWIiOiJBQzEyODZiNGI4YzA0MDVlZjgxYjVlOGFiZjZjMTczNjA3In0.UlK4IvMnwaYBR2uPgzzDPbYGffGYuF_g89RDet4Mmi4"
  );

  const HandleTabs = (index) => setTabs(index);

  const projectFields = () => {
    if (data?.estProprietaireReponse === "oui") {
      return [
        { title: t("Leads.46"), value: `${data?.estProprietaireReponse}` },
        { title: t("Leads.47"), value: `${data?.ceBienEstReponse}` },

        {
          title: t("Leads.48"),
          value: `${data?.envisageVendreBienReponse}`,
        },
      ];
    } else {
      return [
        { title: t("Leads.49"), value: `${data?.estProprietaireReponse}` },

        {
          title: t("Leads.50"),
          value: `${data?.raisonEstimation}`,
        },
        {
          title: t("Leads.51"),
          value: `${data?.statutRecherche}`,
        },
        {
          title: t("Leads.52"),
          value: `${data?.projectionFinancement}`,
        },
        {
          title: t("Leads.54"),
          value: `${data?.emprunter}`,
        },
      ];
    }
  };

  const lists = [
    { title: t("Leads.55"), value: `${data?.anneeConstruction}` },
    { title: t("Leads.56"), value: `${data?.typeBatiment}` },
    { title: t("Leads.57"), value: `${data?.pieces}` },
    { title: t("Leads.58"), value: `${data?.chambres}` },
    { title: t("Leads.59"), value: `${data?.bains}` },
    { title: t("Leads.60"), value: `${data?.superficieTerrain}` },
    { title: t("Leads.61"), value: `${data?.taxesMunicipale}` },
    { title: t("Leads.62"), value: `${data?.evaluationMunicipale}` },
    {
      title: t("Leads.63"),
      value: `${data?.location?.StreetName?.short_name}, ${data?.location?.city}, ${data?.location?.state?.short_name} ${data?.location?.postcode}, ${data?.location?.Country?.long_name}`,
    },
  ];

  const listsTwo = [
    { title: t("Leads.64"), value: `${data?.displayName}` },
    { title: t("Leads.65"), value: `${data?.userEmail}` },
    { title: t("Leads.66"), value: `${data?.phoneNumber}` },
  ];

  const profileInformation = {
    name: data?.displayName,
    phone: data?.phoneNumber,
    email: data?.userEmail,
    address: data?.location?.value,
    call: "tbd",
  };

  console.log("profile", profile);

  const handleOnChange = (id, leadEmail) => {
    const today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    const values = {
      brokerId: profile.userId,
      brokerName: profile.displayName,
      brokerEmail: profile.email,
      dateofAcceptance: date,
      phoneNumber: profile.phoneNumber,
      projectStatus: "Accepted",
      projectProgress: "New Prospect",
    };

    const dateAccepted = new Date();
    const [month, day, year] = [
      ("0" + (dateAccepted.getMonth() + 1)).slice(-2),
      ("0" + dateAccepted.getDate()).slice(-2),
      dateAccepted.getFullYear(),
    ];
    const [hour, minutes, seconds] = [
      ("0" + dateAccepted.getHours()).slice(-2),
      ("0" + dateAccepted.getMinutes()).slice(-2),
      ("0" + dateAccepted.getSeconds()).slice(-2),
    ];

    const json_data = {
      info: {
        data: [
          {
            Name: leadEmail,
            Broker_License_Number: profile?.licenseId,
            Date_Event: `${year}-${month}-${day}T${hour}:${minutes}:${seconds}-04:00`,
            Statut_Event: "New Prospect",
          },
        ],
      },
      vmodule: "Brokers_Leads",
    };

    firebase
      .firestore()
      .collection("RapportsEvaluations")
      .doc(id)
      .update({ broker: [values] })
      .then((res) => {
        console.log(res);
        axios
          .post(
            "https://us-central1-ziaapp-ac0eb.cloudfunctions.net/zohoPostNewLead",
            json_data,
            {
              crossdomain: true,
            }
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        HandleTabs(4);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const test = reports?.filter(
      (v) => v.location?.value === data?.location?.value
    );
    setCount(test?.length);
  }, [data, reports]);

  const checkBookmarks = (id) => {
    if (profile.bookmarks?.some((person) => person?.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  const addBookmark = (data) => {
    if (!profile.bookmarks) {
      firebase
        .firestore()
        .collection("users")
        .doc(profile.userId)
        .update({ bookmarks: [data] })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      firebase
        .firestore()
        .collection("users")
        .doc(profile.userId)
        .update({ bookmarks: [...profile.bookmarks, data] })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Zoom
        show={joinMeeting}
        handleClose={() => setJoinMeeting(false)}
        setShow={setJoinMeeting}
        token={token}
        setToken={setToken}
        key={key}
        participant={participant}
      />
      <NotesModal show={show} setShow={setShow} evalId={data.id} />
      {openCard ? (
        <div
          className="bg-white h-100 w-100 position-absolute py-4"
          style={{ top: 37, left: 0 }}
        >
          <div
            className="bg-gray-200 border border-primary rounded-lg p-3 overflow-auto"
            style={{ height: 600 }}
          >
            <div className="row justify-content-between gy-3">
              <div className="col-12 col-sm-4 col-xl-3">
                <div>
                  <ul className="nav flex-column gy-3">
                    <li>
                      <div
                        className="p-2 d-flex flex-column align-items q-center justify-content-center text-center mt-3 mx-auto"
                        style={{
                          width: 80,
                          height: 60,
                        }}
                      >
                        {data?.reseller && data?.reseller === "True" ? (
                          <span className="h3 mb-0">
                            <i className="i-Favorite-Window"></i>
                            <i className="i-Favorite-Window"></i>
                            <i className="i-Favorite-Window"></i>
                          </span>
                        ) : data?.estProprietaireReponse === "oui" ? (
                          <span className="h3 mb-0">
                            <i className="i-Favorite-Window"></i>
                            <i className="i-Favorite-Window"></i>
                          </span>
                        ) : (
                          <span className="h3 mb-0">
                            <i className="i-Favorite-Window"></i>
                          </span>
                        )}

                        {/* <div className="mt-1">Contact Information</div> */}
                      </div>
                    </li>
                    {prospect === true ? null : data?.broker[0]?.brokerId ===
                      profile.userId ? (
                      <li className="text-11">
                        <div>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary text-uppercase rounded-lg w-100 font-weight-bold"
                            onClick={() => setAvaliableMenu(!avaliableMenu)}
                          >
                            {t("Leads.23")}
                          </button>
                        </div>
                      </li>
                    ) : (
                      <li className="text-11">
                        <div>
                          <button
                            type="button"
                            className="btn btn-sm btn-success text-uppercase rounded-lg w-100 font-weight-bold"
                            onClick={() => setAvaliableMenu(!avaliableMenu)}
                          >
                            {t("Leads.24")}
                          </button>
                        </div>
                        {avaliableMenu && (
                          <div className="avaliableMenu position-absolute bg-white p-2">
                            <div className="my-1">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary text-uppercase rounded-lg w-100 font-weight-bold"
                                onClick={() =>
                                  handleOnChange(data?.id, data?.userEmail)
                                }
                              >
                                {t("Leads.25")}
                              </button>
                            </div>
                          </div>
                        )}
                      </li>
                    )}

                    <li>
                      <div className="d-flex justify-content-between">
                        <div>
                          <Link
                            to={{
                              pathname: "/videoChat",
                              state: data?.userEmail,
                            }}
                            // onClick={twilioConnect}
                            type="button"
                            className="btn p-0"
                          >
                            <i className="i-Telephone text-17 text-primary" />
                          </Link>
                        </div>
                        <div className="mx-2">
                          <button type="button" className="btn p-0">
                            <i className="i-Mail-Video text-17 text-primary" />
                          </button>
                        </div>
                        <div className="">
                          <button type="button" className="btn p-0">
                            <i className="i-Speach-Bubble-3 text-17 text-primary" />
                          </button>
                        </div>
                        {/* {prospect === true ? (
                          <div>
                            <button
                              type="button"
                              className="btn p-0"
                              onClick={() => addBookmark(data)}
                            >
                              <i className="i-Bookmark text-17 text-primary" />
                            </button>
                          </div>
                        ) : null} */}
                      </div>
                    </li>
                    <li>
                      {prospect === true ? (
                        // JSON.parse(localStorage.getItem("bookmarks").includes(data) === true ?
                        // <>
                        // <div>
                        //   <button
                        //     type="button"
                        //     className={`btn btn-sm text-uppercase rounded-lg w-100 btn-primary `}

                        //   >
                        //     Added
                        //   </button>
                        // </div>
                        // <div className="my-2" />
                        // </>

                        <>
                          <div>
                            {checkBookmarks(data?.id) === true ? (
                              <button
                                type="button"
                                className={`btn btn-sm text-uppercase rounded-lg w-100 btn-primary `}
                                disabled
                              >
                                {t("Leads.26")}
                              </button>
                            ) : (
                              <button
                                type="button"
                                className={`btn btn-sm text-uppercase rounded-lg w-100 ${
                                  tabs === 4
                                    ? "btn-primary"
                                    : "btn-outline-primary"
                                } `}
                                onClick={() => addBookmark(data)}
                              >
                                {t("Leads.27")}
                                <br />
                                {t("Leads.28")}
                              </button>
                            )}
                          </div>
                          <div className="my-2" />
                        </>
                      ) : null}
                      {prospect === true ||
                      data?.broker[0]?.brokerId !== profile.userId ? null : (
                        <>
                          <div>
                            <button
                              type="button"
                              className={`btn btn-sm text-uppercase rounded-lg w-100 ${
                                tabs === 4
                                  ? "btn-primary"
                                  : "btn-outline-primary"
                              } `}
                              onClick={() => HandleTabs(4)}
                            >
                              {t("Leads.29")}
                            </button>
                          </div>
                          <div className="my-2" />
                        </>
                      )}
                      <div>
                        <button
                          type="button"
                          className={`btn btn-sm text-uppercase rounded-lg w-100 ${
                            tabs === 0 ? "btn-primary" : "btn-outline-primary"
                          } `}
                          onClick={() => HandleTabs(0)}
                        >
                          {t("Leads.30")}
                        </button>
                      </div>
                      <div className="my-2" />
                      <div>
                        <button
                          type="button"
                          className={`btn btn-sm text-uppercase rounded-lg w-100 ${
                            tabs === 1 ? "btn-primary" : "btn-outline-primary"
                          } `}
                          onClick={() => HandleTabs(1)}
                        >
                          {t("Leads.31")}
                        </button>
                      </div>
                      <div className="my-2" />
                      {prospect === true ? null : (
                        <>
                          <div>
                            <button
                              type="button"
                              className={`btn btn-sm text-uppercase rounded-lg w-100 ${
                                tabs === 2
                                  ? "btn-primary"
                                  : "btn-outline-primary"
                              } `}
                              onClick={() => HandleTabs(2)}
                            >
                              {t("Leads.81")}
                            </button>
                          </div>
                          <div className="my-2" />
                        </>
                      )}
                      {prospect === true ||
                      data?.broker[0]?.brokerId !== profile.userId ? null : (
                        <div>
                          <button
                            type="button"
                            className={`btn btn-sm text-uppercase rounded-lg w-100 ${
                              tabs === 3 ? "btn-primary" : "btn-outline-primary"
                            } `}
                            onClick={() => HandleTabs(3)}
                          >
                            {t("Leads.34")}
                          </button>
                        </div>
                      )}
                      <div className="my-2" />
                      <div>
                        <button
                          type="button"
                          className={`btn btn-sm text-uppercase rounded-lg w-100 ${"btn-outline-primary"} `}
                          onClick={() => setShow(true)}
                        >
                          {t("Leads.80")}
                        </button>
                      </div>
                      <div className="my-2" />
                      <div>
                        <button
                          type="button"
                          className={`btn btn-sm text-uppercase rounded-lg w-100 ${"btn-outline-primary"} `}
                          onClick={() => HandleTabs(5)}
                        >
                          {t("Leads.36")}
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-xl-9  order-first order-md-last">
                <div>
                  <ul className="nav flex-column gy-3">
                    <li>
                      <div className="d-flex">
                        <div className="flex-fill mx-auto border-right border-left border-gray-400 text-center d-flex flex-column justify-content-center">
                          <div className="pt-2">
                            <div className="text-14 mb-0 font-weight-bold">
                              {data?.envisageVendreBienReponse}
                            </div>
                            <div className="font-weight-bold">
                              <span>{data?.location?.Country?.long_name}</span>
                            </div>
                          </div>
                          <div className="pt-2">
                            <span>
                              {t("Leads.37")} {data?.dateCreation}
                            </span>
                          </div>
                        </div>

                        <div className="text-center ml-3">
                          <div className="font-weight-bold mb-auto text-right">
                            <button
                              type="button"
                              className="btn"
                              onClick={() => setOpenCard(false)}
                            >
                              <i className="i-Close text-18 text-primary" />
                            </button>
                          </div>
                          <div className="mb-auto text-center">
                            <div className="text-14 mb-0 font-weight-bold">
                              <CurrencyFormat
                                value={data?.ziaEstimation?.prediction.toFixed(
                                  0
                                )}
                                displayType={"text"}
                                isNumericString={true}
                                thousandSeparator={" "}
                                thousandSpacing={"3"}
                                fixedDecimalScale={true}
                                prefix={"$"}
                              />
                              {/* ${data?.ziaEstimation?.prediction} */}
                            </div>
                            <div className="text-12">{t("Leads.38")}</div>
                          </div>
                          <span className="mt-2 mb-0 text-center btn btn-sm btn-primary rounded-circle text-center">
                            {/* {data?.typeBatiment} */}
                            {evaluationCount}
                          </span>
                          {/* <span className="badge badge-primary p-2 rounded-pill">
                            {data?.typeBatiment}
                          </span> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="my-2" />
                        <div className="bg-white py-1 px-2 rounded">
                          <ul
                            className="nav align-items-center small"
                            style={{ gap: 10 }}
                          >
                            <li>
                              <b className="text-uppercase">{t("Leads.39")}</b>
                            </li>

                            <li className="ml-auto">
                              <b className=" text-13">
                                <CurrencyFormat
                                  value={data?.ziaEstimation?.prediction.toFixed(
                                    0
                                  )}
                                  displayType={"text"}
                                  isNumericString={true}
                                  thousandSeparator={" "}
                                  thousandSpacing={"3"}
                                  fixedDecimalScale={true}
                                  prefix={"$"}
                                />
                                {/* ${data?.ziaEstimation?.prediction} */}
                              </b>
                            </li>
                          </ul>
                        </div>
                        <div className="my-2" />
                        <div className="bg-white py-1 px-2 rounded">
                          <ul
                            className="nav align-items-center small"
                            style={{ gap: 10 }}
                          >
                            <li>
                              <b className="text-uppercase"> {t("Leads.40")}</b>
                            </li>
                            <li>
                              <span> {t("Leads.41")}</span>
                            </li>
                            <li>
                              <span className="p-1 bg-gray-200 rounded-lg text-success">
                                +
                                {(
                                  ((data?.ziaEstimation?.predictionEnd -
                                    data?.ziaEstimation?.prediction) *
                                    100) /
                                  data?.ziaEstimation?.prediction
                                ).toFixed()}
                                %
                              </span>
                            </li>
                            <li className="ml-auto">
                              <b className=" text-13">
                                <CurrencyFormat
                                  value={data?.ziaEstimation?.predictionEnd.toFixed(
                                    0
                                  )}
                                  displayType={"text"}
                                  isNumericString={true}
                                  thousandSeparator={" "}
                                  thousandSpacing={"3"}
                                  fixedDecimalScale={true}
                                  prefix={"$"}
                                />
                                {/* ${data?.ziaEstimation?.predictionEnd} */}
                              </b>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      {tabs === 0 && (
                        <NewLeadLists
                          lists={lists}
                          listsTwo={prospect ? null : listsTwo}
                          prospect={prospect}
                          contactShow={
                            data?.broker[0]?.brokerId !== profile.userId
                          }
                        />
                      )}
                      {tabs === 1 && (
                        <NewLeadLists
                          lists={projectFields()}
                          listsTwo={listsTwo}
                          type="project"
                        />
                      )}
                      {tabs === 2 && (
                        <NewLeadSearchHistory email={data?.userEmail} />
                      )}
                      {prospect === true ||
                      data?.broker[0]?.brokerId !== profile.userId
                        ? null
                        : tabs === 3 && (
                            <NewLeadStatus
                              progress={data?.broker[0]?.projectProgress}
                              date={data?.broker[0]?.dateofAcceptance}
                              id={data?.id}
                              email={data?.userEmail}
                            />
                          )}

                      {tabs === 4 && <ContactCard data={profileInformation} />}
                      {tabs === 5 && (
                        <MyNotes email={data?.userEmail} evalId={data.id} />
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="d-flex align-items-center bg-gray-200 p-2 rounded-lg cursor-pointer"
          onClick={() => {
            setOpenCard(true);
            onClick(data);
          }}
        >
          <div
            className="p-2 d-flex flex-column align-items-center justify-content-center text-center mr-3"
            style={{
              width: 80,
              height: 60,
            }}
          >
            {data?.estProprietaireReponse === "oui" ? (
              <span className="h3 mb-0">
                <i className="i-Favorite-Window"></i>
                <i className="i-Favorite-Window"></i>
              </span>
            ) : (
              <span className="h3 mb-0">
                <i className="i-Favorite-Window"></i>
              </span>
            )}
            {/* <div className="mt-1">Posted on {data?.dateCreation} </div> */}
            <div className="mt-1">jouter
              {prospect === true ? null : data?.broker[0]?.brokerId ===
                profile.userId ? (
                <button
                  type="button"
                  className="btn btn-sm btn-primary text-uppercase rounded-lg w-100 font-weight-bold"
                >
                  <span className="text-10"> {t("Leads.42")}</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-sm btn-success text-uppercase rounded-lg w-100 font-weight-bold"
                >
                  <span className="text-10"> {t("Leads.43")}</span>
                </button>
              )}
            </div>
          </div>
          <div className="flex-fill d-flex">
            <div className="flex-fill mx-auto border-right border-left border-gray-400 text-center">
              <div className="pt-2">
                {data?.estProprietaireReponse === "non" ? (
                  <div className="text-14 mb-0 font-weight-bold">
                    {data?.statutRecherche}
                  </div>
                ) : (
                  <div className="text-14 mb-0 font-weight-bold">
                    {data?.envisageVendreBienReponse}
                  </div>
                )}

                {/* <div className="font-weight-bold">
                  <span>Project Status</span>
                </div> */}
              </div>
              <div className="pt-2">
                <span>
                  {" "}
                  {t("Leads.44")} {data?.dateCreation}
                </span>
              </div>
            </div>

            <div className="ml-3 text-center">
              <div className="mb-auto text-center">
                <div className="text-14 mb-0 font-weight-bold">
                  <CurrencyFormat
                    value={data?.ziaEstimation?.prediction.toFixed(0)}
                    displayType={"text"}
                    isNumericString={true}
                    thousandSeparator={" "}
                    thousandSpacing={"3"}
                    fixedDecimalScale={true}
                    prefix={"$"}
                  />
                  {/* ${data?.ziaEstimation?.prediction} */}
                </div>
                <div className="text-12"> {t("Leads.45")}</div>
              </div>
              <span className="mt-2 mb-0 btn btn-sm btn-primary rounded-circle">
                {/* {data?.typeBatiment} */}
                {evaluationCount}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewLeadCard;
