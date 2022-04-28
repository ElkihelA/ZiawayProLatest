import React from "react";
import { Breadcrumb } from "@gull";
import { ProgressBar } from "react-bootstrap";
import Echart1 from "./Echart1";
import Echart2 from "./Echart2";
import Echart3 from "./Echart3";
import Echart4 from "./Echart4";
import Echart5 from "./Echart5";
import Echart6 from "./Echart6";
import Echart7 from "./Echart7";
import Echart8 from "./Echart8";
import Echart9 from "./Echart9";
import Echart10 from "./Echart10";

const CardMetrics = () => {
  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "UI Kits", path: "/uikits" },
          { name: "Card Metrics" }
        ]}
      ></Breadcrumb>

      <div className="mb-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-3">Server status region 1</h6>
                <p className="text-20 text-success line-height-1 mb-3">
                  <i className="i-Arrow-Up-in-Circle"></i> Up
                </p>
                <small className="text-muted">Last down 4 days ago</small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-3">Server status region 2</h6>
                <p className="text-20 text-success line-height-1 mb-3">
                  <i className="i-Arrow-Up-in-Circle"></i> Up
                </p>
                <small className="text-muted">Last down 8 days ago</small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-3">Server status region 3</h6>
                <p className="text-20 text-danger line-height-1 mb-3">
                  <i className="i-Arrow-Down-in-Circle"></i> Down
                </p>
                <small className="text-muted">Last down 22 days ago</small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-3">Server status region 4</h6>
                <p className="text-20 text-danger line-height-1 mb-3">
                  <i className="i-Arrow-Down-in-Circle"></i> Down
                </p>
                <small className="text-muted">Last down 2 days ago</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-1">Taffic in last 24h</h6>
                <p className="text-22 text-success font-weight-light mb-1">
                  13000
                </p>
                <Echart1 height="65px"></Echart1>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-1">Taffic in last week</h6>
                <p className="text-22 text-danger font-weight-light mb-1">
                  65058
                </p>
                <Echart2 height="65px"></Echart2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-1">Taffic in last month</h6>
                <p className="text-22 text-success font-weight-light mb-1">
                  165058
                </p>
                <Echart3 height="65px"></Echart3>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-1">Taffic in last 3 months</h6>
                <p className="text-22 text-danger font-weight-light mb-1">
                  1065058
                </p>
                <Echart4 height="65px"></Echart4>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-2 text-muted">Storage Usage</h6>
                <p className="mb-1 text-22 font-weight-light">50%</p>
                <ProgressBar
                  variant="success"
                  now={50}
                  style={{ height: "4px" }}
                ></ProgressBar>
                <small className="text-muted">
                  Most data used in last 3 days
                </small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-2 text-muted">Bandwith Usage</h6>
                <p className="mb-1 text-22 font-weight-light">90%</p>
                <ProgressBar
                  variant="danger"
                  now={90}
                  style={{ height: "4px" }}
                ></ProgressBar>
                <small className="text-muted">
                  Most data used in last 7 days
                </small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-2 text-muted">Data Usage</h6>
                <p className="mb-1 text-22 font-weight-light">60%</p>
                <ProgressBar
                  variant="warning"
                  now={60}
                  style={{ height: "4px" }}
                ></ProgressBar>
                <small className="text-muted">
                  Most data used in last 5 days
                </small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-2 text-muted">Data Usage</h6>
                <p className="mb-1 text-22 font-weight-light">60%</p>
                <ProgressBar
                  variant="info"
                  now={60}
                  style={{ height: "4px" }}
                ></ProgressBar>
                <small className="text-muted">
                  Most data used in last 4 days
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-0 text-muted">Registration/Subscription</h6>
                <p className="text-22 font-weight-light mb-1">20/80</p>
                <Echart5 height="140px"></Echart5>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-0 text-muted">Project Running/Completed</h6>
                <p className="text-22 font-weight-light mb-1">40/60</p>
                <Echart6 height="140px"></Echart6>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-0 text-muted">Registration/Subscription</h6>
                <p className="text-22 font-weight-light mb-1">20/80</p>
                <Echart7 height="140px"></Echart7>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-0 text-muted">Project Running/Completed</h6>
                <p className="text-22 font-weight-light mb-1">40/60</p>
                <Echart8 height="140px"></Echart8>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-2 text-muted">Project Completion Rate</h6>
                <p className="text-22 font-weight-light mb-1">
                  <i className="i-Up text-success"></i> 15%
                </p>
                <Echart9 height="60px"></Echart9>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-2 text-muted">Project Completion Rate</h6>
                <p className="text-22 font-weight-light mb-1">
                  <i className="i-Down text-danger"></i> 15%
                </p>
                <Echart10 height="60px"></Echart10>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMetrics;
