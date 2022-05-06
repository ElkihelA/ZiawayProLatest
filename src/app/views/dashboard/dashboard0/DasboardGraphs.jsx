import React, { useEffect, useState } from "react";
import { Button, Col, Dropdown, Nav, Row, Tab } from "react-bootstrap";
import { SimpleCard } from "@gull";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import axios from "axios";
import ReactEcharts from "echarts-for-react";
import firebase from "../../../services/firebase/firebase";
import { useTranslation } from "react-i18next";

const DashboardGraphs = () => {
  const { t } = useTranslation();
  const [prospects, setProspects] = useState();
  const [leads, setLeads] = useState();
  const [myLeads, setMyLeads] = useState();
  const [myLeadLine, setMyLeadLine] = useState([]);
  const [asending, setAsending] = useState(false);
  const [leadList, setLeadList] = useState([]);
  const profile = useSelector((state) => state.firebase.profile);
  useFirestoreConnect([
    {
      collection: "RapportsEvaluations",
      // where: ["ouiContacterParProfessionnel", "==", "oui"],
      orderBy: [["dateCreation", "desc"]],
    },
  ]);
  const reports = useSelector(
    (state) => state.firestore.ordered.RapportsEvaluations
  );

  useEffect(() => {
    var GetSubscriptionPlans = firebase
      .functions()
      .httpsCallable("GetSubscriptionPlans");
    GetSubscriptionPlans()
      .then((res) => console.log("GetSubscriptionPlans", res))
      .catch((err) => console.log(err));
  }, []);

  const formatter = (data) => {
    let sorted = data.map((v) => ({
      name: v?.location?.value,
      email: v?.userEmail,
      status: v?.broker[0]?.projectProgress,
      dateCreation: v?.dateCreation,
      photoUrl: "/assets/images/faces/1.jpg",
    }));

    return sorted;
  };

  const myLeadSorted = (initialDate, finalDate) => {
    var startDate = new Date(initialDate);
    var endDate = new Date(finalDate);

    var resultProductData = myLeads?.filter(function (a) {
      var date = new Date(a.dateCreation);
      return date >= startDate && date <= endDate;
    });

    return resultProductData;
  };

  useEffect(() => {
    if (reports && profile) {
      let test = reports?.filter(
        (v) => v.ouiContacterParProfessionnel === "non"
      );

      let test2 = reports?.filter(
        (v) => v.ouiContacterParProfessionnel === "oui"
      );

      setLeads(test2);
      setProspects(test);
    }
  }, [reports, profile]);

  useEffect(() => {
    if (leads) {
      const test2 = leads?.filter(
        (v) => v?.broker[0]?.brokerId === profile.userId
      );

      setMyLeads(test2);
      setLeadList(formatter(test2));
    }
  }, [leads]);

  const options1 = (data) => {
    return {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
          dataLabels: {
            showOn: "always",
          },
        },
      },
      series: [data],
      labels: [`Statistics`],
    };
  };

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
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "17px",
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "20px",
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
      labels: ["Percent"],
    };
  };

  const options3 = {
    chart: {
      height: 350,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 0,
      colors: ["#fff"],
    },
    series: [
      {
        name: "Marine Sprite",
        data: [44, 55, 41, 37, 22, 43, 21],
      },
      {
        name: "Striking Calf",
        data: [53, 32, 33, 52, 13, 43, 32],
      },
      {
        name: "Tank Picture",
        data: [12, 17, 11, 9, 15, 11, 20],
      },
      {
        name: "Bucket Slope",
        data: [9, 7, 5, 8, 6, 9, 4],
      },
      {
        name: "Reborn Kid",
        data: [25, 12, 19, 32, 25, 24, 10],
      },
    ],

    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },

    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  const Sorted = (initialDate, finalDate) => {
    var startDate = new Date(initialDate);
    var endDate = new Date(finalDate);

    var resultProductData = leads?.filter(function (a) {
      var date = new Date(a.dateCreation);
      return date >= startDate && date <= endDate;
    });

    return resultProductData;
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
        data: reports
          ? [
              Sorted("2022/01/01", "2022/01/30")?.length,
              Sorted("2022/02/01", "2022/02/28")?.length,
              Sorted("2022/03/01", "2022/03/31")?.length,
              // Sorted("2021/04/01", "2021/04/30")?.length,
              // Sorted("2021/05/01", "2021/05/31")?.length,
              // Sorted("2021/06/01", "2021/06/30")?.length,
              // Sorted("2021/07/01", "2021/07/31")?.length,
              // Sorted("2021/08/01", "2021/08/31")?.length,
              // Sorted("2021/09/01", "2021/09/30")?.length,
              // Sorted("2021/10/01", "2021/10/31")?.length,
              // Sorted("2021/11/01", "2021/11/30")?.length,
              // Sorted("2021/12/01", "2021/12/31")?.length,
            ]
          : [],
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
        data: reports
          ? [
              myLeadSorted("2022/01/01", "2022/01/30")?.length,
              myLeadSorted("2022/02/01", "2022/02/28")?.length,
              myLeadSorted("2022/03/01", "2022/03/31")?.length,
              // myLeadSorted("2021/04/01", "2021/04/30")?.length,
              // myLeadSorted("2021/05/01", "2021/05/31")?.length,
              // myLeadSorted("2021/06/01", "2021/06/30")?.length,
              // myLeadSorted("2021/07/01", "2021/07/31")?.length,
              // myLeadSorted("2021/08/01", "2021/08/31")?.length,
              // myLeadSorted("2021/09/01", "2021/09/30")?.length,
              // myLeadSorted("2021/10/01", "2021/10/31")?.length,
              // myLeadSorted("2021/11/01", "2021/11/30")?.length,
              // myLeadSorted("2021/12/01", "2021/12/31")?.length,
            ]
          : [],
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

  console.log("leadList", leadList);

  const sortingByDate = () => {
    if (asending === false) {
      const sorted = leadList
        .slice()
        .sort((a, b) => new Date(a.dateCreation) - new Date(b.dateCreation));

      console.log(sorted);
      setLeadList(sorted);
      setAsending(true);
    } else {
      const sorted = leadList
        .slice()
        .sort((a, b) => new Date(b.dateCreation) - new Date(a.dateCreation));

      console.log(sorted);
      setLeadList(sorted);
      setAsending(false);
    }
  };

  if (!reports) {
    return <>loading...</>;
  }

  return (
    <div className="container">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="mx-0">
          <Col className="px-0" xs={12}>
            <Nav
              variant="..."
              className="remove-arrow-nav text-center justify-content-xl-center w-100 overflow-auto flex-nowrap"
            >
              <Nav.Item>
                <Nav.Link className="p-2 h-100" eventKey="first">
                  <SimpleCard className="h-100" title={t("DGraphs.1")}>
                    <div className="d-flex flex-wrap align-items-center justify-content-center">
                      <div className="chart-small">
                        <Chart
                          // options={options1()}
                          // series={options1(100)?.series}
                          // type="radialBar"
                          options={options4()}
                          series={options4(20).series}
                          type={options4().chart.type}
                        />
                      </div>
                      <div>
                        <p>
                          {" "}
                          <span className="font-weight-bold">
                            {t("DGraphs.2")}
                          </span>{" "}
                          {reports?.length}{" "}
                        </p>
                        <p>
                          {" "}
                          <span className="font-weight-bold">
                            {t("DGraphs.3")}
                          </span>{" "}
                          {reports?.length}{" "}
                        </p>
                      </div>
                    </div>
                  </SimpleCard>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="p-2 h-100" eventKey="first">
                  <SimpleCard className="h-100" title={t("DGraphs.4")}>
                    <div className="d-flex flex-wrap align-items-center justify-content-center">
                      <div className="chart-small">
                        <Chart
                          // options={options1()}
                          // series={
                          //   options1(
                          // (
                          //   (profile?.bookmarks?.length * 100) /
                          //   prospects?.length
                          // ).toFixed(2)
                          //   )?.series
                          // }
                          // type="radialBar"
                          options={options4()}
                          series={
                            options4(
                              (
                                (profile?.bookmarks?.length * 100) /
                                prospects?.length
                              ).toFixed(2)
                            ).series
                          }
                          type={options4().chart.type}
                        />
                      </div>
                      <div>
                        <p>
                          {" "}
                          <span className="font-weight-bold">
                            {t("DGraphs.5")} {prospects?.length}
                          </span>{" "}
                        </p>
                        <p>
                          {" "}
                          <span className="font-weight-bold">
                            {t("DGraphs.6")} {profile?.bookmarks?.length}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </SimpleCard>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="p-2 h-100" eventKey="first">
                  <SimpleCard className="h-100" title={t("DGraphs.7")}>
                    <div className="d-flex flex-wrap align-items-center justify-content-center">
                      <div className="chart-small">
                        <Chart
                          // options={options1()}
                          // series={
                          //   options1(
                          //     ((myLeads?.length * 100) / leads?.length).toFixed(2)
                          //   )?.series
                          // }
                          // type="radialBar"
                          options={options4()}
                          series={
                            options4(
                              ((myLeads?.length * 100) / leads?.length).toFixed(
                                2
                              )
                            ).series
                          }
                          type={options4().chart.type}
                        />
                      </div>
                      <div>
                        <p>
                          {" "}
                          <span className="font-weight-bold">
                            {t("DGraphs.8")} {leads?.length}
                          </span>{" "}
                        </p>
                        <p>
                          {" "}
                          <span className="font-weight-bold">
                            {t("DGraphs.9")} {myLeads?.length}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </SimpleCard>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="mt-4 px-0" xs={12}>
            <div className="position-sticky" style={{ top: 100 }}>
              <Tab.Content className="p-2">
                <Tab.Pane eventKey="first">
                  <div>
                    <div>
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

                          <div className="">
                            <div className="table-responsive">
                              <table
                                id="user_table"
                                className="table  text-center"
                              >
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">{t("DGraphs.15")}</th>
                                    <th
                                      onClick={() => sortingByDate()}
                                      scope="col"
                                    >
                                      {t("DGraphs.16")}
                                      {asending === true ? (
                                        <i className="i-Arrow-Down-3 pl-2"></i>
                                      ) : (
                                        <i className="i-Arrow-Up-3 pl-2"></i>
                                      )}
                                    </th>
                                    <th scope="col">{t("DGraphs.17")}</th>
                                    <th scope="col">{t("DGraphs.18")}</th>
                                    {/* <th scope="col">Action</th> */}
                                  </tr>
                                </thead>
                                <tbody>
                                  {leadList?.map((user, index) => (
                                    <tr key={index}>
                                      <th scope="row">{index + 1}</th>
                                      <td className="text-justify">
                                        {user.name}
                                      </td>
                                      <td>
                                        {user?.dateCreation}
                                        {/* <img
                                        className="rounded-circle m-0 avatar-sm-table "
                                        src={user.photoUrl}
                                        alt=""
                                      /> */}
                                      </td>

                                      <td className="text-justify">
                                        {user.email}
                                      </td>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <SimpleCard
                    className="h-100"
                    title="Stacked Bars(Fiction Books Sales)"
                  >
                    <Chart
                      options={options3}
                      series={options3.series}
                      type={options3.chart.type}
                    />
                  </SimpleCard>
                </Tab.Pane>
                <Tab.Pane eventKey="three">
                  <SimpleCard
                    className="h-100"
                    title="Stacked Bars(Fiction Books Sales)"
                  >
                    <Chart
                      options={options3}
                      series={options3.series}
                      type={options3.chart.type}
                    />
                  </SimpleCard>
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  <SimpleCard
                    className="h-100"
                    title="Stacked Bars(Fiction Books Sales)"
                  >
                    <Chart
                      options={options3}
                      series={options3.series}
                      type={options3.chart.type}
                    />
                  </SimpleCard>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default DashboardGraphs;
