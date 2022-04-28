import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import {
  Accordion,
  Card,
  AccordionToggle,
  AccordionCollapse
} from "react-bootstrap";
import { classList } from "@utils";
import { Link } from "react-router-dom";

class FAQ extends Component {
  state = {
    openItem: "",
    questionList: [
      "Where can I buy Gull React from?",
      "Do I have right to use it in another template?",
      "What are the benefits that will be provided?",
      "How long shall I get support?"
    ]
  };

  setOpenItem = name => {
    if (name === this.state.openItem) {
      this.setState({ openItem: "" });
    } else this.setState({ openItem: name });
  };

  render() {
    let { openItem, questionList } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/pages" },
            { name: "FAQ" }
          ]}
        ></Breadcrumb>

        <section class="ul-faq__content">
          <div class="row">
            <div class="col-lg-12 col-xl-12">
              <div class="card">
                <div class="card-body">
                  <div class="row justify-content-md-center">
                    <div class="col-lg-10 col-xl-10">
                      <div class="ul-faq__details">
                        <h3 class="headding t-font-bold">
                          Do you have any questions ?
                        </h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>

                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span
                              class="input-group-text bg-transparent"
                              id="basic-addon1"
                            >
                              <i class="i-Search-People"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="search..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4 mb-4">
            <div class="col-lg-4 col-xl-4 mt-3 mb-3">
              <div class="card">
                <div class="ul-faq__list-details">
                  <div class="card-body">
                    <div class="card-title">List of Table</div>
                    <div class="ul-widget-s6__items">
                      <div class="ul-widget-s6__item">
                        <span class="ul-widget-s6__badge">
                          <p class="badge-dot-primary ul-widget6__dot"></p>
                        </span>
                        <span class="ul-widget-s6__text">
                          <Link to="/"> Customer Product</Link>
                        </span>
                      </div>
                      <div class="ul-widget-s6__item">
                        <span class="ul-widget-s6__badge">
                          <p class="badge-dot-success ul-widget6__dot"></p>
                        </span>
                        <span class="ul-widget-s6__text">
                          <Link to="/"> Brand Name</Link>
                        </span>
                      </div>

                      <div class="ul-widget-s6__item">
                        <span class="ul-widget-s6__badge">
                          <p class="badge-dot-warning ul-widget6__dot"></p>
                        </span>
                        <span class="ul-widget-s6__text">
                          <Link to="/"> New Brand </Link>
                        </span>
                      </div>
                      <div class="ul-widget-s6__item">
                        <span class="ul-widget-s6__badge">
                          <p class="badge-dot-danger ul-widget6__dot"></p>
                        </span>
                        <span class="ul-widget-s6__text">
                          <Link to="/"> New Product </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mt-4">
                <div class="card-body">
                  <div class="card-title">Supporters</div>

                  <div class="ul-widget1">
                    <div class="ul-widget4__item ul-widget4__users">
                      <div class="ul-widget4__img">
                        <img
                          src="/assets/images/faces/1.jpg"
                          id="userDropdown"
                          alt=""
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        />
                      </div>
                      <div class="ul-widget2__info ul-widget4__users-info">
                        <a href="#" class="ul-widget2__title">
                          Anna Strong
                        </a>
                        <span href="#" class="ul-widget2__username">
                          Visual Designer,Google Inc
                        </span>
                      </div>
                    </div>

                    <div class="ul-widget4__item ul-widget4__users">
                      <div class="ul-widget4__img">
                        <img
                          src="/assets/images/faces/2.jpg"
                          id="userDropdown"
                          alt=""
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        />
                      </div>
                      <div class="ul-widget2__info ul-widget4__users-info">
                        <a href="#" class="ul-widget2__title">
                          Anna Strong
                        </a>
                        <span href="#" class="ul-widget2__username">
                          Visual Designer,Google Inc
                        </span>
                      </div>
                    </div>

                    <div class="ul-widget4__item ul-widget4__users">
                      <div class="ul-widget4__img">
                        <img
                          src="/assets/images/faces/3.jpg"
                          id="userDropdown"
                          alt=""
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        />
                      </div>
                      <div class="ul-widget2__info ul-widget4__users-info">
                        <a href="#" class="ul-widget2__title">
                          Anna Strong
                        </a>
                        <span href="#" class="ul-widget2__username">
                          Visual Designer,Google Inc
                        </span>
                      </div>
                    </div>

                    <div class="ul-widget4__item ul-widget4__users">
                      <div class="ul-widget4__img">
                        <img
                          src="/assets/images/faces/4.jpg"
                          id="userDropdown"
                          alt=""
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        />
                      </div>
                      <div class="ul-widget2__info ul-widget4__users-info">
                        <a href="#" class="ul-widget2__title">
                          Anna Strong
                        </a>
                        <span href="#" class="ul-widget2__username">
                          Visual Designer,Google Inc
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-xl-8 mt-3 mb-3">
              <div class="card">
                <div class="card-body">
                  <Accordion>
                    {["a", "b", "c", "d"].map((key, ind) => (
                      <Card className="ul-card__border-radius mb-2" key={key}>
                        <Card.Header className="d-flex align-items-center justify-content-between">
                          <AccordionToggle
                            as="span"
                            eventKey={key}
                            onClick={() => this.setOpenItem(key)}
                            className="cursor-pointer"
                          >
                            <div className="card-title mb-0 text-primary">
                              {questionList[ind]}
                            </div>
                          </AccordionToggle>
                          <AccordionToggle
                            as="span"
                            eventKey={key}
                            onClick={() => this.setOpenItem(key)}
                            className="cursor-pointer"
                          >
                            <i
                              className={classList({
                                "text-primary text-16": true,
                                "i-Arrow-Down": !(openItem === key),
                                "i-Arrow-Up": openItem === key
                              })}
                            ></i>
                          </AccordionToggle>
                        </Card.Header>
                        <AccordionCollapse eventKey={key}>
                          <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </Card.Body>
                        </AccordionCollapse>
                      </Card>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FAQ;
