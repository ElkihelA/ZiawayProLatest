import React, { Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { setUserData } from "../redux/actions/UserActions";
import { withRouter } from "react-router-dom";
import { Loading } from "@gull";
import { useEffect } from "react";


const Auth = ({children, profile = {}, history = {}, location = {}, setUserData}) => {

  useEffect(() => {
    console.log("profile", profile);
    if(profile.isLoaded && !profile.isEmpty) {
      if(location.pathname.startsWith("/session")) {
        history.push("/");
      }
      setUserData({profile, loading: false});
    } else if(profile.isLoaded && profile.isEmpty && !location.search.includes('selected-plan-id=')) {
      debugger;
      history.push({
        pathname: "/session/signin",
      });
    }
    setUserData({loading: false});
  }, [profile]);

  return (<Fragment>{!profile.isLoaded ? <Loading /> : children}</Fragment>);
}

const mapStateToProps = (state) => ({
  setUserData: PropTypes.func.isRequired,
  profile: state.firebase.profile,
});

export default withRouter(connect(mapStateToProps, { setUserData })(Auth));
