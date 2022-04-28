import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../images/logo.png";
import { useTranslation } from "react-i18next";

export const SectionNavbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Navbar bg="white" expand="md" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <img height={50} src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              className="font-weight-bold mx-3"
              target="_blank"
              href="https://blog.ziaway.ca/acheteurs/"
            >
              {t("landing_nav.1")}
            </Nav.Link>
            <Nav.Link
              className="font-weight-bold mx-3"
              href="https://blog.ziaway.ca/vendeurs/"
              target="_blank"
            >
              {t("landing_nav.2")}
            </Nav.Link>
            <NavDropdown
              className="font-weight-bold mx-3"
              title="About"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                href="https://blog.ziaway.ca/a-propos/"
                target="_blank"
              >
                {t("landing_nav.3")}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://blog.ziaway.ca/nous-contacter/"
                target="_blank"
              >
                {t("landing_nav.4")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className="font-weight-bold mx-3"
              href="https://blog.ziaway.ca/faq/"
              target="_blank"
            >
              {t("landing_nav.5")}
            </Nav.Link>
            <Nav.Link
              className="font-weight-bold mx-3"
              href="https://blog.ziaway.ca/blog/"
              target="_blank"
            >
              {t("landing_nav.6")}
            </Nav.Link>
            <Link to="/evaluation-bien">
              <Button size="lg" variant="primary" className="px-3 ml-3 ">
                {t("landing_nav.7")}
              </Button>
            </Link>
            <Dropdown as={ButtonGroup} size="sm" className="px-3 ml-3">
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Language
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleLanguage("sp")}>
                  Spanish
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguage("en")}>
                  English
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
