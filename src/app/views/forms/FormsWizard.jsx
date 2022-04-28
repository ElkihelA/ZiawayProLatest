import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import StepWizard from "react-step-wizard";
import FormWizardNav from "./FormWizardNav";
import { Button } from "react-bootstrap";

class FormsWizard extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Forms", path: "/forms" },
            { name: "Forms Wizard" }
          ]}
        ></Breadcrumb>
        <div className="row">
          <div className="col-md-12">
            <StepWizard
              nav={<FormWizardNav />}
              initialStep={1}
              isHashEnabled={true}
            >
              {/* this is just for example, add your own component here */}
              <FirstComponent hashkey={"first"}></FirstComponent>
              <FirstComponent hashkey={"second"}></FirstComponent>
              <FirstComponent hashkey={"third"}></FirstComponent>
              <FirstComponent hashkey={"fourth"}></FirstComponent>
            </StepWizard>
          </div>
        </div>
      </div>
    );
  }
}

export default FormsWizard;

class FirstComponent extends Component {
  state = {};
  render() {
    let {
      nextStep,
      previousStep,
      lastStep,
      firstStep,
      currentStep,
      totalSteps
    } = this.props;

    return (
      <div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
        </div>
        <div className="d-flex justify-content-end">
          <Button className="mx-2" variant="danger" onClick={firstStep}>
            Cancel
          </Button>
          <Button
            disabled={currentStep === 1}
            className="mx-1"
            variant="info"
            onClick={previousStep}
          >
            Previous
          </Button>
          <Button
            disabled={currentStep === totalSteps}
            className="mx-1"
            variant="info"
            onClick={nextStep}
          >
            Next
          </Button>
          <Button
            disabled={false}
            className="mx-1"
            variant="primary"
            onClick={lastStep}
          >
            Finish
          </Button>
        </div>
      </div>
    );
  }
}
