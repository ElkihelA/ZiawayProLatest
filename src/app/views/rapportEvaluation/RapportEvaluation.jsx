import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SimpleCard from "@gull/components/cards/SimpleCard";
import LineChart4 from "./LineChart4";
import { compose, lifecycle } from "recompose";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CurrencyFormat from "react-currency-format";
import { ObtenirHistorique } from "app/redux/actions/RapportEvaluationActions";
import Comparables from "../comparables/Comparables";
import ComparablesVentes from "../comparablesVentes/ComparablesVentes";
import { ObtenirRecomendationCourtiers } from "app/redux/actions/CarteProspectionActions";
import { ObtenirInfoCourtier } from "app/redux/actions/CarteProspectionActions";
import CourtierProfilCard from "./CourtierProfilCard";
import ScrollableAnchor from "react-scrollable-anchor";
import { withTranslation } from "react-i18next";
import firebaseAuthService from "../../services/firebase/firebaseAuthService";
import history from "@history.js";

import Rating from "react-rating";
import { configureAnchors } from "react-scrollable-anchor";
import NotificationZia from "./NotificationZia";
import { Button } from "react-bootstrap";
// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms

import {
  options1,
  options2,
  options3,
  options4,
  options5,
  options6,
  options7,
} from "./listWidgetChartOptions";
import Chart from "react-apexcharts";
import { MdImportantDevices } from "react-icons/md";

const collection = "RapportsEvaluations";
class RapportEvaluation extends Component {
  state = {
    cardList1: [
      {
        icon: "i-Money-2",
        title: "205",
        subtitle: "new leads",
      },
      {
        icon: "i-Financial",
        title: "4021",
        subtitle: "sales",
      },
      {
        icon: "i-Checkout-Basket",
        title: "80",
        subtitle: "checkout",
      },
      {
        icon: "i-Money-2",
        title: "120",
        subtitle: "expense",
      },
    ],
    cardList2: [
      {
        icon: "i-Data-Download",
        subtitle: "Today's Upload",
        title: "21",
      },
      {
        icon: "i-Add-User",
        subtitle: "new users",
        title: "53",
      },
      {
        icon: "i-Money-2",
        subtitle: "total sales",
        title: "4031",
      },
      {
        icon: "i-Money-2",
        title: "4031",
      },
      {
        icon: "i-Gear",
        title: "4031",
      },
      {
        icon: "i-Bell",
        title: "4031",
      },
    ],
    bigImageCard: [
      {
        title: "card title",
        subtitle: "Last updated 3 mins ago",
        date: "03.12.2018",
        comment: 12,
        photoUrl: "/assets/images/photo-long-1.jpg",
      },
      {
        title: "card title",
        subtitle: "Last updated 3 mins ago",
        date: "09.11.2019",
        comment: 22,
        photoUrl: "/assets/images/photo-long-2.jpg",
      },
      {
        title: "card title",
        subtitle: "Last updated 3 mins ago",
        date: "09.11.2019",
        comment: 22,
        photoUrl: "/assets/images/photo-long-2.jpg",
      },
    ],
  };

  scriptLoaded() {
    this.setState({ script: true });
  }

  mapScriptLoaded() {
    this.setState({ mapSript: true });
  }
  initLocallogic(location) {
    if (location) {
      var widget = new window.locallogic.LocalContent("local-content-widget", {
        lat: location.latlng.lat,

        lng: location.latlng.lng,

        locale: "fr",

        designId: "ll-2019",
        color: "#663399",
        basemap: "google",
        googleStyles: "Aubergine",
      });
    }
  }

  componentDidMount() {
    const emailData = localStorage.getItem("emailDataReport");
    const email_json = JSON.parse(emailData);

    // if (emailData) {
    //   axios
    //     .post(
    //       "https://us-central1-ziaapp-ac0eb.cloudfunctions.net/sendMail",
    //       email_json
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       localStorage.removeItem("emailData");
    //     })
    //     .catch((err) => {
    //       localStorage.removeItem("emailData");
    //       console.log(err);
    //     });
    // }

    const user = firebaseAuthService.checkAuthStatus((user) => {
      if (user) {
        // if (!user.emailVerified) {
        //   history.push("/emailnotVerfied");
        // } else {
        //   console.log("email verified");
        // }
        console.log("user logged in");
      } else {
        history.push("/session/signin");
      }
    });

    window.scrollTo(0, 0);

    const script = document.createElement("script");
    script.src =
      "https://cdn.locallogic.co/sdk/?token=bb403e749d943596472464f20721acc8a5b5264c113c8d13590dbbc0a741c483540d7dc61dc81e52&callback=initLocallogic";
    script.async = true;
    script.onload = () => this.scriptLoaded();

    document.body.appendChild(script);

    // configureAnchors({offset: -0, scrollDuration: 200})
  }
  componentWillReceiveProps(prevProps, prevState) {
    if (prevProps.rapport != this.props.rapport) {
      let { rapport } = this.props;
      const courtiers = this.props.courtiers ? this.props.courtiers : [];

      if (rapport) {
        let infobien = {
          nbCourtier: 4,
          location: rapport.location,
          genreProprietes: rapport.genreProprietes,
          typeBatiment: rapport.typeBatiment,
          categorie: rapport.categorie,
          prixZia: rapport.ziaEstimation.prediction,
          userId: rapport.userId,
          idRapport: this.props.match
            ? this.props.match.params.id
            : this.props.idRapport,
        };
        if (courtiers.length == 0 || !courtiers) {
          console.log("Lancement des recommendations", courtiers);
          this.props.ObtenirRecomendationCourtiers(infobien);
        }
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.rapport && this.props.rapport.location) {
      this.initLocallogic(this.props.rapport.location);
      if (prevProps.rapport != this.props.rapport) {
        let { rapport } = this.props;
        const courtiers = this.props.courtiers ? this.props.courtiers : [];

        if (rapport) {
          let infobien = {
            nbCourtier: 4,
            location: rapport.location,
            genreProprietes: rapport.genreProprietes,
            typeBatiment: rapport.typeBatiment,
            categorie: rapport.categorie,
            prixZia: rapport.ziaEstimation.prediction,
            userId: rapport.userId,
            idRapport: this.props.match
              ? this.props.match.params.id
              : this.props.idRapport,
          };
          if (courtiers.length == 0 || !courtiers) {
            console.log("Lancement des recommendations", courtiers);
            this.props.ObtenirRecomendationCourtiers(infobien);
          }
        }
      }
    }
  }

  showCourtiers = (t) => {
    let { rapport } = this.props;
    const courtiers = this.props.courtiers ? this.props.courtiers : [];

    if (rapport) {
      let infobien = {
        nbCourtier: 4,
        location: rapport.location,
        genreProprietes: rapport.genreProprietes,
        typeBatiment: rapport.typeBatiment,
        categorie: rapport.categorie,
        prixZia: rapport.ziaEstimation.prediction,
        userId: rapport.userId,
        idRapport: this.props.match
          ? this.props.match.params.id
          : this.props.idRapport,
      };

      return (
        <div className="col-lg-12 col-md-12">
          <CourtierProfilCard
            t={t}
            courtiers={rapport.courtiers}
            infobien={infobien}
          />
        </div>
      );
    } else {
      return <div className="loader-bubble loader-bubble-primary m-5"></div>;
    }
  };
  render() {
    let { cardList1 = [], cardList2 = [], bigImageCard = [] } = this.state;
    const { t } = this.props;

    let { rapport, historique } = this.props;
    const idRapport = this.props.match
      ? this.props.match.params.id
      : this.props.idRapport;
    const indice =
      rapport &&
      rapport.comparables &&
      (rapport.comparables.length > 0
        ? parseInt(rapport.comparables[0].score * 10) / 2
        : 0);
    const indicePercent =
      rapport &&
      rapport.comparables &&
      (rapport.comparables.length > 0
        ? parseInt(rapport.comparables[0].score * 100)
        : 0);
    let location = rapport && rapport.location;

    console.log("rapport du bien", rapport, indice, indicePercent);

    return (
      <div id="print-area">
        <div className="row">
          <div className="col-lg-12 col-md-12 mb-1 ">
            <div id="estimation" className="card mb-2">
              <div className="card-header">
                <h5>
                  <span className="text-primary">1 - </span>
                  <span className="text-primary">{t("Report_res.1")}</span>
                </h5>
              </div>

              <div className="card-body">
                <div className="row justify-content-center position-relative">
                  {/* <div className="col-md-4 text-center">
                    <h6 className="mb-3">{t("Report_res.2")}</h6>
                    <p className="text-20 text-danger line-height-1 mb-3">
                      <i className="i-Arrow-Down-in-Circle pr-2"></i>
                      {rapport && (
                        <CurrencyFormat
                          value={rapport.ziaEstimation.predictionStart.toFixed(
                            0
                          )}
                          displayType={"text"}
                          isNumericString={true}
                          thousandSeparator={" "}
                          thousandSpacing={"3"}
                          fixedDecimalScale={true}
                          prefix={"$"}
                        />
                      )}
                    </p>
                    <small className="text-muted"></small>
                  </div> */}

                  <div className="col-6 col-lg-6 col-xl-4 text-center position-relative">
                    <div className="d-none d-lg-block">
                      <h6 className="mb-3">{t("Report_res.3")}</h6>
                      <p className="text-40 text-primary line-height-1 mb-3">
                        <i className="i-dollar pr-2"></i>
                        {rapport && (
                          <CurrencyFormat
                            value={rapport.ziaEstimation.prediction.toFixed(0)}
                            displayType={"text"}
                            isNumericString={true}
                            thousandSeparator={" "}
                            thousandSpacing={"3"}
                            fixedDecimalScale={true}
                            prefix={"$"}
                          />
                        )}
                      </p>
                    </div>
                    {/* small */}
                    <div className="d-lg-none">
                      <h6 className="mb-2 text-truncate">
                        {t("Report_res.3")}
                      </h6>
                      <p className="text-14 font-weight-bold text-primary line-height-1 mb-3">
                        <i className="i-dollar pr-2"></i>
                        {rapport && (
                          <CurrencyFormat
                            value={rapport.ziaEstimation.prediction.toFixed(0)}
                            displayType={"text"}
                            isNumericString={true}
                            thousandSeparator={" "}
                            thousandSpacing={"3"}
                            fixedDecimalScale={true}
                            prefix={"$"}
                          />
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-6 col-xl-4 text-center">
                    <div className="d-none d-lg-block">
                      <h6 className="mb-3">{t("Report_res.5")}</h6>
                      <p className="text-40 text-primary line-height-1 mb-3">
                        {/* <i className="i-Arrow-Up-in-Circle pr-2"></i> */}
                        <i className="i-dollar pr-2"></i>
                        {rapport && (
                          <CurrencyFormat
                            value={rapport.ziaEstimation.predictionEnd.toFixed(
                              0
                            )}
                            displayType={"text"}
                            isNumericString={true}
                            thousandSeparator={" "}
                            thousandSpacing={"3"}
                            fixedDecimalScale={true}
                            prefix={"$"}
                          />
                        )}
                      </p>
                    </div>
                    <div className="d-lg-none">
                      <h6 className="mb-2">{t("Report_res.5")}</h6>
                      <p className="text-14 font-weight-bold text-primary line-height-1 mb-3">
                        {/* <i className="i-Arrow-Up-in-Circle pr-2"></i> */}
                        <i className="i-dollar pr-2"></i>
                        {rapport && (
                          <CurrencyFormat
                            value={rapport.ziaEstimation.predictionEnd.toFixed(
                              0
                            )}
                            displayType={"text"}
                            isNumericString={true}
                            thousandSeparator={" "}
                            thousandSpacing={"3"}
                            fixedDecimalScale={true}
                            prefix={"$"}
                          />
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center px-0 mx-auto col-9 col-lg-6 col-xl-4">
                  <div className="d-flex align-items-center">
                    <span className="d-block bg-primary p-2 rounded-circle" />
                    <span className="flex-fill bg-primary pt-1" />
                    <span className="d-block bg-primary p-2 rounded-circle" />
                  </div>
                </div>
                <div className="row">
                  {indice > 0 && (
                    <div className="col-md-12 text-center">
                      <div className="text-15 pt-4">{t("Report_res.4")}</div>
                      <p className="pt-2">
                        {t("Report_res.6")}{" "}
                        {indicePercent > 0 ? indicePercent + " %" : ""}
                      </p>
                      <Rating
                        className="text-primary"
                        readonly
                        initialRating={indice}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 mb-2 ">
            {rapport && !rapport.avisClient && (
              <NotificationZia idRapport={idRapport} />
            )}
          </div>
          <div className="col-lg-12 col-md-12 mb-2 ">
            <div className="card mb-2">
              <div id="caracteristiques" className="card-header">
                <h5>
                  <span className="text-primary">2 - </span>
                  <span className="text-primary">{t("Report_res.7")} </span>
                </h5>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <table className="table table-responsive">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">{t("Report_res.8")}</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t("Report_res.9")}</td>
                          <td className="">
                            {rapport && rapport.location.value}
                          </td>
                        </tr>
                        <tr>
                          <td>{t("Report_res.10")}</td>
                          <td className="">
                            {rapport && rapport.anneeConstruction}
                          </td>
                        </tr>
                        <tr>
                          <td>{t("Report_res.11")}</td>
                          <td className="">
                            {rapport && rapport.superficieTerrain}{" "}
                            {t("Report_res.12")}
                          </td>
                        </tr>

                        <tr>
                          <td>{t("Report_res.13")}</td>
                          <td className="">
                            {rapport && rapport.pieces} {t("Report_res.14")} -{" "}
                            {rapport && rapport.chambres} {t("Report_res.15")}
                          </td>
                        </tr>

                        <tr>
                          <td>{t("Report_res.16")}</td>
                          <td className="">{rapport && rapport.bains}</td>
                        </tr>
                        <tr>
                          <td>{t("Report_res.17")}</td>
                          <td className="">
                            {rapport && rapport.stationnement}{" "}
                            {t("Report_res.18")} {rapport && rapport.garages}{" "}
                            {t("Report_res.19")}
                          </td>
                        </tr>
                        {/* <tr>
                          <td>{t("Report_res.20")}</td>
                          <td className="">{rapport && rapport.pool}</td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-4 d-flex flex-column">
                    <img
                      src="/assets/images/home.png"
                      className="mb-2 mx-auto"
                      alt=""
                    />
                    <div className="text-center text-14 text-primary">
                      {rapport && rapport.genreProprietes}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-12 col-md-12  mb-2  ">
            <div className="card mb-2 o-hidden ">
              <div className="card-header">
                <h5>
                  <span className="text-primary">3 - </span>
                  <span className="text-primary">Les environs </span>
                </h5>
              </div>

              <div className="card-body">
                <div id="local-content-widget"></div>
              </div>
            </div>
          </div> */}

          <div className="col-lg-12 col-md-12  mb-2 ">
            <div className="card mb-2 o-hidden ">
              <div id="comparables" className="card-header text-primary">
                <h5>
                  <span className="text-primary">3 - </span>
                  <span className="text-primary">{t("Report_res.21")}</span>
                </h5>
              </div>

              <div className="card-body">
                {rapport ? (
                  <Comparables comparables={rapport.comparables} t={t} />
                ) : (
                  <Comparables />
                )}
              </div>
              <div className="card-footer">
                <h5 className="text-primary">{t("Report_res.22")}</h5>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-12 col-md-12 mb-4">
            <div className="card">
              <div id="courtiers" className="card-header">
                <h5>{t("Report_res.23")}</h5>
              </div>

              <div className="card-body">{this.showCourtiers(t)}</div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ObtenirHistorique: PropTypes.func.isRequired,
  historique: state.rapport.historique,
  rapport: state.firestore.data.rapport,
  courtiers: state.courtiers.recommendationcourtiers,
  ObtenirRecomendationCourtiers: PropTypes.func.isRequired,
  infoRecCourtierLoading: state.courtiers.infoRecCourtierLoading,
});

export default compose(
  firestoreConnect((props) => [
    {
      collection: collection,
      doc: props.match ? props.match.params.id : props.idRapport,
      storeAs: "rapport",
    },
  ]),
  connect(mapStateToProps, { ObtenirHistorique, ObtenirRecomendationCourtiers })
)(withTranslation()(RapportEvaluation));
