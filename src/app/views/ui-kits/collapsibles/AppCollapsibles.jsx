import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Accordion, Button, Card } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";
import RightArrowAccordion from "@gull/components/accordions/RightArrowAccordion";

class AppCollapsible extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Collapsibles" }
          ]}
        ></Breadcrumb>

        <div className="mb-3">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <Accordion>
                <div className="card card-body ul-border__bottom">
                  <div className="text-center">
                    <h5 className="heading text-primary">
                      Inline or block element
                    </h5>
                    <p className="mb-3 text-muted">
                      Example of inline text toggler
                    </p>

                    <Accordion.Toggle
                      eventKey={0}
                      as="span"
                      className="t-font-boldest ul-cursor--pointer"
                    >
                      Toggle content
                    </Accordion.Toggle>
                  </div>

                  <Accordion.Collapse eventKey={0}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
            <div className="col-lg-4 mb-3">
              <Accordion>
                <div className="card card-body ul-border__bottom">
                  <div className="text-center">
                    <h5 className="heading text-primary">
                      Text and other links
                    </h5>
                    <p className="mb-3 text-muted">
                      Example of a simple <code>&lt;a&gt;</code> element
                    </p>

                    <Accordion.Toggle
                      as="a"
                      eventKey={1}
                      className="font-weight-semibold collapsed typo_link text-primary t-font-boldest cursor-pointer"
                    >
                      Toggle content
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey={1}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>

            <div className="col-lg-4 mb-3">
              <Accordion>
                <div className="card card-body ul-border__bottom">
                  <div className="text-center">
                    <h5 className="heading text-primary">
                      Single or multiple icons
                    </h5>
                    <p className="mb-3 text-muted">
                      Icons in block or inline elements
                    </p>

                    <Accordion.Toggle
                      as="a"
                      eventKey={2}
                      className="text-default collapsed cursor-pointer"
                    >
                      <i className="i-Arrow-Down-2 t-font-boldest"></i>
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey={2}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-4 mb-3">
              <Accordion>
                <div className="card card-body  ul-border__bottom">
                  <div className="text-center">
                    <h5 className="heading text-primary">Button</h5>
                    <p className="mb-3 text-muted">
                      Control toggle with buttons
                    </p>
                    <Accordion.Toggle as={Button} eventKey={3}>
                      Toggle content
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey={3}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
            <div className="col-lg-4  mb-3">
              <Accordion>
                <div className="card card-body  ul-border__bottom">
                  <div className="text-center">
                    <h5 className="heading text-primary">Button</h5>
                    <p className="mb-3 text-muted">
                      Control toggle with buttons
                    </p>
                    <Accordion.Toggle as={Button} eventKey={4}>
                      Toggle content
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey={4}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
            <div className="col-lg-4  mb-3">
              <Accordion>
                <div className="card card-body  ul-border__bottom">
                  <div className="text-center">
                    <h5 className="heading text-primary">Button</h5>
                    <p className="mb-3 text-muted">
                      Control toggle with buttons
                    </p>
                    <Accordion.Toggle as={Button} eventKey={4}>
                      Toggle content
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey={4}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-4 mb-3">
              <Accordion activeKey={3}>
                <div className="card card-body  ul-border__bottom">
                  <div className="text-center">
                    <h5 className="heading text-primary">Button</h5>
                    <p className="mb-3 text-muted">
                      Expanded content by default
                    </p>
                    <Accordion.Toggle as={Button} eventKey={3}>
                      Toggle content
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey={3}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
            <div className="col-lg-4  mb-3">
              <Accordion activeKey={4}>
                <div className="card card-body  ul-border__bottom">
                  <div className="text-center">
                    <h5 className="heading text-primary">Button</h5>
                    <p className="mb-3 text-muted">
                      Expanded content by default
                    </p>
                    <Accordion.Toggle as={Button} eventKey={4}>
                      Toggle content
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey={4}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
            <div className="col-lg-4  mb-3">
              <Accordion activeKey={4}>
                <div className="card card-body  ul-border__bottom">
                  <div className="text-center">
                    <h5 className="heading text-primary">Button</h5>
                    <p className="mb-3 text-muted">
                      Expanded content by default
                    </p>
                    <Accordion.Toggle as={Button} eventKey={4}>
                      Toggle content
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey={4}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <SimpleCard
                className="mb-3"
                title="Basic collapsible"
                subtitle="Basic collapsible functionality"
              >
                {[1, 2, 3].map(id => (
                  <Card key={id} className="mb-3 shadow-sm">
                    <Accordion>
                      <Card.Header>
                        <Accordion.Toggle
                          className="cursor-pointer mb-0 text-primary"
                          as="span"
                          eventKey={4}
                        >
                          Collapsible Item #{id}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={4}>
                        <Card.Body>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Accordion>
                  </Card>
                ))}
              </SimpleCard>
            </div>

            <div className="col-lg-6">
              <SimpleCard
                className="mb-3"
                title="Collapsible Group"
                subtitle="Display cards as card group"
              >
                <Accordion>
                  {[1, 2, 3].map(id => (
                    <Card key={id} className="shadow-sm">
                      <Card.Header>
                        <Accordion.Toggle
                          className="cursor-pointer mb-0 text-primary"
                          as="span"
                          eventKey={id.toString()}
                        >
                          Collapsible Item #{id}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={id.toString()}>
                        <Card.Body>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ))}
                </Accordion>
              </SimpleCard>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-6">
              <SimpleCard
                className="mb-3"
                title="Accordion With Controls"
                subtitle="Using card controls"
              >
                {[1, 2, 3].map(id => (
                  <Card key={id} className="shadow-sm mb-3">
                    <Accordion>
                      <Card.Header className="d-flex align-items-center justify-content-between">
                        <Accordion.Toggle
                          className="cursor-pointer mb-0 text-primary"
                          as="span"
                          eventKey={id.toString()}
                        >
                          Collapsible Item #{id}
                        </Accordion.Toggle>
                        <div className="d-flex">
                          <i className="mx-1 i-Reload"> </i>
                          <i className="mx-1 i-Drag"> </i>
                          <i className="mx-1 i-Full-Screen-2"></i>
                          <i className="mx-1 i-Close-Window"></i>
                        </div>
                      </Card.Header>
                      <Accordion.Collapse eventKey={id.toString()}>
                        <Card.Body>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Accordion>
                  </Card>
                ))}
              </SimpleCard>
            </div>

            <div className="col-lg-6">
              <SimpleCard
                className="mb-3"
                title="Left control icon"
                subtitle="Using left controls"
              >
                {[1, 2, 3].map(id => (
                  <Accordion key={id} className="mb-3">
                    <RightArrowAccordion
                      title={`Collapsible item ${id}`}
                      eventKey={id.toString()}
                    >
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </RightArrowAccordion>
                  </Accordion>
                ))}
              </SimpleCard>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-6">
              <SimpleCard
                className="mb-3"
                title="Nested Collapsible"
                subtitle="Multiple collapsibles levels"
              >
                <Accordion defaultActiveKey={1}>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey={1}
                    className="cursor-pointer"
                  >
                    Parent Collapsible Item #1
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={1}>
                    <Card.Body>
                      {[1, 2, 3].map(id => (
                        <Accordion key={id} className="mb-3">
                          <Accordion.Toggle
                            as={Card.Header}
                            eventKey={id.toString()}
                            className="cursor-pointer"
                          >
                            Collapsible Child #{id}
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={id.toString()}>
                            <Card.Body>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </Card.Body>
                          </Accordion.Collapse>
                        </Accordion>
                      ))}
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </SimpleCard>
            </div>

            <div className="col-lg-6">
              <SimpleCard
                className="mb-3"
                title="Styled Collapsible"
                subtitle="Collapsible with different color heading"
              >
                {["danger", "success", "primary"].map((color, id) => (
                  <Accordion key={id} className="mb-3">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={id.toString()}
                      className={`cursor-pointer text-white bg-${color}`}
                    >
                      Collapsible Item #{id + 1}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={id.toString()}>
                      <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                ))}
              </SimpleCard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppCollapsible;
