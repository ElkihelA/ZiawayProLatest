import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import InformationModal from "./InformationModal";
import { OverlayTrigger, Popover } from "react-bootstrap";

const VMZFormNav = ({
  steps,
  currentStep,
  previousStep,
  totalSteps,
  isActive,
}) => {
  const [show, setShow] = useState(false);
  const [lastStep, setLastStep] = useState(currentStep);
  console.log("step courant", previousStep);
  const handleClose = () => {
    setShow(false);
  };

  console.log(currentStep, totalSteps);

  const percentage = (100 * currentStep) / totalSteps;

  const popover = (props) => (
    <Popover id="popover-basic" {...props}>
      <Popover.Title as="h3">
        {steps[currentStep - 1].information.title}
      </Popover.Title>
      <Popover.Content>
        <div>
          <h5 className="d-inline">{steps[currentStep - 1].information?.t1}</h5>
          <p className="d-inline">{steps[currentStep - 1].information?.b1}</p>
        </div>
        <div>
          <h5 className="d-inline">{steps[currentStep - 1].information?.t2}</h5>
          <p className="d-inline">{steps[currentStep - 1].information?.b2}</p>
        </div>
        <div>
          <h5 className="d-inline">{steps[currentStep - 1].information?.t3}</h5>
          <p className="d-inline">{steps[currentStep - 1].information?.b3}</p>
        </div>
        {steps[currentStep - 1].information.body}
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      {currentStep > 14 ? null : (
        <Fragment>
          <div className="pb-4 m-auto">
            {currentStep !== 1 && (
              <h3
                className="d-inline text-primary cursor-pointer"
                onClick={() => {
                  previousStep();
                }}
              >
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
              </h3>
            )}
            <h4 className="d-inline text-primary p-4">
              {steps[currentStep - 1].title}
            </h4>
            {steps[currentStep - 1].information && (
              <h2 className="d-inline text-info cursor-pointer">
                <OverlayTrigger placement="right" overlay={popover}>
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    // onClick={() => setShow(true)}
                  />
                </OverlayTrigger>
              </h2>
            )}
            <div className="progress mt-2">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
          {steps[currentStep - 1].information && (
            <InformationModal
              show={show}
              handleClose={handleClose}
              title={steps[currentStep - 1].information.title}
              body={steps[currentStep - 1].information.body}
            />
          )}
        </Fragment>
      )}
    </>
  );
};

export default VMZFormNav;
