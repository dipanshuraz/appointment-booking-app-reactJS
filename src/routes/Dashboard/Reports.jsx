import React from "react";

const Reports = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5">REPORTS PAGE</h1>
      <div className="d-flex justify-content-between border p-5 mb-5">
        <h2>Total Events Created: </h2>
        <h2 className="text-danger">10 </h2>
      </div>
      <div className="d-flex justify-content-between border p-5">
        <h2>Total Amount Earned: </h2>
        <h2 className="text-danger">₹100000 </h2>
      </div>
    </div>
  );
};

export default Reports;
