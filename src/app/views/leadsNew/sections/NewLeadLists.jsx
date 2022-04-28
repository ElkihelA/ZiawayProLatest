import React from "react";

const NewLeadLists = ({ lists, listsTwo, type, prospect, contactShow }) => {
  const [moreInfo, setMoreInfo] = React.useState(false);

  if (type === "project")
    return (
      <div>
        <ul className="nav flex-column text-12 gy-2">
          <>
            {lists.map((item) => (
              <li className="border-bottom border-light pb-1 animated fadeInUp">
                <div className="d-flex flex-wrap gy-2">
                  <span className="text-capitalize">{item.title}</span>
                  <b className="ml-auto text-capitalize">{item.value}</b>
                </div>
              </li>
            ))}
          </>
        </ul>
      </div>
    );
  else
    return (
      <div>
        <ul className="nav flex-column text-12 gy-2">
          {moreInfo ? (
            <>
              {listsTwo.map((item) => (
                <li className="border-bottom border-light pb-1 animated fadeInDown">
                  <div className="d-flex flex-wrap gy-2">
                    <span className="text-capitalize">{item.title}</span>
                    <b className="ml-auto text-capitalize">{item.value}</b>
                  </div>
                </li>
              ))}
            </>
          ) : (
            <>
              {lists.map((item) => (
                <li className="border-bottom border-light pb-1 animated fadeInUp">
                  <div className="d-flex flex-wrap gy-2">
                    <span className="text-capitalize">{item.title}</span>
                    <b className="ml-auto text-capitalize">{item.value}</b>
                  </div>
                </li>
              ))}
            </>
          )}
          {prospect === true || contactShow ? null : (
            <li className="d-flex flex-column">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary ml-auto text-uppercase font-weight-bold"
                onClick={() => setMoreInfo(!moreInfo)}
              >
                {moreInfo ? "Back" : "MORE INFO"}
              </button>
            </li>
          )}
        </ul>
      </div>
    );
};

export default NewLeadLists;
