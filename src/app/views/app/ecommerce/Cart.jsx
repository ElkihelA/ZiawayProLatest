import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Link } from "react-router-dom";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Ecommerce", path: "/ecommerce" },
            { name: "Cart" }
          ]}
        ></Breadcrumb>

        <section className="product-cart">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">Product Cart</div>

                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">SL.</th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <img
                              className="profile-picture avatar-sm mb-2 img-fluid"
                              src="/assets/images/faces/1.jpg"
                              alt=""
                            />
                            <div className="ul-product-cart__detail d-inline-block align-middle ml-1">
                              <Link to="/">
                                <h6 className="heading">Nike Air Jordan</h6>
                              </Link>
                              <span className="text-mute">
                                size-14 mode:664
                              </span>
                            </div>
                          </td>
                          <td>$2,000</td>
                          <td>
                            <input
                              className="form-control w-25"
                              type="number"
                              defaultValue="4"
                              id=""
                            />
                          </td>
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

                  <div className="row justify-content-center">
                    <div className="col-lg-6 mt-5">
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
                                        checked
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
                        <div className="ul-product-cart__button text-right">
                          <button
                            type="button"
                            className="btn btn-primary ripple m-1"
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
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

export default Cart;
