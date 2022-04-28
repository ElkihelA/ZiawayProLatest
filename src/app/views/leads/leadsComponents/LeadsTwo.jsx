import React from "react";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { SimpleCard } from "@gull";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
// import { StatusChange } from "../../../redux/actions/leadActions";
import { LeadView } from "../leadview/LeadView";

import { MdDesktopWindows } from "react-icons/md";

import "firebase/firestore";
import firebase from "../../../services/firebase/firebase";

const LeadsTwo = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(null);
  const [userID, setUserID] = useState(null);
  const dispatch = useDispatch();

  useFirestoreConnect("leads");
  const leads = useSelector((state) => state.firestore.ordered.leads);
  console.log(leads);
  const getUserStatusClass = (status) => {
    switch (status) {
      case "Accepted":
        return "badge-success";
      case "Rejected":
        return "badge-danger";
      case "pending":
        return "badge-warning";
      default:
        break;
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <>
      <Modal show={show} onHide={handleClose} centered size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Lead View</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LeadView userId={userID} />
        </Modal.Body>
      </Modal>
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
                <th scope="col" className="text-center">
                  View
                </th>
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
                  .filter((lead) => lead.lead_status === "Accepted")
                  .map((lead, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{lead.lead_type}</td>

                      <td>{lead.user_name}</td>

                      <td>{}</td>
                      <td>{}</td>
                      <td className="text-center">
                        <Button
                          variant="icon"
                          onClick={() => {
                            handleShow();
                            setUserID(lead.userID);
                          }}
                        >
                          <MdDesktopWindows
                            size={16}
                            className="text-primary"
                          />
                        </Button>
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
    </>
  );
};

export default LeadsTwo;
