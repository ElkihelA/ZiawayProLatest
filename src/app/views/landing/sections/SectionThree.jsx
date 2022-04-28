import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const SectionThree = ({ id }) => {
  const { t } = useTranslation();
  const items = (t) => {
    return [
      {
        icon: "i-Edit-Map",
        title: t("landing-2.4"),
        text: t("landing-2.5"),
      },
      {
        icon: "i-Building",
        title: t("landing-2.6"),
        text: t("landing-2.7"),
      },
      {
        icon: "i-Windows-Microsoft",
        title: t("landing-2.8"),
        text: t("landing-2.9"),
      },
      {
        icon: "i-Macro",
        title: t("landing-2.10"),
        text: t("landing-2.11"),
      },
    ];
  };
  return (
    <section id={id} className="section-three bg-white py-5">
      <Container>
        <div className="mb-5 text-center">
          <h5 className="text-primary title-hover">{t("landing-2.1")}</h5>
          <h1 className="font-weight-bold display-5">{t("landing-2.2")}</h1>
        </div>
        <Row className="justify-content-around">
          {items(t).map((value) => (
            <Col md={6} lg={5} className="mb-5 pb-4">
              <div className="text-center box-about">
                <div>
                  <i className={`${value.icon}  display-4 text-primary`}></i>
                </div>

                <h5 className="text-primary font-weight-bold my-3">
                  {value.title}
                </h5>
                <p>{value.text}</p>
                <h5 className="text-primary ">{t("landing-2.3")}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
