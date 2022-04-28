import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SectionOne = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="section-one bg-gray-300 py-4">
      <Container>
        <Row className="mx-0">
          <Col xs={12} lg={6} className="px-0 d-none d-md-block">
            <Card as={Link} className="bg-dark text-white mt-1 pb-2 mx-1">
              <Card.Img
                height="500px"
                src="https://blog.ziaway.ca/wp-content/uploads/revslider/magazine1.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="d-flex flex-column align-items-start h-100 justify-content-end">
                  <Badge variant="primary" className="px-2 py-1 mb-3">
                    {t("landing.1")}
                  </Badge>
                  <h4 className="text-white font-weight-bold">
                    {t("landing.20")}
                  </h4>
                  {/* <Card.Text className="h6 text-gray-300 mb-3">
                    {t("landing.2")}
                  </Card.Text> */}
                  <div className="d-flex">
                    <Card.Text className="mb-0">{t("landing.3")}</Card.Text>
                    <Card.Text className="text-gray-300 ml-5 mb-0">
                      {t("landing.4")}
                    </Card.Text>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} lg={6} className="small px-0">
            <div>
              <Card as={Link} className="bg-dark text-white m-1">
                <Card.Img
                  height="250px"
                  src="https://blog.ziaway.ca/wp-content/uploads/2020/11/client-heureux.png"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <div className="d-flex flex-column align-items-start h-100 justify-content-end">
                    <Badge variant="primary" className="px-2 py-1 mb-3">
                      {t("landing.5")}
                    </Badge>
                    <h4 className="text-white font-weight-bold">
                      {t("landing.6")}
                    </h4>
                    {/* <Card.Text className="h6 text-gray-300 mb-3">
                      {t("landing.7")}
                    </Card.Text> */}
                    <div className="d-flex">
                      <Card.Text className="mb-0">{t("landing.8")}</Card.Text>
                      <Card.Text className="text-gray-300 ml-5 mb-0">
                        {t("landing.9")}
                      </Card.Text>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="d-flex flex-column flex-md-row">
              <Card as={Link} className="bg-dark text-white m-1">
                <Card.Img
                  height="250px"
                  src="https://blog.ziaway.ca/wp-content/uploads/2020/04/offre.png"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <div className="d-flex flex-column align-items-start h-100 justify-content-end">
                    <Badge variant="primary" className="px-2 py-1 mb-3">
                      {t("landing.10")}
                    </Badge>
                    <h4 className="text-white font-weight-bold">
                      {t("landing.11")}
                    </h4>
                    {/* <Card.Text className="h6 text-gray-300 mb-3">
                      {t("landing.12")}
                    </Card.Text> */}
                    <div className="d-flex">
                      <Card.Text className="mb-0">{t("landing.13")}</Card.Text>
                      <Card.Text className="text-gray-300 ml-5 mb-0">
                        {t("landing.14")}
                      </Card.Text>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
              <Card as={Link} className="bg-dark text-white m-1">
                <Card.Img
                  height="250px"
                  src="https://blog.ziaway.ca/wp-content/uploads/2020/11/working-in-front-of-computer-screen.jpg"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <div className="d-flex flex-column align-items-start h-100 justify-content-end">
                    <Badge variant="primary" className="px-2 py-1 mb-3">
                      {t("landing.15")}
                    </Badge>
                    <h4 className="text-white font-weight-bold">
                      {t("landing.16")}
                    </h4>
                    {/* <Card.Text className="h6 text-gray-300 mb-3">
                      {t("landing.17")}
                    </Card.Text> */}
                    <div className="d-flex">
                      <Card.Text className="mb-0">{t("landing.18")}</Card.Text>
                      <Card.Text className="text-gray-300 ml-5 mb-0">
                        {t("landing.19")}
                      </Card.Text>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
