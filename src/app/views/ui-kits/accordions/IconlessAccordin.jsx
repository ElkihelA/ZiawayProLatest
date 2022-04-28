import React from "react";
import SimpleCard from "@gull/components/cards/SimpleCard";
import RightArrowAccordion from "@gull/components/accordions/RightArrowAccordion";
import { Accordion } from "react-bootstrap";
import shorId from "shortid";

const IconlessAccordin = () => {
  return (
    <SimpleCard title="Without Icons">
      <Accordion>
        {[1, 2, 3].map((icon, index) => (
          <RightArrowAccordion
            key={icon}
            title="Accordion as Item"
            eventKey={shorId.generate()}
          >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch.
          </RightArrowAccordion>
        ))}
      </Accordion>
    </SimpleCard>
  );
};

export default IconlessAccordin;
