import React from "react";
import {
  Card,
  Accordion,
  AccordionToggle,
  AccordionCollapse,
  Button
} from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";

const SimpleAccordion = () => {
  return (
    <SimpleCard title="Accordion Group">
      <Accordion>
        {[1, 2, 3].map(item => (
          <Card key={item} className="ul-card__border-radius">
            <AccordionToggle
              as={Card.Header}
              eventKey={item}
              className="cursor-pointer"
            >
              <h6 className="card-title mb-0 text-primary">
                Accordion asd Item #{item}
              </h6>
            </AccordionToggle>
            <AccordionCollapse eventKey={item}>
              <Card.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </Card.Body>
            </AccordionCollapse>
          </Card>
        ))}
      </Accordion>
    </SimpleCard>
  );
};

export default SimpleAccordion;
