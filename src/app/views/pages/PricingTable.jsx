import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";

class PricingTable extends Component {
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/pages" },
            { name: "Pricing Table" }
          ]}
        ></Breadcrumb>

        <section className="ul-pricing-table">
          <div className="row ">
            <div className="col-lg-12 col-xl-12">
              <SimpleCard title="Default Style" className="mb-4">
                <div className="ul-pricing__table-list">
                  <div className="row">
                    <div className="col-md-12 col-lg-4 col-xl-4">
                      <div className="ul-pricing__table-1">
                        <div className="ul-pricing__image card-icon-bg-primary">
                          <i className="i-Bicycle"></i>
                        </div>
                        <div className="ul-pricing__title">
                          <h2 className="heading text-primary">Basic</h2>
                        </div>
                        <div className="ul-pricing__text text-mute">5gb</div>
                        <div className="ul-pricing__main-number">
                          <h3 className="heading display-3 text-primary t-font-boldest">
                            $10
                          </h3>
                        </div>
                        <div className="ul-pricing__list">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                          </p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-lg btn-default btn-rounded btn-primary m-1"
                        >
                          Purchase
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xl-4">
                      <div className="ul-pricing__table-1 ">
                        <div className="ul-pricing__image card-icon-bg-primary">
                          <i className="i-Motorcycle"></i>
                        </div>
                        <div className="ul-pricing__title">
                          <h2 className="heading text-primary">Standard</h2>
                        </div>
                        <div className="ul-pricing__text text-mute">15gb</div>
                        <div className="ul-pricing__main-number">
                          <h3 className="heading display-3 text-primary t-font-boldest">
                            $250
                          </h3>
                        </div>
                        <div className="ul-pricing__list">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                          </p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-lg btn-default btn-rounded btn-primary m-1"
                        >
                          Purchase
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xl-4">
                      <div className="ul-pricing__table-1 border-right-0">
                        <div className="ul-pricing__image card-icon-bg-primary">
                          <i className="i-Car-2"></i>
                        </div>
                        <div className="ul-pricing__title">
                          <h2 className="heading text-primary">Premium</h2>
                        </div>
                        <div className="ul-pricing__text text-mute">35gb</div>
                        <div className="ul-pricing__main-number">
                          <h3 className="heading display-3 text-primary t-font-boldest">
                            $500
                          </h3>
                        </div>
                        <div className="ul-pricing__list">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                          </p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-lg btn-default btn-rounded btn-primary m-1"
                        >
                          Purchase
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleCard>

              <SimpleCard title="Full width" className="mb-4">
                <div className="row">
                  <div className="col-lg-3 col-xl-3">
                    <div className="ul-pricing__table-1 mb-4">
                      <div className="ul-pricing__image card-icon-bg-primary">
                        <i className="i-Gift-Box"></i>
                      </div>
                      <div className="ul-pricing__title">
                        <h2 className="heading text-primary">Free</h2>
                      </div>
                      <div className="ul-pricing__text text-mute">1gb</div>
                      <div className="ul-pricing__main-number">
                        <h3 className="heading display-3 text-primary t-font-boldest">
                          $0
                        </h3>
                      </div>
                      <div className="ul-pricing__list">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-lg btn-primary btn-rounded m-1"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xl-3">
                    <div className="ul-pricing__table-1">
                      <div className="ul-pricing__image card-icon-bg-primary">
                        <i className="i-Bicycle"></i>
                      </div>
                      <div className="ul-pricing__title">
                        <h2 className="heading text-primary">Basic</h2>
                      </div>
                      <div className="ul-pricing__text text-mute">5gb</div>
                      <div className="ul-pricing__main-number">
                        <h3 className="heading display-3 text-primary t-font-boldest">
                          $10
                        </h3>
                      </div>
                      <div className="ul-pricing__list">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-lg btn-primary btn-rounded m-1"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xl-3">
                    <div className="ul-pricing__table-1">
                      <div className="ul-pricing__image card-icon-bg-primary">
                        <i className="i-Motorcycle"></i>
                      </div>
                      <div className="ul-pricing__title">
                        <h2 className="heading text-primary">Standard</h2>
                      </div>
                      <div className="ul-pricing__text text-mute">15gb</div>
                      <div className="ul-pricing__main-number">
                        <h3 className="heading display-3 text-primary t-font-boldest">
                          $250
                        </h3>
                      </div>
                      <div className="ul-pricing__list">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-lg btn-primary btn-rounded m-1"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xl-3">
                    <div className="ul-pricing__table-1 border-right-0">
                      <div className="ul-pricing__image card-icon-bg-primary">
                        <i className="i-Car-2"></i>
                      </div>
                      <div className="ul-pricing__title">
                        <h2 className="heading text-primary">Premium</h2>
                      </div>
                      <div className="ul-pricing__text text-mute">35gb</div>
                      <div className="ul-pricing__main-number">
                        <h3 className="heading display-3 text-primary t-font-boldest">
                          $500
                        </h3>
                      </div>
                      <div className="ul-pricing__list">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-lg btn-primary btn-rounded m-1"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </SimpleCard>

              <SimpleCard title="Full Width with Hover" className="mb-4">
                <div className="row pt-4">
                  <div className="col-lg-3 col-xl-3 m-0 p-0">
                    <div className="ul-pricing__table-2 ">
                      <div className="ul-pricing__header">
                        <div className="ul-pricing__image text-primary m-0">
                          <i className="i-Car-2"></i>
                        </div>
                        <div className="ul-pricing__main-number m-0">
                          <h1 className="heading text-primary t-font-boldest">
                            $0.00
                          </h1>
                        </div>
                        <div className="ul-pricing__month">
                          <small className="text-purple-100">per month</small>
                        </div>
                      </div>
                      <div className="ul-pricing__title">
                        <h2 className="heading text-primary">Free</h2>
                      </div>
                      <div className="ul-pricing__table-listing mb-4">
                        <ul>
                          <li className="t-font-bolder">Disk Space 250gb</li>
                          <li className="t-font-bolder">Bandwidth 250gb</li>
                          <li className="t-font-bolder">Databases</li>
                          <li className="text-mute">E-mail accounts NO</li>
                          <li className="text-mute">24h support NO</li>
                          <li className="text-mute">E-mail support NO</li>
                        </ul>
                      </div>

                      <button
                        type="button"
                        className="btn btn-lg btn-primary btn-rounded m-1"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xl-3 m-0 p-0">
                    <div className="ul-pricing__table-2 ">
                      <div className="ul-pricing__header">
                        <div className="ul-pricing__image text-warning m-0">
                          <i className="i-Bicycle"></i>
                        </div>
                        <div className="ul-pricing__main-number m-0">
                          <h1 className="heading text-warning t-font-boldest">
                            $10
                          </h1>
                        </div>
                        <div className="ul-pricing__month">
                          <small className="text-purple-100">per month</small>
                        </div>
                      </div>
                      <div className="ul-pricing__title">
                        <h2 className="heading text-warning">Basic</h2>
                      </div>
                      <div className="ul-pricing__table-listing mb-4">
                        <ul>
                          <li className="t-font-bolder">Disk Space 250gb</li>
                          <li className="t-font-bolder">Bandwidth 250gb</li>
                          <li className="t-font-bolder">Databases</li>
                          <li className="text-mute">E-mail accounts NO</li>
                          <li className="text-mute">24h support NO</li>
                          <li className="text-mute">E-mail support NO</li>
                        </ul>
                      </div>

                      <button
                        type="button"
                        className="btn btn-lg btn-warning btn-rounded m-1"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xl-3 m-0 p-0">
                    <div className="ul-pricing__table-2 ">
                      <div className="ul-pricing__header">
                        <div className="ul-pricing__image text-danger m-0">
                          <i className="i-Motorcycle"></i>
                        </div>
                        <div className="ul-pricing__main-number m-0">
                          <h1 className="heading text-danger t-font-boldest">
                            $250
                          </h1>
                        </div>
                        <div className="ul-pricing__month">
                          <small className="text-purple-100">per month</small>
                        </div>
                      </div>
                      <div className="ul-pricing__title">
                        <h2 className="heading text-danger">Standard</h2>
                      </div>
                      <div className="ul-pricing__table-listing mb-4">
                        <ul>
                          <li className="t-font-bolder">Disk Space 250gb</li>
                          <li className="t-font-bolder">Bandwidth 250gb</li>
                          <li className="t-font-bolder">Databases</li>
                          <li className="">
                            E-mail accounts
                            <span className="t-font-bold text-danger">Yes</span>
                          </li>
                          <li className="">
                            24h support
                            <span className="t-font-bold text-danger">Yes</span>
                          </li>
                          <li className="text-mute">E-mail support NO</li>
                        </ul>
                      </div>

                      <button
                        type="button"
                        className="btn btn-lg btn-danger btn-rounded m-1"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xl-3 m-0 p-0">
                    <div className="ul-pricing__table-2 border-right-0">
                      <div className="ul-pricing__header">
                        <div className="ul-pricing__image text-success m-0">
                          <i className="i-Plane-2"></i>
                        </div>
                        <div className="ul-pricing__main-number m-0">
                          <h1 className="heading text-success t-font-boldest">
                            $500
                          </h1>
                        </div>
                        <div className="ul-pricing__month">
                          <small className="text-purple-100">per month</small>
                        </div>
                      </div>
                      <div className="ul-pricing__title">
                        <h2 className="heading text-success">Premium</h2>
                      </div>
                      <div className="ul-pricing__table-listing mb-4">
                        <ul>
                          <li className="t-font-bolder">Disk Space 250gb</li>
                          <li className="t-font-bolder">Bandwidth 250gb</li>
                          <li className="t-font-bolder">Databases</li>
                          <li className="text-mute">E-mail accounts NO</li>
                          <li className="">
                            24h support
                            <span className="text-success">Yes</span>
                          </li>
                          <li className="text-mute">E-mail support NO</li>
                        </ul>
                      </div>

                      <button
                        type="button"
                        className="btn btn-lg btn-success btn-rounded m-1"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </SimpleCard>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PricingTable;
