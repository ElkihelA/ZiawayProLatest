import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { setUserData } from "../redux/actions/UserActions";
import jwtAuthService from "../services/jwtAuthService";
import localStorageService from "../services/localStorageService";
import firebaseAuthService from "../services/firebase/firebaseAuthService";
import { withRouter } from "react-router-dom";
import { Loading } from "@gull";
class Auth extends Component {
  state = {
    loading: true
  };

  constructor(props) {
    super(props);
    this.props.setUserData(localStorageService.getItem("auth_user"));
    this.checkFirebaseAuth();
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
      this.setState({loading: false})
      if (user) {
        console.log("user found");
      } else if(!location.search.includes('selected-plan-id=')) {
        history.push({
          pathname: "/session/signin",
        });
        console.log("not logged in");
      }
    });
  };

  render() {
    const { children } = this.props;
    const {loading} = this.state;

    return <Fragment>{loading ? <Loading /> : children}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
  setUserData: PropTypes.func.isRequired,
  profile: state.firebase.profile,
});

export default withRouter(connect(mapStateToProps, { setUserData })(Auth));
