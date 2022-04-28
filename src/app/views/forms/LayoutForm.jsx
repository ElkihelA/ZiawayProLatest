import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Dropdown } from "react-bootstrap";

class LayoutForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Forms", path: "/forms" },
            { name: "Layout Form" }
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h4>Horizontal Layout</h4>
            <p>
              A form control layout using row to create horizontal alignment.
            </p>
            <div className="card mb-5">
              <div className="card-body">
                <div className="row row-xs">
                  <div className="col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="col-md-5 mt-3 mt-md-0">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="col-md-2 mt-3 mt-md-0">
                    <button className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top mb-5"></div>
        <div className="row">
          <div className="col-md-6">
            <h4>Verticle Layout</h4>
            <p>
              A form control layout using flex to create verticle alignment.
            </p>
            <div className="card mb-5">
              <div className="card-body">
                <div className="d-flex flex-column">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button className="btn btn-primary pd-x-20">Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top mb-5"></div>

        <div className="row">
          <div className="col-md-6">
            <h4>Left Label Alignment</h4>
            <p>A form control layout using row with left label alignment.</p>
            <div className="card mb-5">
              <div className="card-body">
                <form>
                  <div className="form-group row">
                    <label
                      htmlFor="inputEmail3"
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
                      htmlFor="inputPassword3"
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
                      <div className="col-form-label col-sm-2 pt-0">Radios</div>
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
                            htmlFor="gridRadios1"
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
                            htmlFor="gridRadios2"
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
                            disabled
                          />
                          <label
                            className="form-check-label ml-3"
                            htmlFor="gridRadios3"
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
                          htmlFor="gridCheck1"
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
              </div>
            </div>
          </div>
        </div>
        <div className="border-top mb-5"></div>

        <div className="row">
          <div className="col-md-6">
            <h4>Form Inside Dropdown</h4>
            <p>A form group layout inside dropdown</p>
            <div className="btn-group">
              <Dropdown>
                <Dropdown.Toggle>Download File</Dropdown.Toggle>
                <Dropdown.Menu
                  className="dropdown-menu bg-transparent shadow-none p-0 m-0"
                  style={{ width: "320px" }}
                >
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title mb-1">
                        Please Sign In First
                      </div>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <div className="d-flex flex-column">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your username"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                          />
                        </div>
                        <button className="btn btn-primary pd-x-20">
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutForm;
