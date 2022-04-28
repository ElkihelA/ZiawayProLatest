import React from "react";

const EmptyMessage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <div
        className="card bg-white d-flex justify-content-center align-items-center"
        style={{
          height: "220px",
          width: "220px",
          borderRadius: "50%"
        }}
      >
        <i className="i-Mail-Reply text-64 text-primary font-weight-900"> </i>
      </div>
      <p className="py-3">Click on a contact to start chat</p>
    </div>
  );
};

export default EmptyMessage;
