import React, { Fragment, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

// images

const PreviewModal = ({ show, onClose }) => {
  const profile = useSelector((state) => state.firebase.profile);

  const validateURL = (link) => {
    if (link?.indexOf("http://") === 0 || link?.indexOf("https://") === 0) {
      return link;
    } else {
      let fromattedLink = `https://${link}`;
      return fromattedLink;
    }
  };

  validateURL("www.yogeshchauhan.com/");

  // The link doesn't have http or https.

  return (
    <Fragment>
      {profile === null ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="spinner-bubble spinner-bubble-primary m-5"></div>
        </div>
      ) : (
        <Modal
          centered
          show={show}
          onHide={onClose}
          size="xl"
          scrollable={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body className="scroll-box">
            {/* <div className="row flex-column flex-lg-row align-items-center mx-0 mb-4">
              <span className="my-3 my-lg-0 mr-md-4">
                <img
                  height={100}
                  src={profile?.image}
                  alt="user"
                  className="rounded-circle shadow"
                />
              </span>
              <div>
                <h4 className="text-primary font-weight-bold mb-1">
                  {profile?.displayName}
                </h4>
                <h5 className="font-weight-bold">Broker</h5>
                <div className="d-flex align-items-baseline">
                  <h6 className="mr-2">
                    <b>Contact No</b> :
                  </h6>
                  <h6 className="font-weight-bold">{profile?.phoneNumber}</h6>
                </div>
              </div>
             
            </div> */}
            <div className="row mx-0 mb-3 bg-color-1 shadow-sm border py-2">
              <div className="px-2 px-md-3">
                <div style={{ height: 100, width: 100 }}>
                  <img
                    className="p-0 w-100 h-100 d-block rounded-circle"
                    src={profile?.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-md mt-2 mt-md-0 d-flex flex-column text-left">
                <div className="ul-widget5__section d-flex flex-wrap">
                  <div className="ul-widget2__title text-primary text-18 mr-auto pr-3">
                    {profile?.displayName}
                  </div>
                  <div>
                    <ul className="nav" style={{ gap: 20 }}>
                      {profile?.officialInformation?.website ? (
                        <li>
                          <a
                            href={validateURL(
                              profile?.officialInformation?.website
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="i-Wordpress h4 mb-0"></i>
                          </a>
                        </li>
                      ) : null}
                      {profile?.officialInformation?.facebook ? (
                        <li>
                          <a
                            href={validateURL(
                              profile?.officialInformation?.facebook
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="i-Facebook-2 h4 mb-0"></i>
                          </a>
                        </li>
                      ) : null}

                      {profile?.officialInformation?.linkedIn ? (
                        <li>
                          <a
                            href={validateURL(
                              profile?.officialInformation?.linkedIn
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="i-Linkedin-2 h4 mb-0"></i>
                          </a>
                        </li>
                      ) : null}

                      {profile?.officialInformation?.twitter ? (
                        <li>
                          <a
                            href={validateURL(
                              profile?.officialInformation?.twitter
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="i-Twitter h4 mb-0"></i>
                          </a>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center mt-auto">
                  <div className="d-flex flex-column">
                    <span href="#" className="">
                      Status : {profile?.regulatory?.status?.value}
                    </span>
                    <span className="t-font-boldest text-success">
                      License: {profile?.regulatory?.license}
                      <span href="#" className="ul-widget2__username">
                        {/* License: {profile?.regulatory?.license} */}
                      </span>
                    </span>
                  </div>

                  <div className="ml-auto  mt-3 mt-md-0" style={{ height: 50 }}>
                    <img
                      className="p-0 w-100 h-100 d-block"
                      src={profile.logo}
                      alt=""
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6 pr-lg-3">
                <label className="ul-form__label font-weight-bold">
                  First & Last Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={profile?.officialInformation?.officialName}
                />
              </div>
              <div className="form-group col-md-6 pl-lg-3">
                <label className="ul-form__label font-weight-bold">
                  Practice
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={profile?.regulatory?.practice?.value}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6 pr-lg-3">
                <label className="ul-form__label font-weight-bold">
                  Contact Info
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={profile?.officialInformation?.officialPhoneNumber}
                />
              </div>
              <div className="form-group col-md-6 pl-lg-3">
                <label className="ul-form__label font-weight-bold">
                  Email Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={profile?.officialInformation?.officialEmail}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-12 pr-lg-12">
                <label className="ul-form__label font-weight-bold">
                  Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={profile?.regulatory?.BusinessAddress?.value}
                />
              </div>
              {/* <div className="form-group col-md-6 pl-lg-3">
                <label className="ul-form__label font-weight-bold">
                  Status:
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={profile?.regulatory?.status?.value}
                />
              </div> */}
            </div>

            <div className="form-row">
              <div className="form-group col-md-6 pr-lg-3">
                <label className="ul-form__label font-weight-bold">
                  Email Text
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  rows={10}
                  disabled
                  value={profile?.messages?.emailText}
                />
              </div>
              <div className="form-group col-md-6 pl-lg-3">
                <label className="ul-form__label font-weight-bold">
                  SMS Text:
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  rows={10}
                  disabled
                  value={profile?.messages?.smsText}
                />
              </div>
            </div>

            {/* <div className="form-row">
              <div className="form-group col-md-6 pr-lg-3">
                <label className="ul-form__label font-weight-bold">
                  Spoken languages:
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={profile?.languages}
                />
              </div>
              <div className="form-group col-md-6 pl-lg-3">
                <label className="ul-form__label font-weight-bold">
                  Description:
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  rows="4"
                  disabled
                  value={profile?.description}
                />
              </div>
            </div> */}
            <div className="text-center">
              <h4>Contact Me</h4>
              <div className="d-flex justify-content-center">
                {/* <Button
                  className="box-icon-primary rounded-circle mr-3"
                >
                  <i className="i-Email"></i>
                </Button> */}
                <Button
                  href={validateURL(profile?.officialInformation?.website)}
                  target="_blank"
                  className="box-icon-primary rounded-circle mr-3 d-flex align-items-center justify-content-center"
                  style={{ height: "2rem", width: "2rem" }}
                  rel="noreferrer noopener"
                >
                  <i className="i-Wordpress"></i>
                </Button>
                <Button
                  href={validateURL(profile?.officialInformation?.facebook)}
                  target="_blank"
                  className="box-icon-primary rounded-circle mr-3 d-flex align-items-center justify-content-center"
                  style={{ height: "2rem", width: "2rem" }}
                  rel="noreferrer noopener"
                >
                  <i className="i-Facebook-2"></i>
                </Button>
                <Button
                  href={validateURL(profile?.officialInformation?.linkedIn)}
                  target="_blank"
                  className="box-icon-primary rounded-circle mr-3 d-flex align-items-center justify-content-center"
                  style={{ height: "2rem", width: "2rem" }}
                  rel="noreferrer noopener"
                >
                  <i className="i-Linkedin-2"></i>
                </Button>
                <Button
                  href={validateURL(profile?.officialInformation?.insta)}
                  target="_blank"
                  className="box-icon-primary rounded-circle mr-3 d-flex align-items-center justify-content-center"
                  style={{ height: "2rem", width: "2rem" }}
                  rel="noreferrer noopener"
                >
                  <i className="i-Instagram"></i>
                </Button>
                <Button
                  //   onClick={(e) => e.preventDefault()}
                  href={validateURL(profile?.officialInformation?.twitter)}
                  target="_blank"
                  className="box-icon-primary rounded-circle mr-3 d-flex align-items-center justify-content-center"
                  style={{ height: "2rem", width: "2rem" }}
                  rel="noreferrer noopener"
                >
                  <i className="i-Twitter-2"></i>
                </Button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Fragment>
  );
};

export default PreviewModal;
