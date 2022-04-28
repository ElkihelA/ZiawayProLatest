import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NewLeadSearchHistory = ({ email }) => {
  const reports = useSelector(
    (state) => state.firestore.ordered.RapportsEvaluations
  );
  const [lists, setLists] = useState([]);

  useEffect(() => {
    if (reports && email) {
      const test = reports.filter((v) => v.userEmail === email);

      setLists(test);
    }
  }, [reports, email]);

  return (
    <div
      className="animated fadeInUp overflow-auto table-responsive"
      style={{ height: 250 }}
    >
      <table className="table">
        <thead>
          <tr>
            <th className="position-sticky fixed-top bg-gray-200">Address</th>
            <th className="position-sticky fixed-top bg-gray-200">Date</th>
          </tr>
        </thead>
        <tbody>
          {lists?.map((item) => (
            <tr>
              <td>
                <small>{item?.location?.value}</small>
              </td>
              <td>
                <small>{item?.dateCreation}</small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewLeadSearchHistory;
