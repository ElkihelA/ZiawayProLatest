import React from "react";
import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { SimpleCard } from "@gull";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications";

// import { StatusChange } from "../../../redux/actions/leadActions";

import { RiExchangeLine } from "react-icons/ri";

import "firebase/firestore";
import firebase from "../../../services/firebase/firebase";

const LeadsThree = () => {
  const [accept, setAccept] = useState(false);
  const [decline, setDecline] = useState(false);
  const [status, setStatus] = useState(null);
  const dispatch = useDispatch();

  useFirestoreConnect("leads");
  const leads = useSelector((state) => state.firestore.ordered.leads);

  const getUserStatusClass = (status) => {
    switch (status) {
      case "Accepted":
        return "badge-success";
      case "Rejected":
        return "badge-danger";
      case "Replacement":
        return "badge-warning";
      default:
        break;
    }
  };

  const handleChange = (id, value) => {
    firebase
      .firestore()
      .collection("leads")
      .doc(id)
      .update({
        lead_status: value,
      })
      .then(() => {
        console.log("updated");
      })
      .catch((err) => {
        console.log("something went wrong", err);
      });
    // dispatch(StatusChange(id, value));
    // NotificationManager.success("Updated", { value });
  };

  return (
    <SimpleCard className="h-100">
      <div className="table-responsive h-100 position-relative">
        <table
          id="user_table"
          className="table table-hover table-striped table-gray-200"
        >
          <thead className="bg-primary text-white">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Type</th>
              <th scope="col">Owner</th>
              <th scope="col">This property is</th>
              <th scope="col">Project progress</th>
              <th scope="col">Action</th>
              <th scope="col">Status</th>
            </tr>
          </thead>

          {leads === undefined ? (
            <div className="position-absolute w-100 h-75 px-0 d-flex justify-content-center align-items-center">
              <div className="spinner-bubble spinner-bubble-primary m-5"></div>
            </div>
          ) : (
            <tbody>
              {leads
                .filter(
                  (lead) =>
                    lead.lead_status === "Accepted" ||
                    lead.lead_status === "Replacement"
                )
                .map((lead, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{lead.lead_type}</td>

                    <td>{lead.user_name}</td>

                    <td>{}</td>
                    <td>{}</td>
                    <td>
                      {/* <span className='cursor-pointer text-success mr-2'>
                    <i className='nav-icon i-Pen-2 font-weight-bold'></i>
                  </span>
                  <span className='cursor-pointer text-danger mr-2'>
                    <i className='nav-icon i-Close-Window font-weight-bold'></i>
                  </span> */}
                      <Dropdown>
                        <div className="d-flex align-items-center">
                          <Dropdown.Toggle
                            className={
                              accept
                                ? `toggle-hidden border-0 p-0 bg-transparent text-success`
                                : decline
                                ? "toggle-hidden border-0 p-0 bg-transparent text-danger"
                                : "toggle-hidden border-0 p-0 bg-transparent text-primary text-primary ml-3"
                            }
                          >
                            <RiExchangeLine size={16} />
                          </Dropdown.Toggle>
                          {lead.lead_status === "Accepted" ? (
                            <span className="ml-2 badge badge-success p-1">
                              {lead.lead_status}
                            </span>
                          ) : lead.lead_status === "Rejected" ? (
                            <span className="ml-2 badge badge-danger p-1">
                              {lead.lead_status}
                            </span>
                          ) : (
                            <span className="ml-2 badge text-white badge-warning p-1">
                              {lead.lead_status}
                            </span>
                          )}
                        </div>

                        <Dropdown.Menu className="p-0">
                          <Dropdown.Item
                            className="bg-warning text-white"
                            eventKey="2"
                            onClick={() => {
                              setStatus("Replacement");
                              handleChange(lead.id, "Replacement");
                            }}
                          >
                            <small>Replace Lead</small>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <span
                        className={`badge p-2 text-white ${getUserStatusClass(
                          lead.lead_status
                        )}`}
                      >
                        {lead.lead_status}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          )}
        </table>
      </div>
    </SimpleCard>
  );
};

export default LeadsThree;
