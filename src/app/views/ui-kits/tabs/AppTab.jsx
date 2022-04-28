import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Row, Col, Tab, Tabs, Button, TabContent, Nav } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";

const customTabHeader = (title, icon) => (
  <div className="d-flex align-items-center">
    <span className="mr-2">
      <i className={icon}></i>
    </span>
    <span>{title}</span>
  </div>
);

class AppTab extends Component {
  state = {};
  randomText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Tabs" }
          ]}
        ></Breadcrumb>

        <div className="mb-4">
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Basic Tabs">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                  <Tab eventKey="home" title="Home">
                    {this.randomText}
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                    {this.randomText}
                  </Tab>
                  <Tab eventKey="contact" title="Contact">
                    {this.randomText}
                  </Tab>
                  <Tab eventKey="disabled" title="Disabled" disabled>
                    {this.randomText}
                  </Tab>
                </Tabs>
              </SimpleCard>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Tabs with Icon">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                  <Tab
                    eventKey="home"
                    title={customTabHeader("Home", "i-Atom")}
                  >
                    {this.randomText}
                  </Tab>
                  <Tab
                    eventKey="profile"
                    title={customTabHeader("Profile", "i-Shutter")}
                  >
                    {this.randomText}
                  </Tab>
                  <Tab
                    eventKey="contact"
                    title={customTabHeader("Contact", "i-Boy")}
                  >
                    {this.randomText}
                  </Tab>
                  <Tab
                    eventKey="disabled"
                    title={customTabHeader("Disabled", "i-Close")}
                    disabled
                  >
                    {this.randomText}
                  </Tab>
                </Tabs>
              </SimpleCard>
            </Col>
          </Row>
        </div>

        <div className="mb-4">
          <Row>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Pill Tabs">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Nav variant="pills" className="px-2">
                    <Nav.Item className="mr-2">
                      <Nav.Link eventKey="first">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mr-2">
                      <Nav.Link eventKey="second">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth" disabled>
                        Disabled
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">{this.randomText}</Tab.Pane>
                    <Tab.Pane eventKey="second">{this.randomText}</Tab.Pane>
                    <Tab.Pane eventKey="third">{this.randomText}</Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </SimpleCard>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="adjusted pills">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Nav variant="pills" className="d-flex  px-2">
                    <Nav.Item className="mr-2 flex-grow-1 text-center">
                      <Nav.Link eventKey="first">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mr-2 flex-grow-1 text-center">
                      <Nav.Link eventKey="second">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="flex-grow-1 text-center">
                      <Nav.Link eventKey="third">Contact</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">{this.randomText}</Tab.Pane>
                    <Tab.Pane eventKey="second">{this.randomText}</Tab.Pane>
                    <Tab.Pane eventKey="third">{this.randomText}</Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </SimpleCard>
            </Col>
          </Row>
        </div>

        <div className="mb-4">
          <Row>
            <Col lg={6} md={6} sm={6} xs={12} className="mb-4">
              <SimpleCard title="Vertical tab">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div className="row">
                    <div className="col-md-4">
                      <Nav variant="pills" className="d-flex flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Message</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="fourth">Contact</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <div className="col-md-8">
                      <Tab.Content className="p-0">
                        <Tab.Pane eventKey="first">
                          {this.randomText.slice(0, 1000)}
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          {this.randomText.slice(0, 500)}
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          {this.randomText.slice(0, 750)}
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          {this.randomText.slice(0, 850)}
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </div>
                </Tab.Container>
              </SimpleCard>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AppTab;
