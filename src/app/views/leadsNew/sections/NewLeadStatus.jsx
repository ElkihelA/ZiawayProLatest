import React from "react";
import firebase from "../../../services/firebase/firebase";
import { useSelector } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";

const NewLeadStatus = ({ progress, id, date, email, setUpdatedData }) => {
  const profile = useSelector((state) => state.firebase.profile);
  const {t} = useTranslation();
  const list = [
    { name: "New Prospect" },
    { name: "Contacted" },
    { name: "Scheduled" },
    { name: "In Progress" },
    { name: "Offer Submitted" },
    { name: "Signed Mandate" },
    { name: "To be restarted" },
    { name: "Lost/Completion" },
  ];

  const onProgressChange = (data) => {
    console.log("i am running", data, id);
    const values = {
      brokerId: profile.userId,
      brokerName: profile.displayName,
      brokerEmail: profile.email,
      dateofAcceptance: date,
      phoneNumber: profile.phoneNumber,
      projectStatus: "Accepted",
      projectProgress: data,
    };

    const dateAccepted = new Date();
    const [month, day, year] = [
      ("0" + (dateAccepted.getMonth() + 1)).slice(-2),
      ("0" + dateAccepted.getDate()).slice(-2),
      dateAccepted.getFullYear(),
    ];
    const [hour, minutes, seconds] = [
      ("0" + dateAccepted.getHours()).slice(-2),
      ("0" + dateAccepted.getMinutes()).slice(-2),
      ("0" + dateAccepted.getSeconds()).slice(-2),
    ];

    const json_data = {
      info: {
        data: [
          {
            Name: email,
            Broker_License_Number: profile?.licenseId,
            Date_Event: `${year}-${month}-${day}T${hour}:${minutes}:${seconds}-04:00`,
            Statut_Event: data,
          },
        ],
      },
      vmodule: "Brokers_Leads",
    };

    console.log("values", values);

    firebase
      .firestore()
      .collection("RapportsEvaluations")
      .doc(id)
      .set({ broker: [values] }, { merge: true })
      .then((res) => {
        axios
          .post(
            "https://us-central1-ziaapp-ac0eb.cloudfunctions.net/zohoPostNewLead",
            json_data,
            {
              crossdomain: true,
            }
          )
          .then((res) => {
            setUpdatedData(id, [values]);
            console.log(res);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="animated fadeInUp ">
      <ul className="nav flex-column text-12 gy-2">
        <li className="border-bottom border-light pb-1">
          <h6 className="mb-0 text-primary font-weight-bold">Select Status</h6>
        </li>
        {list.map((item, i) => (
          <li key={i} className="border-bottom border-light pb-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id={i}
                defaultChecked={item.name === progress}
                onClick={() => onProgressChange(item.name)}
              />
              <label class="form-check-label" for={i}>
                {t("Dashboard."+item.name.replaceAll(" ", "_"))}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewLeadStatus;
