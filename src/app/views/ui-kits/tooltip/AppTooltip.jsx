import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

class AppTooltip extends Component {
  state = {};

  variantList = ["primary", "success", "info", "warning"];

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Tooltip" }
          ]}
        ></Breadcrumb>

        <div className="row mb-4">
          <div className="col-md-12 mb-4">
            <SimpleCard title="Basic Tooltips">
              <p className="pt-0 mt-0">
                Hover over the buttons below to see the four tooltips
                directions: top, right, bottom, and left.
              </p>
              <div className="row">
                {["top", "right", "bottom", "left"].map((placement, i) => (
                  <div className="col-md-3" key={placement}>
                    <OverlayTrigger
                      placement={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Tooltip on <strong>{placement}</strong>.
                        </Tooltip>
                      }
                    >
                      <Button variant={this.variantList[i]}>
                        Tooltip on {placement}
                      </Button>
                    </OverlayTrigger>
                  </div>
                ))}
              </div>
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12 mb-4">
            <SimpleCard title="Tooltips Trigger">
              <p className="pt-0 mt-0">Click to show tooltip</p>
              <div className="row">
                {["top", "right", "bottom", "left"].map((placement, i) => (
                  <div className="col-md-3" key={placement}>
                    <OverlayTrigger
                      trigger="click"
                      placement={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Tooltip on <strong>{placement}</strong>.
                        </Tooltip>
                      }
                    >
                      <Button variant={this.variantList[i]}>
                        Tooltip on {placement}
                      </Button>
                    </OverlayTrigger>
                  </div>
                ))}
              </div>
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12 mb-4">
            <SimpleCard title="Tooltip Options">
              <div className="row">
                {["top", "right", "bottom", "left"].map((placement, i) => (
                  <div className="col-md-3" key={placement}>
                    <OverlayTrigger
                      placement={placement}
                      delay={{ show: 250, hide: 400 }}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Tooltip on <strong>{placement}</strong>.
                        </Tooltip>
                      }
                    >
                      <Button variant={this.variantList[i]}>
                        Tooltip on {placement}
                      </Button>
                    </OverlayTrigger>
                  </div>
                ))}
              </div>
            </SimpleCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AppTooltip;
