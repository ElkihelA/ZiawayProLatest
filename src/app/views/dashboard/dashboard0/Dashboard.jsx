import React, { Component } from "react";
import CourtierProfilCard from "./CourtierProfilCard";
import HouseCard from "./HouseCard";
import PostCard from "./PostCard";
import { compose, lifecycle } from "recompose";
import { withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import history from "@history.js";
import { getPosts } from "app/redux/actions/BlogActions";
import PropTypes from "prop-types";
import Support from "./Support";
import firebaseAuthService from "../../../services/firebase/firebaseAuthService";
import { withTranslation } from "react-i18next";
import DashboardGraphs from "./DasboardGraphs";
const collectionRecommendationsCourtiers = "recommendationsCourtiers";
const collectionGeoCapitaleNationale = "geoCapitaleNationale";

class Dashboard extends Component {
  state = {
    openSupport: false,
  };
  componentDidMount() {
    const emailData = localStorage.getItem("emailData");
    console.log("emailData", emailData);

    firebaseAuthService.checkAuthStatus((user) => {
      if (!user) {
        history.push("/session/signin");
      }
    });
    const data = localStorage.getItem("formData");
    if (data !== null) {
      history.push("/evaluation-bien");
    }
    this.props.getPosts();
  }
  showMaisons = () => {
    let { maisons = [] } = this.props;
    if (maisons.length > 0) {
      return maisons
        .slice(0, 3)
        .map((maison, index) => <HouseCard key={index} maison={maison} />);
    } else {
      return <div className="loader-bubble loader-bubble-primary m-5"></div>;
    }
  };

  showPosts = (posts, t) => {
    // let { posts = [] } = this.props;
    if (posts.length > 0) {
      return posts(t).map((post, index) => (
        <PostCard key={index} post={post} t={this.props.t} />
      ));
    } else {
      return <div className="loader-bubble loader-bubble-primary m-5"></div>;
    }
  };
  openSupport = () => {
    this.setState({ openSupport: true });
  };

  handleClose = () => {
    this.setState({ openSupport: false });
  };

  showCourtiers = (t) => {
    let { courtiers = [] } = this.props;
    if (courtiers.length > 0) {
      return <CourtierProfilCard courtiers={courtiers} t={t} />;
    } else {
      return <div className="loader-bubble loader-bubble-primary m-5"></div>;
    }
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <div>
          <h2 className="m-3">{t("Dashboard.1")}</h2>
        </div>
        <hr className="mt-0 ml-1" />
        <div className="border shadow-sm p-4">
          <div>
            <DashboardGraphs />
          </div>
        </div>

        <Support
          open={this.state.openSupport}
          handleClose={this.handleClose}
        ></Support>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getPosts: PropTypes.func.isRequired,
  maisons: state.firestore.ordered.geoCapitaleNationale,
  posts: state.blog,
  courtiers: state.firebase.profile.recommandations,
});

export default compose(
  withFirestore,
  lifecycle({
    componentDidMount() {
      this.props.firestore.get({
        collection: collectionGeoCapitaleNationale,
        limitToFirst: 3,
      });
      this.props.firestore.get({
        collection: collectionRecommendationsCourtiers,
      });
    },
  }), // or { collection: 'todos' }
  connect(mapStateToProps, { getPosts })
)(withTranslation()(Dashboard));
