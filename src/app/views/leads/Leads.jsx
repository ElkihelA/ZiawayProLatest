import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { SimpleCard } from "@gull";
import LeadsOne from "./leadsComponents/LeadsOne";
import LeadsTwo from "./leadsComponents/LeadsTwo";
import LeadsThree from "./leadsComponents/LeadsThree";

const Leads = () => {
  return (
    <section className="mx-1 mx-lg-2 vh-100 ">
      <div className="mb-4 main-height">
        <Row className="mx-0 h-100">
          <Col xs={12} className="mb-4 h-100">
            <SimpleCard className="h-100">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="row h-100">
                  <div className="col-md-3 col-lg-2">
                    <Nav variant="pills-2" className="d-flex flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Leads</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="two">Accepted Leads</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="three">Leads Replacement</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className="h-100 scroll-box col card p-0 mx-3">
                    <Tab.Content className="p-0 h-100">
                      <Tab.Pane className="h-100" eventKey="first">
                        <LeadsOne />
                      </Tab.Pane>
                      <Tab.Pane className="h-100" eventKey="two">
                        <LeadsTwo />
                      </Tab.Pane>
                      <Tab.Pane className="h-100" eventKey="three">
                        <LeadsThree />
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </div>
              </Tab.Container>
            </SimpleCard>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Leads;
