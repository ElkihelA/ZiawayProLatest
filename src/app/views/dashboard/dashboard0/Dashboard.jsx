import React, { Component } from "react";
import { SimpleCard } from "@gull";
import { Button, Col, Nav, Row, Tab } from "react-bootstrap";
import NotificationZia from "./NotificationZia";
import AdCard from "./AdCard";
import CourtierProfilCard from "./CourtierProfilCard";
import HouseCard from "./HouseCard";
import PostCard from "./PostCard";
import { compose, lifecycle } from "recompose";
import { withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import history from "@history.js";
import { getPosts } from "app/redux/actions/BlogActions";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Support from "./Support";
import Chart from "react-apexcharts";
import firebaseAuthService from "../../../services/firebase/firebaseAuthService";
import { withTranslation } from "react-i18next";
import axios from "axios";
import DashboardGraphs from "./DasboardGraphs";
const collectionRecommendationsMaisons = "recommendationsMaisons";
const collectionRecommendationsCourtiers = "recommendationsCourtiers";
const collectionGeoCapitaleNationale = "geoCapitaleNationale";

// Basic Radial Bar Chart

const cardList1 = (t) => {
  return [
    {
      icon: "i-Money-Bag",
      title: t("Dashboard.6"),
      subtitle: "Estimer un bien",
      link: "/evaluation-bien",
    },

    {
      icon: "i-Book",
      title: t("Dashboard.8"),
      subtitle: "Blog",
      link: "/formations",
    },
    {
      icon: "i-Support",
      title: t("Dashboard.9"),
      link: "/faqIn",
    },
  ];
};

const posts = (t) => {
  return [
    {
      title: `${t("Dashboard.10")}`,
      image:
        "https://static.wixstatic.com/media/b4537e_bf4ff9fccae74487a630c40795b55f57~mv2.png/v1/fill/w_740,h_414,al_c,q_90,usm_0.66_1.00_0.01/b4537e_bf4ff9fccae74487a630c40795b55f57~mv2.webp",
      link: "https://blog.ziaway.ca/blogs/post/Comment-fixer-le-prix-de-vente-de-sa-propri%C3%A9t%C3%A9",
      detail: `${t("Dashboard.11")}`,
    },
    {
      title: `${t("Dashboard.12")}`,
      image:
        "https://static.wixstatic.com/media/b4537e_6ea4d4b6a6b14e7e829cd884b6ecc790~mv2.png/v1/fill/w_740,h_494,al_c,q_90,usm_0.66_1.00_0.01/b4537e_6ea4d4b6a6b14e7e829cd884b6ecc790~mv2.webp",
      link: "https://blog.ziaway.ca/blogs/post/Vendre-seul-ou-avec-un-courtier",
      detail: `${t("Dashboard.13")}`,
    },
    {
      title: `${t("Dashboard.14")}`,
      image:
        "https://static.wixstatic.com/media/b4537e_65010b4618664d4ab4861c10147f75f9~mv2.png/v1/fill/w_740,h_494,al_c,q_90,usm_0.66_1.00_0.01/b4537e_65010b4618664d4ab4861c10147f75f9~mv2.webp",
      link: "https://blog.ziaway.ca/blogs/post/Acheter-ou-louer-un-condo",
      detail: `${t("Dashboard.15")}`,
    },
    {
      title: `${t("Dashboard.16")}`,
      image:
        "https://static.wixstatic.com/media/b4537e_c439bc61da5a4b39b9e162d887be8239~mv2.png/v1/fill/w_740,h_383,al_c,q_90,usm_0.66_1.00_0.01/b4537e_c439bc61da5a4b39b9e162d887be8239~mv2.webp",
      link: "https://blog.ziaway.ca/blogs/post/6-%C3%A9tapes-pour-vendre-sa-propri%C3%A9t%C3%A9-avec-succ%C3%A8s24",
      detail: `${t("Dashboard.17")}`,
    },
  ];
};

class Dashboard extends Component {
  state = {
    ads: [
      {
        url: "https://www.youtube.com/watch?v=8ZBuicEgu8w&feature=youtu.be",
        desc: `${this.props.t("Dashboard.18")}`,
      },
      {
        url: "https://www.youtube.com/watch?v=ZfsmsnQzHFQ&feature=youtu.be",
        desc: `${this.props.t("Dashboard.19")}`,
      },
    ],
    // cardList1: [
    //   {
    //     icon: "i-Money-Bag",
    //     title: this.props.t("Dashboard.6"),
    //     subtitle: "Estimer un bien",
    //     link: "/evaluation-bien",
    //   },
    //   {
    //     icon: "i-Money-Bag",
    //     title: "Top Courtiers",
    //     subtitle: "Top courtiers",
    //     link: "/",
    //   },

    //   {
    //     icon: "i-Book",
    //     title: "Formations",
    //     subtitle: "Blog",
    //     link: "/formations",
    //   },
    // ],
    user: {
      nombreDeDocuments: 302,
    },
    openSupport: false,
  };
  componentDidMount() {
    const emailData = localStorage.getItem("emailData");
    const address = localStorage.getItem("address");
    console.log("emailData", emailData);
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
        // if (!user.emailVerified && address === null) {
        //   history.push("/emailnotVerfied");
        // }
        history.push({
          pathname: "/dashboard/v0",
        });
      } else {
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
    let { ads = [], user } = this.state;
    const { t } = this.props;
    const title = t("Dashboard.6");

    console.log("props", this.props);
    let courtiers = this.props.courtiers ? this.props.courtiers : [];
    return (
      <div>
        <div className="row">
          <h2 className="m-3">{t("Dashboard.1")}</h2>
        </div>
        <hr className="mt-0 ml-1" />
        {/* <div className="row flex-nowrap white-space-nowrap overflow-auto">
          {cardList1(t).map((card, index) => (
            <div key={index} className="px-3">
              <Link to={card.link}>
                <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                  <div className="card-body ">
                    <i className={card.icon}></i>
                    <div className="text-center m-4">
                      <p className="lead text-primary text-24 mb-2 ">
                        {card.title}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div> */}

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

const limitToFirst = 3;
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
