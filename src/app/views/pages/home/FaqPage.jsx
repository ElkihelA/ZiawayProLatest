import React from "react";
import { Accordion, Container, Card, Button, Tab, Tabs } from "react-bootstrap";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useTranslation, initReactI18next } from "react-i18next";

const FaqPage = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: `${t("faq.2")}`,
      tabs: [
        {
          subtitle: `${t("faq.3")}`,
          text: `${t("faq.4")}`,
        },
        {
          subtitle: `${t("faq.5")}`,
          text: `${t("faq.6")}`,
        },
        {
          subtitle: `${t("faq.7")}`,
          text: `${t("faq.8")}`,
        },
      ],
    },
    {
      title: `${t("faq.9")}`,
      tabs: [
        {
          subtitle: `${t("faq.10")}`,
          text: `${t("faq.11")}`,
        },
        {
          subtitle: `${t("faq.12")}`,
          text: `${t("faq.13")}`,
        },
        {
          subtitle: `${t("faq.14")}`,
          text: `${t("faq.15")}`,
        },
      ],
    },
    {
      title: `${t("faq.16")}`,
      tabs: [
        {
          subtitle: `${t("faq.17")}`,
          text: `${t("faq.18")}`,
        },
        {
          subtitle: `${t("faq.19")}`,
          text: `${t("faq.20")}`,
        },
        {
          subtitle: `${t("faq.21")}`,
          text: `${t("faq.22")}`,
        },
      ],
    },
    {
      title: `${t("faq.23")}`,
      tabs: [
        {
          subtitle: `${t("faq.24")}`,
          text: `${t("faq.25")}`,
        },
        {
          subtitle: `${t("faq.26")}`,
          text: `${t("faq.27")}`,
        },
        {
          subtitle: `${t("faq.28")}`,
          text: `${t("faq.29")}`,
        },
        {
          subtitle: `${t("faq.30")}`,
          text: `${t("faq.31")}`,
        },
        {
          subtitle: `${t("faq.32")}`,
          text: `${t("faq.33")}`,
        },
      ],
    },
    {
      title: `${t("faq.34")}`,
      tabs: [
        {
          subtitle: `${t("faq.35")}`,
          text: `${t("faq.36")}`,
        },
        {
          subtitle: `${t("faq.37")}`,
          text: `${t("faq.38")}`,
        },
        {
          subtitle: `${t("faq.39")}`,
          text: `${t("faq.40")}`,
        },
        {
          subtitle: `${t("faq.41")}`,
          text: `${t("faq.42")}`,
        },
        {
          subtitle: `${t("faq.43")}`,
          text: `${t("faq.44")}`,
        },
      ],
    },
  ];

  return (
    <main className="contact-us-page d-flex flex-column vh-100">
      <Header />
      <section className="flex-fill">
        <Container>
          <div className="py-5 faq-tabs fade-in-bottom">
            <div>
              <h1 className="d-none d-md-block mb-4 text-center">
                {t("faq.1")}
              </h1>
              <h2 className="d-md-none mb-4 text-center">{t("faq.1")}</h2>
            </div>
            <Tabs defaultActiveKey="0" className="white-space-nowrap">
              {data.map((v, id) => (
                <Tab key={id} eventKey={id} title={v.title}>
                  {v.tabs.map((data, id) => (
                    <Accordion defaultActiveKey="0">
                      <Card className={`shadow-none bg-white border-bottom`}>
                        <Card.Header className="px-0 bg-white d-flex justify-content-between">
                          <Accordion.Toggle
                            className="text-18 px-0"
                            as={Button}
                            variant="link"
                            eventKey={0}
                          >
                            {data.subtitle}
                            {/* C'est quoi ? */}
                          </Accordion.Toggle>
                          <Accordion.Toggle
                            className="text-15 px-0 text-decoration-none"
                            as={Button}
                            variant="link"
                            eventKey={1}
                          >
                            <i className="i-Arrow-Down"></i>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse
                          className="fade-in-left"
                          eventKey={1}
                        >
                          <Card.Body className="px-0">
                            <div>
                              <p>{data.text}</p>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  ))}
                </Tab>
              ))}
            </Tabs>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
};

export default FaqPage;
