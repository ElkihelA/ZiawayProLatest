import React, { Fragment, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";
import { useSelector } from "react-redux";

// images

const PreviewModal = ({ show, onClose }) => {
  const profile = useSelector((state) => state.firebase.profile);
  const [showContactMe, setShowContactMe] = useState(false)
  const { t } = useTranslation();
  const validateURL = (link) => {
    if (link?.indexOf("http://") === 0 || link?.indexOf("https://") === 0) {
      return link;
    } else {
      let fromattedLink = `https://${link}`;
      return fromattedLink;
    }
  };

  console.log("profile", profile);

  useEffect(() => {
    if(profile.officialInformation && 
      (profile.officialInformation.facebook || profile.officialInformation.website || profile.officialInformation.insta || profile.officialInformation.linkedIn || profile.officialInformation )) {
        setShowContactMe(true)
      }
  }, [profile])

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
            <div className="d-flex align-items-center">
              <div>
                <h4>
                  Preview
                </h4>
              </div>
              <div style={{padding: "0px 15px"}} className="text-15 ml-5">
              Chaque mise en relation est une opportunité de renforcer votre notoriété et de capter de nouveaux clients. <br />
              Vérifiez les informations qui seront reçues par votre contact.
              </div>
            </div>
          </Modal.Header>
          <Modal.Body className="scroll-box">
            <div className="row">
              <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <div
                  className="border border-primary p-3 position-sticky rounded-lg"
                  style={{ top: 0 }}
                >
                  <div
                    className="mx-auto rounded-circle bg-gray-200"
                    style={{ height: "8.5rem", width: "8.5rem" }}
                  >
                    <img
                      className="p-0 w-100 h-100 d-block rounded-circle"
                      src={profile?.image}
                      alt=""
                    />
                  </div>

                  <div className="ul-widget2__title text-primary text-center text-18 mt-2">
                    {profile?.displayName}
                  </div>

                  <div
                    className="mt-1 mx-auto"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <img
                      className="p-0 w-100 h-100 d-block"
                      src={profile.logo}
                      alt=""
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="mt-2">
                    <a
                      className="text-15"
                      href={`mailto:${profile?.officialInformation?.officialEmail}`}
                    >
                      {profile?.officialInformation?.officialEmail}
                    </a>
                  </div>

                  <div className="mt-2 border-bottom pb-2">
                    <span className="text-15 font-weight-bold mr-2">
                      Agency:
                    </span>
                    <span className="text-15">
                      {profile?.regulatory?.agency}
                    </span>
                  </div>

                  <div className="mt-2 border-bottom pb-2">
                    <span className="text-15 font-weight-bold mr-2">
                      Phone:
                    </span>
                    <a
                      className="text-15"
                      href={`tel:+${profile?.officialInformation?.officialPhoneNumber}`}
                    >
                      {profile?.officialInformation?.officialPhoneNumber}
                    </a>
                  </div>

                  <div className="mt-2 border-bottom pb-2">
                    <span className="text-15 font-weight-bold mr-2">
                      Practice:
                    </span>
                    <span className="text-15">
                      {profile?.regulatory?.practice?.value}
                    </span>
                  </div>
                  <div className="mt-2">
                    <address className="text-15">
                      <span className="text-15 font-weight-bold mr-2">
                        Address:
                      </span>
                      {profile?.regulatory?.BusinessAddress?.value}
                    </address>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-row">
                  <div className="form-group col-md-12 border-bottom pb-2">
                    <b className="text-primary text-17 font-weight-bold d-block mb-2">
                      {t("NProfile.26")}:
                    </b>
                    <p className="mb-0 white-space-pre-line text-15">
                      {profile?.messages?.emailText}
                    </p>
                  </div>
                  <div className="form-group col-md-12 border-bottom pb-2">
                    <b className="text-primary text-17 font-weight-bold d-block mb-2">
                    {t("NProfile.27")}:
                    </b>
                    <p className="mb-0 white-space-pre-line text-15">
                      {profile?.messages?.smsText}
                    </p>
                  </div>
                </div>

                {showContactMe && 
                <div>
                  <b className="text-primary text-17 font-weight-bold d-block mb-2">
                    Contact Me
                  </b>
                  <div className="d-flex">
                  {profile?.email &&
                    <Button
                      href={`mailto:${profile?.email}`}
                      target="_blank"
                      className="box-icon-primary rounded-circle mr-3 d-flex align-items-center justify-content-center"
                      style={{ height: "2rem", width: "2rem" }}
                      rel="noreferrer noopener"
                    >
                      <i className="i-Mail-with-At-Sign"></i>
                    </Button>}
                    {profile?.officialInformation?.website &&
                    <Button
                      href={validateURL(profile?.officialInformation?.website)}
                      target="_blank"
                      className="box-icon-primary rounded-circle mr-3 d-flex align-items-center justify-content-center"
                      style={{ height: "2rem", width: "2rem" }}
                      rel="noreferrer noopener"
                    >
                      <i className="i-Wordpress"></i>
                    </Button>}
                    {profile?.officialInformation?.facebook && <Button
                      href={validateURL(profile?.officialInformation?.facebook)}
                      target="_blank"
                      className="box-icon-primary rounded-circle mr-3 d-flex align-items-center justify-content-center"
                      style={{ height: "2rem", width: "2rem" }}
                      rel="noreferrer noopener"
                    >
                      <i className="i-Facebook-2"></i>
                    </Button>}
                    {profile?.officialInformation?.linkedIn && <Button
                      href={validateURL(profile?.officialInformation?.linkedIn)}
                      target="_blank"
                      className="box-icon-primary rounded-circle mr-3 d-flex align-items-center justify-content-center"
                      style={{ height: "2rem", width: "2rem" }}
                      rel="noreferrer noopener"
                    >
                      <i className="i-Linkedin-2"></i>
                    </Button>}
                    {profile?.officialInformation?.insta && <Button
                      href={validateURL(profile?.officialInformation?.insta)}
                      target="_blank"
                      className="box-icon-primary rounded-circle mr-3 d-flex align-items-center justify-content-center"
                      style={{ height: "2rem", width: "2rem" }}
                      rel="noreferrer noopener"
                    >
                      <i className="i-Instagram"></i>
                    </Button>}
                    {profile?.officialInformation?.twitter && <Button
                      //   onClick={(e) => e.preventDefault()}
                      href={validateURL(profile?.officialInformation?.twitter)}
                      target="_blank"
                      className="box-icon-primary rounded-circle mr-3 d-flex align-items-center justify-content-center"
                      style={{ height: "2rem", width: "2rem" }}
                      rel="noreferrer noopener"
                    >
                      <i className="i-Twitter-2"></i>
                    </Button>}
                  </div>
                </div>}
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
