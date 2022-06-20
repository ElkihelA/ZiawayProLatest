import React, { useState } from "react";
import { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import Select from "react-select";
import NewLeadCard from "./NewLeadCard";
import { useTranslation } from "react-i18next";

const TabsSection = ({ data, onClick, prospects, reports = [], tobecontacted=[], usersContact = [], updateToBeContacted }) => {
  const { t } = useTranslation();
  const profile = useSelector((state) => state.firebase.profile);

  const [myLeads, setMyLeads] = useState([]);
  const [currentTab, setCurrentTab] = useState('Date');
  const [ssort, setSort] = useState(null);

  const setUpdatedData = (id, broker=[]) => {
    const idx = myLeads.findIndex(item => item.id === id);
    myLeads[idx].broker = broker;
    setMyLeads(myLeads);
    updateToBeContacted(myLeads[idx])
  }

  useEffect(()=> {
    setMyLeads(usersContact);
  }, [usersContact])

  const updateMyLeads = item => {
    setMyLeads([...myLeads, item]);
    updateToBeContacted(item)
  }

  const options = [
    { value: "desc_price", label: t("Leads.19") },
    { value: "asc_price", label: t("Leads.20") },
    { value: "asc_date", label: t("Leads.21") },
    { value: "desc_date", label: t("Leads.22") },
    // { value: "stars", label: "Stars" },
  ];

  const sortedData = (data = [], value) => {
    switch(value){
      case "asc_price":
        return data.sort((a,b) => a.ziaEstimation.prediction > b.ziaEstimation.prediction ? 1:-1);
      case "desc_price":
        return data.sort((a,b) => a.ziaEstimation.prediction > b.ziaEstimation.prediction ? -1:1);
      case "desc_date":
        return data.sort((a,b) => a.dateCreation > b.dateCreation ? -1:1);
      case "asc_date":
        return data.sort((a,b) => a.dateCreation > b.dateCreation ? 1:-1);
      default:
        return data;
    }
  }

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="Date" onSelect={key => setCurrentTab(key)}>
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
              {currentTab === 'Price' &&
                  <ul className="nav flex-column gy-2">
                    {sortedData(tobecontacted, ssort).map((item) => (
                        <li key={item.id}>
                          <NewLeadCard data={item} onClick={onClick} reports={reports} setUpdatedData={setUpdatedData} updateMyLeads={updateMyLeads} />
                        </li>
                    ))}
                  </ul>
              }
              </Tab.Pane>
            <Tab.Pane eventKey="Date">
              {
                currentTab === 'Date' &&
                  <ul className="nav flex-column gy-2">
                    {sortedData(prospects, ssort)?.map((item) => (
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
                  </ul>
              }
            </Tab.Pane>
            <Tab.Pane className="h-100" eventKey="MyLeads">
              {
                currentTab === 'MyLeads' &&
                  <ul className="nav flex-column gy-2">
                    {myLeads.map((item) => (
                        <li>
                          <NewLeadCard data={item} onClick={onClick} reports={reports} setUpdatedData={setUpdatedData} />
                        </li>
                    ))}
                  </ul>
              }
            </Tab.Pane>
            <Tab.Pane className="h-100" eventKey="Bookmarks">
              {currentTab === 'Bookmarks' &&
                  <ul className="nav flex-column gy-2">
                    {sortedData(profile?.bookmarks, ssort).map((item) => (
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
                  </ul>
              }
            </Tab.Pane>
          </Tab.Content>
        </div>
      </div>
    </Tab.Container>
  );
};

export default TabsSection;
