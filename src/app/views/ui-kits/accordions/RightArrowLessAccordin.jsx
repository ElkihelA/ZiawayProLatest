import React from "react";
import {
  Card,
  Accordion,
  AccordionToggle,
  AccordionCollapse,
  Button
} from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";

const RightArrowLessAccordion = () => {
  const iconList = ["i-Big-Data", "i-Data-Settings", "i-Library"];

  return (
    <SimpleCard title="Without Right Arrow">
      <Accordion>
        {iconList.map((item, index) => (
          <Card key={item}>
            <AccordionToggle
              as={Card.Header}
              eventKey={item}
              className="cursor-pointer py-2"
            >
              <div className="card-title mb-0 text-primary">
                <i className={`${item} mr-2 text-15`}></i>
                Accordion asd Item #{index + 1}
              </div>
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

export default RightArrowLessAccordion;
