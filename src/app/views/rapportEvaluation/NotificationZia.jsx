import React, { useState } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { MajAvis } from "app/redux/actions/RapportEvaluationActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

const NotificationZia = (props) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(true);

  const handleAvis = (avis) => {
    console.log("props notification", props);
    props.MajAvis({
      idRapport: props.idRapport,
      avisEstimation: avis,
      t,
    });
    setShow(false);
  };

  return (
    <>
      <Alert show={show} variant="light">
        <Alert.Heading className="text-center">
          {t("notification.1")}{" "}
        </Alert.Heading>
        {/* <p>
          {t("notification.2")}
          <br /> {t("notification.3")}
        </p> */}
        <hr className="my-3" />
        <div className="d-flex flex-wrap justify-content-center">
          <Button
            className="btn-rounded m-1"
            onClick={() => handleAvis("Trop bas")}
            variant="primary"
          >
            {t("notification.4")}
          </Button>
          <Button
            className="btn-rounded m-1"
            onClick={() => handleAvis("Bas")}
            variant="primary"
          >
            {t("notification.5")}
          </Button>
          <Button
            className="btn-rounded m-1"
            onClick={() => handleAvis("Juste")}
            variant="warning"
          >
            {t("notification.6")}
          </Button>
          <Button
            className="btn-rounded m-1"
            onClick={() => handleAvis("Haut")}
            variant="primary"
          >
            {t("notification.7")}
          </Button>
          <Button
            className="btn-rounded m-1"
            onClick={() => handleAvis("Trop haut")}
            variant="primary"
          >
            {t("notification.8")}
          </Button>
        </div>
      </Alert>
    </>
  );
};

const mapStateToProps = (state) => ({
  MajAvis: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, {
  MajAvis,
})(NotificationZia);
