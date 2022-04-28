import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DayJS from "react-dayjs";

const MyNotes = ({ evalId }) => {
  const reports = useSelector((state) => state.firestore.ordered.notes);
  const userId = useSelector((state) => state.firebase.profile.userId);
  const [lists, setLists] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (reports && evalId) {
      const test = reports.filter(
        (v) => v.brokerId === userId && v.evaluationId === evalId
      );

      console.log(test);

      setLists(test);
    }
  }, [reports, evalId]);

  useEffect(() => {
    if (lists.length !== 0) {
      console.log(lists);
      const test = lists[0].notes.map((v, index) => ({
        text: v.text,
        date: v.date,
        id: index,
      }));
      setNotes(test);
    }
  }, [lists]);

  console.log(lists, notes);

  return (
    <div
      className="animated fadeInUp overflow-auto table-responsive"
      style={{ height: 250 }}
    >
      <table className="table">
        <thead>
          <tr>
            <th className="position-sticky fixed-top bg-gray-200">Notes</th>
            <th className="position-sticky fixed-top bg-gray-200">Date</th>
          </tr>
        </thead>
        <tbody>
          {notes?.map((item) => (
            <tr>
              <td>
                <small>{item?.text}</small>
              </td>
              <td>
                <small>
                  <DayJS format="MM-DD-YYYY">{item?.date}</DayJS>
                </small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyNotes;
