import React from "react";
import { Container, Form, FormControl, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-4 bg-primary">
      <Container>
        <div className="col-xl-9 px-0 mx-auto">
          <div>
            <h2 className="text-white">{t("footer.1")}</h2>
            {/* <h2 className="text-white-50">
              Inscrivez-vous à notre infolettre.
            </h2> */}
          </div>
          {/* <div className="mt-4 address-input">
            <label className="text-white mb-1">
              Écrivez votre adresse courriel *
            </label>
            <Form inline>
              <FormControl
                size="lg"
                type="text"
                placeholder="Votre courriel ici"
                className="flex-fill mr-sm-3 mb-3 mb-sm-0"
              />
              <Button size="lg" variant="outline-gray-100">
                Souscrire
              </Button>
            </Form>
          </div> */}
          <div className="d-flex align-items-baseline mt-4">
            <Nav className="align-items-baseline">
              <li className="nav-item mr-2 mr-md-5 text-white text-18">
                {t("footer.2")}
              </li>
              <li className="nav-item mr-2 mr-md-5">
                <NavLink
                  className="text-white text-underline"
                  exact
                  to="/homepage"
                >
                  {t("footer.3")}
                </NavLink>
              </li>
              <li className="nav-item mr-2 mr-md-5">
                <NavLink className="text-white text-underline" exact to="/blog">
                  {t("footer.4")}
                </NavLink>
              </li>
              <li className="nav-item mr-2 mr-md-5">
                <NavLink
                  className="text-white text-underline"
                  exact
                  to="/contact"
                >
                  {t("footer.5")}
                </NavLink>
              </li>
              <li className="nav-item mr-2 mr-md-5">
                <NavLink className="text-white text-underline" exact to="/faq">
                  {t("footer.6")}
                </NavLink>
              </li>
            </Nav>
          </div>
        </div>

        <div className="text-white text-center mt-5">{t("footer.7")}</div>
      </Container>
    </footer>
  );
};

export default Footer;
