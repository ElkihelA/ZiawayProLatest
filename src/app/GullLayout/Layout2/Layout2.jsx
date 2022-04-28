import React, { Component, Suspense } from "react";
import { renderRoutes } from "react-router-config";

import Footer from "../SharedComponents/Footer";
import Layout2Header from "./Layout2Header";
import Layout2Sidenav from "./Layout2Sidenav";

import { connect } from "react-redux";

import { classList } from "@utils";
import { merge } from "lodash";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import GullSearch from "@gull/components/GullSearch";
import Loading from "@gull/components/GullLoadable/Loading";

class Layout2 extends Component {
  state = {};

  handleSearchBoxClose = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layout2Settings: {
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
        <div
          className={`${classList({
            "app-admin-wrap layout-sidebar-large clearfix": true,
            "sidenav-open": settings.layout2Settings.leftSidebar.open
          })} ${settings.layout2Settings.leftSidebar.theme}`}
        >
          <Layout2Sidenav></Layout2Sidenav>
          {/* sidebar */}

          <div
            className={classList({
              "main-content-wrap d-flex flex-column": true,
              "sidenav-open": settings.layout2Settings.leftSidebar.open
            })}
          >
            {(settings.layout2Settings.header.show && <Layout2Header></Layout2Header>)}
            <Suspense fallback={<Loading />}>
              <div className="main-content">{renderRoutes(routes)}</div>
            </Suspense>
            <Footer></Footer>
          </div>
        </div>
        <GullSearch
          open={settings.layout2Settings.searchBox.open}
          handleClose={this.handleSearchBoxClose}
        ></GullSearch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.layout.settings
});

export default connect(mapStateToProps, { setLayoutSettings })(Layout2);
