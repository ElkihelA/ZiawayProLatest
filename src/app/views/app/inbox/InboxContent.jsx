import React, { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import ReactHtmlParser from "react-html-parser";
import { format } from "date-fns";
import RapportEvaluation from "../../rapportEvaluation/RapportEvaluation";
const InboxContent = ({
  mainSidenavOpen,
  secSidenavOpen,
  isMobile,
  messageList = [],
  toggleSidenav,
  idRapport,
  t,
}) => {
  const [selectedMessage, setMessage] = useState(null);

  const handleMessageClick = (message) => {
    setMessage(message);
    if (isMobile) toggleSidenav("secSidenavOpen");
  };

  useEffect(() => {
    if (messageList.length > 0) setMessage(messageList[0]);
  }, [messageList]);

  return (
    <div
      className="inbox-main-content sidebar-content"
      style={{ marginLeft: isMobile ? 0 : "180px" }}
    >
      {isMobile ? (
        <RapportEvaluation idRapport={idRapport} />
      ) : (
        <div className="inbox-secondary-sidebar-container box-shadow-1 sidebar-container">
          <div
            className="sidebar-content"
            style={{ marginLeft: isMobile ? 0 : "0px" }}
          >
            <div
              className="inbox-secondary-sidebar-content position-relative"
              style={{ minHeight: "500px" }}
            >
              <PerfectScrollbar
                className="inbox-details perfect-scrollbar rtl-ps-none"
                data-suppress-scroll-x="true"
              >
                <RapportEvaluation idRapport={idRapport} />
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InboxContent;
