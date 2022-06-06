import React, { useEffect, useState } from "react";
import { Col, Dropdown, Row, Tab } from "react-bootstrap";
import { Loading, SimpleCard } from "@gull";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import ReactEcharts from "echarts-for-react";
import { useTranslation } from "react-i18next";
import { cloudFunctions } from "app/services/firebase/firebase";
import ReactPaginate from "react-paginate";

const DashboardGraphs = () => {
  const { t } = useTranslation();
  const [pageNumber, setPageNumber] = useState(0);
  const [asending, setAsending] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([])
  const [visibility, setVisiblity] = useState({})
  const [myLineData, setMyLineData] = useState([]);
  const [lineData, setLineData] = useState([])
  const [totalContacts, setTotalContacts] = useState(0);
  const [prospoectSize, setProspoectSize] = useState(0)
  const profile = useSelector((state) => state.firebase.profile);


  useEffect(() => {
    const httpCallable = cloudFunctions.httpsCallable('dashboard');
    httpCallable().then(res => {
      if(res.data) {
        setContacts(formatter(res.data.contacts));
        setVisiblity(res.data.visibility);
        setMyLineData(res.data.myLineData);
        setLineData(res.data.lineData);
        setTotalContacts(res.data.totalContacts)
        setProspoectSize(res.data.prospoectLenght)
      }
      setLoading(false);
    })
  }, [])

  // Gradiant Radial Bar
  const options4 = (data) => {
    return {
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: 0,
              show: false,
              color: "#888",
              fontSize: "14px",
            },
            value: {
              formatter: function (val) {
                return `${parseFloat(val).toFixed(0)}%`;
              },
              offsetY: 7,
              offsetX: 2,
              color: "#111",
              fontSize: "12px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      series: [data],
      stroke: {
        lineCap: "round",
      },
    };
  };

  const echartBasicLineOption = {
    tooltip: {
      show: true,
      trigger: "axis",
      axisPointer: {
        type: "line",
        animation: true,
      },
    },
    legend: {
      data: ["All Leads", "My Leads"],
    },
    grid: {
      top: "10%",
      left: "40",
      right: "40",
      bottom: "40",
    },
    xAxis: {
      type: "category",
      data: [
        "1/01/2021",
        "1/02/2021",
        "1/03/2021",
        // "1/04/2021",
        // "1/05/2021",
        // "1/06/2021",
        // "1/07/2021",
        // "1/08/2021",
        // "1/09/2021",
        // "1/10/2021",
        // "1/11/2021",
        // "1/12/2021 ",
      ],
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
      },
    },
    series: [
      {
        name: "All Leads",
        // data: [40, 14, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        data: lineData,
        type: "line",
        showSymbol: true,
        smooth: true,
        color: "#639",
        lineStyle: {
          opacity: 1,
          width: 2,
        },
      },
      {
        name: "My Leads",
        // data: [40, 14, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        data: myLineData,
        type: "line",
        showSymbol: true,
        smooth: true,
        color: "#008000",
        lineStyle: {
          opacity: 1,
          width: 2,
        },
      },
    ],
  };

  const getUserStatusClass = (status) => {
    switch (status) {
      case "Signed Mandate":
        return "badge-success";
      case "Offer Submitted":
        return "badge-info";
      case "In Progress":
        return "badge-info";
      case "Lost/Completion":
        return "badge-danger";
      case "To be restarted":
        return "badge-danger";
      case "Contacted":
        return "badge-secondary";
      case "New Prospect":
        return "badge-primary";
      case "Scheduled":
        return "badge-info";
      default:
        break;
    }
  };

  const sortingByDate = () => {
    if (asending === false) {
      const sorted = contacts
        .slice()
        .sort((a, b) => new Date(a.dateCreation) - new Date(b.dateCreation));

      setContacts(sorted);
      setAsending(true);
    } else {
      const sorted = contacts
        .slice()
        .sort((a, b) => new Date(b.dateCreation) - new Date(a.dateCreation));

      setContacts(sorted);
      setAsending(false);
    }
  };

  const formatter = (data) => {
    let sorted = data.map((v) => ({
      name: v?.location?.value,
      email: v?.userEmail,
      status: v?.broker[0]?.projectProgress,
      dateCreation: v?.dateCreation,
      phone: v?.phoneNumber,
      photoUrl: "/assets/images/faces/1.jpg",
    }));

    return sorted;
  };

  const handlePageClick = data => {
    setPageNumber(data.selected)
  };

  if (loading) {
    return <Loading />
  }

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col xs={12} sm={12} md={4} className="mb-2">
          <SimpleCard className="h-100" title={t("DGraphs.1")}>
            <div className="d-flex flex-column flex-xl-row align-items-center justify-content-center">
              <div className="chart-small">
                <Chart
                  options={options4()}
                  series={options4(40).series}
                  type={options4().chart.type}
                />
              </div>
              <a href="#">
                <p>
                  {" "}
                  <span className="font-weight-bold">
                    {t("DGraphs.2")}
                  </span>{" "}
                  {visibility.evaluationTotal}{" "}
                </p>
                <p>
                  {" "}
                  <span className="font-weight-bold">
                    {t("DGraphs.3")}
                  </span>{" "}
                  {visibility.impressionTotal}{" "}
                </p>
              </a>
            </div>
          </SimpleCard>
        </Col>
        <Col xs={12} sm={12} md={4} className="mb-2">
          <SimpleCard className="h-100" title={t("DGraphs.4")}>
            <div className="d-flex flex-column flex-xl-row align-items-center justify-content-center">
              <div className="chart-small">
                <Chart
                  options={options4()}
                  series={
                    options4(
                      (
                        (profile?.bookmarks?.length * 100) /
                        prospoectSize || 1
                      ).toFixed(2)
                    ).series
                  }
                  type={options4().chart.type}
                />
              </div>
              <a href="#">
                <p>
                  {" "}
                  <span className="font-weight-bold">
                    {t("DGraphs.5")} {prospoectSize}
                  </span>{" "}
                </p>
                <p>
                  {" "}
                  <span className="font-weight-bold">
                    {t("DGraphs.6")} {profile?.bookmarks?.length}
                  </span>{" "}
                </p>
              </a>
            </div>
          </SimpleCard>
        </Col>
        <Col xs={12} sm={12} md={4} className="mb-2">
          <SimpleCard className="h-100" title={t("DGraphs.7")}>
            <div className="d-flex flex-column flex-xl-row align-items-center justify-content-center">
              <div className="chart-small">
                <Chart
                  options={options4()}
                  series={
                    options4(
                      ((contacts.length * 100) / totalContacts).toFixed(2)
                    ).series
                  }
                  type={options4().chart.type}
                />
              </div>
              <a href="#">
                <p>
                  {" "}
                  <span className="font-weight-bold">
                    {t("DGraphs.8")} {totalContacts}
                  </span>{" "}
                </p>
                <p>
                  {" "}
                  <span className="font-weight-bold">
                    {t("DGraphs.9")} {contacts.length}
                  </span>{" "}
                </p>
              </a>
            </div>
          </SimpleCard>
        </Col>
      </Row>
      <div style={{ top: 100 }}>
        <div>
          <div className="card">
            <div className="card-header card-title mb-0 d-flex align-items-center justify-content-between border-0">
              <h3 className="w-50 float-left card-title m-0">
                {t("DGraphs.10")}
              </h3>
            </div>
            <div className="pl-4">
              <ReactEcharts
                className="h-100 w-100"
                option={echartBasicLineOption}
              />
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header card-title mb-0 d-flex align-items-center justify-content-between border-0">
              <h3 className="w-50 float-left card-title m-0">
                {t("DGraphs.11")}
              </h3>
              <Dropdown alignRight>
                <Dropdown.Toggle
                  as="span"
                  className="toggle-hidden cursor-pointer"
                >
                  <i className="nav-icon i-Gear-2"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>{t("DGraphs.12")}</Dropdown.Item>
                  <Dropdown.Item>{t("DGraphs.13")}</Dropdown.Item>
                  <Dropdown.Item>{t("DGraphs.14")}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="pb-2">
              <div className="table-responsive">
                <table id="user_table" className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">{t("DGraphs.15")}</th>
                      <th onClick={() => sortingByDate()} scope="col">
                        {t("DGraphs.16")}
                        {asending === true ? (
                          <i className="i-Arrow-Down-3 pl-2"></i>
                        ) : (
                          <i className="i-Arrow-Up-3 pl-2"></i>
                        )}
                      </th>
                      <th scope="col">{t("DGraphs.17")}</th>
                      <th scope="col">{t("DGraphs.19")}</th>
                      <th scope="col">{t("DGraphs.18")}</th>
                      {/* <th scope="col">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.slice(10*pageNumber, 10*(pageNumber+1)).map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td className="text-justify">{user.name}</td>
                        <td>
                          {user?.dateCreation}
                        </td>

                        <td className="text-justify">{user.email}</td>
                        <td className="text-justify">{user.phone}</td>
                        <td>
                          <span
                            className={`badge ${getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ReactPaginate
                previousLabel={<i className="i-Previous"></i>}
                nextLabel={<i className="i-Next1"></i>}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(contacts.length / 10)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </div>
    </Tab.Container>
  );
};

export default DashboardGraphs;
