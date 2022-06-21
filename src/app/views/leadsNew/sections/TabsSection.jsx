import React, { useState } from "react";
import { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import Select from "react-select";
import NewLeadCard from "./NewLeadCard";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";
import SimpleCard from "@gull/components/cards/SimpleCard";

const TabsSection = ({
  data,
  onClick,
  prospects,
  reports = [],
  tobecontacted = [],
  usersContact = [],
  updateToBeContacted,
}) => {
  const { t } = useTranslation();
  const profile = useSelector((state) => state.firebase.profile);

  const [myLeads, setMyLeads] = useState([]);
  const [currentTab, setCurrentTab] = useState("Date");
  const [ssort, setSort] = useState(null);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(5);
  const [firstIndexContact, setFirstIndexContact] = useState(0);
  const [lastIndexContact, setLastIndexContact] = useState(5);
  const [firstIndexToContact, setFirstIndexToContact] = useState(0);
  const [lastIndexToContact, setLastIndexToContact] = useState(5);
  const [firstIndexToProspect, setFirstIndexToProspect] = useState(0);
  const [lastIndexToProspect, setLastIndexToProspect] = useState(5);

  const setUpdatedData = (id, broker = []) => {
    const idx = myLeads.findIndex((item) => item.id === id);
    myLeads[idx].broker = broker;
    setMyLeads(myLeads);
    updateToBeContacted(myLeads[idx]);
  };

  useEffect(() => {
    setMyLeads(usersContact);
  }, [usersContact]);

  const updateMyLeads = (item) => {
    setMyLeads([...myLeads, item]);
    updateToBeContacted(item);
  };

  const options = [
    { value: "desc_price", label: t("Leads.19") },
    { value: "asc_price", label: t("Leads.20") },
    { value: "asc_date", label: t("Leads.21") },
    { value: "desc_date", label: t("Leads.22") },
    // { value: "stars", label: "Stars" },
  ];

  const sortedData = (data = [], value) => {
    switch (value) {
      case "asc_price":
        return data.sort((a, b) =>
          a.ziaEstimation.prediction > b.ziaEstimation.prediction ? 1 : -1
        );
      case "desc_price":
        return data.sort((a, b) =>
          a.ziaEstimation.prediction > b.ziaEstimation.prediction ? -1 : 1
        );
      case "desc_date":
        return data.sort((a, b) => (a.dateCreation > b.dateCreation ? -1 : 1));
      case "asc_date":
        return data.sort((a, b) => (a.dateCreation > b.dateCreation ? 1 : -1));
      default:
        return data;
    }
  };

  const handlePageClick = (event) => {
    const indexOfLastPost = event.selected * 5;
    const indexOfFirstPost = indexOfLastPost - 5;
    if (event.selected === 0) {
      setFirstIndex(0);
      setLastIndex(5);
    } else {
      setFirstIndex(indexOfFirstPost);
      setLastIndex(indexOfLastPost);
    }
  };

  const handleContactPage = (event) => {
    console.log("selected", event.selected);
    const indexOfLastPost = event.selected * 5;
    const indexOfFirstPost = indexOfLastPost - 5;
    if (event.selected === 0) {
      setFirstIndexContact(0);
      setLastIndexContact(5);
    } else {
      setFirstIndexContact(indexOfFirstPost);
      setLastIndexContact(indexOfLastPost);
    }
  };

  const handleToContactPage = (event) => {
    console.log("selected", event.selected);
    const indexOfLastPost = event.selected * 5;
    const indexOfFirstPost = indexOfLastPost - 5;
    if (event.selected === 0) {
      setFirstIndexToContact(0);
      setLastIndexToContact(5);
    } else {
      setFirstIndexToContact(indexOfFirstPost);
      setLastIndexToContact(indexOfLastPost);
    }
  };

  const handleToProspectPage = (event) => {
    const indexOfLastPost = event.selected * 5;
    const indexOfFirstPost = indexOfLastPost - 5;
    if (event.selected === 0) {
      setFirstIndexToProspect(0);
      setLastIndexToProspect(5);
    } else {
      setFirstIndexToProspect(indexOfFirstPost);
      setLastIndexToProspect(indexOfLastPost);
    }
  };

  return (
    <Tab.Container
      id="left-tabs-example"
      defaultActiveKey="Date"
      onSelect={(key) => setCurrentTab(key)}
    >
      <div className="border rounded-lg position-relative">
        <div className="border-bottom">
          <ul
            className="nav align-items-center p-3 p-md-0"
            style={{ rowGap: "1rem" }}
          >
            <li className="mr-3">
              <Select
                placeholder={t("Leads.76")}
                options={options}
                onChange={(e) => setSort(e.value)}
              />
            </li>
            <li className="ml-md-4 flex-fill">
              <Nav
                variant="pills"
                className="text-uppercase w-100 overflow-auto text-nowrap flex-nowrap justify-content-end"
              >
                <Nav.Item>
                  <Nav.Link eventKey="Date"> {t("Leads.15")}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Price">{t("Leads.16")}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Bookmarks">{t("Leads.17")}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="MyLeads">{t("Leads.18")}</Nav.Link>
                </Nav.Item>
              </Nav>
            </li>
          </ul>
        </div>
        <div className="overflow-auto" style={{ height: 620 }}>
          <Tab.Content className="h-100">
            <Tab.Pane eventKey="Price">
              {currentTab === "Price" && (
                <ul className="nav flex-column gy-2">
                  {sortedData(tobecontacted, ssort)
                    .slice(firstIndexToContact, lastIndexToContact)
                    .map((item) => (
                      <li key={item.id}>
                        <NewLeadCard
                          data={item}
                          onClick={onClick}
                          reports={reports}
                          setUpdatedData={setUpdatedData}
                          updateMyLeads={updateMyLeads}
                        />
                      </li>
                    ))}

                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(tobecontacted.length / 5)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handleToContactPage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </ul>
              )}
            </Tab.Pane>
            <Tab.Pane eventKey="Date">
              {currentTab === "Date" && (
                <ul className="nav flex-column gy-2">
                  {sortedData(prospects, ssort)
                    .slice(firstIndexContact, lastIndexContact)
                    ?.map((item) => (
                      <li>
                        <NewLeadCard
                          data={item}
                          onClick={onClick}
                          prospect={true}
                          showAddButton
                          reports={reports}
                          setUpdatedData={setUpdatedData}
                        />
                      </li>
                    ))}
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(prospects.length / 5)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handleContactPage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </ul>
              )}
            </Tab.Pane>
            <Tab.Pane className="h-100" eventKey="MyLeads">
              {currentTab === "MyLeads" && (
                <ul className="nav flex-column gy-2">
                  {myLeads.slice(firstIndex, lastIndex).map((item) => (
                    <li>
                      <NewLeadCard
                        data={item}
                        onClick={onClick}
                        reports={reports}
                        setUpdatedData={setUpdatedData}
                      />
                    </li>
                  ))}
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(myLeads.length / 5)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </ul>
              )}
            </Tab.Pane>
            <Tab.Pane className="h-100" eventKey="Bookmarks">
              {currentTab === "Bookmarks" && (
                <ul className="nav flex-column gy-2">
                  {sortedData(profile?.bookmarks, ssort)
                    .slice(firstIndexToProspect, lastIndexToProspect)
                    .map((item) => (
                      <li>
                        <NewLeadCard
                          data={item}
                          onClick={onClick}
                          prospect={true}
                          reports={reports}
                          setUpdatedData={setUpdatedData}
                        />
                      </li>
                    ))}
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(profile?.bookmarks.length / 5)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handleToProspectPage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </ul>
              )}
            </Tab.Pane>
          </Tab.Content>
        </div>
      </div>
    </Tab.Container>
  );
};

export default TabsSection;
