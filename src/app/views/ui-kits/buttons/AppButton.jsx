import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";
import LoadingButton from "@gull/components/buttons/LoadingButton";

class AppButton extends Component {
  variantList = [
    "primary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark"
  ];

  socialButtonList = [
    {
      name: "facebook",
      icon: "i-Facebook-2"
    },
    {
      name: "google",
      icon: "i-Google-Plus"
    },
    {
      name: "twitter",
      icon: "i-Twitter"
    },
    {
      name: "instagram",
      icon: "i-Instagram"
    },
    {
      name: "linkedin",
      icon: "i-Linkedin-2"
    },
    {
      name: "dribble",
      icon: "i-Dribble"
    },
    {
      name: "youtube",
      icon: "i-Youtube"
    }
  ];

  state = {};

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Buttons" }
          ]}
        ></Breadcrumb>

        <div className="mb-3">
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Default Buttons">
                {this.variantList.map(color => (
                  <Button
                    key={color}
                    variant={color}
                    className="m-1 text-capitalize"
                  >
                    {color}
                  </Button>
                ))}
              </SimpleCard>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Buttons Rounded">
                {this.variantList.map(color => (
                  <Button
                    key={color}
                    variant={color}
                    className="btn-rounded m-1 text-capitalize"
                  >
                    {color}
                  </Button>
                ))}
              </SimpleCard>
            </Col>
          </Row>
        </div>

        <div className="mb-3">
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Buttons Raised">
                {this.variantList.map(color => (
                  <Button
                    key={color}
                    variant={color}
                    className={`btn-raised btn-raised-${color} m-1 text-capitalize`}
                  >
                    {color}
                  </Button>
                ))}
              </SimpleCard>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Buttons outline">
                {this.variantList.map(color => (
                  <Button
                    key={color}
                    variant={`outline-${color}`}
                    className="m-1 text-capitalize"
                  >
                    {color}
                  </Button>
                ))}
              </SimpleCard>
            </Col>
          </Row>
        </div>

        <div className="mb-3">
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Button block">
                {this.variantList.slice(0, 3).map(color => (
                  <Button
                    key={color}
                    variant={color}
                    className="d-block w-100 my-2 text-capitalize"
                  >
                    {color}
                  </Button>
                ))}
              </SimpleCard>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Buttons outline">
                <div>
                  {this.variantList.slice(0, 3).map(color => (
                    <Button
                      key={color}
                      variant={color}
                      size="sm"
                      className="m-1 text-capitalize"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
                <div>
                  {this.variantList.slice(0, 3).map(color => (
                    <Button
                      key={color}
                      variant={color}
                      className="m-1 text-capitalize"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
                <div>
                  {this.variantList.slice(0, 3).map(color => (
                    <Button
                      key={color}
                      variant={color}
                      size="lg"
                      className="m-1 text-capitalize"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </SimpleCard>
            </Col>
          </Row>
        </div>

        <div className="mb-3">
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Styles- Button with Icons">
                <Button
                  variant="primary"
                  className="btn-icon m-1 text-capitalize"
                >
                  <span className="ul-btn__icon">
                    <i className="i-Gear-2"></i>
                  </span>
                  <span className="ul-btn__text">With Icon</span>
                </Button>
                <Button variant="info" className="btn-icon m-1 text-capitalize">
                  <span className="ul-btn__icon">
                    <i className="i-RSS"></i>
                  </span>
                </Button>
                <Button
                  variant="success"
                  className="btn-icon m-1 text-capitalize"
                >
                  button
                </Button>
                <Button
                  variant="outline-danger"
                  className="btn-icon m-1 text-capitalize"
                >
                  <span className="ul-btn__icon">
                    <i className="i-Shutter"></i>
                  </span>
                </Button>
                <Button
                  variant="warning"
                  className="btn-icon m-1 text-capitalize"
                >
                  <span className="ul-btn__icon">
                    <i className="i-Atom"></i>
                  </span>
                  <span className="ul-btn__text">Atom</span>
                </Button>
              </SimpleCard>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Buttons Ripple">
                {this.variantList.map(color => (
                  <Button
                    key={color}
                    variant={color}
                    className="ripple m-1 text-capitalize"
                  >
                    {color}
                  </Button>
                ))}
              </SimpleCard>
            </Col>
          </Row>
        </div>

        <div className="mb-3">
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="social" className="mb-3">
                <div className="mb-3">
                  {this.socialButtonList.map(item => (
                    <Button
                      key={item.name}
                      variant="primary"
                      className={`btn-${item.name} btn-icon m-1 text-capitalize`}
                    >
                      <span className="ul-btn__icon">
                        <i className={item.icon}></i>
                      </span>
                      <span className="ul-btn__text text-capitalize">
                        {item.name}
                      </span>
                    </Button>
                  ))}
                </div>
                <div className="mb-3">
                  {this.socialButtonList.map(item => (
                    <Button
                      key={item.name}
                      variant="primary"
                      className={`btn-${item.name} btn-icon m-1 text-capitalize`}
                    >
                      <span className="ul-btn__icon">
                        <i className={item.icon}></i>
                      </span>
                    </Button>
                  ))}
                </div>
                <div>
                  {this.socialButtonList.map(item => (
                    <Button
                      key={item.name}
                      variant="primary"
                      className={`btn-${item.name} rounded-circle btn-icon m-1 text-capitalize`}
                    >
                      <span className="ul-btn__icon">
                        <i className={item.icon}></i>
                      </span>
                    </Button>
                  ))}
                </div>
              </SimpleCard>

              <SimpleCard title="Button Group">
                <ButtonToolbar>
                  {this.variantList.map(color => (
                    <Button
                      key={color}
                      variant={`outline-${color}`}
                      className="text-capitalize"
                    >
                      {color}
                    </Button>
                  ))}
                </ButtonToolbar>
              </SimpleCard>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Loading Button">
                <div className="mb-3 d-flex flex-wrap">
                  {this.variantList.slice(0, 3).map((color, ind) => (
                    <LoadingButton
                      key={ind}
                      className="text-capitalize m-1"
                      variant={color}
                      loading={true}
                      animation="border"
                      spinnerSize="sm"
                    >
                      {color} loader
                    </LoadingButton>
                  ))}
                </div>
                <div className="mb-3 d-flex flex-wrap">
                  {this.variantList.slice(0, 3).map((color, ind) => (
                    <LoadingButton
                      key={ind}
                      className="text-capitalize m-1"
                      variant={color}
                      loading={true}
                      animation="grow"
                      spinnerSize="sm"
                    >
                      {color} loader
                    </LoadingButton>
                  ))}
                </div>
                <div className="d-flex flex-wrap">
                  {this.variantList.slice(0, 3).map((color, ind) => (
                    <LoadingButton
                      key={ind}
                      className="text-capitalize m-1"
                      variant={color}
                      loading={true}
                      animation="border"
                      spinnerSize="lg"
                      buttonSize="lg"
                    >
                      {color} loader
                    </LoadingButton>
                  ))}
                </div>
              </SimpleCard>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AppButton;
