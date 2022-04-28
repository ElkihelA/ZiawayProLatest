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
  state = {
    courtiers: [],
  };

  componentDidMount() {}

  componentWillReceiveProps(prevProps, prevState) {}
  componentDidUpdate(prevProps, prevState) {}
  render() {
    const { courtiers, t } = this.props;

    console.log("les courtiers a afficher", courtiers);
    return (
      <div>
        {!courtiers ? (
          <div className="ul-widget2__title text-primary text-center">
            <Lottie options={defaultOptions} height={120} width={120} />
            {t("Report_res.24")}
          </div>
        ) : (
          courtiers &&
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
                  <div className="ul-widget2__title text-primary text-18">
                    {/* <Link
                      to={{
                        pathname: "/prospection/profilcourtier",
                        courtier: courtier.nomCourtier,
                        ventesTotal: courtier.nbVentesTotal,
                        agence: courtier.agenceCourtier,
                      }}
                    > */}
                    {courtier.nomCourtier}
                    {/* </Link> */}
                  </div>
                  {/* <div>
                    <span>
                      <i className="i-Mail h3 mb-0"></i>
                    </span>
                    <span className="mx-3">
                      <i
                        className="i-Mail h3 mb-0 i-Telephone d-inline-block"
                        style={{ transform: "rotate(209deg)" }}
                      ></i>
                    </span>
                    <span>
                      <i className="i-Share h3 mb-0"></i>
                    </span>
                  </div> */}
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
                  <div className="ml-auto  mt-3 mt-md-0" style={{ height: 50 }}>
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
            // <div key={index} className="row mb-4 ">
            //   <div className="col-md-1 ul-widget5__content">
            //     <div className="ul-widget5__post_pic">
            //       <img
            //         src="/assets/icons/real-estate-agent.png"
            //         id="userDropdown"
            //         alt=""
            //         style={{ width: 80 }}
            //       />
            //     </div>
            //   </div>
            //   <div className="col-md-7 ul-widget5__content text-left">
            //     <div className="ul-widget5__section ">
            //       <div className="ul-widget2__title text-primary text-18">
            //         {/* <Link
            //           to={{
            //             pathname: "/prospection/profilcourtier",
            //             courtier: courtier.nomCourtier,
            //             ventesTotal: courtier.nbVentesTotal,
            //             agence:courtier.agenceCourtier
            //           }}
            //         > */}
            //         {courtier.nomCourtier}
            //         {/* </Link> */}
            //       </div>
            //       <span href="#" className="">
            //         {t("Report_res.25")} : {courtier.agenceCourtier}
            //       </span>
            //     </div>
            //   </div>
            //   <div className="col-md-4 ul-widget5__content">
            //     <span className={`t-font-boldest text-success text-16`}>
            //       {courtier.nbVentesComp} {t("Report_res.26")} <br />
            //       <span href="#" className="ul-widget2__username">
            //         {t("Report_res.27")} : {courtier.nbVentesTotal} /{" "}
            //         {t("Report_res.28")}
            //       </span>
            //     </span>
            //   </div>
            // </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ObtenirRecomendationCourtiers: PropTypes.func.isRequired,
  recCourtiers: state.courtiers.recommendationcourtiers,
  infoRecCourtierLoading: state.courtiers.infoRecCourtierLoading,
});

export default connect(mapStateToProps, { ObtenirRecomendationCourtiers })(
  CourtierProfilCard
);
