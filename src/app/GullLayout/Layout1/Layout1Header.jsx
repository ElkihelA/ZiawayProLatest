import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import { getTimeDifference } from "@utils";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import { Link } from "react-router-dom";
import france from "../../../flags/france.png";
import england from "../../../flags/english.png";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setLayoutSettings,
  setDefaultSettings,
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { withRouter } from "react-router-dom";

import { merge } from "lodash";
import MegaMenu from "@gull/components/MegaMenu";
import { withTranslation } from "react-i18next";
// import i18n from "i18next";
// import t from "i18next";

class Layout1Header extends Component {
  state = {
    shorcutMenuList: [
      {
        icon: "i-Shop-4",
        link: "#",
        text: "Home",
      },
      {
        icon: "i-Library",
        link: "#",
        text: "Ui Kits",
      },
      {
        icon: "i-Drop",
        link: "#",
        text: "Apps",
      },
      {
        icon: "i-File-Clipboard-File--Text",
        link: "#",
        text: "Form",
      },
      {
        icon: "i-Checked-User",
        link: "#",
        text: "Sessions",
      },
      {
        icon: "i-Ambulance",
        link: "#",
        text: "Support",
      },
    ],
    notificationList: [
      {
        icon: "i-Speach-Bubble-6",
        title: "New message",
        description: "James: Hey! are you busy?",
        time: "2019-10-30T02:10:18.931Z",
        color: "primary",
        status: "New",
      },
      {
        icon: "i-Receipt-3",
        title: "New order received",
        description: "1 Headphone, 3 iPhone",
        time: "2019-03-10T02:10:18.931Z",
        color: "success",
        status: "New",
      },
      {
        icon: "i-Empty-Box",
        title: "Product out of stock",
        description: "1 Headphone, 3 iPhone",
        time: "2019-05-10T02:10:18.931Z",
        color: "danger",
        status: "3",
      },
      {
        icon: "i-Data-Power",
        title: "Server up!",
        description: "Server rebooted successfully",
        time: "2019-03-10T02:10:18.931Z",
        color: "success",
        status: "3",
      },
    ],
    showSearchBox: false,
  };

  handleMenuClick = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layout1Settings: {
          leftSidebar: {
            open: settings.layout1Settings.leftSidebar.secondaryNavOpen
              ? true
              : !settings.layout1Settings.leftSidebar.open,
            secondaryNavOpen: false,
          },
        },
      })
    );
  };

  handleLanguage = (lang) => {
    this.props.i18n.changeLanguage(lang);
  };

  toggleFullScreen = () => {
    if (document.fullscreenEnabled) {
      if (!document.fullscreen) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    }
  };

  handleSearchBoxOpen = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layout1Settings: {
          searchBox: {
            open: true,
          },
        },
      })
    );
  };

  render() {
    let { shorcutMenuList = [], notificationList = [] } = this.state;
    const { t, profile } = this.props;
    console.log("lamguage", this.props.i18n.language);
    return (
      <div className="main-header px-0">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="" />
        </div>

        <div className="menu-toggle" onClick={this.handleMenuClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="d-none d-lg-flex align-items-center">
          <Link className="pl-3 text-16" to="/">
            <i className="i-Home1 pr-2"></i>
            {t("Header.1")}
          </Link>
          {/* <a
            className="pl-3 text-16"
            target="_blank"
            rel="noopener noreferrer"
            href="https://blog.ziaway.ca/"
          >
            <span className="pl-2 pr-2"></span>
            <i className="i-Home-4 pr-2"></i>
            Ziaway.ca
          </a> */}
          <a
            className="pl-3 text-16"
            target="_blank"
            rel="noopener noreferrer"
            href="https://pro.ziaway.ca/blogs/"
          >
            <span className="pl-2 pr-2"></span>
            <i className="i-Newspaper pr-2"></i>
            {t("Header.2")}
          </a>
          {/* <a
              className="pl-3 text-16"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ziaway.ca/contactez-nous"
            >
              <span className="pl-2 pr-2"></span>
              <i className="i-Support pr-2"></i>
              {t("Header.3")}
            </a> */}
          <Link className="pl-3 text-16" to="/moncompte">
            <i className="i-Administrator pr-2"></i>
            {t("Header.6")}
          </Link>
          <Dropdown className="mr-3">
            <div className="mega-menu">
              <Dropdown.Menu>
                <MegaMenu></MegaMenu>
              </Dropdown.Menu>
            </div>
          </Dropdown>

          {/**   <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              onFocus={this.handleSearchBoxOpen}
            />
            <i className="search-icon text-muted i-Magnifi-Glass1"></i>
          </div>*/}
        </div>

        <div style={{ margin: "auto" }}></div>

        <div className="header-part-right">
          {/* <i
            className="i-Full-Screen header-icon d-none d-sm-inline-block"
            data-fullscreen
            onClick={this.toggleFullScreen}
          ></i> */}
          {/**
          <Dropdown>
            <Dropdown.Toggle as="span" className="toggle-hidden">
              <i
                className="i-Safe-Box text-muted header-icon"
                role="button"
              ></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div className="menu-icon-grid">
                {shorcutMenuList.map((menu) => (
                  <Link key={menu.text} to={menu.link}>
                    <i className={menu.icon}></i> {menu.text}
                  </Link>
                ))}
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle as="span" className="toggle-hidden cursor-pointer">
              <div
                className="badge-top-container"
                role="button"
                id="dropdownNotification"
                data-toggle="dropdown"
              >
                <span className="badge badge-primary">3</span>
                <i className="i-Bell text-muted header-icon"></i>
              </div>
            </Dropdown.Toggle>

            <DropdownMenu className="notification-dropdown rtl-ps-none">
              {notificationList.map((note, index) => (
                <div key={index} className="dropdown-item d-flex">
                  <div className="notification-icon">
                    <i className={`${note.icon} text-${note.color} mr-1`}></i>
                  </div>
                  <div className="notification-details flex-grow-1">
                    <p className="m-0 d-flex align-items-center">
                      <span>{note.title}</span>
                      <span
                        className={`badge badge-pill badge-${note.color} ml-1 mr-1`}
                      >
                        {note.status}
                      </span>
                      <span className="flex-grow-1"></span>
                      <span className="text-small text-muted ml-auto">
                        {getTimeDifference(new Date(note.time))} ago
                      </span>
                    </p>
                    <p className="text-small text-muted m-0">
                      {note.description}
                    </p>
                  </div>
                </div>
              ))}
            </DropdownMenu>
          </Dropdown>
          */}
          <div className="d-none d-lg-block align-self-end">
            <Link className="dropdown-item cursor-pointer bg-primary rounded">
              <span className="text-16 text-white text-bold text-capitalize">
                {t("Header.5")} {profile.displayName}
              </span>
            </Link>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              id="dropdown-basic"
              className="d-flex align-items-center"
            >
              <img
                className="d-block mr-1"
                height={15}
                width={22}
                src={france}
                alt=".."
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.handleLanguage("sp")}>
                <div className="d-flex align-items-center">
                  {/* <img
                    className="d-block mr-2"
                    height={15}
                    width={18}
                    src={france}
                    alt=".."
                  /> */}
                  <span>French</span>
                </div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleLanguage("en")}>
                <div className="d-flex align-items-center">
                  {/* <img
                    className="d-block mr-2"
                    height={15}
                    width={18}
                    src={england}
                    alt=".."
                  /> */}
                  <span> English</span>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="user col align-self-end">
            <Link
              to="/"
              className="dropdown-item cursor-pointer"
              onClick={this.props.logoutUser}
            >
              <span className="text-18 text-primary text-bold">
                {" "}
                {t("Header.4")}
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Layout1Header.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  setDefaultSettings: PropTypes.func.isRequired,
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: state.user,
  profile: state.firebase.profile,
  settings: state.layout.settings,
});

export default withRouter(
  connect(mapStateToProps, {
    setLayoutSettings,
    setDefaultSettings,
    logoutUser,
  })(withTranslation()(Layout1Header))
);
