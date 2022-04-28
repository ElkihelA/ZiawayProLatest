import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { Dropdown, Row, Col, Button } from "react-bootstrap";

class AppDropdown extends Component {
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Extra Kits", path: "/extra-kits" },
            { name: "App Dropdown" }
          ]}
        ></Breadcrumb>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
            <SimpleCard title="Simple Dropdowns" className="h-100">
              <h6 className="card-subtitle mb-4 mt-0 text-muted">
                Single button dropdowns:
              </h6>
              <div className="d-flex flex-wrap">
                {["outline-primary", "primary", "success"].map((variant, i) => (
                  <Dropdown key={i}>
                    <Dropdown.Toggle variant={variant} className="mr-3 mb-3">
                      Dropdown button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another Action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </div>

              <hr className="mt-0 mb-3" />

              <h6 className="card-subtitle mb-4 mt-0 text-muted">
                Single button dropdowns with icon:
              </h6>
              <div className="d-flex flex-wrap">
                {["outline-primary", "primary", "success"].map((variant, i) => (
                  <Dropdown key={i}>
                    <Dropdown.Toggle variant={variant} className="mr-3 mb-3">
                      Dropdown button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <i className="i-Bell"> </i> Action
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="i-Download-from-Cloud"> </i> Another
                        action
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="i-Money-Bag"> </i> Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </div>
            </SimpleCard>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
            <SimpleCard title="Dropup Variation" className="h-100">
              <div className="d-flex flex-wrap">
                {[
                  "Primary",
                  "Secondary",
                  "Success",
                  "Info",
                  "Warning",
                  "Danger"
                ].map((variant, i) => (
                  <Dropdown key={i}>
                    <Dropdown.Toggle
                      className="mr-3 mb-3"
                      title={variant}
                      variant={variant.toLowerCase()}
                      key={variant}
                    >
                      {variant}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3" active>
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </div>
            </SimpleCard>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
            <SimpleCard title="Size Variation" className="h-100">
              <div className="d-flex flex-wrap">
                {["Primary", "Success", "warning"].map((variant, i) => (
                  <Dropdown key={i}>
                    <Dropdown.Toggle
                      className="mr-3 mb-3"
                      title={variant}
                      size="lg"
                      variant={variant.toLowerCase()}
                      key={variant}
                    >
                      {variant}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3" active>
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </div>

              <hr className="mt-0 mb-3" />

              <div className="d-flex flex-wrap">
                {["Primary", "Success", "warning"].map((variant, i) => (
                  <Dropdown key={i}>
                    <Dropdown.Toggle
                      className="mr-3 mb-3"
                      title={variant}
                      size="sm"
                      variant={variant.toLowerCase()}
                      key={variant}
                    >
                      {variant}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3" active>
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </div>

              <hr className="mt-0 mb-3" />

              <h6 className="card-subtitle mb-4 mt-0 text-muted">
                Single Icon Dropdown:
              </h6>

              <div className="d-flex flex-wrap">
                <Dropdown>
                  <Dropdown.Toggle
                    className="mr-3 mb-3 toggle-hidden"
                    as={Button}
                    variant="primary"
                  >
                    <span className="_dot _inline-dot mr-1"></span>
                    <span className="_dot _inline-dot mr-1"></span>
                    <span className="_dot _inline-dot"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    className="mr-3 mb-3 toggle-hidden"
                    variant="secondary"
                  >
                    <span className="_dot _inline-dot bg-warning mr-1"></span>
                    <span className="_dot _inline-dot bg-warning mr-1"></span>
                    <span className="_dot _inline-dot bg-warning"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    className="mr-3 mb-3 toggle-hidden rounded-circle"
                    variant="success"
                  >
                    <span className="_dot _inline-dot mr-1"></span>
                    <span className="_dot _inline-dot mr-1"></span>
                    <span className="_dot _inline-dot"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle className="mr-3 mb-3 toggle-hidden border-0 bg-white d-flex flex-column">
                    <span className="_dot _inline-dot bg-primary mb-1"></span>
                    <span className="_dot _inline-dot bg-primary mb-1"></span>
                    <span className="_dot _inline-dot bg-primary"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </SimpleCard>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
            <SimpleCard title="Other variation" className="h-100">
              <h6 className="card-subtitle mb-4 mt-0 text-muted">
                Hidden Toggle:
              </h6>
              <div className="d-flex flex-wrap">
                {["Primary", "Success", "warning"].map((variant, i) => (
                  <Dropdown key={i}>
                    <Dropdown.Toggle
                      split
                      className="mr-3 mb-3 toggle-hidden"
                      variant={variant.toLowerCase()}
                      key={variant}
                    >
                      {variant}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3" active>
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </div>

              <hr className="mt-0 mb-3" />

              <h6 className="card-subtitle mb-4 mt-0 text-muted">
                Toggle Icon Direction:
              </h6>
              <div className="d-flex flex-wrap">
                {["up", "down", "left", "right"].map((variant, i) => (
                  <Dropdown key={i}>
                    <Dropdown.Toggle
                      drop={variant}
                      className="mr-3 mb-3"
                      key={variant}
                    >
                      {variant.toLocaleUpperCase()}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </div>

              <hr className="mt-0 mb-3" />

              <h6 className="card-subtitle mb-4 mt-0 text-muted">
                Dropdown Menu Align:
              </h6>
              <div className="d-flex flex-wrap">
                <Dropdown alignRight>
                  <Dropdown.Toggle className="mr-3 mb-3">
                    Menu Align Right
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle className="mr-3 mb-3">
                    Menu Align Left
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </SimpleCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppDropdown;
