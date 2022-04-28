import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SectionTwo = () => {
  const { t } = useTranslation();
  const data = [
    {
      image:
        "https://static.wixstatic.com/media/11062b_c67c4c3dcda740959759338d1edd6a86~mv2.jpg/v1/crop/x_207,y_0,w_3514,h_2618/fill/w_383,h_285,al_c,q_80,usm_0.66_1.00_0.01/Couple%20travaillant%20ensemble.webp",
      subTitle: `${t("home-1.5")}`,
      title: `${t("home-1.6")}`,
      text: (
        <>
          <p>{t("home-1.7")}</p>
        </>
      ),
      textPrimary: `${t("home-1.8")}`,
      colClassName: "col-md-6 col-lg",
    },
    {
      image:
        "https://static.wixstatic.com/media/nsplsh_624e5f546b656461427551~mv2_d_5346_3564_s_4_2.jpg/v1/fill/w_383,h_285,al_c,q_80,usm_0.66_1.00_0.01/Image%20de%20Bernadette%20Gatsby.webp",
      subTitle: `${t("home-1.9")}`,
      title: `${t("home-1.10")}`,
      text: (
        <>
          <p>{t("home-1.11")}</p>
        </>
      ),
      textPrimary: `${t("home-1.12")}`,
      colClassName: "col-md-6 col-lg",
    },
    {
      image:
        "https://static.wixstatic.com/media/719ed5d3f3f74f719b947f82fdecd3bf.jpg/v1/fill/w_383,h_285,al_c,q_80,usm_0.66_1.00_0.01/Sourire%20professionnel%20Femme.webp",
      subTitle: `${t("home-1.13")}`,
      title: `${t("home-1.14")}`,
      text: (
        <>
          <p>{t("home-1.15")}</p>
        </>
      ),
      textPrimary: `${t("home-1.16")}`,
      colClassName: "col-md-12 col-lg",
    },
  ];

  return (
    <section className="home-section-two mt-lg-5 p-home">
      <Container>
        <div className="text-center">
          <h1 className="display-5 d-none d-lg-block text-primary font-weight-bold mb-3">
            {t("home-1.3")}
          </h1>
          <h2 class="d-lg-none text-primary font-weight-bold mb-3">
            {t("home-1.3")}
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3  justify-content-center text-center fade-in-left">
          {data.map((data) => (
            <div className={`col mt-4 mt-lg-0 ${data.colClassName}`}>
              <div className="h-100 d-flex flex-column">
                <h4 className="mb-2">{data.subTitle}</h4>
                <div className="shadow-sm border bg-white flex-fill d-flex flex-column">
                  <div>
                    <img
                      className="d-block w-100 h-100"
                      src={data.image}
                      alt=".."
                    />
                  </div>
                  <div className="px-2 py-4 flex-fill d-flex flex-column">
                    <h3 className="font-weight-bold text-gray-600">
                      {data.title}
                    </h3>
                    {data.text}

                    <p className="text-primary font-weight-bold">
                      {data.textPrimary}
                    </p>
                    <div className="mt-auto">
                      <Link className="btn btn-primary btn-block slide-in-elliptic-left-fwd">
                        {t("home-1.4")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SectionTwo;
