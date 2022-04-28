import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigations } from "../../navigations";
import { merge } from "lodash";
import { classList, isMobile } from "@utils";
import Srcollbar from "react-perfect-scrollbar";
import { DropDownMenu } from "@gull";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setLayoutSettings
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { withRouter } from "react-router-dom";

class Layout2Sidenav extends Component {
  windowListener = null;
  state = {
    selectedItem: {},
    navOpen: true,
    secondaryNavOpen: false
  };

  onMainItemMouseEnter = item => {
    this.setSelected(item);
  };

  findSelecteditem = () => {
    navigations.forEach(item => {
      if (item.sub) {
        item.sub.forEach(child => {
          if (child.sub) {
            child.sub.forEach(grandChild => {
              if (grandChild.path == this.props.history.location.pathname) {
                this.setSelected(item);
              }
            });
          } else {
            if (child.path == this.props.history.location.pathname) {
              this.setSelected(item);
            }
          }
        });
      } else {
        if (item.path == this.props.history.location.pathname) {
          this.setSelected(item);
        }
      }
    });
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
    // console.log("closing sec sidenav");
    let { setLayoutSettings, settings } = this.props;
    let other = {};

    if (isMobile()) {
      other.open = false;
    }

    setLayoutSettings(
      merge({}, settings, {
        layout2Settings: {
          leftSidebar: {
            ...other,
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
    setTimeout(() => {
      this.findSelecteditem();
    })
    if (window)
      if (window.innerWidth < 1200) {
        this.closeSecNav();
      } else {
        this.openSecNav();
      }

    this.windowListener = window.addEventListener("resize", () => {
      if (window.innerWidth < 1200) {
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
    console.log('menu user role',this.props.user.role );
    const navigationRole = navigations.filter((item) => {
      
      if(item.role==this.props.user.role){
        return item;
      }
    
    
    });
   
    return (
      <div className="side-content-wrap">
        <Srcollbar
          className={classList({
            "sidebar-left o-hidden rtl-ps-none": true,
            open: settings.layout2Settings.leftSidebar.open
          })}
        >
          <ul className="navigation-left">
            {navigationRole.map((item, i) => (
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

        <Srcollbar
          className={classList({
            "sidebar-left-secondary o-hidden rtl-ps-none": true,
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
            <DropDownMenu
              menu={selectedItem.sub}
              closeSecSidenav={this.closeSecNav}
            ></DropDownMenu>
          )}
        </Srcollbar>
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
  settings: state.layout.settings,
  user: state.firebase.profile
});

export default withRouter(
  connect(mapStateToProps, {
    setLayoutSettings
  })(Layout2Sidenav)
);
