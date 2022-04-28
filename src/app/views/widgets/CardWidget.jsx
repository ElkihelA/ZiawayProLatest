import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { ProgressBar, Tabs, Tab } from "react-bootstrap";

class CardWidget extends Component {
  state = {};
  randomText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Widgets", path: "/widgets" },
            { name: "Card" }
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-lg-4 col-xl-4 mt-3">
            <div className="card">
              <img
                className="d-block w-100 rounded rounded"
                src="/assets/images/products/iphone-1.jpg"
                alt="First slide"
              />
              <div className="card-body">
                <h5 className="card-title mb-2">Gull Admin</h5>
                <p className="card-text text-mute">By Frontend developer</p>
                <button
                  type="button"
                  className="btn btn-primary ul-btn-raised--v2  m-1"
                >
                  Download
                </button>

                <button
                  type="button"
                  className="btn btn-outline-success ul-btn-raised--v2 m-1 float-right"
                >
                  Preview
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-xl-4 mt-3">
            <div className="card">
              <div className="card-body">
                <img
                  className="d-block w-100 rounded"
                  src="/assets/images/products/headphone-1.jpg"
                  alt="Second slide"
                />
                <h5 className="card-title mt-4 mb-2">Gull Admin</h5>
                <p className="card-text text-mute">By Frontend developer</p>

                <div className="ul-widget-card__info">
                  <span>
                    <p>$ 4785.78</p>
                    <p className="text-mute">Income</p>
                  </span>
                  <span>
                    <p>4/11/2019</p>
                    <p className="text-mute m-0">Deadline</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-xl-4 mt-3">
            <div className="card">
              <div className="card-body">
                <img
                  className="d-block w-100 rounded"
                  src="/assets/images/products/iphone-1.jpg"
                  alt="First slide"
                />
                <h5 className="card-title mt-4 mb-2">Gull Admin</h5>

                <div className="ul-widget-card__progress-rate">
                  <span>$675</span>
                  <span className="">$10000</span>
                </div>
                <ProgressBar className="mb-3" now={30}></ProgressBar>

                <button
                  type="button"
                  className="btn btn-primary ul-btn-raised--v2  m-1"
                >
                  Download
                </button>

                <button
                  type="button"
                  className="btn btn-outline-success ul-btn-raised--v2 m-1 float-right"
                >
                  Preview
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-xl-4 mt-3">
            <div className="card">
              <div className="card-body">
                <div className="user-profile mb-4">
                  <div className="ul-widget-card__user-info">
                    <img
                      className="profile-picture avatar-lg mb-2"
                      src="/assets/images/faces/1.jpg"
                      alt=""
                    />
                    <p className="m-0 text-24">Timothy Carlson</p>
                    <p className="text-muted m-0">Digital Marketer</p>
                  </div>
                </div>
                <div className="ul-widget-card--line mt-2">
                  <button
                    type="button"
                    className="btn btn-primary ul-btn-raised--v2  m-1"
                  >
                    Download
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success ul-btn-raised--v2 m-1 float-right"
                  >
                    Preview
                  </button>
                </div>
                <div className="ul-widget-card__rate-icon">
                  <span>
                    <i className="i-Add-UserStar text-warning"></i>
                    5.0
                  </span>
                  <span>
                    <i className="i-Bag text-primary"></i>
                    78 Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-4 mt-3">
            <div className="card">
              <div className="card-body">
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
                  <button
                    type="button"
                    className="btn btn-primary btn-block m-1"
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-4 mt-3">
            <div className="card">
              <div className="card-body">
                <div className="user-profile mb-4">
                  <div className="ul-widget-card__user-info">
                    <img
                      className="profile-picture avatar-lg mb-2"
                      src="/assets/images/faces/2.jpg"
                      alt=""
                    />
                    <p className="m-0 text-24">Wolverine</p>
                    <p className="text-muted m-0">Mutant</p>
                  </div>
                </div>
                <div className="ul-widget-card__progress-rate">
                  <span>700 Points</span>
                  <span className="">1000</span>
                </div>

                <ProgressBar className="mb-3" now={70}></ProgressBar>
                <div className="mt-4">
                  <button
                    type="button"
                    className="btn btn-primary ul-btn-raised--v2  m-1"
                  >
                    Follow
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success ul-btn-raised--v2 m-1 float-right"
                  >
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card bg-dark text-white o-hidden mb-4">
              <img
                className="card-img"
                src="/assets/images/photo-long-1.jpg"
                alt="Card"
              />
              <div className="card-img-overlay">
                <div className="text-center pt-4">
                  <h5 className="card-title mb-2 text-white">Card title</h5>
                  <div className="separator border-top mb-2"></div>
                  <p className="text-small font-italic">
                    Last updated 3 mins ago
                  </p>
                </div>
                <div className="p-1 text-left card-footer font-weight-light d-flex">
                  <span className="mr-3 d-flex align-items-center">
                    <i className="i-Speach-Bubble-6 mr-1"></i>
                    12
                  </span>
                  <span className="d-flex align-items-center">
                    <i className="i-Calendar-4 mr-2"></i>03.12.2018
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card bg-dark text-white o-hidden mb-4">
              <img
                className="card-img"
                src="/assets/images/photo-long-2.jpg"
                alt="Card"
              />
              <div className="card-img-overlay">
                <div className="text-center pt-4">
                  <h5 className="card-title mb-2 text-white">Sunny</h5>
                  <div className="separator border-top mb-2"></div>
                  <h3 className="text-white">Korea</h3>
                </div>
                <div className="ul-widget-card__cloud card-icon-bg">
                  <div className="ul-widget-card__head">
                    <i className="i-Cloud-Sun"></i>
                    <h1 className="m-0">
                      32 <sup>o</sup>
                    </h1>
                  </div>
                  <div className="ul-widget-card__body">
                    <div className="ul-widget-card__weather-info">
                      <span>Precipitation</span>
                      <span>6%</span>
                    </div>
                    <div className="ul-widget-card__weather-info">
                      <span>Humidity</span>
                      <span>64%</span>
                    </div>
                    <div className="ul-widget-card__weather-info">
                      <span>Wind</span>
                      <span>6 km/h</span>
                    </div>
                  </div>
                </div>
                <div className="p-1 text-left card-footer font-weight-light d-flex">
                  <span className="d-flex align-items-center">
                    <i className="i-Calendar-4 mr-2"></i>03.12.2018
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card bg-dark text-white o-hidden mb-4">
              <img
                className="card-img"
                src="/assets/images/photo-long-2.jpg"
                alt="Card"
              />
              <div className="card-img-overlay">
                <div className="text-center pt-4">
                  <h5 className="card-title mb-2 text-white">Card title</h5>
                  <div className="separator border-top mb-2"></div>
                  <p className="text-small font-italic">
                    Last updated 3 mins ago
                  </p>
                </div>
                <div className="p-1 text-left card-footer font-weight-light d-flex">
                  <span className="mr-3 d-flex align-items-center">
                    <i className="i-Speach-Bubble-6 mr-1"></i>
                    12
                  </span>
                  <span className="d-flex align-items-center">
                    <i className="i-Calendar-4 mr-2"></i>03.12.2018
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-4 mt-3">
            <SimpleCard title="Gull Admin" subtitle="By Frontend developer">
              <img
                className="d-block w-100 rounded"
                src="/assets/images/products/headphone-1.jpg"
                alt="Second slide"
              />

              <div className="ul-widget-card__rate-icon --version-2">
                <span>
                  <i className="i-Like text-success"></i>
                  576
                </span>
                <span>
                  <i className="i-Speach-Bubble-3 text-primary"></i>
                  350
                </span>
                <span>
                  <i className="i-Heart1 text-danger"></i>
                  255
                </span>
              </div>
            </SimpleCard>
          </div>
          <div className="col-lg-8 col-xl-8 mt-3">
            <SimpleCard title="Timeline">
              <div className="ul-widget-s6__items ul-widget-card__position">
                <div className="ul-widget-card__item">
                  <span className="ul-widget-s6__badge ul-widget-card__dot">
                    <p className="badge-dot-primary ul-widget6__dot ul-widget-card__dot-xl">
                      <i className="i-Add text-white"></i>
                    </p>
                  </span>
                  <div className="ul-widget-card__info-v2">
                    <span className="t-font-boldest">Add File</span>
                    <span className="t-font-bold">
                      It is a long established fact that a reader will be
                      distracted.
                    </span>
                    <small className="text-mute">3 Days Ago</small>
                  </div>
                </div>
              </div>
              <div className="ul-widget-s6__items ul-widget-card__position">
                <div className="ul-widget-card__item">
                  <span className="ul-widget-s6__badge ul-widget-card__dot">
                    <p className="badge-dot-success ul-widget6__dot ul-widget-card__dot-xl">
                      <i className="i-Like-2 text-white"></i>
                    </p>
                  </span>
                  <div className="ul-widget-card__info-v2">
                    <span className="t-font-boldest">File Completed</span>
                    <span className="t-font-bold">
                      It is a long established fact that a reader will be
                      distracted.
                    </span>
                    <small className="text-mute">3 Days Ago</small>
                  </div>
                </div>
              </div>
              <div className="ul-widget-s6__items ul-widget-card__position">
                <div className="ul-widget-card__item">
                  <span className="ul-widget-s6__badge ul-widget-card__dot">
                    <p className="badge-dot-danger ul-widget6__dot ul-widget-card__dot-xl">
                      <i className="i-Delete-File text-white"></i>
                    </p>
                  </span>
                  <div className="ul-widget-card__info-v2">
                    <span className="t-font-boldest">Delete File</span>
                    <span className="t-font-bold">
                      It is a long established fact that a reader will be
                      distracted.
                    </span>
                    <small className="text-mute">3 Days Ago</small>
                  </div>
                </div>
              </div>
            </SimpleCard>
          </div>
          <div className="col-lg-6 col-xl-6 mt-3">
            <SimpleCard title="Contact Form">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </SimpleCard>
          </div>

          <div className="col-lg-6 col-xl-6 mt-3">
            <div className="card mt-2 mb-4">
              <div className="card-body">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                  <Tab eventKey="home" title="Home">
                    {this.randomText}
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                    {this.randomText}
                  </Tab>
                  <Tab eventKey="contact" title="Contact">
                    {this.randomText}
                  </Tab>
                  <Tab eventKey="disabled" title="Disabled" disabled>
                    {this.randomText}
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardWidget;
