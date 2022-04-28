import React, { Component } from "react";
import { firebaseAnonymousSignIn } from "app/redux/actions/LoginActions";
import { ObtenirEvaluation } from "app/redux/actions/RapportEvaluationActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { classList } from "@utils";
import AnonymousUserInfoVMZForm from "./AnonymousUserInfoVMZForm";
import { Link } from "react-router-dom";
import * as legoData from "./410-lego-loader.json";
import * as doneData from "./doneloading.json";
import * as analysisData from "./system-analytics.json";
import * as graphData from "./group-working.json";
import * as estimateData from "./graph-animation.json";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import { returnTrue } from "react-currency-format/lib/utils";
import { Redirect } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { firebaseSignUpforVMZ } from "../../redux/actions/LoginActions";
import QuestionnaireVMZForm from "./QuestionnaireVMZForm";
import FormulaireVMZLanding from "./FormulaireVMZLanding";

let fakeNotifications = [
  { title: "Calcul de votre evaluation", isLoading: false },
  { title: "Termine", isLoading: false },
];
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const analysisOptions = {
  loop: true,
  autoplay: true,
  animationData: analysisData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const estimateOptions = {
  loop: true,
  autoplay: true,
  animationData: estimateData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const graphOptions = {
  loop: true,
  autoplay: true,
  animationData: graphData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

class CalculEstimationVMZStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estimationCompleted: false,
      loading: "",
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      redirect: false,
      notifications: [],
      completedQuestionnaire: false,
    };
  }

  componentDidMount() {
    let { formAnswers, profile, obtenirEvaluation, user, VMZsignUp } =
      this.props;
    console.log("formanswer", formAnswers);
    fakeNotifications[0].isLoading = true;
    this.setState((prevState) => ({
      loading: "step1",
      notifications: [...prevState.notifications, fakeNotifications[0].title],
    }));

    // if (!user.uid) {
    //   console.log("uid not found");
    //   VMZsignUp(formAnswers);
    //   fakeNotifications[1].isLoading = true;
    //   setTimeout(() => {
    //     fakeNotifications[0].isLoading = false;
    //     this.setState((prevState) => ({
    //       loading: "step2",
    //       step1: true,
    //       step2: true,
    //     }));
    //   }, 2000);
    //   setTimeout(() => {
    //     fakeNotifications[0].isLoading = false;
    //     this.setState((prevState) => ({
    //       loading: "step3",
    //       step1: true,
    //       step2: true,
    //       step3: true,
    //     }));
    //   }, 4000);
    //   setTimeout(() => {
    //     this.setState((prevState) => ({
    //       loading: "step4",

    //       step1: true,
    //       step2: true,
    //       step3: true,
    //       step4: true,
    //     }));
    //   }, 6000);
    // } else {
    // const options = { year: "numeric", month: "numeric", day: "numeric" };
    // let infosBien = {
    //   dateCreation: new Date().toLocaleDateString("fr-ca", options),
    //   ...formAnswers,
    //   userData: user,
    //   sendEmail: true,
    // };
    // console.log(infosBien);
    // obtenirEvaluation(infosBien);
    fakeNotifications[1].isLoading = true;
    setTimeout(() => {
      fakeNotifications[0].isLoading = false;
      this.setState((prevState) => ({
        loading: "step2",
        step1: true,
        step2: true,
      }));
    }, 2000);
    setTimeout(() => {
      fakeNotifications[0].isLoading = false;
      this.setState((prevState) => ({
        loading: "step3",
        step1: true,
        step2: true,
        step3: true,
      }));
    }, 4000);
    setTimeout(() => {
      this.setState((prevState) => ({
        loading: "step4",

        step1: true,
        step2: true,
        step3: true,
        step4: true,
      }));
    }, 6000);
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    /* console.log(
      "prevProps length",
      Object.getOwnPropertyNames(prevProps.idRapport).length
    );
    if (Object.getOwnPropertyNames(prevProps.idRapport).length === 0) {
      if ((prevProps.idRapport !== this.props.idRapport) || this.props.evaluationSuccess) {

        console.log("changement du state");
        this.setState((prevState) => ({
          ...this.state,
          estimationCompleted: true,
        }));
      }
    }*/
  }
  render() {
    let { estimationCompleted, notifications } = this.state;
    let { profile, formCompleted } = this.props;

    const { t } = this.props;

    console.log("form-completed", this.state.completedQuestionnaire);
    return formCompleted ? (
      <div className="row">
        {this.state.step1 && (
          <div className="col-lg-12 col-md-12 col-xs-12 col-md-offset-2">
            <div className="d-flex  align-items-center m-4">
              <span className="text-18 text-primary ">{t("Report_cal.1")}</span>
            </div>
            <FadeIn>
              <div className="d-flex justify-content-end align-items-center">
                <h5> {t("Report_cal.2")}</h5>

                {this.state.loading === "step1" &&
                !this.state.estimationCompleted ? (
                  <Lottie options={defaultOptions} height={120} width={120} />
                ) : (
                  <Lottie options={defaultOptions2} height={60} width={60} />
                )}
              </div>
            </FadeIn>
          </div>
        )}
        {this.state.step2 && (
          <div className="col-lg-12 col-md-12 col-xs-12">
            <FadeIn>
              <div className="d-flex justify-content-end align-items-center">
                <h5> {t("Report_cal.3")}</h5>
                {this.state.loading === "step2" &&
                !this.state.estimationCompleted ? (
                  <Lottie options={graphOptions} height={160} width={160} />
                ) : (
                  <Lottie options={defaultOptions2} height={60} width={60} />
                )}
              </div>
            </FadeIn>
          </div>
        )}
        {this.state.step3 && (
          <div className="col-lg-12 col-md-12 col-xs-12">
            <FadeIn>
              <div className="d-flex justify-content-end align-items-center">
                <h5> {t("Report_cal.4")}</h5>
                {this.state.loading === "step3" &&
                !this.state.estimationCompleted ? (
                  <Lottie options={analysisOptions} height={120} width={120} />
                ) : (
                  <Lottie options={defaultOptions2} height={60} width={60} />
                )}
              </div>
            </FadeIn>
          </div>
        )}
        {this.state.step4 && (
          <div className="col-lg-12 col-md-12 col-xs-12">
            <FadeIn>
              <div className="d-flex justify-content-end align-items-center">
                <h5> {t("Report_cal.5")}</h5>
                {this.state.loading === "step4" ? (
                  <Lottie options={estimateOptions} height={120} width={120} />
                ) : (
                  <Lottie options={defaultOptions2} height={60} width={60} />
                )}
              </div>
            </FadeIn>
          </div>
        )}

        {this.props.evaluationSuccess &&
          (profile && profile.isLoaded && !profile.isEmpty ? (
            <Redirect to={"/vmz/" + this.props.idRapport} />
          ) : (
            <div className="">
              <AnonymousUserInfoVMZForm />
            </div>
            // <Button className="mt-4" type="button" variant="primary">
            //   Devenez membre gratuitement pour obtenir votre evaluation
            // </Button>
            /*  <Link to={"/inbox/" + this.props.idRapport}>
              <Button className="mt-4" type="button" variant="primary">
                Voir votre rapport d'evaluation
              </Button>
            </Link> */
          ))}
      </div>
    ) : null;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    anonymousSignIn: () => dispatch(firebaseAnonymousSignIn()),
    obtenirEvaluation: (values) => dispatch(ObtenirEvaluation(values)),
    VMZsignUp: (values, setState) => dispatch(firebaseSignUpforVMZ(values)),
  };
};

const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
  user: state.firebase.auth,
  idRapport: state.rapport.comparables,
  evaluationLoading: state.rapport.evaluationLoading,
  evaluationSuccess: state.rapport.evaluationSuccess,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(CalculEstimationVMZStep));
