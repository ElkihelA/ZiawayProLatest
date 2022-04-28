import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import BlogCard from "./components/BlogCard";
import Images from "./assets/icons";
import { Pagination } from "react-bootstrap";
import { useTranslation, initReactI18next } from "react-i18next";

const BlogPage = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: `${t("blog.3")}`,
      text: `${t("blog.4")}`,
      image:
        "https://static.wixstatic.com/media/b4537e_bf4ff9fccae74487a630c40795b55f57~mv2.png/v1/fit/w_809,h_453,al_c,q_80/file.webp",
      link: "https://blog.ziaway.ca/blogs/post/Comment-fixer-le-prix-de-vente-de-sa-propri%C3%A9t%C3%A9",
    },
    {
      title: `${t("blog.5")}`,
      text: `${t("blog.6")}`,
      image:
        "https://static.wixstatic.com/media/b4537e_6ea4d4b6a6b14e7e829cd884b6ecc790~mv2.png/v1/fit/w_300,h_300,al_c,q_5/file.png",
      link: "https://blog.ziaway.ca/blogs/post/Vendre-seul-ou-avec-un-courtier",
    },
    {
      title: `${t("blog.7")}`,
      text: `${t("blog.8")}`,
      image:
        "https://static.wixstatic.com/media/b4537e_c439bc61da5a4b39b9e162d887be8239~mv2.png/v1/fill/w_740,h_383,al_c,q_90/b4537e_c439bc61da5a4b39b9e162d887be8239~mv2.webp",
      link: "https://blog.ziaway.ca/blogs/post/6-%C3%A9tapes-pour-vendre-sa-propri%C3%A9t%C3%A9-avec-succ%C3%A8s24",
    },
    {
      title: `${t("blog.9")}`,
      text: `${t("blog.10")}`,
      image:
        "https://static.wixstatic.com/media/b4537e_65010b4618664d4ab4861c10147f75f9~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_90/b4537e_65010b4618664d4ab4861c10147f75f9~mv2.webp",
      link: "https://blog.ziaway.ca/blogs/post/Acheter-ou-louer-un-condo",
    },
    {
      title: `${t("blog.11")}`,
      text: `${t("blog.12")}`,
      image:
        "https://static.wixstatic.com/media/b4537e_3bee304a48e54f17ae0e915a2da4f249~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90/b4537e_3bee304a48e54f17ae0e915a2da4f249~mv2.webp",
      link: "https://blog.ziaway.ca/blogs/post/6-%C3%A9tapes-pour-vendre-sa-propri%C3%A9t%C3%A9-avec-succ%C3%A8s22",
    },
  ];

  return (
    <main className="blog-page">
      <Header />
      <section>
        <div
          className="blog-bg pt-5"
          style={{ backgroundImage: `url(${Images.BlogBg})` }}
        >
          <h1 className="mb-4 text-center display-5">
            <span className="text-primary font-weight-bold mr-2">
              {" "}
              {t("blog.1")}
            </span>
            <span className="text-white">{t("blog.2")}</span>
          </h1>
        </div>
        <div className="col-xl-8 px-0 mx-auto">
          <div className="blog-bg-color fade-in-bottom pt-md-4 px-md-5 pt-3 px-3 pb-2">
            {data.map((data) => (
              <BlogCard data={data} blogFooterTwoClass="d-block" />
            ))}
          </div>
          <div className="mb-5">
            <Pagination
              className="align-items-center justify-content-center"
              style={{ gap: 20 }}
            >
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default BlogPage;
