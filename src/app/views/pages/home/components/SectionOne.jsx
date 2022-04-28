import FormulaireVMZ from "app/views/evaluationDeBien/FormulaireVMZ";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation, initReactI18next } from "react-i18next";

const SectionOne = () => {
  const { t } = useTranslation();
  return (
    <section className="home-section-one steps-home">
      <div className="container-xxl mx-auto">
        <Row className="mx-0">
          <Col>
            <div className="d-flex flex-column align-items-center justify-content-center h-100 py-5 mt-5">
              <div className="text-center">
                <h1 className="d-none d-lg-block display-5 text-primary font-weight-bold mb-3">
                  {t("home-1.1")}
                </h1>
                <h3 className="d-lg-none text-primary font-weight-bold mb-3">
                  {t("home-1.1")}
                </h3>
              </div>
              <div className="text-center">
                <h4 className="d-none d-lg-block text-primary font-weight-bold mb-3">
                  {t("home-1.2")}
                </h4>
                <h5 className="d-lg-none text-primary font-weight-bold mb-3">
                  {t("home-1.2")}
                </h5>
              </div>
              <div className="container-VMZ col-12 col-md-11 px-0">
                <FormulaireVMZ />
              </div>
            </div>
          </Col>
          <Col lg={4} className="px-0 mt-3 mt-md-0">
            <div style={{ boxShadow: "-35px 0 65px 0px #b8b7b7" }}>
              <img
                className="h-100 w-100 d-block"
                src="https://static.wixstatic.com/media/c5a22b_7556a9cf4e9c44979f8dbec145f03b44~mv2.jpg/v1/fill/w_608,h_505,al_c,q_80,usm_0.66_1.00_0.01/c5a22b_7556a9cf4e9c44979f8dbec145f03b44~mv2.webp"
                alt=".."
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SectionOne;
