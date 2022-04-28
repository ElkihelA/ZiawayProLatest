import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import firebase from "../../../services/firebase/firebase";
import { useFirestoreConnect } from "react-redux-firebase";
import { useTranslation } from "react-i18next";

const NotesModal = ({ show, setShow, evalId }) => {
  const { t } = useTranslation();
  const profile = useSelector((state) => state.firebase.profile);
  const notes = useSelector((state) => state.firestore.ordered.notes);
  const [text, setText] = useState(null);
  const handleClose = () => {
    setShow(false);
  };

  useFirestoreConnect(["notes"]);

  const addNote = () => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    if (
      notes.some(
        (person) =>
          person?.brokerId === profile.userId && person?.evaluationId === evalId
      )
    ) {
      const test = notes.filter(
        (v) => v?.brokerId === profile.userId && v?.evaluationId === evalId
      );
      console.log(test);
      const data = {
        text: text,
        date: new Date().toLocaleDateString("fr-ca", options),
      };

      firebase
        .firestore()
        .collection("notes")
        .doc(test[0].id)
        .update({ notes: [...test[0].notes, data] })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      setShow(false);
    } else {
      const data = {
        evaluationId: evalId,
        notes: [
          {
            text: text,
            date: new Date().toLocaleDateString("fr-ca", options),
          },
        ],
        brokerId: profile.userId,
      };

      firebase
        .firestore()
        .collection("notes")
        .add(data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      setShow(false);
    }
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t("Leads.67")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          className="w-100 "
          style={{ height: "100px" }}
          onChange={(e) => setText(e.target.value)}
        />
        {/* <input
          placeholder="Notes"
          type="text"
          className="form-control form-control-rounded"
          onChange={(e) => setText(e.target.value)}
        /> */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t("Leads.67")}
        </Button>
        <Button variant="primary" onClick={addNote}>
          Add Note
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotesModal;
