import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { ProgressBar } from "react-bootstrap";

class AppProgressbar extends Component {
  state = {};
  variantList = ["primary", "success", "info", "warning", "danger"];

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Progress Bar" }
          ]}
        ></Breadcrumb>

        <div className="row mb-4">
          <div className="col-md-6 mb-4">
            <SimpleCard title="Basic Progress Bar">
              {[25, 50, 75, 100].map(value => (
                <ProgressBar
                  key={value}
                  now={value}
                  className="mb-3"
                ></ProgressBar>
              ))}
            </SimpleCard>
          </div>

          <div className="col-md-6">
            <SimpleCard title="Basic Progress Bar With Label">
              {[25, 50, 75, 100].map(value => (
                <ProgressBar
                  key={value}
                  now={value}
                  label={`${value}%`}
                  className="mb-3"
                ></ProgressBar>
              ))}
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-4">
            <SimpleCard title="Basic Progress Bar With diff. Background">
              {[10, 25, 50, 75, 100].map((value, i) => (
                <ProgressBar
                  key={value}
                  now={value}
                  variant={this.variantList[i]}
                  className="mb-3"
                ></ProgressBar>
              ))}
            </SimpleCard>
          </div>

          <div className="col-md-6">
            <SimpleCard title="Labeled Progress Bar With diff. background">
              {[10, 25, 50, 75, 100].map((value, i) => (
                <ProgressBar
                  key={value}
                  now={value}
                  label={`${value}%`}
                  variant={this.variantList[i]}
                  className="mb-3"
                ></ProgressBar>
              ))}
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-4">
            <SimpleCard title="Progress Bar With Multiple bars">
              <ProgressBar className="mb-3">
                <ProgressBar variant="" now={10} key={1} />
                <ProgressBar variant="success" now={25} key={2} />
                <ProgressBar variant="info" now={50} key={3} />
              </ProgressBar>
              <ProgressBar className="mb-3">
                <ProgressBar variant="" now={20} label="20%" key={1} />
                <ProgressBar variant="" now={35} label="35%" key={2} />
                <ProgressBar variant="danger" now={40} label="40%" key={3} />
              </ProgressBar>
              <ProgressBar className="mb-3">
                <ProgressBar variant="success" now={15} label="15%" key={1} />
                <ProgressBar variant="info" now={25} label="25%" key={2} />
                <ProgressBar variant="warning" now={30} label="30%" key={3} />
              </ProgressBar>
              <ProgressBar className="mb-3">
                <ProgressBar variant="warning" now={20} label="20%" key={1} />
                <ProgressBar variant="" now={20} label="20%" key={2} />
                <ProgressBar variant="danger" now={50} label="50%" key={3} />
              </ProgressBar>
              <ProgressBar className="mb-3">
                <ProgressBar
                  striped
                  variant="success"
                  now={15}
                  label="15%"
                  key={1}
                />
                <ProgressBar
                  striped
                  variant="info"
                  now={25}
                  label="25%"
                  key={2}
                />
                <ProgressBar
                  striped
                  variant="warning"
                  now={30}
                  label="30%"
                  key={3}
                />
              </ProgressBar>
            </SimpleCard>
          </div>

          <div className="col-md-6">
            <SimpleCard title="Striped Progress Bar">
              {[10, 25, 50, 75, 100].map((value, i) => (
                <ProgressBar
                  key={value}
                  now={value}
                  striped
                  label={`${value}%`}
                  variant={this.variantList[i]}
                  className="mb-3"
                ></ProgressBar>
              ))}
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12 mb-4">
            <SimpleCard title="Animated stripes Progress Bar">
              {[10, 25, 50, 75, 100].map((value, i) => (
                <ProgressBar
                  key={value}
                  now={value}
                  animated
                  striped
                  variant={this.variantList[i]}
                  className="mb-3"
                ></ProgressBar>
              ))}
            </SimpleCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AppProgressbar;
