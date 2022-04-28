import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Button } from "react-bootstrap";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

class AppToastr extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Extra Kits", path: "/extra-kits" },
            { name: "Toastr" }
          ]}
        ></Breadcrumb>
        <h3 className="card-title">Types</h3>
        <div className="row mb-4">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <Button
                  variant="outline-success"
                  className="btn-block"
                  onClick={() => {
                    NotificationManager.success(
                      "success message",
                      "Success Title"
                    );
                  }}
                >
                  success toaster
                </Button>
                <Button
                  variant="outline-info"
                  className="btn-block"
                  onClick={() => {
                    NotificationManager.info("info message", "Info Title");
                  }}
                >
                  info toaster
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <Button
                  variant="outline-warning"
                  className="btn-block"
                  onClick={() => {
                    NotificationManager.warning(
                      "warning message",
                      "warning Title"
                    );
                  }}
                >
                  warning toaster
                </Button>
                <Button
                  variant="outline-danger"
                  className="btn-block"
                  onClick={() => {
                    NotificationManager.error("danger message", "danger Title");
                  }}
                >
                  danger toaster
                </Button>
              </div>
            </div>
          </div>
        </div>

        <h3 className="card-title">Toastr with timeout</h3>
        <div className="row mb-4">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <Button
                  variant="outline-success"
                  className="btn-block"
                  onClick={() => {
                    NotificationManager.success(
                      "success message",
                      "Success Title",
                      10000
                    );
                  }}
                >
                  success toaster
                </Button>
                <Button
                  variant="outline-info"
                  className="btn-block"
                  onClick={() => {
                    NotificationManager.info(
                      "info message",
                      "Info Title",
                      10000
                    );
                  }}
                >
                  info toaster
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <Button
                  variant="outline-warning"
                  className="btn-block"
                  onClick={() => {
                    NotificationManager.warning(
                      "warning message",
                      "warning Title",
                      10000
                    );
                  }}
                >
                  warning toaster
                </Button>
                <Button
                  variant="outline-danger"
                  className="btn-block"
                  onClick={() => {
                    NotificationManager.error(
                      "danger message",
                      "danger Title",
                      10000
                    );
                  }}
                >
                  danger toaster
                </Button>
              </div>
            </div>
          </div>
        </div>

        <h3 className="card-title">Toastr with priority</h3>
        <div className="row mb-4">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <Button
                  variant="outline-success"
                  className="btn-block"
                  onClick={() => {
                    NotificationManager.success(
                      "success message",
                      "Success Title",
                      5000,
                      () => {},
                      4
                    );
                  }}
                >
                  success toaster
                </Button>
                <Button
                  variant="outline-info"
                  className="btn-block"
                  onClick={() => {
                    NotificationManager.info(
                      "info message",
                      "Info Title",
                      5000,
                      () => {},
                      3
                    );
                  }}
                >
                  info toaster
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <Button
                  variant="outline-warning"
                  className="btn-block"
                  onClick={() => {
                    NotificationManager.warning(
                      "warning message",
                      "warning Title",
                      5000,
                      () => {},
                      2
                    );
                  }}
                >
                  warning toaster
                </Button>
                <Button
                  variant="outline-danger"
                  className="btn-block"
                  onClick={() => {
                    NotificationManager.error(
                      "danger message",
                      "danger Title",
                      5000,
                      () => {},
                      1
                    );
                  }}
                >
                  danger toaster
                </Button>
              </div>
            </div>
          </div>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

export default AppToastr;
