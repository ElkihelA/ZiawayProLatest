import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import {
  Row,
  Col,
  Tab,
  Tabs,
  Nav,
  Dropdown,
  ProgressBar
} from "react-bootstrap";

class WeatherWidget extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Widgets", path: "/widgets" },
            { name: "Weather" }
          ]}
        ></Breadcrumb>
        <div className="row">
          <div className="col-lg-12 col-xl-12 mb-4">
            <div className="card o-hidden">
              <div className="weather-card-1">
                <div className="ul-weather-card__img-overlay">
                  <div className="ul-weather-card__weather-time">
                    <div className="text-white">
                      <i className="i-Cloud-Sun display-4"></i> <br />
                      <span className="display-5">
                        30 <sup>o</sup>
                      </span>
                      <span>
                        C /9<sup>o</sup> C
                      </span>
                      <p className="">SATURDAY 01.08.2019</p>
                    </div>
                  </div>
                </div>
                <div className="ul-weather-card__weather-info">
                  <div className="row text-center">
                    <div className="col-6 col-md-2">
                      <div className="">SAT</div>
                      <div className="">
                        <i className="i-Cloud-Weather"></i>
                      </div>
                      <div className="">
                        12 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">SUN</div>
                      <div className="">
                        <i className="i-Cloud-Settings"></i>
                      </div>
                      <div className="">
                        23 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">MON</div>
                      <div className="">
                        <i className="i-Cloud-Weather"></i>
                      </div>
                      <div className="">
                        17 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">TUE</div>
                      <div className="">
                        <i className="i-Clouds"></i>
                      </div>
                      <div className="">
                        23 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">WED</div>
                      <div className="">
                        <i className="i-Clouds-Weather"></i>
                      </div>
                      <div className="">
                        27 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">THU</div>
                      <div className="">
                        <i className="i-Cloud-Sun"></i>
                      </div>
                      <div className="">
                        38 <sup>o</sup>C
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-6 mb-4">
            <div className="card bg-primary">
              <div className="card-body">
                <div className="row text-center">
                  <div className="col-12 col-md-12">
                    <div className="text-white ">
                      <h4 className="card-title text-white">Lester, London</h4>
                      <h5 className="font-light text-white">
                        MONDAY May 11, 2017
                      </h5>
                    </div>
                    <div className="mt-4">
                      <span className="text-white">
                        <i className="i-Cloud-Sun display-4"></i>
                      </span>
                      <div className="d-inline-block ml-3">
                        <h2 className="text-white"> 29° C</h2>
                        <h4 className="text-white">Day Rain</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ul-weather-card__weather-info text-white mt-4">
                  <div className="row text-center">
                    <div className="col-6 col-md-2">
                      <div className="">SAT</div>
                      <div className="">
                        <i className="i-Cloud-Weather"></i>
                      </div>
                      <div className="">
                        12 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">SUN</div>
                      <div className="">
                        <i className="i-Cloud-Settings"></i>
                      </div>
                      <div className="">
                        23 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">MON</div>
                      <div className="">
                        <i className="i-Cloud-Weather"></i>
                      </div>
                      <div className="">
                        17 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">TUE</div>
                      <div className="">
                        <i className="i-Clouds"></i>
                      </div>
                      <div className="">
                        23 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">WED</div>
                      <div className="">
                        <i className="i-Clouds-Weather"></i>
                      </div>
                      <div className="">
                        27 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">THU</div>
                      <div className="">
                        <i className="i-Cloud-Sun"></i>
                      </div>
                      <div className="">
                        38 <sup>o</sup>C
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 mb-4">
            <div className="card">
              <div className="card-header bg-success p-3">
                <div className="ul-weather-card__header">
                  <i className="i-Map-Marker ul-weather-card__font-md text-white mr-2"></i>
                  <span className="t-font-bolder">California</span>
                </div>
              </div>
              <div className="card-body">
                <div className="ul-weather-card__calendar">
                  <div className="ul-weather-card__calendar-time">
                    <h5 className="text-mute">Fri 20/5</h5>
                    <h2>
                      27<sup>o</sup> C
                    </h2>
                  </div>
                  <div className="text-right">
                    <i className="i-Clouds display-4 text-mute t-font-boldest"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-body">
                <div className="ul-weather-card__calendar-2">
                  <div className="text-left">
                    <i className="i-Cloud-Sun display-4 text-mute t-font-boldest"></i>
                    <br />
                    <i className="i-Map-Marker t-font-bolder mt-1 text-mute"></i>
                    <span className="t-font-bolder text-mute">California</span>
                  </div>
                  <div className="ul-weather-card__calendar-time">
                    <h5 className="text-mute">Fri 20/5</h5>
                    <h2>
                      27<sup>o</sup> C
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
            <div className="card ul-weather-card__card-group o-hidden">
              <div className="row">
                <div className="col-6 ul-weather-card__both-group bg-dark text-center">
                  <div className="d-inline-block ml-3">
                    <h2 className="text-white"> 29° C</h2>
                    <h4 className="text-white">California, U.S</h4>
                  </div>
                </div>
                <div className="col-6 ul-weather-card__both-group">
                  <div className="ul-weather-card__icon-center text-center ">
                    <i className="i-Cloud-Sun display-4 text-mute t-font-boldest"></i>
                  </div>
                  <div className="ul-weather-card__info">
                    <span className="t-font-bold">40 kmph</span>
                    <span className="t-font-bold mr-3">60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-6 mb-4 ">
            <div className="row">
              <div className="col-md-6 text-center">
                <div className="card bg-danger p-5">
                  <div className="d-inline-block ml-3">
                    <h2 className="text-white"> 29° C</h2>
                    <h4 className="text-white">California, U.S</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="card bg-danger p-5">
                  <div className="ul-weather-card__icon-center text-center ">
                    <i className="i-Cloud-Sun display-4 text-white t-font-boldest"></i>
                  </div>
                  <h5 className="t-font-bold text-white mt-2">12.11.2019</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 mb-4">
            <div className="card o-hidden">
              <div className="ul-weather-card__bg-img">
                <img
                  src="/assets/images/products/weather.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="ul-weather-card__img-overlay-2">
                <div className="d-flex no-block align-items-center">
                  <h5 className="t-font-bold text-white">California, U.S</h5>
                  <div className="ml-auto">
                    <span>
                      <i className="i-Map-Marker mr-2 ul-weather-card__font-md "></i>
                    </span>
                  </div>
                </div>
                <div className="d-inline-block">
                  <span className="display-5 font-25">
                    30 <sup>o</sup>
                  </span>
                  <span className="font-25">
                    C /9<sup>o</sup> C
                  </span>
                </div>
                <div className="mt-3">
                  <h5 className="text-white">WEDNESDAY</h5>
                  <h6 className="text-white">1.8.2018</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-6 text-center mb-4">
            <div className="card o-hidden mb-4">
              <div className="card-header indigo-400">
                <div className="d-inline-block">
                  <i className="i-Cloud-Sun display-4 text-white t-font-boldest mr-3"></i>
                  <span className="display-5 font-25 text-white">
                    30<sup>o</sup>
                  </span>
                  <span className="font-25 text-white">
                    C /9<sup>o</sup> C
                  </span>
                </div>
              </div>
              <div className="card-title ul-weather-card__footer-color mt-2  bg-white">
                22 April 2019
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 mb-4">
            <div className="card o-hidden">
              <div className="card-header pink-500 text-center">
                <div className="d-inline-block">
                  <span className="display-5 font-25 text-white">
                    3<sup>o</sup>
                  </span>
                  <span className="font-25 text-white">
                    C /9<sup>o</sup> C
                  </span>
                  <i className="i-Clouds display-4 text-white t-font-boldest ml-3"></i>
                </div>
              </div>
              <div className="card-title ul-weather-card__footer-color-2  bg-white">
                <div className="ul-weather-card__info mt-2">
                  <span className="t-font-bold ml-2 t-font-boldest">
                    40 kmph
                  </span>
                  <span className="t-font-bold mr-2 t-font-boldest">60%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-6 text-center mb-4">
            <div className="card o-hidden mb-4">
              <div className="card-header teal-300 p-5">
                <div className="ul-weather-card__grid-style">
                  <i className="i-Cloud-Sun display-4 t-font-boldest text-white mr-3"></i>
                  <span className="display-5 font-25 text-white ">
                    30<sup>o</sup>
                  </span>
                  <span className="mr-3 text-white ul-weather-card__weather-s-title">
                    Sunny
                  </span>
                </div>
              </div>
              <div className="card-footer ul-weather-card__footer-color-3 bg-white">
                <h4 className="t-font-bolder">California, U.S</h4>
                <h5 className="">Today, 07:30AM</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="card">
              <div className="card-body text-center p-4">
                <i className="i-Clouds display-4 t-font-boldest text-mute mr-3"></i>
              </div>
              <div className="card-footer bg-dark">
                <div className="ul-weather-card__footer">
                  <div className="d-flex no-block align-items-center">
                    <div className="text-center">
                      <h3 className="text-white">
                        <i className="text-success i-Arrow-Up t-font-boldest"></i>
                        24° C
                      </h3>
                      <h5 className="text-white">High</h5>
                    </div>
                    <div className="ml-auto">
                      <div className="text-center">
                        <h3 className="text-white">
                          <i className="text-danger i-Arrow-Down t-font-boldest"></i>
                          7° C
                        </h3>
                        <h5 className="text-white">Low</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    );
  }
}

export default WeatherWidget;
