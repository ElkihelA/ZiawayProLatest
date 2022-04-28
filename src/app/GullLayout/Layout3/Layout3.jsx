import React, { Component } from "react";
import AppContext from "app/appContext";
import { renderRoutes } from "react-router-config";

import Footer from "../SharedComponents/Footer";

import { connect } from "react-redux";
import { merge } from "lodash";
import { classList } from "@utils";
import Layout3Header from "./Layout3Header";
import GullSearch from "@gull/components/GullSearch";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";

class Layout3 extends Component {
  state = {};

  handleSearchBoxClose = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layout3Settings: {
          searchBox: {
            open: false
          }
        }
      })
    );
  };

  render() {
    let { settings, routes } = this.props;

    return (
      <div>
        <div className="app-admin-wrap  layout-horizontal-bar">
          <Layout3Header></Layout3Header>

          <div
            className={classList({
              "main-content-wrap d-flex flex-column": true
            })}
          >
            <div className="main-content">{renderRoutes(routes)}</div>

            <Footer></Footer>
          </div>
        </div>
        <GullSearch
          open={settings.layout3Settings.searchBox.open}
          handleClose={this.handleSearchBoxClose}
        ></GullSearch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.layout.settings
});

export default connect(
  mapStateToProps,
  { setLayoutSettings }
)(Layout3);
