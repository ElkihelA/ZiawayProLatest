import React, { useState } from "react";
import { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import Select from "react-select";
import NewLeadCard from "./NewLeadCard";
import { useTranslation } from "react-i18next";

const TabsSection = ({ data, onClick, prospects }) => {
  const { t } = useTranslation();
  const profile = useSelector((state) => state.firebase.profile);

  const [leads, setLeads] = useState(null);
  const [myLeads, setMyLeads] = useState(null);
  const [prospect, setProspect] = useState(null);
  const [currentTab, setCurrentTab] = useState('Date');

  useEffect(() => {
    if (profile && data) {
      const test = data?.filter(
        (v) =>
          v?.broker?.length === 0 || v?.broker[0]?.brokerId === profile.userId
      );

      const test2 = data?.filter(
        (v) => v?.broker[0]?.brokerId === profile.userId
      );
      setMyLeads(test2);
      setLeads(test);
    }
  }, [data, profile]);

  useEffect(() => {
    if (prospects) {
      setProspect(prospects);
    }
  }, [prospects]);

  const options = [
    { value: "price", label: t("Leads.19") },
    { value: "price2", label: t("Leads.20") },
    { value: "date", label: t("Leads.21") },
    { value: "date2", label: t("Leads.22") },
    // { value: "stars", label: "Stars" },
  ];

  function sort(valuePath, array) {
    let path = valuePath.split(".");

    return array.sort((a, b) => {
      return getValue(b, path) - getValue(a, path);
    });

    function getValue(obj, path) {
      path.forEach((path) => (obj = obj[path]));
      return obj;
    }
  }

  function sort2(valuePath, array) {
    let path = valuePath.split(".");

    return array.sort((a, b) => {
      return getValue(a, path) - getValue(b, path);
    });

    function getValue(obj, path) {
      path.forEach((path) => (obj = obj[path]));
      return obj;
    }
  }

  const onSorting = (value) => {
    switch (value) {
      case "price":
        setLeads(sort("ziaEstimation.prediction", [...leads]));
        setProspect(sort("ziaEstimation.prediction", [...prospect]));
        break;

      case "price2":
        setLeads(sort2("ziaEstimation.prediction", [...leads]));
        setProspect(sort2("ziaEstimation.prediction", [...prospect]));
        break;

      case "date":
        const sortedLeads = [...leads].sort(function (a, b) {
          return new Date(a.dateCreation) - new Date(b.dateCreation);
        });
        const sortedProspects = [...prospect].sort(function (a, b) {
          return new Date(a.dateCreation) - new Date(b.dateCreation);
        });
        setLeads(sortedLeads);
        setProspect(sortedProspects);
        break;

      case "date2":
        const sortedLeadss = [...leads].sort(function (a, b) {
          return new Date(b.dateCreation) - new Date(a.dateCreation);
        });
        const sortedProspectss = [...prospect].sort(function (a, b) {
          return new Date(b.dateCreation) - new Date(a.dateCreation);
        });
        setLeads(sortedLeadss);
        setProspect(sortedProspectss);
        break;

      case "stars":
        console.log("Oranges are $0.59 a pound.");
        break;

      default:
        console.log(`Sorry, we are out of ${value}.`);
    }
  };

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
                onChange={(e) => onSorting(e.value)}
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
                    {leads?.map((item) => (
                        <li key={item.id}>
                          <NewLeadCard data={item} onClick={onClick} />
                        </li>
                    ))}
                  </ul>
              }
              </Tab.Pane>
            <Tab.Pane eventKey="Date">
              {
                currentTab === 'Date' &&
                  <ul className="nav flex-column gy-2">
                    {prospect?.map((item) => (
                        <li>
                          <NewLeadCard
                              data={item}
                              onClick={onClick}
                              prospect={true}
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
                    {myLeads?.map((item) => (
                        <li>
                          <NewLeadCard data={item} onClick={onClick} />
                        </li>
                    ))}
                  </ul>
              }
            </Tab.Pane>
            <Tab.Pane className="h-100" eventKey="Bookmarks">
              {currentTab === 'Bookmarks' &&
                  <ul className="nav flex-column gy-2">
                    {profile?.bookmarks?.map((item) => (
                        <li>
                          <NewLeadCard
                              data={item}
                              onClick={onClick}
                              prospect={true}
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
