import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import {
  Row,
  Col,
  Tab,
  Tabs,
  Nav,
  Dropdown,
  ProgressBar
} from "react-bootstrap";
import { classList } from "@utils";
import Chart from "react-apexcharts";
import ReactPaginate from "react-paginate";
import {
  options1,
  options2,
  options3,
  options4,
  options5,
  options6,
  options7
} from "./listWidgetChartOptions";
import { Link } from "react-router-dom";

class ListWidget extends Component {
  state = {
    userList: [
      {
        name: "Anna Strong",
        title: "Visual Designer,Google Inc",
        imgUrl: "/assets/images/faces/1.jpg",
        color: "success",
        amount: 500
      },
      {
        name: "Tim Lee",
        title: "Visual Designer,Facebook Inc",
        imgUrl: "/assets/images/faces/2.jpg",
        color: "warning",
        amount: 700
      },
      {
        name: "Jessi Warner",
        title: "Software Designer,Microsoft Inc",
        imgUrl: "/assets/images/faces/5.jpg",
        color: "danger",
        amount: 100
      },
      {
        name: "Tim Lee",
        title: "Visual Designer,Facebook Inc",
        imgUrl: "/assets/images/faces/2.jpg",
        color: "info",
        amount: 900
      },
      {
        name: "Jessi Warner",
        title: "Software Designer,Microsoft Inc",
        imgUrl: "/assets/images/faces/5.jpg",
        color: "primary",
        amount: 300
      }
    ],
    tableData: [
      {
        imgUrl: "/assets/images/faces/1.jpg",
        color: "success"
      },
      {
        imgUrl: "/assets/images/faces/2.jpg",
        color: "primary"
      },
      {
        imgUrl: "/assets/images/faces/3.jpg",
        color: "warning"
      },
      {
        imgUrl: "/assets/images/faces/4.jpg",
        color: "danger"
      },
      {
        imgUrl: "/assets/images/faces/5.jpg",
        color: "success"
      },
      {
        imgUrl: "/assets/images/faces/2.jpg",
        color: "primary"
      },
      {
        imgUrl: "/assets/images/faces/3.jpg",
        color: "warning"
      },
      {
        imgUrl: "/assets/images/faces/4.jpg",
        color: "danger"
      },
      {
        imgUrl: "/assets/images/faces/5.jpg",
        color: "success"
      }
    ],
    dataTablePage: 0,
    dataTablePerPage: 4
  };

  handlePageClick = data => {
    let pageNumber = data.selected;
    this.setState({ dataTablePage: pageNumber });
  };

  getList1 = arr => {
    return arr.map(id => (
      <div
        key={id}
        className={classList({
          "ul-widget1": true,
          "mt-3": id === 1
        })}
      >
        <div className="ul-widget2__item">
          <label className="checkbox checkbox-outline-primary">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <div className="ul-widget2__info">
            <Link to="/" className="ul-widget2__title">
              Lorem Ipsum Amet
            </Link>
            <Link to="/" className="ul-widget2__username">
              By Wick
            </Link>
          </div>

          <Dropdown className="ul-widget2__actions">
            <Dropdown.Toggle className="text-center toggle-hidden">
              <span className="_dot _inline-dot"></span>
              <span className="_dot _inline-dot"></span>
              <span className="_dot _inline-dot"></span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link to="/" className="dropdown-item ul-widget__link--font">
                <i className="i-Statistic"> </i>
                Reports
              </Link>
              <Link to="/" className="dropdown-item ul-widget__link--font">
                <i className="i-Email"> </i>
                Members
              </Link>
              <Link to="/" className="dropdown-item ul-widget__link--font">
                <i className="i-Pie-Chart-2"> </i>
                Charts
              </Link>
              <Link to="/" className="dropdown-item ul-widget__link--font">
                <i className="i-Business-ManWoman"> </i>
                Members
              </Link>
              <Link to="/" className="dropdown-item ul-widget__link--font">
                <i className="i-Gear-2"> </i>
                Settings
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    ));
  };

  getList2 = arr => {
    let data = [
      {
        icon: "i-Checkout",
        title: "New order has been received.",
        time: "2 hours ago"
      },
      {
        icon: "i-Repeat-2",
        title: "Pending Order.",
        time: "3 hours ago"
      },
      {
        icon: "i-Close-Window",
        title: "Decline Order.",
        time: "1 hours ago"
      },
      {
        icon: "i-Checkout",
        title: "New order has been received.",
        time: "2 hours ago"
      },
      {
        icon: "i-Repeat-2",
        title: "Pending Order.",
        time: "3 hours ago"
      },
      {
        icon: "i-Close-Window",
        title: "Decline Order.",
        time: "1 hours ago"
      },
      {
        icon: "i-Close-Window",
        title: "Decline Order.",
        time: "1 hours ago"
      }
    ];
    return arr.map((item, ind) => (
      <div key={item} className="ul-widget-notification">
        <div className="ul-widget-notification-item-div">
          <Link to="/" className="ul-widget-notification-item">
            <div className="ul-widget-notification-item-icon">
              <i className={data[ind].icon}></i>
            </div>
            <div className="ul-widget-notification-item-details">
              <div className="ul-widget-notification-item-title">
                {data[ind].title}
              </div>
              <div className="ul-widget-notification-item-time">
                {data[ind].time}
              </div>
            </div>
          </Link>
        </div>
      </div>
    ));
  };

  getList3 = arr => {
    let { userList: data } = this.state;

    return (
      <div className="ul-widget1">
        {arr.map((user, ind) => (
          <div key={ind} className="ul-widget4__item  ul-widget4__users">
            <div className="ul-widget4__img">
              <img
                src={data[ind].imgUrl}
                id="userDropdown"
                alt=""
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
            </div>
            <div className="ul-widget2__info ul-widget4__users-info">
              <Link to="/" className="ul-widget2__title">
                {data[ind].name}
              </Link>
              <span href="#" className="ul-widget2__username">
                {data[ind].title}
              </span>
            </div>
            <div className="ul-widget4__actions">
              <button
                type="button"
                className={`btn btn-outline-${data[ind].color} m-1`}
              >
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    let { tableData, dataTablePage, dataTablePerPage } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Widgets", path: "/widgets" },
            { name: "List" }
          ]}
        ></Breadcrumb>
        <Row>
          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard title="Tasks" className="h-100">
              <Tabs defaultActiveKey="Today" id="task">
                <Tab eventKey="Today" title="Today">
                  {this.getList1([1, 2, 3, 4, 5])}
                </Tab>
                <Tab eventKey="Week" title="Week">
                  {this.getList1([1, 2, 5])}
                </Tab>
                <Tab eventKey="Month" title="Month">
                  {this.getList1([1, 2, 4, 7])}
                </Tab>
              </Tabs>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard title="Notification" className="h-100">
              <Tabs defaultActiveKey="Today" id="notification">
                <Tab eventKey="Today" title="Today">
                  {this.getList2([1, 2, 3, 4, 5])}
                </Tab>
                <Tab eventKey="Month" title="Month">
                  {this.getList2([1, 2, 3, 4])}
                </Tab>
              </Tabs>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard title="Users" className="h-100">
              <Tabs defaultActiveKey="Today" id="notification">
                <Tab eventKey="Today" title="Today">
                  {this.getList3([1, 2, 3, 5])}
                </Tab>
                <Tab eventKey="Month" title="Month">
                  {this.getList3([1, 2, 3])}
                </Tab>
              </Tabs>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card ">
              <div className="card-body">
                <div className="ul-widget1">
                  <div className="ul-widget__item">
                    <div className="ul-widget__info">
                      <h3 className="ul-widget1__title">Member Profit</h3>
                      <span className="ul-widget__desc text-mute">
                        Average Weekly Profit
                      </span>
                    </div>
                    <span className="ul-widget__number text-primary">
                      +$17,800
                    </span>
                  </div>
                  <div className="ul-widget__item">
                    <div className="ul-widget__info">
                      <h3 className="ul-widget1__title">Orders</h3>
                      <span className="ul-widget__desc text-mute">
                        Weekly Customer Orders
                      </span>
                    </div>
                    <span className="ul-widget__number text-danger">
                      +1,800
                    </span>
                  </div>
                  <div className="ul-widget__item">
                    <div className="ul-widget__info">
                      <h3 className="ul-widget1__title">Issue Reports</h3>
                      <span className="ul-widget__desc text-mute">
                        System bugs and issues
                      </span>
                    </div>
                    <span className="ul-widget__number text-success">
                      -27,49%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="ul-widget1">
                  <div className="ul-widget__item">
                    <div className="ul-widget__info">
                      <h3 className="ul-widget1__title">IPO Margin</h3>
                      <span className="ul-widget__desc text-mute">
                        Average IPO Margin
                      </span>
                    </div>
                    <span className="ul-widget__number text-primary">+24%</span>
                  </div>
                  <div className="ul-widget__item">
                    <div className="ul-widget__info">
                      <h3 className="ul-widget1__title">Payments</h3>
                      <span className="ul-widget__desc text-mute">
                        Yearly Expenses
                      </span>
                    </div>
                    <span className="ul-widget__number text-danger">
                      +$560,800
                    </span>
                  </div>
                  <div className="ul-widget__item">
                    <div className="ul-widget__info">
                      <h3 className="ul-widget1__title">Issue Reports</h3>
                      <span className="ul-widget__desc text-mute">
                        Overall Regional Logistics
                      </span>
                    </div>
                    <span className="ul-widget__number text-success">-10%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="ul-widget1">
                  <div className="ul-widget__item">
                    <div className="ul-widget__info">
                      <h3 className="ul-widget1__title">Transactions</h3>
                      <span className="ul-widget__desc text-mute">
                        Daily Transaction Increase
                      </span>
                    </div>
                    <span className="ul-widget__number text-primary">+80%</span>
                  </div>
                  <div className="ul-widget__item">
                    <div className="ul-widget__info">
                      <h3 className="ul-widget1__title">Orders</h3>
                      <span className="ul-widget__desc text-mute">
                        Average Weekly Orders
                      </span>
                    </div>
                    <span className="ul-widget__number text-danger">+15%</span>
                  </div>
                  <div className="ul-widget__item">
                    <div className="ul-widget__info">
                      <h3 className="ul-widget1__title">Revenue</h3>
                      <span className="ul-widget__desc text-mute">
                        Overall Revenue Increase
                      </span>
                    </div>
                    <span className="ul-widget__number text-success">+60%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="ul-widget__head pb-20 v-margin">
                  <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title">Authors Profit</h3>
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle>Latest</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Bar-Chart-4"> </i>
                        Export
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Data-Save"> </i>
                        Save
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Duplicate-Layer"> </i>
                        Import
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Folder-Download"> </i>
                        Update
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Gears-2"> </i>
                        Customize
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="ul-widget__body">
                  <div className="ul-widget1">
                    {this.state.userList.map((user, ind) => (
                      <div
                        key={ind}
                        className="ul-widget4__item ul-widget4__users"
                      >
                        <div className="ul-widget4__img">
                          <img
                            src={user.imgUrl}
                            id="userDropdown"
                            alt=""
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                        </div>

                        <div className="ul-widget2__info ul-widget4__users-info">
                          <Link to="/" className="ul-widget2__title">
                            {user.name}
                          </Link>
                          <span href="#" className="ul-widget2__username">
                            {user.title}
                          </span>
                        </div>

                        <span
                          className={`ul-widget4__number t-font-boldest text-${user.color}`}
                        >
                          +{user.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="ul-widget__head  v-margin pb-20">
                  <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title ">Download Files</h3>
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle>Latest</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Bar-Chart-4"> </i>
                        Export
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Data-Save"> </i>
                        Save
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Duplicate-Layer"> </i>
                        Import
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Folder-Download"> </i>
                        Update
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Gears-2"> </i>
                        Customize
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="ul-widget__body">
                  <div className="__g-widget4">
                    <div className="ul-widget4__item">
                      <div className="ul-widget4__pic-icon">
                        <i className="i-File-Clipboard-File--Text text-success"></i>
                      </div>
                      <Link to="/" className="ul-widget4__title">
                        Documentation
                      </Link>
                    </div>

                    <div className="ul-widget4__item">
                      <div className="ul-widget4__pic-icon">
                        <i className="i-File-CSV text-success "> </i>
                      </div>
                      <Link to="/" className="ul-widget4__title">
                        Full Developer Manual For 4.7
                      </Link>
                    </div>

                    <div className="ul-widget4__item">
                      <div className="ul-widget4__pic-icon">
                        <i className="i-File-Zip text-danger "></i>
                      </div>
                      <Link to="/" className="ul-widget4__title">
                        Download Ziped version OF 5.0
                      </Link>
                    </div>
                    <div className="ul-widget4__item">
                      <div className="ul-widget4__pic-icon">
                        <i className="i-File-JPG text-warning "></i>
                      </div>
                      <Link to="/" className="ul-widget4__title">
                        Project Launch Event
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="ul-widget__head pb-20 v-margin">
                  <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title">Latest Updates</h3>
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle>Latest</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Bar-Chart-4"> </i>
                        Export
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Data-Save"> </i>
                        Save
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Duplicate-Layer"> </i>
                        Import
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Folder-Download"> </i>
                        Update
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Gears-2"> </i>
                        Customize
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="ul-widget__body">
                  <div className="ul-widget1">
                    <div className="ul-widget4__item ul-widget4__users">
                      <div className="ul-widget4__pic-icon">
                        <i className="i-Folder-Download text-info "></i>
                      </div>
                      <div className="ul-widget2__info ul-widget4__users-info">
                        <Link to="/" className="ul-widget4__title">
                          New Version
                        </Link>
                      </div>
                      <span className="ul-widget4__number t-font-boldest text-success">
                        +500
                      </span>
                    </div>
                    <div className="ul-widget4__item ul-widget4__users">
                      <div className="ul-widget4__pic-icon">
                        <i className="i-File-Cloud text-success "></i>
                      </div>
                      <div className="ul-widget2__info ul-widget4__users-info">
                        <Link to="/" className="ul-widget4__title">
                          Old Version
                        </Link>
                      </div>
                      <span className="ul-widget4__number t-font-boldest text-info">
                        +500
                      </span>
                    </div>

                    <div className="ul-widget4__item ul-widget4__users">
                      <div className="ul-widget4__pic-icon">
                        <i className="i-File-Clipboard-Text--Image text-danger "></i>
                      </div>
                      <div className="ul-widget2__info ul-widget4__users-info">
                        <Link to="/" className="ul-widget4__title">
                          Old Version 2
                        </Link>
                      </div>
                      <span className="ul-widget4__number t-font-boldest text-warning">
                        +333
                      </span>
                    </div>

                    <div className="ul-widget4__item ul-widget4__users">
                      <div className="ul-widget4__pic-icon">
                        <i className="i-Folder-Download text-warning "></i>
                      </div>
                      <div className="ul-widget2__info ul-widget4__users-info">
                        <Link to="/" className="ul-widget4__title">
                          Donwload New Version
                        </Link>
                      </div>
                      <span className="ul-widget4__number t-font-boldest text-danger">
                        +200
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={8} md={8} sm={8} xs={12} className="mb-4">
            <SimpleCard title="Best Seller" className="h-100">
              <div className="ul-widget__body">
                <Tabs
                  className="justify-content-end"
                  defaultActiveKey="Latest"
                  id="notification"
                >
                  <Tab eventKey="Latest" title="Latest">
                    <div className="ul-widget5">
                      <div className="ul-widget5__item ">
                        <div className="ul-widget5__content">
                          <div className="ul-widget5__pic">
                            <img
                              className=""
                              src="/assets/images/products/iphone-1.jpg"
                              alt="Third slide"
                            />
                          </div>
                          <div className="ul-widget5__section">
                            <Link to="/" className="ul-widget4__title">
                              Great Logo Designn
                            </Link>
                            <p className="ul-widget5__desc">
                              UI lib admin themes.
                            </p>
                            <div className="ul-widget5__info">
                              <span>Author:</span>
                              <span className="text-primary">Jon Snow</span>
                              <span>Released:</span>
                              <span className="text-primary">23.08.17</span>
                            </div>
                          </div>
                        </div>
                        <div className="ul-widget5__content">
                          <div className="ul-widget5__stats">
                            <span className="ul-widget5__number">19,200</span>
                            <span className="ul-widget5__sales text-mute">
                              sales
                            </span>
                          </div>
                          <div className="ul-widget5__stats">
                            <span className="ul-widget5__number">1046</span>
                            <span className="ul-widget5__sales text-mute">
                              votes
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="ul-widget5__item ">
                        <div className="ul-widget5__content">
                          <div className="ul-widget5__pic">
                            <img
                              className=""
                              src="/assets/images/products/speaker-1.jpg"
                              alt="Third slide"
                            />
                          </div>
                          <div className="ul-widget5__section">
                            <Link to="/" className="ul-widget4__title">
                              Great Logo Designn
                            </Link>
                            <p className="ul-widget5__desc">
                              UI lib admin themes.
                            </p>
                            <div className="ul-widget5__info">
                              <span>Author:</span>
                              <span className="text-primary">Jon Snow</span>
                              <span>Released:</span>
                              <span className="text-primary">23.08.17</span>
                            </div>
                          </div>
                        </div>
                        <div className="ul-widget5__content">
                          <div className="ul-widget5__stats">
                            <span className="ul-widget5__number">29,200</span>
                            <span className="ul-widget5__sales text-mute">
                              sales
                            </span>
                          </div>
                          <div className="ul-widget5__stats">
                            <span className="ul-widget5__number">4500</span>
                            <span className="ul-widget5__sales text-mute">
                              votes
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="ul-widget5__item ">
                        <div className="ul-widget5__content">
                          <div className="ul-widget5__pic">
                            <img
                              className=""
                              src="/assets/images/products/watch-1.jpg"
                              alt="Third slide"
                            />
                          </div>
                          <div className="ul-widget5__section">
                            <Link to="/" className="ul-widget4__title">
                              Great Logo Designn
                            </Link>
                            <p className="ul-widget5__desc">
                              UI lib admin themes.
                            </p>
                            <div className="ul-widget5__info">
                              <span>Author:</span>
                              <span className="text-primary">Jon Snow</span>
                              <span>Released:</span>
                              <span className="text-primary">23.08.17</span>
                            </div>
                          </div>
                        </div>
                        <div className="ul-widget5__content">
                          <div className="ul-widget5__stats">
                            <span className="ul-widget5__number">23,200</span>
                            <span className="ul-widget5__sales text-mute">
                              sales
                            </span>
                          </div>
                          <div className="ul-widget5__stats">
                            <span className="ul-widget5__number">2046</span>
                            <span className="ul-widget5__sales text-mute">
                              votes
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    className="ul-widget__body"
                    eventKey="Month"
                    title="Month"
                  >
                    <div className="ul-widget5">
                      <div className="ul-widget5__item ">
                        <div className="ul-widget5__content">
                          <div className="ul-widget5__pic">
                            <img
                              className=""
                              src="/assets/images/products/iphone-1.jpg"
                              alt="Third slide"
                            />
                          </div>
                          <div className="ul-widget5__section">
                            <Link to="/" className="ul-widget4__title">
                              Great Logo Designn
                            </Link>
                            <p className="ul-widget5__desc">
                              UI lib admin themes.
                            </p>
                            <div className="ul-widget5__info">
                              <span>Author:</span>
                              <span className="text-primary">Jon Snow</span>
                              <span>Released:</span>
                              <span className="text-primary">23.08.17</span>
                            </div>
                          </div>
                        </div>
                        <div className="ul-widget5__content">
                          <div className="ul-widget5__stats">
                            <span className="ul-widget5__number">19,200</span>
                            <span className="ul-widget5__sales text-mute">
                              sales
                            </span>
                          </div>
                          <div className="ul-widget5__stats">
                            <span className="ul-widget5__number">1046</span>
                            <span className="ul-widget5__sales text-mute">
                              votes
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="ul-widget5__item ">
                        <div className="ul-widget5__content">
                          <div className="ul-widget5__pic">
                            <img
                              className=""
                              src="/assets/images/products/speaker-1.jpg"
                              alt="Third slide"
                            />
                          </div>
                          <div className="ul-widget5__section">
                            <Link to="/" className="ul-widget4__title">
                              Great Logo Designn
                            </Link>
                            <p className="ul-widget5__desc">
                              UI lib admin themes.
                            </p>
                            <div className="ul-widget5__info">
                              <span>Author:</span>
                              <span className="text-primary">Jon Snow</span>
                              <span>Released:</span>
                              <span className="text-primary">23.08.17</span>
                            </div>
                          </div>
                        </div>
                        <div className="ul-widget5__content">
                          <div className="ul-widget5__stats">
                            <span className="ul-widget5__number">29,200</span>
                            <span className="ul-widget5__sales text-mute">
                              sales
                            </span>
                          </div>
                          <div className="ul-widget5__stats">
                            <span className="ul-widget5__number">4500</span>
                            <span className="ul-widget5__sales text-mute">
                              votes
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="ul-widget__head v-margin pb-20">
                  <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title">Support Tickets</h3>
                  </div>
                  <Dropdown alignRight>
                    <Dropdown.Toggle
                      as="span"
                      className="toggle-hidden cursor-pointer"
                    >
                      <span className="_dot _inline-dot bg-primary mr-1"></span>
                      <span className="_dot _inline-dot bg-primary mr-1"></span>
                      <span className="_dot _inline-dot bg-primary"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="ul-widget__body">
                  <div className="ul-widget3">
                    <div className="ul-widget3-item">
                      <div className="ul-widget3-header">
                        <div className="ul-widget3-img">
                          <img
                            src="/assets/images/faces/1.jpg"
                            id="userDropdown"
                            alt=""
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                        </div>
                        <div className="ul-widget3-info">
                          <Link to="/" className="__g-widget-username">
                            <span className="t-font-bolder">
                              Timithy Clarkson
                            </span>
                          </Link>
                          <br />
                          <span className="ul-widget-notification-item-time">
                            2 hrs ago
                          </span>
                        </div>
                        <span className="ul-widget3-status text-success t-font-bolder">
                          Pending
                        </span>
                      </div>
                      <div className="ul-widget3-body">
                        <p className="ul-widget3-text text-mute">
                          Lorem ipsum dolor sit amet,consectetuer edipiscing
                          elit,sed diam nonummy nibh euismod tinciduntut laoreet
                          doloremagna aliquam erat volutpat.
                        </p>
                      </div>
                    </div>

                    <div className="ul-widget3-item">
                      <div className="ul-widget3-header">
                        <div className="ul-widget3-img">
                          <img
                            src="/assets/images/faces/2.jpg"
                            id="userDropdown"
                            alt=""
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                        </div>
                        <div className="ul-widget3-info">
                          <Link to="/" className="__g-widget-username">
                            <span className="t-font-bolder">
                              Jannet Clarkson
                            </span>
                          </Link>
                          <br />
                          <span className="ul-widget-notification-item-time">
                            12 hrs ago
                          </span>
                        </div>
                        <span className="ul-widget3-status text-danger t-font-bolder">
                          Decline
                        </span>
                      </div>
                      <div className="ul-widget3-body">
                        <p className="ul-widget3-text text-mute">
                          Lorem ipsum dolor sit amet,consectetuer edipiscing
                          elit,sed diam nonummy nibh euismod tinciduntut laoreet
                          doloremagna aliquam erat volutpat.
                        </p>
                      </div>
                    </div>
                    <div className="ul-widget3-item">
                      <div className="ul-widget3-header">
                        <div className="ul-widget3-img">
                          <img
                            src="/assets/images/faces/3.jpg"
                            id="userDropdown"
                            alt=""
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                        </div>
                        <div className="ul-widget3-info">
                          <Link to="/" className="__g-widget-username">
                            <span className="t-font-bolder">William Shake</span>
                          </Link>
                          <br />
                          <span className="ul-widget-notification-item-time">
                            Today
                          </span>
                        </div>
                        <span className="ul-widget3-status text-warning t-font-bolder">
                          Processing
                        </span>
                      </div>
                      <div className="ul-widget3-body">
                        <p className="ul-widget3-text text-mute">
                          Lorem ipsum dolor sit amet,consectetuer edipiscing
                          elit,sed diam nonummy nibh euismod tinciduntut laoreet
                          doloremagna aliquam erat volutpat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="ul-widget__head __g-support v-margin">
                  <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title">Sales Stats</h3>
                  </div>
                  <Dropdown alignRight>
                    <Dropdown.Toggle
                      as="span"
                      className="toggle-hidden cursor-pointer"
                    >
                      <span className="_dot _inline-dot bg-primary mr-1"></span>
                      <span className="_dot _inline-dot bg-primary mr-1"></span>
                      <span className="_dot _inline-dot bg-primary"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="ul-widget__body">
                  <div className="ul-widget6">
                    <div className="ul-widget6__head">
                      <div className="ul-widget6__item">
                        <span>Scheduled</span>
                        <span>Count</span>
                        <span>Amount</span>
                      </div>
                    </div>
                    <div className="ul-widget6__body">
                      <div className="ul-widget6__item">
                        <span>16/13/17</span>
                        <span>67</span>
                        <span className="t-font-boldest text-success">
                          $14,740
                        </span>
                      </div>

                      <div className="ul-widget6__item">
                        <span>02/28/17</span>
                        <span>120</span>
                        <span className="t-font-boldest text-danger">
                          $14,740
                        </span>
                      </div>

                      <div className="ul-widget6__item">
                        <span>02/28/17</span>
                        <span>120</span>
                        <span className="t-font-boldest text-warning">
                          $14,740
                        </span>
                      </div>

                      <div className="ul-widget6__item">
                        <span>02/28/17</span>
                        <span>120</span>
                        <span className="t-font-boldest text-primary">
                          $14,740
                        </span>
                      </div>

                      <div className="ul-widget6__item">
                        <span>02/28/17</span>
                        <span>120</span>
                        <span className="t-font-boldest text-dark">
                          $14,740
                        </span>
                      </div>
                    </div>
                    <div className="ul-widget6-footer">
                      <button
                        type="button"
                        className="btn btn-outline-danger m-1"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={8} md={8} sm={8} xs={12} className="mb-4">
            <SimpleCard title="Best Seller" className="h-100">
              <div className="ul-widget__body">
                <Tabs
                  className="justify-content-end"
                  defaultActiveKey="Latest"
                  id="notification"
                >
                  <Tab eventKey="Latest" title="Latest">
                    <div className="ul-widget5">
                      <div className="ul-widget-s5__item mb-5">
                        <div className="ul-widget-s5__content">
                          <div className="ul-widget-s5__pic">
                            <img
                              src="/assets/images/faces/1.jpg"
                              id="userDropdown"
                              alt=""
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            />
                          </div>
                          <div className="ul-widget-s5__section">
                            <Link to="/" className="ul-widget4__title ">
                              Great Logo Designn
                            </Link>
                            <p className="ul-widget-s5__desc">
                              UI LIb admin themes.
                            </p>
                          </div>
                        </div>
                        <div className="ul-widget-s5__content">
                          <div className="ul-widget-s5__progress">
                            <div className="ul-widget-s5__stats">
                              <span>50%</span>
                              <span>London</span>
                            </div>
                            <ProgressBar
                              now={50}
                              striped
                              variant="success"
                            ></ProgressBar>
                          </div>
                          <button
                            type="button"
                            className="btn btn-outline-primary "
                          >
                            Follow
                          </button>
                        </div>
                      </div>
                      <div className="ul-widget-s5__item mb-5">
                        <div className="ul-widget-s5__content">
                          <div className="ul-widget-s5__pic">
                            <img
                              src="/assets/images/faces/2.jpg"
                              id="userDropdown"
                              alt=""
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            />
                          </div>
                          <div className="ul-widget-s5__section">
                            <Link to="/" className="ul-widget4__title ">
                              Great Logo Designn
                            </Link>
                            <p className="ul-widget-s5__desc">
                              UI LIb admin themes.
                            </p>
                          </div>
                        </div>
                        <div className="ul-widget-s5__content">
                          <div className="ul-widget-s5__progress">
                            <div className="ul-widget-s5__stats">
                              <span>75%</span>
                              <span>U.S</span>
                            </div>
                            <ProgressBar
                              now={75}
                              striped
                              variant="danger"
                            ></ProgressBar>
                          </div>
                          <button
                            type="button"
                            className="btn btn-outline-success "
                          >
                            Follow
                          </button>
                        </div>
                      </div>
                      <div className="ul-widget-s5__item mb-5">
                        <div className="ul-widget-s5__content">
                          <div className="ul-widget-s5__pic">
                            <img
                              src="/assets/images/faces/3.jpg"
                              id="userDropdown"
                              alt=""
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            />
                          </div>
                          <div className="ul-widget-s5__section">
                            <Link to="/" className="ul-widget4__title ">
                              Frontend Developer
                            </Link>
                            <p className="ul-widget-s5__desc">
                              UI LIb admin themes.
                            </p>
                          </div>
                        </div>
                        <div className="ul-widget-s5__content">
                          <div className="ul-widget-s5__progress">
                            <div className="ul-widget-s5__stats">
                              <span>30%</span>
                              <span>Finland</span>
                            </div>
                            <ProgressBar
                              now={35}
                              striped
                              variant="warning"
                            ></ProgressBar>
                          </div>
                          <button
                            type="button"
                            className="btn btn-outline-danger "
                          >
                            Follow
                          </button>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    className="ul-widget__body"
                    eventKey="Month"
                    title="Month"
                  >
                    <div className="ul-widget5">
                      <div className="ul-widget-s5__item mb-5">
                        <div className="ul-widget-s5__content">
                          <div className="ul-widget-s5__pic">
                            <img
                              src="/assets/images/faces/1.jpg"
                              id="userDropdown"
                              alt=""
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            />
                          </div>
                          <div className="ul-widget-s5__section">
                            <Link to="/" className="ul-widget4__title ">
                              Great Logo Designn
                            </Link>
                            <p className="ul-widget-s5__desc">
                              UI LIb admin themes.
                            </p>
                          </div>
                        </div>
                        <div className="ul-widget-s5__content">
                          <div className="ul-widget-s5__progress">
                            <div className="ul-widget-s5__stats">
                              <span>50%</span>
                              <span>London</span>
                            </div>
                            <ProgressBar
                              now={50}
                              striped
                              variant="success"
                            ></ProgressBar>
                          </div>
                          <button
                            type="button"
                            className="btn btn-outline-primary "
                          >
                            Follow
                          </button>
                        </div>
                      </div>
                      <div className="ul-widget-s5__item mb-5">
                        <div className="ul-widget-s5__content">
                          <div className="ul-widget-s5__pic">
                            <img
                              src="/assets/images/faces/2.jpg"
                              id="userDropdown"
                              alt=""
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            />
                          </div>
                          <div className="ul-widget-s5__section">
                            <Link to="/" className="ul-widget4__title ">
                              Great Logo Designn
                            </Link>
                            <p className="ul-widget-s5__desc">
                              UI LIb admin themes.
                            </p>
                          </div>
                        </div>
                        <div className="ul-widget-s5__content">
                          <div className="ul-widget-s5__progress">
                            <div className="ul-widget-s5__stats">
                              <span>75%</span>
                              <span>U.S</span>
                            </div>
                            <ProgressBar
                              now={75}
                              striped
                              variant="danger"
                            ></ProgressBar>
                          </div>
                          <button
                            type="button"
                            className="btn btn-outline-success "
                          >
                            Follow
                          </button>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={8} md={8} sm={8} xs={12} className="mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="ul-widget__head border-0 mb-2">
                  <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title">
                      Exclusive datatable plugin
                    </h3>
                  </div>
                  <Dropdown alignRight>
                    <Dropdown.Toggle
                      as="span"
                      className="toggle-hidden cursor-pointer"
                    >
                      <span className="_dot _inline-dot bg-primary mr-1"></span>
                      <span className="_dot _inline-dot bg-primary mr-1"></span>
                      <span className="_dot _inline-dot bg-primary"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="ul-widget-body">
                  <div className="ul-widget3">
                    <div className="ul-widget6__item--table">
                      <table className="table ">
                        <thead>
                          <tr className="ul-widget6__tr--sticky-th">
                            <th scope="col">#</th>
                            <th scope="col">Company</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Managed By</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData
                            .slice(
                              dataTablePage * dataTablePerPage,
                              dataTablePerPage * (dataTablePage + 1)
                            )
                            .map((user, ind) => (
                              <tr key={ind}>
                                <th scope="row">
                                  <label className="checkbox checkbox-outline-info">
                                    <input type="checkbox" />

                                    <span className="checkmark"></span>
                                  </label>
                                </th>
                                <td>
                                  <span>
                                    <div className="ul-widget_user-card">
                                      <div className="ul-widget4__img">
                                        <img
                                          src={user.imgUrl}
                                          id="userDropdown"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </span>
                                </td>
                                <td>11/28/2016</td>
                                <td>
                                  <span
                                    className={`badge badge-pill badge-outline-${user.color} p-2 m-1`}
                                  >
                                    Processing
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to="/"
                                    className="ul-widget4__title d-block"
                                  >
                                    UI Lib
                                  </Link>
                                  <span>Angular 2,Vue.js </span>
                                </td>
                                <td>
                                  <Dropdown alignRight>
                                    <Dropdown.Toggle
                                      as="span"
                                      className="toggle-hidden cursor-pointer"
                                    >
                                      <span className="_dot _inline-dot bg-primary mr-1"></span>
                                      <span className="_dot _inline-dot bg-primary mr-1"></span>
                                      <span className="_dot _inline-dot bg-primary"></span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item>Action</Dropdown.Item>
                                      <Dropdown.Item>
                                        Another action
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        Something else here
                                      </Dropdown.Item>
                                      <div className="dropdown-divider"></div>
                                      <Dropdown.Item>
                                        Separated link
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                    <nav aria-label="Page navigation example">
                      <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={Math.ceil(
                          tableData.length / dataTablePerPage
                        )}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                      />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard title="Latest Log" className="h-100">
              <div className="ul-widget__body">
                <Tabs
                  className="justify-content-end"
                  defaultActiveKey="Latest"
                  id="notification"
                >
                  <Tab eventKey="Latest" title="Latest">
                    <div className="ul-widget-s6__items">
                      <div className="ul-widget-s6__item">
                        <span className="ul-widget-s6__badge">
                          <p className="badge-dot-primary ul-widget6__dot"></p>
                        </span>
                        <span className="ul-widget-s6__text">
                          12 new users registered
                        </span>
                        <span className="ul-widget-s6__time">Just Now</span>
                      </div>
                      <div className="ul-widget-s6__item">
                        <span className="ul-widget-s6__badge">
                          <p className="badge-dot-success ul-widget6__dot"></p>
                        </span>
                        <p className="ul-widget-s6__text">
                          System shutdown
                          <span className="badge badge-pill badge-primary  m-2">
                            Primary
                          </span>
                        </p>
                        <span className="ul-widget-s6__time">14 mins</span>
                      </div>

                      <div className="ul-widget-s6__item">
                        <span className="ul-widget-s6__badge">
                          <p className="badge-dot-warning ul-widget6__dot"></p>
                        </span>
                        <span className="ul-widget-s6__text">
                          System error -
                          <Link to="/" className="typo_link text-danger">
                            Danger state text
                          </Link>
                        </span>
                        <span className="ul-widget-s6__time">2 hrs </span>
                      </div>
                      <div className="ul-widget-s6__item">
                        <span className="ul-widget-s6__badge">
                          <p className="badge-dot-danger ul-widget6__dot"></p>
                        </span>
                        <span className="ul-widget-s6__text">
                          12 new users registered
                        </span>
                        <span className="ul-widget-s6__time">Just Now</span>
                      </div>
                      <div className="ul-widget-s6__item">
                        <span className="ul-widget-s6__badge">
                          <p className="badge-dot-info ul-widget6__dot"></p>
                        </span>
                        <p className="ul-widget-s6__text">
                          System shutdown
                          <span className="badge badge-pill badge-success  m-2">
                            Primary
                          </span>
                        </p>
                        <span className="ul-widget-s6__time">14 mins</span>
                      </div>

                      <div className="ul-widget-s6__item">
                        <span className="ul-widget-s6__badge">
                          <p className="badge-dot-dark ul-widget6__dot"></p>
                        </span>
                        <span className="ul-widget-s6__text">
                          System error -
                          <Link to="/" className="typo_link text-danger">
                            Danger state text
                          </Link>
                        </span>
                        <span className="ul-widget-s6__time">2 hrs </span>
                      </div>
                      <div className="ul-widget-s6__item">
                        <span className="ul-widget-s6__badge">
                          <p className="badge-dot-primary ul-widget6__dot"></p>
                        </span>
                        <span className="ul-widget-s6__text">
                          12 new users registered
                        </span>
                        <span className="ul-widget-s6__time">Just Now</span>
                      </div>
                      <div className="ul-widget-s6__item">
                        <span className="ul-widget-s6__badge">
                          <p className="badge-dot-success ul-widget6__dot"></p>
                        </span>
                        <p className="ul-widget-s6__text">
                          System shutdown
                          <span className="badge badge-pill badge-danger  m-2">
                            Primary
                          </span>
                        </p>
                        <span className="ul-widget-s6__time">14 mins</span>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    className="ul-widget__body"
                    eventKey="Month"
                    title="Month"
                  >
                    <div className="ul-widget2">
                      <div className="ul-widget-s6__items">
                        <div className="ul-widget-s6__item">
                          <span className="ul-widget-s6__badge">
                            <p className="badge-dot-danger ul-widget6__dot"></p>
                          </span>
                          <span className="ul-widget-s6__text">
                            44 new users registered
                          </span>
                          <span className="ul-widget-s6__time">Just Now</span>
                        </div>
                        <div className="ul-widget-s6__item">
                          <span className="ul-widget-s6__badge">
                            <p className="badge-dot-warning ul-widget6__dot"></p>
                          </span>
                          <p className="ul-widget-s6__text">
                            System shutdown
                            <span className="badge badge-pill badge-primary  m-2">
                              Primary
                            </span>
                          </p>
                          <span className="ul-widget-s6__time">14 mins</span>
                        </div>

                        <div className="ul-widget-s6__item">
                          <span className="ul-widget-s6__badge">
                            <p className="badge-dot-primary ul-widget6__dot"></p>
                          </span>
                          <span className="ul-widget-s6__text">
                            System error -
                            <Link to="/" className="typo_link text-danger">
                              Danger state text
                            </Link>
                          </span>
                          <span className="ul-widget-s6__time">2 hrs </span>
                        </div>
                        <div className="ul-widget-s6__item">
                          <span className="ul-widget-s6__badge">
                            <p className="badge-dot-danger ul-widget6__dot"></p>
                          </span>
                          <span className="ul-widget-s6__text">
                            12 new users registered
                          </span>
                          <span className="ul-widget-s6__time">Just Now</span>
                        </div>
                        <div className="ul-widget-s6__item">
                          <span className="ul-widget-s6__badge">
                            <p className="badge-dot-info ul-widget6__dot"></p>
                          </span>
                          <p className="ul-widget-s6__text">
                            System shutdown
                            <span className="badge badge-pill badge-success  m-2">
                              Primary
                            </span>
                          </p>
                          <span className="ul-widget-s6__time">14 mins</span>
                        </div>

                        <div className="ul-widget-s6__item">
                          <span className="ul-widget-s6__badge">
                            <p className="badge-dot-dark ul-widget6__dot"></p>
                          </span>
                          <span className="ul-widget-s6__text">
                            System error -
                            <Link to="/" className="typo_link text-danger">
                              Danger state text
                            </Link>
                          </span>
                          <span className="ul-widget-s6__time">2 hrs </span>
                        </div>
                        <div className="ul-widget-s6__item">
                          <span className="ul-widget-s6__badge">
                            <p className="badge-dot-primary ul-widget6__dot"></p>
                          </span>
                          <span className="ul-widget-s6__text">
                            12 new users registered
                          </span>
                          <span className="ul-widget-s6__time">Just Now</span>
                        </div>
                        <div className="ul-widget-s6__item">
                          <span className="ul-widget-s6__badge">
                            <p className="badge-dot-success ul-widget6__dot"></p>
                          </span>
                          <span className="ul-widget-s6__text">
                            System shutdown
                            <span className="badge badge-pill badge-danger  m-2">
                              Primary
                            </span>
                          </span>
                          <span className="ul-widget-s6__time">14 mins</span>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12} className="mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="ul-widget__head __g-support v-margin">
                  <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title">Sales Stats</h3>
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="toggle-hidden cursor-pointer"
                    >
                      <span className="_dot _inline-dot bg-primary mr-1"></span>
                      <span className="_dot _inline-dot bg-primary mr-1"></span>
                      <span className="_dot _inline-dot bg-primary"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Bar-Chart-4"> </i>
                        Export
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Data-Save"> </i>
                        Save
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Duplicate-Layer"> </i>
                        Import
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Folder-Download"> </i>
                        Update
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item ul-widget__link--font"
                      >
                        <i className="i-Gears-2"> </i>
                        Customize
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="ul-widget__body">
                  <div className="ul-widget-s7">
                    <div className="ul-widget-s7__items">
                      <span className="ul-widget-s7__item-time">10:00</span>
                      <div className="ul-widget-s7__item-circle">
                        <p className="badge-dot-warning ul-widget7__big-dot"></p>
                      </div>
                      <div className="ul-widget-s7__item-text">
                        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                        <br />
                        incididunt ut labore et dolore magna
                      </div>
                    </div>
                  </div>

                  <div className="ul-widget-s7">
                    <div className="ul-widget-s7__items">
                      <span className="ul-widget-s7__item-time">16:00 </span>
                      <div className="ul-widget-s7__item-circle">
                        <p className="badge-dot-danger ul-widget7__big-dot"></p>
                      </div>
                      <div className="ul-widget-s7__item-text">
                        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                        <br />
                        incididunt ut labore et dolore magna elit enim at minim
                        <br />
                        veniam quis nostrud
                      </div>
                    </div>
                  </div>
                  <div className="ul-widget-s7">
                    <div className="ul-widget-s7__items">
                      <span className="ul-widget-s7__item-time">13:00</span>
                      <div className="ul-widget-s7__item-circle">
                        <p className="badge-dot-primary ul-widget7__big-dot"></p>
                      </div>
                      <div className="ul-widget-s7__item-text">
                        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                        <br />
                        incididunt ut labore et dolore magna
                      </div>
                    </div>
                  </div>
                  <div className="ul-widget-s7">
                    <div className="ul-widget-s7__items">
                      <span className="ul-widget-s7__item-time">08:00</span>
                      <div className="ul-widget-s7__item-circle">
                        <p className="badge-dot-success ul-widget7__big-dot"></p>
                      </div>
                      <div className="ul-widget-s7__item-text">
                        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                        <br />
                        incididunt ut labore et dolore magna
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12} className="mb-4">
            <SimpleCard title="Recent Notifications" className="h-100">
              <Tabs
                className="justify-content-end"
                defaultActiveKey="Latest"
                id="notification"
              >
                <Tab eventKey="Latest" title="Latest">
                  <div className="ul-widget-s7n">
                    <div className="ul-widget-s7__items mb-4">
                      <span className="ul-widget-s7__item-time ul-middle">
                        10:00
                      </span>
                      <div className="ul-widget-s7__item-circle">
                        <p className="ul-vertical-line bg-primary "></p>
                      </div>
                      <div className="ul-widget-s7__item-text">
                        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                        <br />
                        incididunt ut labore et dolore magna
                      </div>
                    </div>

                    <div className="ul-widget-s7__items mb-4">
                      <span className="ul-widget-s7__item-time ul-middle">
                        08:00
                      </span>
                      <div className="ul-widget-s7__item-circle">
                        <p className="ul-vertical-line bg-success "></p>
                      </div>
                      <div className="ul-widget-s7__item-text">
                        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                        <br />
                        incididunt ut labore et dolore magna
                      </div>
                    </div>

                    <div className="ul-widget-s7__items mb-4">
                      <span className="ul-widget-s7__item-time ul-middle">
                        13:00
                      </span>
                      <div className="ul-widget-s7__item-circle">
                        <p className="ul-vertical-line bg-danger "></p>
                      </div>
                      <div className="ul-widget-s7__item-text">
                        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                        <br />
                        incididunt ut labore et dolore magna
                      </div>
                    </div>

                    <div className="ul-widget-s7__items">
                      <span className="ul-widget-s7__item-time ul-middle">
                        05:30
                      </span>
                      <div className="ul-widget-s7__item-circle">
                        <p className="ul-vertical-line bg-warning "></p>
                      </div>
                      <div className="ul-widget-s7__item-text">
                        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                        <br />
                        incididunt ut labore et dolore magna
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab className="ul-widget__body" eventKey="Month" title="Month">
                  <div className="ul-widget-s7n">
                    <div className="ul-widget-s7__items mb-4">
                      <span className="ul-widget-s7__item-time ul-middle">
                        12:00
                      </span>
                      <div className="ul-widget-s7__item-circle">
                        <p className="ul-vertical-line bg-danger "></p>
                      </div>
                      <div className="ul-widget-s7__item-text">
                        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                        <br />
                        incididunt ut labore et dolore magna
                      </div>
                    </div>

                    <div className="ul-widget-s7__items mb-4">
                      <span className="ul-widget-s7__item-time ul-middle">
                        08:00
                      </span>
                      <div className="ul-widget-s7__item-circle">
                        <p className="ul-vertical-line bg-info "></p>
                      </div>
                      <div className="ul-widget-s7__item-text">
                        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                        <br />
                        incididunt ut labore et dolore magna
                      </div>
                    </div>

                    <div className="ul-widget-s7__items mb-4">
                      <span className="ul-widget-s7__item-time ul-middle">
                        04:30
                      </span>
                      <div className="ul-widget-s7__item-circle">
                        <p className="ul-vertical-line bg-warning "></p>
                      </div>
                      <div className="ul-widget-s7__item-text">
                        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                        <br />
                        incididunt ut labore et dolore magna
                      </div>
                    </div>

                    <div className="ul-widget-s7__items">
                      <span className="ul-widget-s7__item-time ul-middle">
                        05:30
                      </span>
                      <div className="ul-widget-s7__item-circle">
                        <p className="ul-vertical-line bg-dark "></p>
                      </div>
                      <div className="ul-widget-s7__item-text">
                        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                        <br />
                        incididunt ut labore et dolore magna
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </SimpleCard>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12} className="mb-4">
            <SimpleCard title="Project Status" className="h-100">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Project</th>
                      <th scope="col">Status</th>
                      <th scope="col">Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">666</th>
                      <td>
                        <span className="text-15 font-weight-200">
                          Dan brown on the North
                        </span>
                        <br />
                      </td>
                      <td>
                        <span className="badge badge-primary w-badge">
                          Developing
                        </span>
                      </td>
                      <td>
                        <Chart
                          options={options1}
                          series={options1.series}
                          type={options1.chart.type}
                          width="45"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">132-115-006</th>
                      <td>
                        <span className="text-15 font-weight">Lucy Loki</span>
                        <br />
                      </td>
                      <td>
                        <span className="badge badge-danger w-badge">
                          Backend
                        </span>
                      </td>
                      <td>
                        <Chart
                          options={options2}
                          series={options2.series}
                          type={options2.chart.type}
                          width="45"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">123-669-002</th>
                      <td>
                        <span className="text-15 font-weight-200">Dan</span>
                        <br />
                      </td>
                      <td>
                        <span className="badge badge-success w-badge">
                          Frontend
                        </span>
                      </td>
                      <td>
                        <Chart
                          options={options3}
                          series={options3.series}
                          type={options3.chart.type}
                          width="45"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">115-008-234</th>
                      <td>
                        <span className="text-15 font-weight-200">
                          Jaret Leto
                        </span>
                        <br />
                      </td>
                      <td>
                        <span className="badge badge-warning w-badge">
                          Backend
                        </span>
                      </td>
                      <td>
                        <Chart
                          options={options4}
                          series={options4.series}
                          type={options4.chart.type}
                          width="45"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">456-989-009</th>
                      <td>
                        <span className="text-15 font-weight-200">
                          White Walker
                        </span>
                        <br />
                      </td>
                      <td>
                        <span className="badge badge-dark w-badge">
                          Fullstack
                        </span>
                      </td>
                      <td>
                        <Chart
                          options={options5}
                          series={options5.series}
                          type={options5.chart.type}
                          width="45"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">132-115-086</th>
                      <td>
                        <span className="text-15 font-weight-200">
                          Dan brown on the North
                        </span>
                        <br />
                      </td>
                      <td>
                        <span className="badge badge-primary w-badge">
                          Developing
                        </span>
                      </td>
                      <td>
                        <Chart
                          options={options6}
                          series={options6.series}
                          type={options6.chart.type}
                          width="45"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">132-115-006</th>
                      <td>
                        <span className="text-15 font-weight">Lucy Loki</span>
                        <br />
                      </td>
                      <td>
                        <span className="badge badge-danger w-badge">
                          Backend
                        </span>
                      </td>
                      <td>
                        <Chart
                          options={options7}
                          series={options7.series}
                          type={options7.chart.type}
                          width="45"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12} className="mb-4">
            <SimpleCard title="Payment Form #01" className="h-100">
              <div className="ul-widget-list__payment-method mb-3">
                <img
                  className="mr-1"
                  src="/assets/images/master-card.png"
                  alt="master card"
                  srcSet=""
                />
                <img
                  className="mr-1"
                  src="/assets/images/visa.png"
                  alt="visa card"
                  srcSet=""
                />
                <img src="/assets/images/paypal.png" alt="paypal" srcSet="" />
              </div>
              <p className="alert alert-success">Some text success or error</p>

              <div className="ul-widget__payment-form">
                <form action="">
                  <div className="card-body">
                    <div className="form-row ">
                      <div className="form-group col-md-12">
                        <label htmlFor="inputEmail4" className="ul-form__label">
                          Full Name:
                        </label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              <i className="i-Male-21 text-18"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <small
                          id="passwordHelpBlock"
                          className="ul-form__text form-text "
                        >
                          Some help content goes here
                        </small>
                      </div>
                    </div>

                    <div className="form-row ">
                      <div className="form-group col-md-12">
                        <label htmlFor="inputEmail4" className="ul-form__label">
                          Card Number:
                        </label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              <i className="i-Credit-Card text-18"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="form-group">
                          <label>
                            <span className="">Expiration</span>
                          </label>
                          <div className="form-inline">
                            <select className="form-control">
                              <option>Month</option>
                              <option>01 - Janiary</option>
                              <option>02 - February</option>
                              <option>03 - February</option>
                              <option>04 - march</option>
                            </select>
                            <span className="text-center px-2">/</span>
                            <select className="form-control">
                              <option>Year</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="6 digits code on back side of the card"
                            className="font-weight-700 text-dark"
                          >
                            CVV
                          </label>
                          <input
                            className="form-control"
                            required=""
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-block m-1 mb-3"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12} className="mb-4">
            <SimpleCard title="Payment Form #02" className="h-100">
              <p className="alert alert-danger">Some text success or error</p>

              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" className="px-2 d-flex">
                  <Nav.Item className="flex-grow-1 text-center">
                    <Nav.Link
                      eventKey="first"
                      className="d-flex justify-content-center align-items-center"
                    >
                      <i className="i-Credit-Card text-16 mr-2 align-middle"></i>
                      <span>Credit Card</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1 text-center">
                    <Nav.Link
                      eventKey="second"
                      className="d-flex justify-content-center align-items-center"
                    >
                      <i className="i-ID-Card text-16 mr-2 align-middle"> </i>
                      <span>Paypal</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1 text-center">
                    <Nav.Link
                      eventKey="third"
                      className="d-flex justify-content-center align-items-center"
                    >
                      <i className="i-University1 text-16 mr-2 align-middle"></i>
                      <span>Bank Account</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="ul-widget__payment-form">
                      <form action="">
                        <div className="card-body">
                          <div className="form-row ">
                            <div className="form-group col-md-12">
                              <label
                                htmlFor="inputEmail4"
                                className="ul-form__label"
                              >
                                Full Name:
                              </label>
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
                                    <i className="i-Male-21 text-18"></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <small
                                id="passwordHelpBlock"
                                className="ul-form__text form-text "
                              >
                                Some help content goes here
                              </small>
                            </div>
                          </div>

                          <div className="form-row ">
                            <div className="form-group col-md-12">
                              <label
                                htmlFor="inputEmail4"
                                className="ul-form__label"
                              >
                                Card Number:
                              </label>
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
                                    <i className="i-Credit-Card text-18"></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-8">
                              <div className="form-group">
                                <label>
                                  <span className="">Expiration</span>
                                </label>
                                <div className="form-inline">
                                  <select className="form-control">
                                    <option>Month</option>
                                    <option>01 - Janiary</option>
                                    <option>02 - February</option>
                                    <option>03 - February</option>
                                    <option>04 - march</option>
                                  </select>
                                  <span className="text-center px-2">/</span>
                                  <select className="form-control">
                                    <option>Year</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="6 digits code on back side of the card"
                                  className="font-weight-700 text-dark"
                                >
                                  CVV
                                </label>
                                <input
                                  className="form-control"
                                  required=""
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-block m-1"
                          >
                            Confirm
                          </button>
                        </div>
                      </form>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="ul-widget__payment-form">
                      <form action="">
                        <div className="card-body">
                          <div className="form-row ">
                            <div className="form-group col-md-12">
                              <label
                                htmlFor="inputEmail4"
                                className="ul-form__label"
                              >
                                Full Name:
                              </label>
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
                                    <i className="i-Male-21 text-18"></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <small
                                id="passwordHelpBlock"
                                className="ul-form__text form-text "
                              >
                                Some help content goes here
                              </small>
                            </div>
                          </div>

                          <div className="form-row ">
                            <div className="form-group col-md-12">
                              <label
                                htmlFor="inputEmail4"
                                className="ul-form__label"
                              >
                                Email:
                              </label>
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
                                    <i className="i-Credit-Card text-18"></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-block m-1"
                          >
                            Confirm
                          </button>
                        </div>
                      </form>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="ul-widget__payment-form">
                      <form action="">
                        <div className="card-body">
                          <div className="form-row ">
                            <div className="form-group col-md-12">
                              <label
                                htmlFor="inputEmail4"
                                className="ul-form__label"
                              >
                                Full Name:
                              </label>
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
                                    <i className="i-Male-21 text-18"></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                              <small
                                id="passwordHelpBlock"
                                className="ul-form__text form-text "
                              >
                                Some help content goes here
                              </small>
                            </div>
                          </div>

                          <div className="form-row ">
                            <div className="form-group col-md-12">
                              <label
                                htmlFor="inputEmail4"
                                className="ul-form__label"
                              >
                                Account No:
                              </label>
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
                                    <i className="i-Credit-Card text-18"></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-block m-1"
                          >
                            Confirm
                          </button>
                        </div>
                      </form>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </SimpleCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListWidget;
