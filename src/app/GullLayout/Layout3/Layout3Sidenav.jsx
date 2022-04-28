import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigations } from "../../navigations";
import { merge } from "lodash";
import { classList } from "@utils";
import Srcollbar from "react-perfect-scrollbar";
import { DropDownMenu } from "@gull";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setLayoutSettings,
  setDefaultSettings
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { withRouter } from "react-router-dom";

class Layout2Sidenav extends Component {
  windowListener = null;
  state = {
    selectedItem: {
      name: "Dashboard",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      type: "dropDown",
      icon: "i-Bar-Chart",
      sub: [
        {
          icon: "i-Clock-3",
          name: "Version 1",
          path: "/dashboard/v1",
          type: "link"
        },
        {
          icon: "i-Clock-4",
          name: "Version 2",
          path: "/dashboard/v2",
          type: "link"
        },
        {
          icon: "i-Over-Time",
          name: "Version 3",
          path: "/dashboard/v3",
          type: "link"
        },
        {
          icon: "i-Clock",
          name: "Version 4",
          path: "/dashboard/v4",
          type: "link"
        }
      ]
    },
    navOpen: true,
    secondaryNavOpen: false
  };

  onMainItemMouseEnter = item => {
    this.setSelected(item);
    console.log(item);
  };

  onMainItemMouseLeave = () => {};

  setSelected = selectedItem => {
    this.setState({ selectedItem });
    // console.log(selectedItem);
  };

  removeSelected = () => {
    this.setState({ selectedItem: null });
    // console.log('removed');
  };

  closeSecNav = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layout2Settings: {
          leftSidebar: {
            open: false,
            secondaryNavOpen: false
          }
        }
      })
    );
  };

  openSecNav = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layout2Settings: {
          leftSidebar: {
            open: true,
            secondaryNavOpen: true
          }
        }
      })
    );
  };

  componentDidMount() {
    if (window)
      if (window.innerWidth < 1200) {
        this.closeSecNav();
      } else {
        this.openSecNav();
      }

    this.windowListener = window.addEventListener("resize", ({ target }) => {
      if (target.innerWidth < 1200) {
        this.closeSecNav();
      } else {
        this.openSecNav();
      }
    });
  }

  componentWillUnmount() {
    if (this.windowListener) {
      window.removeEventListener("resize", this.windowListener);
    }
  }

  render() {
    let { settings } = this.props;
    let { selectedItem } = this.state;

    return (
      <div className="side-content-wrap">
        <Srcollbar
          className={classList({
            "sidebar-left rtl-ps-none": true,
            open: settings.layout2Settings.leftSidebar.open
          })}
        >
          <ul className="navigation-left">
            {navigations.map((item, i) => (
              <li
                className={classList({
                  "nav-item": true,
                  active: item.name === selectedItem.name
                })}
                onMouseEnter={() => {
                  this.onMainItemMouseEnter(item);
                }}
                onMouseLeave={this.onMainItemMouseLeave}
                key={i}
              >
                {item.path && item.type !== "extLink" && (
                  <NavLink className="nav-item-hold" to={item.path}>
                    <i className={`nav-icon ${item.icon}`}></i>
                    <span className="nav-text">{item.name}</span>
                  </NavLink>
                )}
                {item.path && item.type === "extLink" && (
                  <a className="nav-item-hold" href={item.path}>
                    <i className={`nav-icon ${item.icon}`}></i>
                    <span className="nav-text">{item.name}</span>
                  </a>
                )}
                {!item.path && (
                  <div className="nav-item-hold">
                    <i className={`nav-icon ${item.icon}`}></i>
                    <span className="nav-text">{item.name}</span>
                  </div>
                )}
                <div className="triangle"></div>
              </li>
            ))}
          </ul>
        </Srcollbar>

        <div
          className={classList({
            "sidebar-left-secondary rtl-ps-none": true,
            open: settings.layout2Settings.leftSidebar.secondaryNavOpen
          })}
        >
          <i className="sidebar-close i-Close" onClick={this.closeSecNav}></i>
          <div className="logo ml-4 mb-4">
            <img src="/assets/images/logo-text.png" alt="logo" />
          </div>
          <div className="header mb-3 ml-4">
            <h5 className="font-weight-bold mb-1">{selectedItem.name}</h5>
            <p>{selectedItem.description}</p>
          </div>
          {selectedItem && selectedItem.sub && (
            <DropDownMenu menu={selectedItem.sub}></DropDownMenu>
          )}
        </div>
        <div
          className={classList({
            "sidebar-overlay": true,
            open: settings.layout2Settings.leftSidebar.secondaryNavOpen
          })}
        ></div>
      </div>
    );
  }
}

Layout2Sidenav.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      setLayoutSettings
    }
  )(Layout2Sidenav)
);
