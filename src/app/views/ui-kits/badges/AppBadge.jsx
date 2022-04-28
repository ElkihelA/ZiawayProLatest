import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import OutlinedBadge from "@gull/components/badges/OutlinedBadge";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { Badge, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class AppBadge extends Component {
  variantList = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ];

  state = {};

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Badges" }
          ]}
        ></Breadcrumb>
        <div className="mb-3">
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Badge outline">
                {this.variantList.map(color => (
                  <Badge
                    key={color}
                    pill
                    className={`badge-outline-${color} p-2 m-1`}
                  >
                    {color}
                  </Badge>
                ))}
              </SimpleCard>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Regular Badges">
                {this.variantList.map(color => (
                  <Badge key={color} variant={color} className="m-1">
                    {color}
                  </Badge>
                ))}
              </SimpleCard>
            </Col>
          </Row>
        </div>

        <div className="mb-3">
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Badge Pill">
                {this.variantList.map(color => (
                  <Badge key={color} pill variant={color} className="m-1">
                    {color}
                  </Badge>
                ))}
              </SimpleCard>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Badge Pill with Padding">
                {this.variantList.map(color => (
                  <Badge key={color} pill variant={color} className="p-2 m-1">
                    {color}
                  </Badge>
                ))}
              </SimpleCard>
            </Col>
          </Row>
        </div>

        <div className="mb-3">
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Badge link">
                {this.variantList.map((color, ind) => (
                  <Link to="/uikits/badges" key={ind}>
                    <Badge pill variant={color} className="m-1">
                      {color}
                    </Badge>
                  </Link>
                ))}
              </SimpleCard>
            </Col>
          </Row>
        </div>

        <div className="mb-3">
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard className="mb-3" title="Badge liSizing & Styles">
                <ul className="list-group list-group-flush">
                  <h6 className="card-subtitle mt-2 mb-2 text-muted">
                    Medium Size
                  </h6>

                  <li className="list-group-item border-0">
                    {this.variantList.map((color, i) => (
                      <Badge key={i} className={`badge-round-${color}  m-1`}>
                        {String.fromCharCode(65 + i)}
                      </Badge>
                    ))}
                  </li>
                  <li className="list-group-item border-0">
                    {this.variantList.map((color, i) => (
                      <Badge key={i} className={`badge-square-${color}  m-1`}>
                        {String.fromCharCode(65 + i)}
                      </Badge>
                    ))}
                  </li>

                  <h6 className="card-subtitle mt-2 mb-2 text-muted">
                    Large Size
                  </h6>

                  <li className="list-group-item border-0">
                    {this.variantList.map((color, i) => (
                      <Badge key={i} className={`badge-round-${color} lg  m-1`}>
                        {String.fromCharCode(65 + i)}
                      </Badge>
                    ))}
                  </li>

                  <li className="list-group-item border-0">
                    {this.variantList.map((color, i) => (
                      <Badge key={i} className={`badge-square-${color} lg m-1`}>
                        {String.fromCharCode(65 + i)}
                      </Badge>
                    ))}
                  </li>

                  <h6 className="card-subtitle mt-2 mb-2 text-muted">
                    Extra Large Size
                  </h6>

                  <li className="list-group-item border-0">
                    {this.variantList.map((color, i) => (
                      <Badge key={i} className={`badge-round-${color} xl  m-1`}>
                        {String.fromCharCode(65 + i)}
                      </Badge>
                    ))}
                  </li>

                  <li className="list-group-item border-0">
                    {this.variantList.map((color, i) => (
                      <Badge
                        key={i}
                        className={`badge-square-${color} xl  m-1`}
                      >
                        {String.fromCharCode(65 + i)}
                      </Badge>
                    ))}
                  </li>
                </ul>
              </SimpleCard>

              <SimpleCard title="More Styles & Options">
                <ul className="list-group list-group-flash">
                  <h6 className="card-subtitle mt-2 mb-2 text-muted">
                    Wide badges for longer text:
                  </h6>

                  <li className="list-group-item border-0">
                    {this.variantList.map((color, i) => (
                      <Badge key={i} variant={color} className="w-badge m-1">
                        {color}
                      </Badge>
                    ))}
                  </li>

                  <h6 className="card-subtitle mt-2 mb-2 text-muted">
                    Rounded badges examples:
                  </h6>
                  <li className="list-group-item border-0">
                    {this.variantList.map((color, i) => (
                      <Badge key={i} variant={color} className="r-badge m-1">
                        {color}
                      </Badge>
                    ))}
                  </li>
                </ul>
              </SimpleCard>
            </Col>

            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Unified Styles" className="mb-3">
                <ul className="list-group list-group-flash">
                  <h6 className="card-subtitle mt-2 mb-2 text-muted">
                    Circle and Square Unified Styles
                  </h6>

                  <li className="list-group-item border-0">
                    {this.variantList.map((color, i) => (
                      <Badge
                        key={i}
                        pill
                        variant={color}
                        className={`badge-round badge-round-opacity-${color}  m-1`}
                      >
                        {String.fromCharCode(65 + i)}
                      </Badge>
                    ))}
                  </li>
                </ul>
              </SimpleCard>

              <SimpleCard title="Basic Examples" className="mb-3">
                <ul className="list-group list-group-flash">
                  <h6 className="card-subtitle mt-2 mb-2 text-muted">
                    Circle and Square Unified Styles
                  </h6>

                  <li className="list-group-item border-0">
                    {this.variantList.map((color, i) => (
                      <Badge
                        key={i}
                        variant={color}
                        className={`badge-round-${color} sm  m-1`}
                      >
                        {String.fromCharCode(65 + i)}
                      </Badge>
                    ))}
                  </li>
                </ul>

                <ul className="list-group list-group-flash">
                  <h6 className="card-subtitle mt-2 mb-2 text-muted">
                    Dot Styles Examples:
                  </h6>

                  <li className="list-group-item border-0">
                    {this.variantList.map((color, i) => (
                      <span
                        key={i}
                        variant={color}
                        className={`badge-dot-${color} mr-1`}
                      ></span>
                    ))}
                  </li>

                  <li className="list-group-item border-0">
                    Pending <span className="badge-dot-primary mr-1"></span>
                    Caption
                    <span className="badge-dot-secondary mr-1"></span> Heading
                    <span className="badge-dot-success mr-1"></span> Status
                    <span className="badge-dot-danger mr-1"></span>
                  </li>
                </ul>
              </SimpleCard>

              <SimpleCard title="Outline Badges">
                <ul className="list-group list-group-flash">
                  <h6 className="card-subtitle mt-2 mb-2 text-muted">
                    Basic state color badges:
                  </h6>

                  <li className="list-group-item border-0">
                    {this.variantList.map((color, i) => (
                      <Badge
                        key={i}
                        className={`outline-round-${color} sm m-1`}
                      >
                        {String.fromCharCode(65 + i)}
                      </Badge>
                    ))}
                  </li>
                </ul>
              </SimpleCard>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AppBadge;
