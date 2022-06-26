import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { setUserData } from "../redux/actions/UserActions";
import jwtAuthService from "../services/jwtAuthService";
import localStorageService from "../services/localStorageService";
import firebaseAuthService from "../services/firebase/firebaseAuthService";
import { withRouter } from "react-router-dom";
class Auth extends Component {
  state = {};

  constructor(props) {
    super(props);
    const {history} = props;
    this.props.setUserData(localStorageService.getItem("auth_user"));
    //this.checkJwtAuth();
    if (history.location.pathname === "/evaluation-bien") {
      history.push({
        pathname: "/evaluation-bien",
      });
    } else {
      this.checkFirebaseAuth();
    }
  }

  checkJwtAuth = () => {
    jwtAuthService.loginWithToken().then((user) => {
      this.props.setUserData(user);
    });
  };

  checkFirebaseAuth = () => {
    console.log("profile", this.props.profile);

    firebaseAuthService.checkAuthStatus((user) => {
      const {history, location} = this.props;
      if (user) {
        // if (user.emailVerified === false) {
        //   history.push({
        //     pathname: "/emailnotVerfied",
        //   });
        // }
        // history.push({
        //   pathname: "/dashboard/v0",
        // });
        console.log("user found");
      } else if(!location.search.includes('selected-plan-id=')) {
        history.push({
          pathname: "/homepage",
        });
        console.log("not logged in");
      }
    });
  };

  render() {
    const { children } = this.props;

    return <Fragment>{children}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
  setUserData: PropTypes.func.isRequired,
  profile: state.firebase.profile,
});

export default withRouter(connect(mapStateToProps, { setUserData })(Auth));
