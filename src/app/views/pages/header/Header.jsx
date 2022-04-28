import {
  faChevronDown,
  faChevronUp,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Nav, Navbar, Modal, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Images from "../home/assets/icons";
import { Dropdown } from "react-bootstrap";
import i18n from "i18next";
import france from "../../../../flags/france.png";
import england from "../../../../flags/english.png";
import { useTranslation, initReactI18next } from "react-i18next";

const Header = () => {
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { t } = useTranslation();

  return (
    <div className="bg-white shadow position-sticky fixed-top">
      <Container>
        <Navbar bg="white" expand="lg">
          <Navbar.Brand className="p-0" as={Link} to="/homepage">
            <img height={70} src={Images.Logo} alt=".." />
          </Navbar.Brand>
          <div className="d-lg-none">
            <button
              type="button"
              className="btn p-0"
              onClick={() => setShow(!show)}
            >
              <img height={20} width={20} src="/assets/bars.svg" alt="..." />
            </button>
          </div>
          <Navbar.Collapse className={`${show ? "show sm-menu" : ""}`}>
            {/* <Nav className="align-items-baseline"> */}
            <div className="mr-auto">
              <NavLink
                className="my-3 my-lg-0 mx-3 text-15"
                exact
                to="/homepage"
              >
                {t("Header.1")}
              </NavLink>
              <NavLink className="my-3 my-lg-0 mx-3 text-15" to="/blog">
                {t("Header.2")}
              </NavLink>
              {/* <NavLink className="my-3 my-lg-0 mx-3 text-15" to="/contact">
                Contactez-nous
              </NavLink> */}
              <NavLink className="my-3 my-lg-0 mx-3 text-15" to="/faq">
                FAQ
              </NavLink>
              <a
                className="my-3 my-lg-0 mx-3 text-15"
                href="https://blog.ziaway.ca/politique-de-confidentialit%C3%A9"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Header.7")}
              </a>
            </div>
            <div className="ml-auto">
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-basic"
                  className="d-flex align-items-center"
                >
                  <img
                    className="d-block mr-1"
                    height={15}
                    width={22}
                    src={france}
                    alt=".."
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleLanguage("sp")}>
                    <div className="d-flex align-items-center">
                      {/* <img
                        className="d-block mr-2"
                        height={15}
                        width={18}
                        src={france}
                        alt=".."
                      /> */}
                      <span>French</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguage("en")}>
                    <div className="d-flex align-items-center">
                      {/* <img
                        className="d-block mr-2"
                        height={15}
                        width={18}
                        src={england}
                        alt=".."
                      /> */}
                      <span> English</span>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="ml-auto">
              <Button onClick={() => setSmShow(true)}>
                <div className="d-flex justify-content-between align-items-center">
                  {t("Header.8")}{" "}
                  <FontAwesomeIcon
                    className="ml-2"
                    onClick={() => setSmShow(false)}
                    icon={faChevronDown}
                  />
                </div>
              </Button>
              <Modal
                className="container-xxl mx-auto"
                dialogClassName="modal-pos"
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Body>
                  <div className="d-flex justify-content-end">
                    <FontAwesomeIcon
                      onClick={() => setSmShow(false)}
                      icon={faChevronUp}
                    />
                  </div>
                  <NavLink
                    className=" my-2 btn btn-primary w-100"
                    to="/session/signin"
                  >
                    <div className="d-flex justify-content-between">
                      {t("Header.8")}
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </NavLink>
                  <a
                    className=" btn btn-primary  w-100"
                    href="https://pro.ziaway.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="d-flex justify-content-between">
                      {t("Header.9")}
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </a>
                </Modal.Body>
              </Modal>
            </div>
            {/* </Nav> */}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
