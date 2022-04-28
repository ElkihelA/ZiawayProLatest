import React from "react";
import { Col, Container, Row, Tabs, Tab, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SectionTwo = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="section-two bg-white py-5">
      <Container>
        <Row>
          <Col
            xs={12}
            lg={6}
            className="d-flex flex-column justify-content-end"
          >
            <img
              height={600}
              className="w-100"
              src="https://i1.wp.com/blog.ziaway.ca/wp-content/uploads/2019/10/large-pic.jpg"
              alt="random"
            />
          </Col>
          <Col
            xs={12}
            lg={6}
            className="d-flex flex-column justify-content-end mt-5 mt-lg-0"
          >
            <div className="mb-3">
              <h5 className="text-primary title-hover">{t("landing-1.1")}</h5>
            </div>
            <div className="mb-3">
              <h2 className="font-weight-bold display-5">{t("landing-1.2")}</h2>
            </div>
            <div className="mb-4">
              <p>{t("landing-1.3")}</p>

              <p>{t("landing-1.4")}</p>

              <p>{t("landing-1.5")}</p>
            </div>
            <div className="mb-4">
              <Card className="p-0">
                <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className="mx-0"
                >
                  <Tab eventKey="home" title="Transparency">
                    <div className="mt-3">
                      <p>{t("landing-1.6")}</p>
                      <p>{t("landing-1.7")}</p>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Technology">
                    <div className="mt-3">
                      <p>{t("landing-1.8")}</p>
                      <p>{t("landing-1.9")}</p>
                    </div>
                  </Tab>
                  <Tab eventKey="contact" title="Synergy">
                    <div className="mt-3">
                      <p>{t("landing-1.10")}</p>
                      <p>{t("landing-1.11")}</p>
                    </div>
                  </Tab>
                </Tabs>
              </Card>
            </div>
            <div>
              <Button
                size="lg"
                block
                as={Link}
                to="/evaluation-bien"
                className="py-3"
              >
                <div>{t("landing-1.12")}</div>
                <div>{t("landing-1.13")}</div>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
