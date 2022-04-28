import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="flex-grow-1"></div>
      <div className="app-footer">
        <div className="row">
          <div className="col-md-9">
            <p>
              <strong>Gull - Laravel + Bootstrap 4 admin template</strong>
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              quis beatae officia saepe perferendis voluptatum minima eveniet
              voluptates dolorum, temporibus nisi maxime nesciunt totam
              repudiandae commodi sequi dolor quibusdam sunt.
            </p>
          </div>
        </div>
        <div className="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
          <a
            id="buy-gull"
            className="btn btn-primary text-white btn-rounded"
            href="https://themeforest.net/user/mh_rafi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Gull React
          </a>
          <span className="flex-grow-1"></span>
          <div className="d-flex align-items-center">
            <img className="logo" src="/assets/images/logo.png" alt="" />
            <div>
              <p className="m-0">&copy; 2019 Gull HTML</p>
              <p className="m-0">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
