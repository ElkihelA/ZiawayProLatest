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
import { Link } from "react-router-dom";

class AppWidget extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Widgets", path: "/widgets" },
            { name: "App" }
          ]}
        ></Breadcrumb>
        <Row>
          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard className="h-100" title="Projects">
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Developer</th>
                      <th scope="col">Name</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <img
                          className="profile-picture avatar-md  rounded-circle"
                          src="/assets/images/faces/4.jpg"
                          alt=""
                        />
                      </th>
                      <td>
                        <span className="text-15 font-weight-600">Lucy</span>
                        <br />
                        <small className="text-mute">Designer</small>
                      </td>
                      <td>
                        <span className="text-small">Gull Admin</span>
                      </td>
                      <td>
                        <span>$4.9K</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          className="profile-picture avatar-md  rounded-circle"
                          src="/assets/images/faces/2.jpg"
                          alt=""
                        />
                      </th>
                      <td>
                        <span className="text-15 font-weight-600">Lucy</span>
                        <br />
                        <small className="text-mute">Developer</small>
                      </td>
                      <td>
                        <span className="text-small">Agency</span>
                      </td>
                      <td>
                        <span>$70K</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          className="profile-picture avatar-md  rounded-circle"
                          src="/assets/images/faces/5.jpg"
                          alt=""
                        />
                      </th>
                      <td>
                        <span className="text-15 font-weight-600">Dan</span>
                        <br />
                        <small className="text-mute">Developer</small>
                      </td>
                      <td>
                        <span className="text-small">Agency</span>
                      </td>
                      <td>
                        <span>$70K</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          className="profile-picture avatar-md  rounded-circle"
                          src="/assets/images/faces/3.jpg"
                          alt=""
                        />
                      </th>
                      <td>
                        <span className="text-15 font-weight-600">Lucy</span>
                        <br />
                        <small className="text-mute">Developer</small>
                      </td>
                      <td>
                        <span className="text-small">Agency</span>
                      </td>
                      <td>
                        <span>$70K</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          className="profile-picture avatar-md  rounded-circle"
                          src="/assets/images/faces/1.jpg"
                          alt=""
                        />
                      </th>
                      <td>
                        <span className="text-15 font-weight-600">Lucy</span>
                        <br />
                        <small className="text-mute">Developer</small>
                      </td>
                      <td>
                        <span className="text-small">Agency</span>
                      </td>
                      <td>
                        <span>$70K</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard className="h-100" title="Work List">
              <div className="ul-widget-app__task-list mb-4">
                <label className="checkbox checkbox-primary">
                  <input type="checkbox" />
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </span>
                  <span className="badge badge-pill badge-danger p-2 m-1 float-right">
                    Today
                  </span>
                  <span className="checkmark"></span>
                </label>
                <div className="ul-widget-app__work-list-img ml-4">
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/4.jpg"
                    alt=""
                  />
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/1.jpg"
                    alt=""
                  />
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/5.jpg"
                    alt=""
                  />
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/3.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div className="ul-widget-app__task-list mb-4">
                <label className="checkbox checkbox-primary">
                  <input type="checkbox" />
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </span>
                  <span className="badge badge-pill badge-success p-2 m-1 float-right">
                    Tomorrow
                  </span>
                  <span className="checkmark"></span>
                </label>
                <div className="ul-widget-app__work-list-img ml-4">
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/4.jpg"
                    alt=""
                  />
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/1.jpg"
                    alt=""
                  />
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/5.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div className="ul-widget-app__task-list mb-4">
                <label className="checkbox checkbox-primary">
                  <input type="checkbox" />
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </span>
                  <span className="badge badge-pill badge-info p-2 m-1 float-right">
                    yesterday
                  </span>
                  <span className="checkmark"></span>
                </label>
                <div className="ul-widget-app__work-list-img ml-4">
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/4.jpg"
                    alt=""
                  />
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="ul-widget-app__task-list mb-4">
                <label className="checkbox checkbox-primary">
                  <input type="checkbox" />
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </span>
                  <span className="badge badge-pill badge-warning p-2 m-1 float-right">
                    Week
                  </span>
                  <span className="checkmark"></span>
                </label>
                <div className="ul-widget-app__work-list-img ml-4">
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/4.jpg"
                    alt=""
                  />
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/1.jpg"
                    alt=""
                  />
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/2.jpg"
                    alt=""
                  />
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/3.jpg"
                    alt=""
                  />
                  <img
                    className="profile-picture avatar-sm  rounded-circle"
                    src="/assets/images/faces/1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard className="h-100" title="Developer Total Earning">
              <h4 className="display mb-3">$5,8000</h4>

              <div className="ul-widget-app__browser-list">
                <div className="ul-widget-app__browser-list-1 mb-4 ">
                  <img
                    className="profile-picture avatar-md  rounded-circle"
                    src="/assets/images/faces/4.jpg"
                    alt=""
                  />
                  <span className="text-15 ml-3">Sara Lanson</span>
                  <span className="badge badge-round-success pill  m-1">
                    $5000
                  </span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4 ">
                  <img
                    className="profile-picture avatar-md  rounded-circle"
                    src="/assets/images/faces/3.jpg"
                    alt=""
                  />
                  <span className="text-15 ml-3">Jhon Legend</span>
                  <span className="badge badge-round-danger pill  m-1">
                    $4000
                  </span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4 ">
                  <img
                    className="profile-picture avatar-md  rounded-circle"
                    src="/assets/images/faces/2.jpg"
                    alt=""
                  />
                  <span className="text-15 ml-3">Chris Patt</span>
                  <span className="badge badge-round-info pill  m-1">
                    $5500
                  </span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4">
                  <img
                    className="profile-picture avatar-md  rounded-circle"
                    src="/assets/images/faces/1.jpg"
                    alt=""
                  />
                  <span className="text-15 ml-3">Vin Diesel</span>
                  <span className="badge badge-round-warning pill  m-1">
                    $2000
                  </span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4">
                  <img
                    className="profile-picture avatar-md  rounded-circle"
                    src="/assets/images/faces/5.jpg"
                    alt=""
                  />
                  <span className="text-15 ml-3">Ryan reynolds</span>
                  <span className="badge badge-round-primary pill  m-1">
                    $2000
                  </span>
                </div>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard className="h-100" title="Travel Different Countries">
              <div className="ul-widget-app__poll-list mb-4">
                <h3 className="heading mr-2">2589</h3>
                <div className="d-flex">
                  <span className="text-muted text-12">From Uganda</span>
                  <span className="t-font-boldest ml-auto">
                    33%
                    <i className="i-Turn-Up-2 text-14 text-success font-weight-700"></i>
                  </span>
                </div>
                <ProgressBar
                  now={25}
                  variant="info"
                  className="progress progress--height-2 mb-3"
                ></ProgressBar>
              </div>
              <div className="ul-widget-app__poll-list mb-4">
                <h3 className="heading mr-2">4589</h3>
                <div className="d-flex">
                  <span className="text-muted text-12">From U.S.A</span>
                  <span className="t-font-boldest ml-auto">
                    63%
                    <i className="i-Turn-Down-2 text-14 text-danger font-weight-700"></i>
                  </span>
                </div>
                <ProgressBar
                  now={55}
                  variant="success"
                  className="progress progress--height-2 mb-3"
                ></ProgressBar>
              </div>

              <div className="ul-widget-app__poll-list mb-4">
                <h3 className="heading mr-2">7589</h3>
                <div className="d-flex">
                  <span className="text-muted text-12">From Canada</span>
                  <span className="t-font-boldest ml-auto">
                    73%
                    <i className="i-Turn-Up-2 text-14 text-success font-weight-700"></i>
                  </span>
                </div>
                <ProgressBar
                  now={33}
                  className="progress progress--height-2 mb-3"
                ></ProgressBar>
              </div>

              <div className="ul-widget-app__poll-list mb-4">
                <h3 className="heading mr-2">3589</h3>
                <div className="d-flex">
                  <span className="text-muted">From France</span>
                  <span className="t-font-boldest ml-auto">
                    13%
                    <i className="i-Turn-Down-2 text-14 text-danger font-weight-700"></i>
                  </span>
                </div>
                <ProgressBar
                  now={13}
                  variant="danger"
                  className="progress progress--height-2 mb-3"
                ></ProgressBar>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card h-100">
              <div className="card-header purple-500 text-purple-500 p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="card-title text-white mb-0">
                    Mutual Friends
                  </div>
                  <div className="ul-widget-app__bar ml-auto">search</div>
                </div>

                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="search by username or email..."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                  <span className="ul-widget-app__find-font">
                    <i className="i-Find-User font-weight-500"></i>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <div className="ul-widget-app__social-site mt-4 mb-4">
                  <div className="row">
                    <div className="col-4 text-center">
                      <div className="ul-widget-app__social-friends">
                        <img
                          className="profile-picture avatar-lg mb-2"
                          src="/assets/images/faces/4.jpg"
                          alt=""
                        />
                        <div className="ul-widget-app__small-title">
                          <span className="t-font-bolder">Elizabeth Olsen</span>
                          <span className="text-primary">Invite</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 text-center ">
                      <div className="ul-widget-app__social-friends">
                        <img
                          className="profile-picture avatar-lg mb-2"
                          src="/assets/images/faces/2.jpg"
                          alt=""
                        />
                        <div className="ul-widget-app__small-title">
                          <span className="t-font-bolder">Jack Olsen</span>
                          <span className="text-primary">
                            <span className="text-primary">Invite</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 text-center ">
                      <div className="ul-widget-app__social-friends">
                        <img
                          className="profile-picture avatar-lg mb-2"
                          src="/assets/images/faces/5.jpg"
                          alt=""
                        />
                        <div className="ul-widget-app__small-title">
                          <span className="t-font-bolder">DAn Olsen</span>
                          <span className="text-primary">
                            <span className="text-primary">Invite</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ul-widget-app__social-button mt-5">
                  <button
                    type="button"
                    className="btn btn-block btn-facebook btn-icon m-1"
                  >
                    <span className="ul-btn__text">Invite Facebook</span>
                    <span className="ul-btn__icon">
                      <i className="i-Facebook-2"> </i>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-block btn-twitter btn-icon m-1"
                  >
                    <span className="ul-btn__text">Invite Twitter</span>
                    <span className="ul-btn__icon">
                      <i className="i-Twitter"> </i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard className="h-100" title="Notification">
              <div className="ul-widget-app__browser-list">
                <div className="ul-widget-app__browser-list-1 mb-4">
                  <i className="i-Bell  text-white bg-warning rounded-circle p-2  mr-3"></i>
                  <span className="text-15">You have 9 pending Tasks</span>
                  <span className="text-mute">in a sec</span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4">
                  <i className="i-Internet  text-white green-500 rounded-circle p-2  mr-3"></i>
                  <span className="text-15">Traffic Overloaded</span>
                  <span className="text-mute">4 Hours ago</span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4">
                  <i className="i-Shopping-Cart  text-white cyan-500 rounded-circle p-2  mr-3"></i>
                  <span className="text-15">New Order Received</span>
                  <span className="text-mute">yesterday </span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4">
                  <i className="i-Add-UserStar  text-white teal-500 rounded-circle p-2  mr-3"></i>
                  <span className="text-15">New User </span>
                  <span className="text-mute">2 April </span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4">
                  <i className="i-Bell  text-white purple-500 rounded-circle p-2  mr-3"></i>
                  <span className="text-15">New Update </span>
                  <span className="text-mute">2 April </span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4">
                  <i className="i-Shopping-Cart  text-white bg-danger rounded-circle p-2  mr-3"></i>
                  <span className="text-15">New Order Received</span>
                  <span className="text-mute">yesterday </span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4">
                  <i className="i-Internet  text-white green-500 rounded-circle p-2  mr-3"></i>
                  <span className="text-15">Traffic Overloaded</span>
                  <span className="text-mute">4 Hours ago</span>
                </div>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard className="h-100" title="Recent Comments">
              <div className="ul-widget-app__comments">
                <div className="ul-widget-app__row-comments">
                  <div className="ul-widget-app__profile-pic p-3">
                    <img
                      className="profile-picture avatar-md mb-2 rounded-circle img-fluid"
                      src="/assets/images/faces/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ul-widget-app__comment">
                    <div className="ul-widget-app__profile-title">
                      <h6 className="heading">Jhon Wick</h6>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.ipsum .
                      </p>
                    </div>
                    <div className="ul-widget-app__profile-status">
                      <span className="badge badge-pill badge-primary p-2 m-1">
                        Pending
                      </span>
                      <span className="ul-widget-app__icons">
                        <span className="cursor-pointer pl-2 pr-1 text-small">
                          <i className="i-Approved-Window text-mute"></i>
                        </span>
                        <span className="cursor-pointer pr-1 text-small">
                          <i className="i-Like text-mute"></i>
                        </span>
                        <span className="cursor-pointer text-small">
                          <i className="i-Heart1 text-mute"></i>
                        </span>
                      </span>
                      <span className="text-mute text-small">May 14, 2019</span>
                    </div>
                  </div>
                </div>

                <div className="ul-widget-app__row-comments">
                  <div className="ul-widget-app__profile-pic p-3">
                    <img
                      className="profile-picture avatar-md mb-2 rounded-circle"
                      src="/assets/images/faces/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ul-widget-app__comment">
                    <div className="ul-widget-app__profile-title">
                      <h6 className="heading">Jhon Trevor</h6>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.ipsum .
                      </p>
                    </div>
                    <div className="ul-widget-app__profile-status">
                      <span className="badge badge-pill badge-success p-2 m-1">
                        Approved
                      </span>
                      <span className="ul-widget-app__icons">
                        <span className="cursor-pointer pl-2 pr-1 text-small">
                          <i className="i-Approved-Window text-mute"></i>
                        </span>
                        <span className="cursor-pointer pr-1 text-small">
                          <i className="i-Like text-mute"></i>
                        </span>
                        <span className="cursor-pointer text-small">
                          <i className="i-Heart1 text-mute"></i>
                        </span>
                      </span>
                      <span className="text-mute text-small">May 14, 2019</span>
                    </div>
                  </div>
                </div>

                <div className="ul-widget-app__row-comments">
                  <div className="ul-widget-app__profile-pic p-3">
                    <img
                      className="profile-picture avatar-md mb-2 rounded-circle"
                      src="/assets/images/faces/4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ul-widget-app__comment">
                    <div className="ul-widget-app__profile-title">
                      <h6 className="heading">Jhon Trevor</h6>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.ipsum .
                      </p>
                    </div>
                    <div className="ul-widget-app__profile-status">
                      <span className="badge badge-pill badge-danger p-2 m-1">
                        Rejected
                      </span>
                      <span className="ul-widget-app__icons">
                        <span className="cursor-pointer pl-2 pr-1 text-small">
                          <i className="i-Approved-Window text-mute"></i>
                        </span>
                        <span className="cursor-pointer pr-1 text-small">
                          <i className="i-Like text-mute"></i>
                        </span>
                        <span className="cursor-pointer text-small">
                          <i className="i-Heart1 text-mute"></i>
                        </span>
                      </span>
                      <span className="text-mute text-small">May 14, 2019</span>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard title="Recent Messages">
              <div className="ul-widget-app__recent-messages">
                <div className="ul-widget-app__row-comments border-bottom-gray-200 mb-0">
                  <div className="ul-widget-app__profile-pic mr-3">
                    <img
                      className="profile-picture avatar-md mb-2 rounded-circle img-fluid"
                      src="/assets/images/faces/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ul-widget-app__comment">
                    <div className="ul-widget-app__profile-title">
                      <h6 className="heading">Jhon Wick</h6>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.ipsum .
                      </p>
                    </div>
                    <div className="ul-widget-app__profile-status">
                      <small className="text-mute">2 min ago</small>
                    </div>
                  </div>
                </div>
                <div className="ul-widget-app__row-comments border-bottom-gray-200 mb-0">
                  <div className="ul-widget-app__profile-pic mr-3">
                    <img
                      className="profile-picture avatar-md mb-2 rounded-circle img-fluid"
                      src="/assets/images/faces/3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ul-widget-app__comment">
                    <div className="ul-widget-app__profile-title">
                      <h6 className="heading">Jhon Cena</h6>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.ipsum .
                      </p>
                    </div>
                    <div className="ul-widget-app__profile-status">
                      <small className="text-mute">3 hrs ago</small>
                    </div>
                  </div>
                </div>
                <div className="ul-widget-app__row-comments border-bottom-gray-200 mb-0">
                  <div className="ul-widget-app__profile-pic mr-3">
                    <img
                      className="profile-picture avatar-md mb-2 rounded-circle img-fluid"
                      src="/assets/images/faces/4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ul-widget-app__comment">
                    <div className="ul-widget-app__profile-title">
                      <h6 className="heading">Jhon Cena</h6>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.ipsum .
                      </p>
                    </div>
                    <div className="ul-widget-app__profile-status">
                      <small className="text-mute">3 hrs ago</small>
                    </div>
                  </div>
                </div>
                <div className="ul-widget-app__row-comments border-bottom-gray-200 mb-0">
                  <div className="ul-widget-app__profile-pic mr-3">
                    <img
                      className="profile-picture avatar-md mb-2 rounded-circle img-fluid"
                      src="/assets/images/faces/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ul-widget-app__comment">
                    <div className="ul-widget-app__profile-title">
                      <h6 className="heading">Jhon Cena</h6>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.ipsum .
                      </p>
                    </div>
                    <div className="ul-widget-app__profile-status">
                      <small className="text-mute">3 hrs ago</small>
                    </div>
                  </div>
                </div>
                <div className="ul-widget-app__row-comments mb-0">
                  <div className="ul-widget-app__profile-pic mr-3">
                    <img
                      className="profile-picture avatar-md mb-2 rounded-circle img-fluid"
                      src="/assets/images/faces/5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ul-widget-app__comment">
                    <div className="ul-widget-app__profile-title">
                      <h6 className="heading">Chriss Patt</h6>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.ipsum .
                      </p>
                    </div>
                    <div className="ul-widget-app__profile-status">
                      <small className="text-mute">2 min ago</small>
                    </div>
                  </div>
                </div>

                <div className="ul-widget-app__row-comments mb-0">
                  <div className="ul-widget-app__profile-pic mr-3">
                    <img
                      className="profile-picture avatar-md mb-2 rounded-circle img-fluid"
                      src="/assets/images/faces/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ul-widget-app__comment">
                    <div className="ul-widget-app__profile-title">
                      <h6 className="heading">Chriss Patt</h6>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.ipsum .
                      </p>
                    </div>
                    <div className="ul-widget-app__profile-status">
                      <small className="text-mute">2 min ago</small>
                    </div>
                  </div>
                </div>

                <div className="ul-widget-app__row-comments mb-0">
                  <div className="ul-widget-app__profile-pic mr-3">
                    <img
                      className="profile-picture avatar-md mb-2 rounded-circle img-fluid"
                      src="/assets/images/faces/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ul-widget-app__comment">
                    <div className="ul-widget-app__profile-title">
                      <h6 className="heading">Chriss Patt</h6>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.ipsum .
                      </p>
                    </div>
                    <div className="ul-widget-app__profile-status">
                      <small className="text-mute">2 min ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard title="Order" subtitle="Buy & Sell Crypto Currency">
              <Tabs defaultActiveKey="home">
                <Tab title="Home" eventKey="home">
                  <div className="ul-widget-app__buy-currency">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="i-Bitcoin text-20"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Amount"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="i-Dollar-Sign text-20"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Price"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary btn-icon m-1"
                    >
                      Buy Coin
                    </button>
                  </div>
                </Tab>
                <Tab title="Profile" eventKey="profile">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="i-Bitcoin text-20"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Amount"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="i-Dollar-Sign text-20"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Price"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-success btn-icon m-1"
                  >
                    Sell Coin
                  </button>
                </Tab>
              </Tabs>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard className="h-100">
              <div className="user-profile mb-2">
                <div className="ul-widget-card__user-info border-bottom-gray-200 pb-3">
                  <img
                    className="profile-picture avatar-xl mb-2"
                    src="/assets/images/faces/4.jpg"
                    alt=""
                  />
                  <p className="m-0 text-24">Timothy Sara</p>
                  <p className="text-muted m-0">timothysara@gmail.com</p>
                  <div className="mt-3 ul-widget-app__skill-margin">
                    <span className="text-15">Template</span>
                    <span className="text-15">UI</span>
                    <span className="text-15">UX</span>
                    <span
                      data-toggle="tooltip"
                      title="4 more"
                      data-placement="top"
                      className="badge badge-pill badge-primary p-2 m-1"
                    >
                      +4
                    </span>
                  </div>
                </div>
                <div className="ul-widget-app__profile-footer mt-4">
                  <div className="ul-widget-app__profile-footer-font">
                    <Link to="/inbox">
                      <i className="i-Speach-Bubble-6 text-16 font-weight-600 mr-1"></i>
                      <span className=" text-16 font-weight-600">Message</span>
                    </Link>
                  </div>
                  <div className="ul-widget-app__profile-footer-font">
                    <Link to="/pages/user-profile">
                      <i className="i-File-Clipboard-File--Text text-16 font-weight-600 mr-1"></i>
                      <span className=" text-16 font-weight-600">
                        Portfolio
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard>
              <div className="ul-widget-card__title-info text-center mb-3">
                <p className="m-0 text-24">Jon Snow</p>
                <p className="text-muted m-0">UI/UX</p>
              </div>
              <div className="user-profile mb-4">
                <div className="ul-widget-card__user-info">
                  <img
                    className="profile-picture avatar-lg mb-2"
                    src="/assets/images/faces/5.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="ul-widget-card__full-status mb-3">
                <div className="ul-widget-card__status1">
                  <span>797</span>
                  <span className="text-mute">Uploads</span>
                </div>
                <div className="ul-widget-card__status1">
                  <span>90k</span>
                  <span className="text-mute">following</span>
                </div>
                <div className="ul-widget-card__status1">
                  <span>2.5M</span>
                  <span className="text-mute">followers</span>
                </div>
              </div>
              <div className=" mt-2">
                <button type="button" className="btn btn-primary btn-block m-1">
                  Follow
                </button>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard title="Feedback" subtitle="Checking the feedback">
              <h3 className="heading mt-4">3450</h3>
              <p className="text-mute">This year we got 1246 feedback</p>

              <div className="ul-widget-app__work-list-img mt-4">
                <img
                  className="profile-picture avatar-md  rounded-circle"
                  src="/assets/images/faces/4.jpg"
                  alt=""
                />
                <img
                  className="profile-picture avatar-md  rounded-circle"
                  src="/assets/images/faces/1.jpg"
                  alt=""
                />
                <img
                  className="profile-picture avatar-md  rounded-circle"
                  src="/assets/images/faces/5.jpg"
                  alt=""
                />
                <img
                  className="profile-picture avatar-md  rounded-circle"
                  src="/assets/images/faces/3.jpg"
                  alt=""
                />
              </div>

              <div className=" mt-5">
                <button type="button" className="btn btn-primary  m-1">
                  Checkout All Feedback
                </button>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card o-hidden h-100">
              <img
                className="d-block w-100"
                src="/assets/images/products/headphone-1.jpg"
                alt="Second slide"
              />
              <div className="user-profile ul-widget-app__profile--position mb-4">
                <div className="ul-widget-card__user-info ">
                  <img
                    className="profile-picture avatar-lg mb-2"
                    src="/assets/images/faces/1.jpg"
                    alt=""
                  />
                  <p className="m-0 text-24 text-white">Timothy Carlson</p>
                </div>
              </div>

              <div className="card-footer bg-transparent">
                <div className="row">
                  <div className="col text-center">
                    <h3 className="display">25K</h3>
                    <h5 className="display text-muted">Followers</h5>
                  </div>
                  <div className="col text-center">
                    <h3 className="display">200</h3>
                    <h5 className="display text-muted">Following</h5>
                  </div>
                  <div className="col text-center">
                    <h3 className="display">25K</h3>
                    <h5 className="display text-muted">Facebook</h5>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="card-title mb-1 mt-0">Poll</div>
                <div className="ul-widget-app__header mb-4">
                  <h5 className="text-mute">Recent Poll</h5>
                  <h6 className="text-mute font-weight-600">
                    Your mobile app daily usage
                  </h6>
                </div>
                <label className="radio radio-primary">
                  <input type="radio" name="radio" value="0" />

                  <span className="font-weight-700">A 20 minutes</span>
                  <span className="checkmark"></span>
                </label>
                <label className="radio radio-primary">
                  <input type="radio" name="radio" value="0" />

                  <span className="font-weight-700">
                    B More than 30 minutes
                  </span>
                  <span className="checkmark" checked=""></span>
                </label>

                <label className="radio radio-primary">
                  <input type="radio" name="radio" value="0" />

                  <span className="font-weight-700">C 1 Hour</span>
                  <span className="checkmark" checked=""></span>
                </label>

                <div className=" mt-5">
                  <button type="button" className="btn btn-primary  m-1">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <SimpleCard title="Browser Status" className="h-100">
              <div className="ul-widget-app__browser-list">
                <div className="ul-widget-app__browser-list-1 mb-4">
                  <i className="i-Chrome  text-18 text-danger font-weight-600 mr-3"></i>
                  <span className="text-15">Google Chrome</span>
                  <span className="badge badge-round-success pill  m-1">
                    99%
                  </span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4">
                  <i className="i-Firefox  text-18 text-warning font-weight-600 mr-3"></i>
                  <span className="text-15">Firefox</span>
                  <span className="badge badge-round-danger pill  m-1">
                    89%
                  </span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4">
                  <i className="i-Internet-Explorer  text-18 text-info font-weight-600 mr-3"></i>
                  <span className="text-15">Internet Explorer</span>
                  <span className="badge badge-round-primary pill  m-1">
                    9%
                  </span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4">
                  <i className="i-Opera  text-18 text-danger font-weight-600 mr-3"></i>
                  <span className="text-15">Opera Mini</span>
                  <span className="badge badge-round-dark pill  m-1">9%</span>
                </div>

                <div className="ul-widget-app__browser-list-1 mb-4">
                  <i className="i-Android  text-18 text-success mr-3"></i>
                  <span className="text-15">Android</span>
                  <span className="badge badge-round-danger pill  m-1">0%</span>
                </div>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="card-title mb-1">Poll</div>
                <div className="ul-widget-app__header mb-4">
                  <h5 className="text-mute">Recent Poll</h5>
                  <h6 className="text-mute font-weight-600">
                    Your mobile app daily usage
                  </h6>
                </div>

                <div className="ul-widget-app__poll-list mb-4">
                  <div className="d-flex">
                    <h5 className="heading mr-2">A</h5>
                    <span className="text-muted">20 Minutes</span>
                    <span className="t-font-boldest ml-auto">33%</span>
                  </div>
                  <ProgressBar
                    now={25}
                    variant="danger"
                    className="progress--height-2"
                  ></ProgressBar>
                </div>
                <div className="ul-widget-app__poll-list mb-4">
                  <div className="d-flex">
                    <h5 className="heading mr-2">B</h5>
                    <span className="text-muted">Greater than 30 Minutes</span>
                    <span className="t-font-boldest ml-auto">63%</span>
                  </div>
                  <ProgressBar
                    now={55}
                    variant="success"
                    className="progress--height-2"
                  ></ProgressBar>
                </div>

                <div className="ul-widget-app__poll-list mb-4">
                  <div className="d-flex">
                    <h5 className="heading mr-2">C</h5>
                    <span className="text-muted">2 Hour</span>
                    <span className="t-font-boldest ml-auto">73%</span>
                  </div>
                  <ProgressBar
                    now={25}
                    variant="warning"
                    className="progress--height-2"
                  ></ProgressBar>
                </div>

                <div className="ul-widget-app__poll-list mb-4">
                  <div className="d-flex">
                    <h5 className="heading mr-2">D</h5>
                    <span className="text-muted">8 Hour</span>
                    <span className="t-font-boldest ml-auto">13%</span>
                  </div>
                  <ProgressBar
                    now={13}
                    variant="info"
                    className="progress--height-2"
                  ></ProgressBar>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title mb-2">Currency Trading</div>
                <h5 className="text-mute mb-4">Trading Currency from Here</h5>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0.00"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <div className="input-group-prepend">
                    <Dropdown>
                      <Dropdown.Toggle className="toggle-hidden">
                        Unit
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>BTC</Dropdown.Item>
                        <Dropdown.Item>ETC</Dropdown.Item>
                        <Dropdown.Item>DTH</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                <div className="timeline timeline--align">
                  <div className="timeline-item mt-0">
                    <div className="timeline-badge">
                      <i className="badge-icon bg-danger text-white i-Repeat-3"></i>
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0.00"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <div className="input-group-prepend">
                    <Dropdown>
                      <Dropdown.Toggle className="toggle-hidden">
                        Unit
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>BTC</Dropdown.Item>
                        <Dropdown.Item>ETC</Dropdown.Item>
                        <Dropdown.Item>DTH</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                <button type="button" className="btn btn-lg btn-primary m-1">
                  Trading Now
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppWidget;
