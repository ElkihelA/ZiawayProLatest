import React from "react";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionToggle(eventKey, data =>
    console.log("totally custom!", eventKey)
  );

  return <div onClick={decoratedOnClick}>{children}</div>;
};

const CustomAccordion = () => {
  return (
    <Accordion>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <CustomToggle eventKey="0">Click me!</CustomToggle>
          <CustomToggle eventKey="0">
            <i className="i-Close"></i>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="2">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default CustomAccordion;
