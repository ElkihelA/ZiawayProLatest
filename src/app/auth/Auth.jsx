import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { setUserData } from "../redux/actions/UserActions";
import firebaseAuthService from "../services/firebase/firebaseAuthService";
import { withRouter } from "react-router-dom";
import { Loading } from "@gull";
class Auth extends Component {
  state = {
    loading: true
  };

  constructor(props) {
    super(props);
    this.checkFirebaseAuth();
  }

  checkFirebaseAuth = () => {
    firebaseAuthService.checkAuthStatus(async (user) => {
      const {history, location} = this.props;
      if (user) {
        console.log("user found");
        const profile = await firebaseAuthService.getUserData(user.uid);
        this.props.setUserData({profile, loading: false});
      } else if(!location.search.includes('selected-plan-id=')) {
        history.push({
          pathname: "/session/signin",
        });
        this.props.setUserData({loading: false});
        console.log("not logged in");
      }
    });
  };

  render() {
    const { children, user = {} } = this.props;
    return <Fragment>{user.loading ? <Loading /> : children}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
  setUserData: PropTypes.func.isRequired,
  profile: state.firebase.profile,
  user: state.user,
});

export default withRouter(connect(mapStateToProps, { setUserData })(Auth));
