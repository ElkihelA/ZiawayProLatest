import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import Images from "../assets/icons";
import { useTranslation } from "react-i18next";

const SectionThree = () => {
  const { t } = useTranslation();
  const data = [
    {
      image: Images.Icon1,
      text: `${t("home-1.25")}`,
    },
    {
      image: Images.Icon2,
      text: `${t("home-1.26")}`,
    },
    {
      image: Images.Icon3,
      text: `${t("home-1.27")}`,
    },
    {
      image: Images.Icon4,
      text: `${t("home-1.28")}`,
    },
  ];

  return (
    <section className="home-section-three mt-lg-5 p-home">
      <Container>
        <div className="text-center mb-5">
          <div>
            <h1 className="display-5 d-none d-lg-block text-primary font-weight-bold mb-1">
              {t("home-1.17")}
            </h1>
            <h2 class="d-lg-none text-primary font-weight-bold mb-1">
              {t("home-1.17")}
            </h2>
          </div>

          <div>
            <h2 className="d-none d-lg-block text-primary font-weight-bold">
              {t("home-1.18")}
            </h2>
            <h3 className="d-lg-none text-primary font-weight-bold">
              {t("home-1.18")}
            </h3>
          </div>
        </div>
        <div className="p-sec row row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-center text-center">
          {data.map((data) => (
            <div className="col col-md-6 col-lg mb-4 mb-lg-0">
              <div className="icon-hover">
                <img height="70px" src={data.image} alt="..." />
                <h5 className="mb-0 mt-4 font-weight-bold">{data.text}</h5>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="row mt-5">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <div style={{ height: 260 }}>
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url="https://www.youtube.com/watch?v=WzKp4iOOOTg"
                />
              </div>
            </div>
            <div className="col">
              <div>
                <h4 className="mb-4 font-weight-bold text-primary">
                  {t("home-1.19")}
                </h4>
                <h5 className="line-height-2">{t("home-1.20")}</h5>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <div style={{ height: 260 }}>
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url="https://www.youtube.com/watch?v=2fNKovNjcic"
                />
              </div>
            </div>
            <div className="col">
              <div>
                <h4 className="mb-4 font-weight-bold text-primary">
                  {t("home-1.21")}
                </h4>
                <h5 className="line-height-2">{t("home-1.22")}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-5 text-center fade-in-bottom">
          <div className="col-12 col-lg-5 mx-auto">
            <Link className="btn btn-primary btn-block py-3">
              <h4 className="mb-0 text-white d-none d-md-block">
                {t("home-1.23")}
              </h4>
              <h6 className="mb-0 text-white d-md-none font-weight-bold">
                {t("home-1.23")}
              </h6>
            </Link>
            <h4 className="text-primary mb-0 mt-3">{t("home-1.24")}</h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionThree;
