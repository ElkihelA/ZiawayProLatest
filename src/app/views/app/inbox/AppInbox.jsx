import React, { Component } from "react";
import { isMobile } from "@utils";
import InboxSidenav from "./InboxSidenav";
import { getAllMessage } from "./inboxService";
import InboxContent from "./InboxContent";
import { StickyContainer, Sticky } from "react-sticky";
import { Breadcrumb } from "@gull";
import { withTranslation } from "react-i18next";

class AppInbox extends Component {
  container = React.createRef();
  windowResizeListener;
  state = {
    mainSidenavOpen: true,
    secSidenavOpen: true,
    masterCheckbox: false,
    isMobile: false,
    messageList: [],
  };

  toggleSidenav = (field) => {
    this.setState({ [field]: !this.state[field] });
  };

  componentDidMount() {
    if (isMobile())
      this.setState({
        mainSidenavOpen: false,
        secSidenavOpen: false,
        isMobile: true,
      });
    if (window)
      this.windowResizeListener = window.addEventListener("resize", (e) => {
        if (isMobile())
          this.setState({
            mainSidenavOpen: false,
            secSidenavOpen: false,
            isMobile: true,
          });
        else
          this.setState({
            mainSidenavOpen: true,
            secSidenavOpen: true,
            isMobile: false,
          });
      });

    getAllMessage().then((data) => {
      this.setState({
        messageList: data.data,
      });
    });
  }

  componentWillUnmount() {
    if (window) window.removeEventListener("resize", this.windowResizeListener);
  }

  render() {
    let { mainSidenavOpen, secSidenavOpen, messageList, isMobile } = this.state;
    const { t } = this.props;
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: `${t("Report_res.29")}`, path: "/" },
            { name: `${t("Report_res.30")}`, path: "/mes-biens" },
            { name: `${t("Report_res.31")}`, path: "/mes-biens" },
          ]}
        ></Breadcrumb>

        <div className="inbox-main-sidebar-container sidebar-container">
          <StickyContainer>
            {!isMobile && (
              <Sticky>
                {({ style, wasSticky, isSticky, distanceFromTop = 20 }) => (
                  <div style={style}>
                    <InboxSidenav
                      open={mainSidenavOpen}
                      toggleSidenav={this.toggleSidenav}
                      t={t}
                    ></InboxSidenav>
                  </div>
                )}
              </Sticky>
            )}
            <InboxContent
              t={t}
              secSidenavOpen={secSidenavOpen}
              mainSidenavOpen={mainSidenavOpen}
              isMobile={isMobile}
              messageList={messageList}
              toggleSidenav={this.toggleSidenav}
              idRapport={this.props.match.params.id}
            ></InboxContent>
          </StickyContainer>
        </div>
      </div>
    );
  }
}

export default withTranslation()(AppInbox);
