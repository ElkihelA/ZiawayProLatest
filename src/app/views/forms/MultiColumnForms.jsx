import React, { Component } from "react";
import { Breadcrumb } from "@gull";

class MultiColumnForms extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Forms", path: "/forms" },
            { name: "Multi Column Forms" }
          ]}
        ></Breadcrumb>
        <div className="2-columns-form-layout">
          <div className="">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header bg-transparent">
                    <h3 className="card-title"> 2 Columns Form Layout</h3>
                  </div>
                  <form action="">
                    <div className="card-body">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputEmail1"
                            className="ul-form__label"
                          >
                            Full Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail1"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your full name
                          </small>
                        </div>
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputEmail2"
                            className="ul-form__label"
                          >
                            Contact Number:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail2"
                            placeholder="Enter Contact Number"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your contact number
                          </small>
                        </div>
                      </div>

                      <div className="custom-separator"></div>

                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputEmail3"
                            className="ul-form__label"
                          >
                            Address:
                          </label>
                          <div className="input-right-icon">
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail3"
                              placeholder="Enter your address"
                            />
                            <span className="span-right-input-icon">
                              <i className="ul-form__icon i-Map-Marker"></i>
                            </span>
                          </div>

                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your address
                          </small>
                        </div>
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="inputEmail4"
                            className="ul-form__label"
                          >
                            Postcode:
                          </label>
                          <div className="input-right-icon">
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail4"
                              placeholder="Enter your postcode"
                            />
                            <span className="span-right-input-icon">
                              <i className="ul-form__icon i-New-Mail"></i>
                            </span>
                          </div>

                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your postcode
                          </small>
                        </div>
                      </div>

                      <div className="custom-separator"></div>

                      <div className="form-row">
                        <div className="form-group col-md-6 ">
                          <label
                            htmlFor="inputEmail5"
                            className="ul-form__label"
                          >
                            User Group:
                          </label>
                          <div className="ul-form__radio-inline">
                            <label className=" ul-radio__position radio radio-primary form-check-inline">
                              <input type="radio" name="radio" />
                              <span className="ul-form__radio-font">
                                Sales Person
                              </span>
                              <span className="checkmark"></span>
                            </label>
                            <label className="ul-radio__position radio radio-primary">
                              <input type="radio" name="radio" />
                              <span className="ul-form__radio-font">
                                Customer
                              </span>
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please select user group
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="mc-footer">
                        <div className="row">
                          <div className="col-lg-12">
                            <button
                              type="button"
                              className="btn  btn-primary m-1"
                            >
                              Save
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

                <form action="">
                  <div className="card ul-card__margin-25">
                    <div className="card-header bg-transparent">
                      <h3 className="card-title">
                        
                        2 Columns Horizontal Form Layout
                      </h3>
                    </div>

                    <div className="card-body">
                      <div className="form-group row">
                        <label
                          htmlFor="staticEmail6"
                          className="ul-form__label ul-form--margin col-lg-3 col-form-label "
                        >
                          Full Name:
                        </label>
                        <div className="col-lg-2">
                          <input
                            type="text"
                            className="form-control"
                            id="staticEmail6"
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
                          htmlFor="staticEmail7"
                          className="ul-form__label ul-form--margin col-lg-3 col-form-label "
                        >
                          Contact Number:
                        </label>
                        <div className="col-lg-2">
                          <input
                            type="text"
                            className="form-control"
                            id="staticEmail7"
                            placeholder="Enter Contact Number"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text "
                          >
                            Please enter your Contact Number
                          </small>
                        </div>
                      </div>

                      <div className="custom-separator"></div>

                      <div className="form-group row">
                        <label
                          htmlFor="staticEmail8"
                          className="ul-form__label ul-form--margin col-lg-3 col-form-label "
                        >
                          Address:
                        </label>
                        <div className="col-lg-2">
                          <div className="input-right-icon">
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail8"
                              placeholder="Enter your address"
                            />
                            <span className="span-right-input-icon">
                              <i className="ul-form__icon i-Map-Marker"></i>
                            </span>
                          </div>

                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your address
                          </small>
                        </div>

                        <label
                          htmlFor="staticEmail9"
                          className="ul-form__label ul-form--margin col-lg-3 col-form-label "
                        >
                          Postcode:
                        </label>
                        <div className="col-lg-2">
                          <div className="input-right-icon">
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail9"
                              placeholder="Enter your postcode"
                            />
                            <span className="span-right-input-icon">
                              <i className="ul-form__icon i-New-Mail"></i>
                            </span>
                          </div>

                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your postcode
                          </small>
                        </div>
                      </div>

                      <div className="custom-separator"></div>
                      <div className="form-group row">
                        <label
                          htmlFor="staticEmail10"
                          className="ul-form__label ul-form--margin col-lg-3 col-form-label "
                        >
                          Group:
                        </label>
                        <div className="col-lg-2">
                          <div className="ul-form__radio-inline">
                            <label className=" ul-radio__position radio radio-primary form-check-inline">
                              <input type="radio" name="radio" />
                              <span className="ul-form__radio-font">
                                Sales Person
                              </span>
                              <span className="checkmark"></span>
                            </label>
                            <label className="ul-radio__position radio radio-primary">
                              <input type="radio" name="radio" />
                              <span className="ul-form__radio-font">
                                Customer
                              </span>
                              <span className="checkmark"></span>
                            </label>
                          </div>

                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your address
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="mc-footer">
                        <div className="row text-right">
                          <div className="col-lg-4 ">
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

                <div className="card">
                  <div className="card-header bg-transparent">
                    <h3 className="card-title"> 3 Columns Form Layout</h3>
                  </div>
                  <form action="">
                    <div className="card-body">
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label
                            htmlFor="inputtext11"
                            className="ul-form__label"
                          >
                            Full Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputtext11"
                            placeholder="Enter full name"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your full name
                          </small>
                        </div>
                        <div className="form-group col-md-4">
                          <label
                            htmlFor="inputEmail12"
                            className="ul-form__label"
                          >
                            Contact Number:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail12"
                            placeholder="Enter Contact Number"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your contact number
                          </small>
                        </div>

                        <div className="form-group col-md-4">
                          <label
                            htmlFor="inputEmail13"
                            className="ul-form__label"
                          >
                            Username:
                          </label>
                          <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text bg-transparent">
                                <i className="i-Checked-User"></i>
                              </div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Username"
                            />
                          </div>
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your username
                          </small>
                        </div>
                      </div>

                      <div className="custom-separator"></div>

                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label
                            htmlFor="inputtext14"
                            className="ul-form__label"
                          >
                            Contact:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputtext14"
                            placeholder="Enter contact number"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your contact
                          </small>
                        </div>
                        <div className="form-group col-md-4">
                          <label
                            htmlFor="inputEmail15"
                            className="ul-form__label"
                          >
                            Fax:
                          </label>
                          <div className="input-right-icon">
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail15"
                              placeholder="Fax Number"
                            />
                            <span className="span-right-input-icon">
                              <i className="ul-form__icon i-Information"></i>
                            </span>
                          </div>

                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your Fax
                          </small>
                        </div>

                        <div className="form-group col-md-4">
                          <label
                            htmlFor="inputEmail16"
                            className="ul-form__label"
                          >
                            Address:
                          </label>
                          <div className="input-right-icon">
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail16"
                              placeholder="Enter your address"
                            />
                            <span className="span-right-input-icon">
                              <i className="ul-form__icon i-Map-Marker"></i>
                            </span>
                          </div>

                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your address
                          </small>
                        </div>
                      </div>

                      <div className="custom-separator"></div>

                      <div className="form-row">
                        <div className="form-group col-md-4 mr-2">
                          <label
                            htmlFor="inputEmail17"
                            className="ul-form__label"
                          >
                            Postcode:
                          </label>
                          <div className="input-right-icon">
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail17"
                              placeholder="Enter your postcode"
                            />
                            <span className="span-right-input-icon">
                              <i className="ul-form__icon i-New-Mail"></i>
                            </span>
                          </div>

                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your postcode
                          </small>
                        </div>
                        <div className="form-group col-md-4 ">
                          <label
                            htmlFor="inputEmail18"
                            className="ul-form__label"
                          >
                            User Group:
                          </label>
                          <div className="ul-form__radio-inline">
                            <label className=" ul-radio__position radio radio-primary form-check-inline">
                              <input type="radio" name="radio" />
                              <span className="ul-form__radio-font">
                                Sales Person
                              </span>
                              <span className="checkmark"></span>
                            </label>
                            <label className="ul-radio__position radio radio-primary">
                              <input type="radio" name="radio" />
                              <span className="ul-form__radio-font">
                                Customer
                              </span>
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please select user group
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="mc-footer">
                        <div className="row">
                          <div className="col-lg-12 text-center">
                            <button
                              type="button"
                              className="btn  btn-primary m-1"
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
                  </form>
                </div>
                <form action="">
                  <div className="card ul-card__margin-25">
                    <div className="card-header bg-transparent">
                      <h3 className="card-title">
                        
                        3 Columns Horizontal Form Layout
                      </h3>
                    </div>

                    <div className="card-body">
                      <div className="form-group row">
                        <label
                          htmlFor="staticEmail19"
                          className="ul-form__label ul-form--margin col-lg-1   col-form-label "
                        >
                          Full Name:
                        </label>
                        <div className="col-lg-3 ">
                          <input
                            type="text"
                            className="form-control"
                            id="staticEmail19"
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
                          htmlFor="staticEmail20"
                          className="ul-form__label ul-form--margin col-lg-1 col-form-label "
                        >
                          Email:
                        </label>
                        <div className="col-lg-3">
                          <input
                            type="text"
                            className="form-control"
                            id="staticEmail20"
                            placeholder="Enter Your Email"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your Email
                          </small>
                        </div>

                        <label
                          htmlFor="staticEmail21"
                          className="ul-form__label ul-form--margin col-lg-1 col-form-label "
                        >
                          Username:
                        </label>
                        <div className="col-lg-3">
                          <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text bg-transparent">
                                <i className="i-Checked-User"></i>
                              </div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Username"
                            />
                          </div>
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your Email
                          </small>
                        </div>
                      </div>

                      <div className="custom-separator"></div>

                      <div className="form-group row">
                        <label
                          htmlFor="staticEmail22"
                          className="ul-form__label ul-form--margin col-lg-1 col-form-label "
                        >
                          Contact:
                        </label>
                        <div className="col-lg-3">
                          <input
                            type="text"
                            className="form-control"
                            id="staticEmail22"
                            placeholder="Enter contact number"
                          />
                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your contact number
                          </small>
                        </div>

                        <label
                          htmlFor="staticEmail23"
                          className="ul-form__label ul-form--margin col-lg-1 col-form-label "
                        >
                          Fax:
                        </label>
                        <div className="col-lg-3">
                          <div className="input-right-icon">
                            <input
                              type="text"
                              className="form-control"
                              id="staticEmail23"
                              placeholder="Enter your fax"
                            />
                            <span className="span-right-input-icon">
                              <i className="ul-form__icon i-Information"></i>
                            </span>
                          </div>

                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your fax
                          </small>
                        </div>

                        <label
                          htmlFor="staticEmail24"
                          className="ul-form__label ul-form--margin col-lg-1 col-form-label "
                        >
                          Address:
                        </label>
                        <div className="col-lg-3">
                          <div className="input-right-icon">
                            <input
                              type="text"
                              className="form-control"
                              id="staticEmail24"
                              placeholder="Enter your address"
                            />
                            <span className="span-right-input-icon">
                              <i className="ul-form__icon i-Map-Marker"></i>
                            </span>
                          </div>

                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your address
                          </small>
                        </div>
                      </div>

                      <div className="custom-separator"></div>
                      <div className="form-group row">
                        <label
                          htmlFor="staticEmail25"
                          className="ul-form__label ul-form--margin col-lg-1 col-form-label "
                        >
                          Postcode:
                        </label>
                        <div className="col-lg-2">
                          <div className="input-right-icon">
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail25"
                              placeholder="Enter your postcode"
                            />
                            <span className="span-right-input-icon">
                              <i className="ul-form__icon i-New-Mail"></i>
                            </span>
                          </div>

                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your postcode
                          </small>
                        </div>

                        <label
                          htmlFor="staticEmail26"
                          className="ul-form__label ul-form--margin col-lg-1 col-form-label "
                        >
                          User Group:
                        </label>
                        <div className="col-lg-2">
                          <div className="ul-form__radio-inline">
                            <label className=" ul-radio__position radio radio-primary form-check-inline">
                              <input type="radio" name="radio" />
                              <span className="ul-form__radio-font">
                                Sales Person
                              </span>
                              <span className="checkmark"></span>
                            </label>
                            <label className="ul-radio__position radio radio-primary">
                              <input type="radio" name="radio" />
                              <span className="ul-form__radio-font">
                                Customer
                              </span>
                              <span className="checkmark"></span>
                            </label>
                          </div>

                          <small
                            id="passwordHelpBlock"
                            className="ul-form__text form-text "
                          >
                            Please enter your address
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="mc-footer">
                        <div className="row text-center">
                          <div className="col-lg-12 ">
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
        </div>
      </div>
    );
  }
}

export default MultiColumnForms;
