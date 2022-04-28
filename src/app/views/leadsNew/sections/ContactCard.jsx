import React from "react";
import { useTranslation } from "react-i18next";

const ContactCard = ({ data }) => {
  const { t } = useTranslation();
  const [moreInfo, setMoreInfo] = React.useState(false);

  return (
    <div>
      <ul className="nav flex-column text-12 gy-2">
        <li className="border-bottom border-light pb-1 animated fadeInDown">
          <div className="d-flex flex-wrap gy-2">
            <span className="text-capitalize">{t("Leads.70")}:</span>
            <b className="ml-auto text-capitalize">{data?.name}</b>
          </div>
        </li>
        <li className="border-bottom border-light pb-1 animated fadeInDown">
          <div className="d-flex flex-wrap gy-2">
            <span className="text-capitalize">{t("Leads.71")}:</span>
            <b className="ml-auto text-capitalize">{data?.phone}</b>
          </div>
        </li>
        <li className="border-bottom border-light pb-1 animated fadeInDown">
          <div className="d-flex flex-wrap gy-2">
            <span className="text-capitalize">{t("Leads.72")}:</span>
            <b className="ml-auto ">{data?.email}</b>
          </div>
        </li>
        <li className="border-bottom border-light pb-1 animated fadeInDown">
          <div className="d-flex flex-wrap gy-2">
            <span className="text-capitalize">{t("Leads.73")}:</span>
            <b className="ml-auto text-capitalize">{data?.address}</b>
          </div>
        </li>
        <li className="border-bottom border-light pb-1 animated fadeInDown">
          <div className="d-flex flex-wrap gy-2">
            <span className="text-capitalize">{t("Leads.74")}:</span>
            <b className="ml-auto text-capitalize">{data?.call}</b>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactCard;
