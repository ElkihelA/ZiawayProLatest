import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Images from "../assets/icons";
import BlogCard from "./BlogCard";
import { useTranslation } from "react-i18next";

const SectionFour = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: `${t("home-1.32")}`,
      text: `${t("home-1.33")}`,
      image:
        "https://static.wixstatic.com/media/b4537e_bf4ff9fccae74487a630c40795b55f57~mv2.png/v1/fit/w_809,h_453,al_c,q_80/file.webp",
      link: "https://blog.ziaway.ca/blogs/post/Comment-fixer-le-prix-de-vente-de-sa-propri%C3%A9t%C3%A9",
    },

    {
      title: `${t("home-1.34")}`,
      text: `${t("home-1.35")}`,
      image:
        "https://static.wixstatic.com/media/b4537e_6ea4d4b6a6b14e7e829cd884b6ecc790~mv2.png/v1/fit/w_300,h_300,al_c,q_5/file.png",
      link: "https://blog.ziaway.ca/blogs/post/Vendre-seul-ou-avec-un-courtier",
    },
    {
      title: `${t("home-1.36")}`,
      text: `${t("home-1.37")}`,
      image:
        "https://static.wixstatic.com/media/b4537e_c439bc61da5a4b39b9e162d887be8239~mv2.png/v1/fill/w_740,h_383,al_c,q_90/b4537e_c439bc61da5a4b39b9e162d887be8239~mv2.webp",
      link: "https://blog.ziaway.ca/blogs/post/6-%C3%A9tapes-pour-vendre-sa-propri%C3%A9t%C3%A9-avec-succ%C3%A8s24",
    },
  ];

  return (
    <section className="home-section-four mt-5 p-home">
      <Container>
        <div className="col-xl-9 px-0 mx-auto">
          <div className="text-center mb-5 d-flex flex-column  flex-md-row align-items-center justify-content-center">
            <div>
              <img height={80} src={Images.Logo} alt="Logo" />
            </div>
            <h1 className="ml-md-2 ml-lg-4 font-weight-bold mb-1">
              <span className="text-primary">{t("home-1.29")}</span>{" "}
              {t("home-1.30")}
            </h1>
          </div>
          <div className="bg-gray-100 pt-md-5 px-md-5 pt-3 px-3 pb-2">
            {data.map((data) => (
              <BlogCard data={data} blogFooterOneClass="d-block" />
            ))}
            <div className="px-0 col-12 col-md-4 col-lg-3 mx-auto">
              <Link
                to="/blog"
                className="btn btn-primary btn-block text-capitalize"
              >
                {t("home-1.31")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionFour;
