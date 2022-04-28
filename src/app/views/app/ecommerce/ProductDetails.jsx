import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProductDetails extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Ecommerce", path: "/ecommerce" },
            { name: "Product Details" }
          ]}
        ></Breadcrumb>
        <section className="ul-product-detail">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="ul-product-detail__image">
                        <img src="/assets/images/mac_book.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="ul-product-detail__brand-name mb-4">
                        <h5 className="heading">MAC Book Pro</h5>
                        <span className="text-mute">Modern model 2019</span>
                      </div>

                      <div className="ul-product-detail__price-and-rating d-flex align-items-baseline">
                        <h3 className="font-weight-700 text-primary mb-0 mr-2">
                          $2,300
                        </h3>
                        <span className="text-mute font-weight-800 mr-2">
                          <del>$1,150</del>
                        </span>
                        <small className="text-success font-weight-700">
                          50% off
                        </small>
                      </div>

                      <div className="ul-product-detail__features mt-3">
                        <h6 className=" font-weight-700">Features:</h6>
                        <ul className="m-0 p-0">
                          <li>
                            <i className="i-Right1 text-primary text-15 align-middle font-weight-700"></i>
                            <span className="align-middle">
                              This Refurbished product is tested to work and
                              look like new with minimal to no signs of wear &
                              tear
                            </span>
                          </li>
                          <li>
                            <i className="i-Right1 text-primary text-15 align-middle font-weight-700"></i>
                            <span className="align-middle">
                              2.6GHz Intel Core i5 4th Gen processor
                            </span>
                          </li>
                          <li>
                            <i className="i-Right1 text-primary text-15 align-middle font-weight-700"></i>
                            <span className="align-middle">8GB DDR3 RAM</span>
                          </li>
                          <li>
                            <i className="i-Right1 text-primary text-15 align-middle font-weight-700"></i>
                            <span className="align-middle">
                              13.3-inch screen, Intel Iris 5100 1.5GB Graphics
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="ul-product-detail__quantity d-flex align-items-center mt-3">
                        <input type="number" className="form-control col-2" />
                        <button type="button" className="btn btn-primary m-1">
                          <i className="i-Full-Cart text-15"> </i>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ul-product-detail__box">
          <div className="row">
            <div className="col-lg-3 col-md-3 mt-4 text-center">
              <div className="card">
                <div className="card-body">
                  <div className="ul-product-detail__border-box">
                    <div className="ul-product-detail--icon mb-2">
                      <i className="i-Car-2 text-success text-25 font-weight-500 "></i>
                    </div>
                    <h5 className="heading">Quick Delivery</h5>
                    <p className="text-muted text-12">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 mt-4 text-center">
              <div className="card">
                <div className="card-body">
                  <div className="ul-product-detail__border-box">
                    <div className="ul-product-detail--icon mb-2">
                      <i className="i-Reload text-danger text-25 font-weight-500 "></i>
                    </div>
                    <h5 className="heading">Back In 30 Days</h5>
                    <p className="text-muted text-12">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 mt-4 text-center">
              <div className="card">
                <div className="card-body">
                  <div className="ul-product-detail__border-box">
                    <div className="ul-product-detail--icon mb-2">
                      <i className="i-Consulting text-info text-25 font-weight-500"></i>
                    </div>
                    <h5 className="heading">Support 24/7</h5>
                    <p className="text-muted text-12">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 mt-4 text-center">
              <div className="card">
                <div className="card-body">
                  <div className="ul-product-detail__border-box">
                    <div className="ul-product-detail--icon mb-2">
                      <i className="i-Money-Bag text-warning text-25 font-weight-500"></i>
                    </div>
                    <h5 className="heading">High Secure Payment</h5>
                    <p className="text-muted text-12">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ul-product-detail__tab">
          <div className="row">
            <div className="col-lg-12 col-md-12 mt-4">
              <div className="card mt-2 mb-4 ">
                <div className="card-body">
                  <Tabs defaultActiveKey="Description" className="mb-4">
                    <Tab eventKey="Description" title="Description">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <img src="/assets/images/mac_book.jpg" alt="" />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12">
                          <h5 className="text-uppercase font-weight-700 text-muted mt-4 mb-2">
                            Lorem Ipsum is simply dummy text of the printing
                          </h5>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </p>

                          <div className="ul-product-detail__nested-card">
                            <div className="row text-center">
                              <div className="col-lg-4 col-sm-12 mb-2">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="ul-product-detail__border-box">
                                      <div className="ul-product-detail--icon mb-2">
                                        <i className="i-Car-2 text-success text-25 font-weight-500 "></i>
                                      </div>
                                      <h5 className="heading">
                                        Quick Delivery
                                      </h5>
                                      <p className="text-muted text-12">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-12 mb-2">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="ul-product-detail__border-box">
                                      <div className="ul-product-detail--icon mb-2">
                                        <i className="i-Car-2 text-primary text-25 font-weight-500 "></i>
                                      </div>
                                      <h5 className="heading">
                                        Quick Delivery
                                      </h5>
                                      <p className="text-muted text-12">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-12 mb-2">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="ul-product-detail__border-box">
                                      <div className="ul-product-detail--icon mb-2">
                                        <i className="i-Car-2 text-danger text-25 font-weight-500 "></i>
                                      </div>
                                      <h5 className="heading">
                                        Quick Delivery
                                      </h5>
                                      <p className="text-muted text-12">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="Reviews" title="Reviews">
                      <div className="row">
                        <div className="col-12">
                          <div className="ul-product-detail__avg-rate text-center">
                            <h3 className="heading text-success">4.9</h3>
                            <span className="text-muted font-weight-600">
                              Overall Rating
                            </span>
                          </div>

                          <div className="ul-product-detail__comment-list mt-3">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">
                                <Link
                                  to="/"
                                  className="ul-product-detail__reply float-right"
                                >
                                  <i className="i-Left"></i>
                                  <span>Reply</span>
                                </Link>
                                <h5 className="font-weight-800">
                                  Timothy Clarkson
                                </h5>
                                <p>Very comfortable key,and nice product.</p>
                                <span className="text-warning">**** </span>
                              </li>

                              <li className="list-group-item">
                                <Link
                                  to="/"
                                  className="ul-product-detail__reply float-right"
                                >
                                  <i className="i-Left"></i>
                                  <span>Reply</span>
                                </Link>
                                <h5 className="font-weight-800">Jaret Leto</h5>
                                <p>Very comfortable key,and nice product.</p>
                                <span className="text-warning">**** </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="Customized Tab" title="Customized Tab">
                      <div className="row text-center">
                        <div className="col-lg-4 col-sm-12 mb-2">
                          <div className="card">
                            <div className="card-body">
                              <div className="ul-product-detail__border-box">
                                <div className="ul-product-detail--icon mb-2">
                                  <i className="i-Car-2 text-success text-25 font-weight-500 "></i>
                                </div>
                                <h5 className="heading">Quick Delivery</h5>
                                <p className="text-muted text-12">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 mb-2">
                          <div className="card">
                            <div className="card-body">
                              <div className="ul-product-detail__border-box">
                                <div className="ul-product-detail--icon mb-2">
                                  <i className="i-Car-2 text-primary text-25 font-weight-500 "></i>
                                </div>
                                <h5 className="heading">Quick Delivery</h5>
                                <p className="text-muted text-12">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 mb-2">
                          <div className="card">
                            <div className="card-body">
                              <div className="ul-product-detail__border-box">
                                <div className="ul-product-detail--icon mb-2">
                                  <i className="i-Car-2 text-danger text-25 font-weight-500 "></i>
                                </div>
                                <h5 className="heading">Quick Delivery</h5>
                                <p className="text-muted text-12">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="About Brand" title="About Brand">
                      <div className="row">
                        <div className="col-lg-2">
                          <img src="/assets/images/mac_book.jpg" alt="" />
                        </div>
                        <div className="col-lg-6">
                          <span className="badge badge-pill badge-danger p-2 m-1">
                            Apple
                          </span>
                          <h6 className="heading mt-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </h6>
                          <p className="text-muted">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer
                          </p>
                        </div>
                        <div className="col-lg-4">
                          <div className="ul-product-detail__features mt-3">
                            <ul className="m-0 p-0">
                              <li>
                                <i className="i-Right1 text-primary text-15 align-middle font-weight-700"></i>
                                <span className="align-middle">
                                  This Refurbished product is tested to work and
                                  look like new with minimal to no signs of wear
                                  &amp; tear
                                </span>
                              </li>
                              <li>
                                <i className="i-Right1 text-primary text-15 align-middle font-weight-700"></i>
                                <span className="align-middle">
                                  2.6GHz Intel Core i5 4th Gen processor
                                </span>
                              </li>
                              <li>
                                <i className="i-Right1 text-primary text-15 align-middle font-weight-700"></i>
                                <span className="align-middle">
                                  8GB DDR3 RAM
                                </span>
                              </li>
                              <li>
                                <i className="i-Right1 text-primary text-15 align-middle font-weight-700"></i>
                                <span className="align-middle">
                                  13.3-inch screen, Intel Iris 5100 1.5GB
                                  Graphics
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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

export default ProductDetails;
