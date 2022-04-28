import React from "react";
import Breadcrumb from "@gull/components/Breadcrumb";
import SimpleAccordion from "./SimpleAccordion";
import { Row, Col } from "react-bootstrap";
import IconAccordin from "./IconAccordin";
import IconlessAccordin from "./IconlessAccordin";
import RightArrowLessAccordion from "./RightArrowLessAccordin";

const AppAccordion = () => {
  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "UI Kits", path: "/uikits" },
          { name: "Accordions" }
        ]}
      ></Breadcrumb>

      <Row className="mb-4">
        <Col lg={6} md={6}>
          <SimpleAccordion></SimpleAccordion>
        </Col>
        <Col lg={6} md={6}>
          <IconAccordin></IconAccordin>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6}>
          <IconlessAccordin></IconlessAccordin>
        </Col>
        <Col lg={6} md={6}>
          <RightArrowLessAccordion></RightArrowLessAccordion>
        </Col>
      </Row>
    </div>
  );
};

export default AppAccordion;
