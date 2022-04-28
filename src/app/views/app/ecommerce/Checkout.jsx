import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

class Checkout extends Component {
  state = {};

  customTabHeader = (title, icon) => (
    <div className="d-flex align-items-center">
      <span className="mr-2">
        <i className={icon}></i>
      </span>
      <span>{title}</span>
    </div>
  );

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Ecommerce", path: "/ecommerce" },
            { name: "Checkout" }
          ]}
        ></Breadcrumb>

        <section className="chekout-page">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">Product Cart</div>
                  <span className="text-muted">Gull Modern Cart</span>

                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <td scope="row">
                            <img
                              className="profile-picture avatar-sm mb-2 img-fluid"
                              src="/assets/images/faces/1.jpg"
                              alt=""
                            />
                            <div className="ul-product-cart__detail d-inline-block align-middle ">
                              <Link to="/">
                                <h6 className="heading">Nike Air Jordan</h6>
                              </Link>
                              <span className="text-mute">
                                size-14 mode:664
                              </span>
                            </div>
                          </td>
                          <td>$2,000</td>
                          <td>4</td>
                          <td>$8,000</td>
                          <td>
                            <Link to="/">
                              <i className="i-Close-Window text-19 text-danger font-weight-700"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr className="">
                          <td scope="row">
                            <img
                              className="profile-picture avatar-sm mb-2 img-fluid"
                              src="/assets/images/faces/1.jpg"
                              alt=""
                            />
                            <div className="ul-product-cart__detail d-inline-block align-middle ">
                              <Link to="/">
                                <h6 className="heading">Nike Air Jordan</h6>
                              </Link>
                              <span className="text-mute">
                                size-14 mode:664
                              </span>
                            </div>
                          </td>
                          <td>$2,000</td>
                          <td>4</td>
                          <td>$8,000</td>
                          <td>
                            <Link to="/">
                              <i className="i-Close-Window text-19 text-danger font-weight-700"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr className="">
                          <td scope="row">
                            <img
                              className="profile-picture avatar-sm mb-2 img-fluid"
                              src="/assets/images/faces/1.jpg"
                              alt=""
                            />
                            <div className="ul-product-cart__detail d-inline-block align-middle ">
                              <Link to="/">
                                <h6 className="heading">Nike Air Jordan</h6>
                              </Link>
                              <span className="text-mute">
                                size-14 mode:664
                              </span>
                            </div>
                          </td>
                          <td>$2,000</td>
                          <td>4</td>
                          <td>$8,000</td>
                          <td>
                            <Link to="/">
                              <i className="i-Close-Window text-19 text-danger font-weight-700"></i>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="row ">
                    <div className="col-lg-12 mt-5">
                      <div className="ul-product-cart__invoice">
                        <div className="card-title">
                          <h4 className="heading text-primary">
                            Total Payment
                          </h4>
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <th scope="row" className="text-16">
                                Subtotal
                              </th>
                              <td className="text-16 text-success font-weight-700">
                                $5,000
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="text-16">
                                Shipping
                              </th>
                              <td>
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <div className="">
                                      <label
                                        className="radio radio-primary"
                                        checked=""
                                      >
                                        <input
                                          type="radio"
                                          name="radio"
                                          value="0"
                                        />
                                        <span>Shipping Charge : $15.00</span>
                                        <span className="checkmark"></span>
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="">
                                      <label className="radio radio-primary">
                                        <input
                                          type="radio"
                                          name="radio"
                                          value="0"
                                        />
                                        <span>Shipping Charge : $15.00</span>
                                        <span className="checkmark"></span>
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <Link
                                      to="/"
                                      className="text-dark font-weight-bold"
                                    >
                                      Change Address
                                    </Link>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="text-primary text-16">
                                Total:
                              </th>
                              <td className="font-weight-700 text-16">
                                $5,015
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <form action="">
                    <div className="card-body">
                      <div className="card-title">Delivery Address</div>

                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputtext11" className="ul-form__label">
                            First Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputtext11"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputEmail12" className="ul-form__label">
                            Last Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail12"
                          />
                        </div>
                      </div>

                      <div className="custom-separator"></div>

                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputtext14" className="ul-form__label">
                            Delivery Address:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputtext14"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputEmail15" className="ul-form__label">
                            Address:
                          </label>
                          <div className="input-right-icon">
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail15"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="custom-separator"></div>

                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label for="inputtext14" className="ul-form__label">
                            City:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputtext14"
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label for="inputEmail15" className="ul-form__label">
                            State:
                          </label>
                          <select className="form-control" id="sel1">
                            <option>Select</option>
                            <option>California</option>
                            <option>Ukraine</option>
                            <option>UK</option>
                            <option>Finland</option>
                          </select>
                        </div>

                        <div className="form-group col-md-4">
                          <label for="inputEmail16" className="ul-form__label">
                            Country:
                          </label>
                          <select className="form-control" id="sel1">
                            <option>Select</option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>Finland</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-body">
                  <div className="card-title">Billing Details</div>
                  <Tabs defaultActiveKey="card">
                    <Tab
                      eventKey="card"
                      title={this.customTabHeader(
                        "Credit Card",
                        "i-Credit-Card"
                      )}
                    >
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputtext11" className="ul-form__label">
                            Card Number:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputtext11"
                            value="card number"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputEmail12" className="ul-form__label">
                            Full Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail12"
                            value="full name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputtext11" className="ul-form__label">
                            Ex Date:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputtext11"
                            value="dd/mm/yy"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputEmail12" className="ul-form__label">
                            CCV:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail12"
                            value="CVC"
                          />
                        </div>
                      </div>
                    </Tab>
                    <Tab
                      eventKey="paypal"
                      title={this.customTabHeader("Paypal", "i-Money-2")}
                    >
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputtext11" className="ul-form__label">
                            Card Number:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputtext11"
                            value="card number"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputEmail12" className="ul-form__label">
                            Full Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail12"
                            value="full name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputtext11" className="ul-form__label">
                            Ex Date:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputtext11"
                            value="dd/mm/yy"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputEmail12" className="ul-form__label">
                            CCV:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail12"
                            value="CVC"
                          />
                        </div>
                      </div>
                    </Tab>
                    <Tab
                      eventKey="bitcoin"
                      title={this.customTabHeader("Bitcoin", "i-Bitcoin")}
                    >
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputtext11" className="ul-form__label">
                            Card Number:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputtext11"
                            value="card number"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputEmail12" className="ul-form__label">
                            Full Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail12"
                            value="full name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputtext11" className="ul-form__label">
                            Ex Date:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputtext11"
                            value="dd/mm/yy"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputEmail12" className="ul-form__label">
                            CCV:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail12"
                            value="CVC"
                          />
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
                <div className="card-footer">
                  <div className="row text-right">
                    <div className="col-lg-12 ">
                      <button type="button" className="btn btn-success m-1">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Checkout;
