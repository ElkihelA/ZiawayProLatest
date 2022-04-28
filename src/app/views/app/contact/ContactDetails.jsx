import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Tabs, Tab, ProgressBar } from "react-bootstrap";

class ContactDetails extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
            { name: "Contact Details" }
          ]}
        ></Breadcrumb>

        <section className="ul-contact-detail">
          <div className="row">
            <div className="col-lg-4 col-xl-4">
              <div className="card o-hidden">
                <img
                  className="d-block w-100"
                  src="/assets/images/products/iphone-1.jpg"
                  alt="First slide"
                />
                <div className="card-body">
                  <div className="ul-contact-detail__info">
                    <div className="row">
                      <div className="col-6 text-center">
                        <div className="ul-contact-detail__info-1">
                          <h5>Name</h5>
                          <span>Genelia Deshmukh</span>
                        </div>
                        <div className="ul-contact-detail__info-1">
                          <h5>Name</h5>
                          <span>Genelia Deshmukh</span>
                        </div>
                      </div>
                      <div className="col-6 text-center">
                        <div className="ul-contact-detail__info-1">
                          <h5>Name</h5>
                          <span>Genelia Deshmukh</span>
                        </div>
                        <div className="ul-contact-detail__info-1">
                          <h5>Name</h5>
                          <span>Genelia Deshmukh</span>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <div className="ul-contact-detail__info-1">
                          <h5>Address</h5>
                          <span>
                            DieSachbearbeiter Choriner Straße 49 10435 Berlin
                          </span>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <div className="ul-contact-detail__social">
                          <div className="ul-contact-detail__social-1">
                            <button
                              type="button"
                              className="btn btn-facebook btn-icon m-1"
                            >
                              <span className="ul-btn__icon">
                                <i className="i-Facebook-2"></i>
                              </span>
                            </button>
                            <span className="t-font-boldest ul-contact-detail__followers">
                              400
                            </span>
                          </div>
                          <div className="ul-contact-detail__social-1">
                            <button
                              type="button"
                              className="btn btn-twitter btn-icon m-1"
                            >
                              <span className="ul-btn__icon">
                                <i className="i-Twitter"></i>
                              </span>
                            </button>
                            <span className="t-font-boldest ul-contact-detail__followers">
                              900
                            </span>
                          </div>
                          <div className="ul-contact-detail__social-1">
                            <button
                              type="button"
                              className="btn btn-dribble btn-icon m-1"
                            >
                              <span className="ul-btn__icon">
                                <i className="i-Dribble"></i>
                              </span>
                            </button>
                            <span className="t-font-boldest ul-contact-detail__followers">
                              658
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xl-8">
              <div className="card mb-4">
                <div className="card-header bg-transparent">Basic Tabs</div>
                <div className="card-body">
                  <Tabs defaultActiveKey="Home">
                    <Tab eventKey="Home" title="Home">
                      <div className="ul-contact-detail__timeline">
                        <div className="row">
                          <div className="col-lg-12 col-xl-12">
                            <div className="ul-contact-detail__timeline-row">
                              <div className="row">
                                <div className="col-lg-1">
                                  <div className="ul-contact-detail__left-timeline">
                                    <div className="ul-widget3-img">
                                      <img
                                        src="/assets/images/faces/1.jpg"
                                        className="img-fluid"
                                        id="userDropdown"
                                        alt=""
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11">
                                  <div className="ul-contact-detail__right-timeline">
                                    <span className="ul-widget4__title d-block">
                                      Timity Clarkson
                                    </span>
                                    <small className="text-mute">
                                      10 minutes
                                    </small>
                                    <p>
                                      assign a new task
                                      <a href="#"> Weblayout</a>
                                    </p>
                                    <div className="ul-contact-detail__timeline-image">
                                      <img
                                        className="d-block"
                                        src="/assets/images/products/iphone-1.jpg"
                                        alt="First slide"
                                      />
                                      <img
                                        className="d-block"
                                        src="/assets/images/products/iphone-1.jpg"
                                        alt="First slide"
                                      />
                                      <img
                                        className="d-block"
                                        src="/assets/images/products/iphone-1.jpg"
                                        alt="First slide"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ul-contact-detail__timeline-row">
                              <div className="row">
                                <div className="col-lg-1">
                                  <div className="ul-contact-detail__left-timeline">
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
                                  </div>
                                </div>
                                <div className="col-lg-11">
                                  <div className="ul-contact-detail__right-timeline">
                                    <span className="ul-widget4__title d-block">
                                      Timity Clarkson
                                    </span>
                                    <small className="text-mute">
                                      10 minutes
                                    </small>

                                    <div className="ul-contact-detail__timeline-image-2 mt-3">
                                      <img
                                        className="d-block"
                                        src="/assets/images/products/iphone-1.jpg"
                                        alt="First slide"
                                      />
                                      <div className="ul-contact-detail__timeline-image-info">
                                        <p style={{ width: "80%" }}>
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Integer
                                          nec odio. Praesent libero. Sed cursus
                                          ante dapibus diam. Sed nisi. Nulla
                                          quis sem at nibh elementum imperdiet.
                                          Duis sagittis ipsum. Praesent mauris.
                                          Fusce nec tellus sed augue semper
                                          porta.
                                        </p>
                                        <button
                                          type="button"
                                          className="btn btn-primary btn-lg m-1"
                                        >
                                          Weblayout
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="ul-contact-detail__timeline-row">
                              <div className="row">
                                <div className="col-lg-1">
                                  <div className="ul-contact-detail__left-timeline">
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
                                  </div>
                                </div>
                                <div className="col-lg-8">
                                  <div className="ul-contact-detail__right-timeline">
                                    <span className="ul-widget4__title d-block">
                                      Timity Clarkson
                                    </span>
                                    <small className="text-mute">
                                      10 minutes
                                    </small>

                                    <p className="mt-3">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Integer nec odio.
                                      Praesent libero. Sed cursus ante dapibus
                                      diam. Sed nisi. Nulla quis sem at nibh
                                      elementum imperdiet. Duis sagittis ipsum.
                                      Praesent mauris. Fusce nec tellus sed
                                      augue semper
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="ul-contact-detail__timeline-row">
                              <div className="row">
                                <div className="col-lg-1">
                                  <div className="ul-contact-detail__left-timeline">
                                    <div className="ul-widget3-img">
                                      <img
                                        src="/assets/images/faces/1.jpg"
                                        id="userDropdown"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-11">
                                  <div className="ul-contact-detail__right-timeline">
                                    <span className="ul-widget4__title d-block">
                                      Timity Clarkson
                                    </span>
                                    <small className="text-mute">
                                      10 minutes
                                    </small>
                                    <p>
                                      assign a new task
                                      <a href="#"> Weblayout</a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="Profile" title="Profile">
                      <div className="row">
                        <div className="col-lg-12 col-xl-12">
                          <div className="ul-contact-detail__profile">
                            <div className="ul-contact-detail__inner-profile">
                              <h4 className="heading">Full Name</h4>
                              <span className="tetx-muted">
                                Timity Clarkson
                              </span>
                            </div>

                            <div className="ul-contact-detail__inner-profile">
                              <h4 className="heading">Full Name</h4>
                              <span className="tetx-muted">
                                Timity Clarkson
                              </span>
                            </div>
                            <div className="ul-contact-detail__inner-profile">
                              <h4 className="heading">Full Name</h4>
                              <span className="tetx-muted">
                                Timity Clarkson
                              </span>
                            </div>
                            <div className="ul-contact-detail__inner-profile">
                              <h4 className="heading">Full Name</h4>
                              <span className="tetx-muted">
                                Timity Clarkson
                              </span>
                            </div>
                          </div>
                          <div className="custom-separator"></div>
                        </div>

                        <div className="col-lg-12 col-xl-12">
                          <div className="ul-contact-dwtail__profile-swcription">
                            <p className="mt-3">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries
                            </p>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries
                            </p>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-12 col-xl-12">
                          <h4 className="card-title mb-3">Skills</h4>
                          <div className="custom-separator"></div>

                          <span className=""> Wordpress</span>
                          <ProgressBar
                            className="progress mb-3 mt-2"
                            now={10}
                            striped
                            animated
                            label="10%"
                            variant="primary"
                          ></ProgressBar>

                          <span className=""> HTML 5</span>
                          <ProgressBar
                            className="progress mb-3 mt-2"
                            now={25}
                            striped
                            animated
                            label="25%"
                            variant="success"
                          ></ProgressBar>

                          <span>React.js</span>
                          <ProgressBar
                            className="progress mb-3 mt-2"
                            now={50}
                            striped
                            animated
                            label="50%"
                            variant="info"
                          ></ProgressBar>

                          <span>Photoshop</span>
                          <ProgressBar
                            className="progress mb-3 mt-2"
                            now={75}
                            striped
                            animated
                            label="75%"
                            variant="warning"
                          ></ProgressBar>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="EditContact" title="EditContact">
                      <form className="mt-3">
                        <div className="form-group row">
                          <label
                            for="inputEmail3"
                            className="col-sm-2 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmail3"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            for="inputPassword3"
                            className="col-sm-2 col-form-label"
                          >
                            Password
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="password"
                              className="form-control"
                              id="inputPassword3"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <fieldset className="form-group">
                          <div className="row">
                            <div className="col-form-label col-sm-2 pt-0">
                              Radios
                            </div>
                            <div className="col-sm-10">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gridRadios"
                                  id="gridRadios1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label ml-3"
                                  for="gridRadios1"
                                >
                                  First radio
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gridRadios"
                                  id="gridRadios2"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label ml-3"
                                  for="gridRadios2"
                                >
                                  Second radio
                                </label>
                              </div>
                              <div className="form-check disabled ">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gridRadios"
                                  id="gridRadios3"
                                  value="option3"
                                  disabled=""
                                />
                                <label
                                  className="form-check-label ml-3"
                                  for="gridRadios3"
                                >
                                  Third disabled radio
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <div className="form-group row">
                          <div className="col-sm-2">Checkbox</div>
                          <div className="col-sm-10">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck1"
                              />
                              <label
                                className="form-check-label ml-3"
                                for="gridCheck1"
                              >
                                Example checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">
                              Sign in
                            </button>
                          </div>
                        </div>
                      </form>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactDetails;
