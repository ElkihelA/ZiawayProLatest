import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Carousel } from "react-bootstrap";

class AppCarousel extends Component {
  state = {
    carouselImageList: [
      "/assets/images/products/iphone-1.jpg",
      "/assets/images/products/headphone-1.jpg",
      "/assets/images/products/iphone-1.jpg"
    ]
  };

  render() {
    let { carouselImageList } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Carousel" }
          ]}
        ></Breadcrumb>

        <div className="mb-3">
          <div className="row mb-4">
            <div className="col-md-6">
              <p>
                use a large block of connected links for our pagination, making
                links hard to miss and easily scalable—all while providing large
                hit areas. Pagination is built with list HTML elements so screen
                readers can announce the number of available links. Use a
                wrapping
                <code>nav</code> element to identify it as a navigation section
                to screen readers and other assistive technologies.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card text-left">
                <div className="card-body">
                  <h4 className="card-title mb-3">
                    Basic Carousel With Control
                  </h4>
                  <p>
                    can also add the indicators to the carousel, alongside the
                    controls, too
                  </p>

                  <Carousel indicators={false}>
                    {carouselImageList.map((img, ind) => (
                      <Carousel.Item key={ind}>
                        <img
                          className="d-block w-100"
                          src={img}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card text-left">
                <div className="card-body">
                  <h4 className="card-title mb-3">Carousel With Indicators</h4>
                  <p>Adding in the previous and next controls</p>
                  <Carousel>
                    {carouselImageList.map((img, ind) => (
                      <Carousel.Item key={ind}>
                        <img
                          className="d-block w-100"
                          src={img}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card text-left">
                <div className="card-body">
                  <h4 className="card-title mb-3"> Carousel With Caption</h4>
                  <p>
                    Add captions to your slides easily with the
                    <code>{`<Carousel.Caption>`}</code> element within any
                    <code>{`<Carousel.Item>`}</code> . They can be easily hidden
                    on smaller viewports, as shown below, with optional display
                    utilities.
                  </p>
                  <Carousel indicators={false}>
                    {carouselImageList.map((img, ind) => (
                      <Carousel.Item key={ind}>
                        <img
                          className="d-block w-100"
                          src={img}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h5 className="text-white">
                            Add captions to your slides easily
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card text-left">
                <div className="card-body">
                  <h4 className="card-title mb-3">Carousel With CrossFade</h4>
                  <p>
                    Add <code>{`fade={true}`}</code> to your carousel component
                    to animate slides with a fade transition instead of a slide.
                  </p>
                  <Carousel fade={true}>
                    {carouselImageList.map((img, ind) => (
                      <Carousel.Item key={ind}>
                        <img
                          className="d-block w-100"
                          src={img}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h5 className="text-white">
                            Add captions to your slides easily
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppCarousel;
