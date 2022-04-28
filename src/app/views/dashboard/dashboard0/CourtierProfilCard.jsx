import React, { Component } from "react";
import { ObtenirRecomendationCourtiers } from "app/redux/actions/CarteProspectionActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Lottie from "react-lottie";
import * as loadingCourtier from "./loading-courtier.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingCourtier.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
class CourtierProfilCard extends Component {
  componentDidMount() {
    // this.props.ObtenirRecomendationCourtiers(this.props.infobien);
  }
  componentDidUpdate(prevProps, prevState) {}
  render() {
    let courtiers = this.props.courtiers;
    const { t } = this.props;
    console.log("this.data", courtiers.Photo, courtiers.logoAgence);
    return (
      <div>
        {!courtiers ? (
          <div className="ul-widget2__title text-primary text-center">
            <Lottie options={defaultOptions} height={120} width={120} />
            {t("Dashboard.21")}
          </div>
        ) : (
          courtiers.map((courtier, index) => (
            <div
              key={index}
              className="row mx-0 mb-4 bg-color-1 shadow-sm border py-2"
            >
              <div className="px-2 px-md-3">
                <div style={{ height: 100, width: 100 }}>
                  <img
                    className="p-0 w-100 h-100 d-block rounded-circle"
                    src={courtier.Photo}
                    // id="userDropdown"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-md mt-2 mt-md-0 d-flex flex-column text-left">
                <div className="ul-widget5__section ">
                  <div className="d-flex flex-wrap">
                    <div className="ul-widget2__title text-primary text-18 mr-auto">
                      {courtier.nomCourtier}
                    </div>
                    <ul className="nav" style={{ gap: 20 }}>
                      <li>
                        <a
                          href="http://www.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="i-Wordpress h4 mb-0"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="i-Facebook-2 h4 mb-0"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="i-Linkedin-2 h4 mb-0"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          href="http://www.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="i-Twitter h4 mb-0"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center mt-auto">
                  <div className="d-flex flex-column">
                    <span href="#" className="">
                      {t("Dashboard.22")} : {courtier.agenceCourtier}
                    </span>
                    <span className={`t-font-boldest text-success`}>
                      {courtier.nbVentesComp} {t("Dashboard.23")} <br />
                      <span href="#" className="ul-widget2__username">
                        {t("Dashboard.24")} : {courtier.nbVentesTotal}/{" "}
                        {t("Report_res.28")}
                      </span>
                    </span>
                  </div>
                  <div className="ml-auto mt-3 mt-md-0" style={{ height: 50 }}>
                    <img
                      className="p-0 w-100 h-100 d-block"
                      style={{
                        objectFit: "contain",
                      }}
                      src={courtier.logoAgence}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ObtenirRecomendationCourtiers: PropTypes.func.isRequired,
  //courtiers: state.courtiers.recommendationcourtiers,
});

export default connect(mapStateToProps, { ObtenirRecomendationCourtiers })(
  CourtierProfilCard
);
