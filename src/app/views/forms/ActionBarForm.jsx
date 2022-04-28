import React, { Component } from "react";
import { Breadcrumb } from "@gull";

class ActionBarForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Forms", path: "/forms" },
            { name: "Action Bar Form" }
          ]}
        ></Breadcrumb>

        <section className="basic-action-bar">
          <div className="">
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="card">
                  <div className="card-header bg-transparent">
                    <h3 className="card-title"> Default Action Bar</h3>
                  </div>
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
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your full name
                          </small>
                        </div>
                        <div className="form-group col-md-12">
                          <label
                            htmlFor="inputEmail4"
                            className="ul-form__label"
                          >
                            Email Address:
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            We'll never share your email with anyone else
                          </small>
                        </div>
                      </div>
                      <div className="custom-separator"></div>
                      <div className="card-title">Communication:</div>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Email</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>SMS</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Phone</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="card-footer bg-transparent">
                      <div className="mc-footer">
                        <div className="row">
                          <div className="col-lg-12">
                            <button
                              type="button"
                              className="btn  btn-primary m-1"
                            >
                              Submit
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary m-1"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="btn  btn-danger m-1 footer-delete-right"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div className="card">
                  <div className="card-header bg-transparent">
                    <h3 className="card-title"> No Layout</h3>
                  </div>
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
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your full name
                          </small>
                        </div>
                        <div className="form-group col-md-12">
                          <label
                            htmlFor="inputEmail4"
                            className="ul-form__label"
                          >
                            Email Address:
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            We'll never share your email with anyone else
                          </small>
                        </div>
                      </div>
                      <div className="card-title">Communication:</div>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Email</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>SMS</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Phone</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="card-footer bg-transparent">
                      <div className="mc-footer">
                        <div className="row">
                          <div className="col-lg-12">
                            <button
                              type="button"
                              className="btn  btn-primary m-1"
                            >
                              Submit
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary m-1"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="btn  btn-danger m-1 footer-delete-right"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div className="card">
                  <div className="card-header bg-transparent">
                    <h3 className="card-title"> Right Action Bar</h3>
                  </div>
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
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your full name
                          </small>
                        </div>
                        <div className="form-group col-md-12">
                          <label
                            htmlFor="inputEmail4"
                            className="ul-form__label"
                          >
                            Email Address:
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            We'll never share your email with anyone else
                          </small>
                        </div>
                      </div>
                      <div className="custom-separator"></div>
                      <div className="card-title">Communication:</div>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Email</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>SMS</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Phone</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="card-footer bg-transparent">
                      <div className="mc-footer">
                        <div className="row">
                          <div className="col-lg-12 text-right">
                            <button
                              type="button"
                              className="btn  btn-primary m-1"
                            >
                              Submit
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary m-1"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div className="card">
                  <div className="card-header bg-transparent">
                    <h3 className="card-title"> Solid Bar</h3>
                  </div>
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
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your full name
                          </small>
                        </div>
                        <div className="form-group col-md-12">
                          <label
                            htmlFor="inputEmail4"
                            className="ul-form__label"
                          >
                            Email Address:
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            We'll never share your email with anyone else
                          </small>
                        </div>
                      </div>
                      <div className="custom-separator"></div>
                      <div className="card-title">Communication:</div>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Email</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>SMS</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Phone</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="card-footer">
                      <div className="mc-footer">
                        <div className="row">
                          <div className="col-lg-12 text-right">
                            <button
                              type="button"
                              className="btn  btn-primary m-1"
                            >
                              Submit
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary m-1"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div className="card">
                  <div className="card-header bg-transparent">
                    <h3 className="card-title"> Multiple Buttons</h3>
                  </div>
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
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your full name
                          </small>
                        </div>
                        <div className="form-group col-md-12">
                          <label
                            htmlFor="inputEmail4"
                            className="ul-form__label"
                          >
                            Email Address:
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            We'll never share your email with anyone else
                          </small>
                        </div>
                      </div>
                      <div className="custom-separator"></div>
                      <div className="card-title">Communication:</div>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Email</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>SMS</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Phone</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="card-footer bg-transparent">
                      <div className="mc-footer">
                        <div className="row">
                          <div className="col-lg-12">
                            <button
                              type="button"
                              className="btn  btn-primary m-1"
                            >
                              Submit
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary m-1"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="btn  btn-danger m-1 footer-delete-right"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div className="card">
                  <div className="card-header bg-transparent">
                    <h3 className="card-title"> Top & Bottom Actions Bars</h3>
                  </div>
                  <div className="card-footer">
                    <div className="top-action-bar">
                      <div className="row">
                        <div className="col-lg-12 text-right">
                          <button
                            type="button"
                            className="btn  btn-primary m-1"
                          >
                            Submit
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary m-1"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your full name
                          </small>
                        </div>
                        <div className="form-group col-md-12">
                          <label
                            htmlFor="inputEmail4"
                            className="ul-form__label"
                          >
                            Email Address:
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            We'll never share your email with anyone else
                          </small>
                        </div>
                      </div>
                      <div className="custom-separator"></div>
                      <div className="card-title">Communication:</div>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Email</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>SMS</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Phone</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="card-footer">
                      <div className="mc-footer">
                        <div className="row">
                          <div className="col-lg-12 text-right">
                            <button
                              type="button"
                              className="btn  btn-primary m-1"
                            >
                              Submit
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary m-1"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div className="card">
                  <div className="card-header bg-transparent">
                    <h3 className="card-title"> Default Action Bar</h3>
                  </div>
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
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your full name
                          </small>
                        </div>
                        <div className="form-group col-md-12">
                          <label
                            htmlFor="inputEmail4"
                            className="ul-form__label"
                          >
                            Email Address:
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            We'll never share your email with anyone else
                          </small>
                        </div>
                      </div>
                      <div className="custom-separator"></div>
                      <div className="card-title">Communication:</div>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Email</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>SMS</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="checkbox checkbox-primary">
                        <input type="checkbox" />
                        <span>Phone</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="card-footer bg-transparent">
                      <div className="mc-footer">
                        <div className="row">
                          <div className="col-lg-12 text-right">
                            <button
                              type="submit"
                              className="btn  btn-primary m-1"
                            >
                              Submit
                            </button>
                            <span>or</span>
                            <button
                              type="button"
                              className="btn  btn-outline-danger ml-1"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <form action="">
                  <div className="card ul-card__margin-25">
                    <div className="card-header bg-transparent">
                      <h3 className="card-title"> Horizontal Form Layout</h3>
                    </div>

                    <div className="card-body">
                      <div className="form-group row">
                        <label
                          htmlFor="staticEmail"
                          className="action-bar-horizontal-label col-lg-4 col-form-label "
                        >
                          Full Name:
                        </label>
                        <div className="col-lg-6 mb-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your full name
                          </small>
                        </div>
                        <label
                          htmlFor="staticEmail"
                          className="action-bar-horizontal-label col-lg-4 col-form-label "
                        >
                          Email
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your full name
                          </small>
                        </div>
                      </div>

                      <div className="form-group row mt-4">
                        <label
                          htmlFor="staticEmail"
                          className="action-bar-horizontal-label col-lg-4 col-form-label"
                        >
                          Communication:
                        </label>
                        <div className="col-lg-6 d-inline-flex align-self-center">
                          <label className="checkbox checkbox-primary mr-2">
                            <input type="checkbox" />
                            <span>Email</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="checkbox checkbox-primary mr-2">
                            <input type="checkbox" />
                            <span>SMS</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="checkbox checkbox-primary mr-2">
                            <input type="checkbox" />
                            <span>Phone</span>
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="mc-footer">
                        <div className="row text-right">
                          <div className="col-lg-4"></div>
                          <div className="col-lg-6 text-left">
                            <button
                              type="button"
                              className="btn btn-primary m-1"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary m-1"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ActionBarForm;
