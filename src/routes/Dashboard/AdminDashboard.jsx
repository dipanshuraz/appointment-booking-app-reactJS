import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="container">
        <div className="d-flex justify-content-between bg-light my-5">
          <div>
            <h2>Created Event</h2>
          </div>
          <div>
            <button
              className=" btn btn-lg btn-outline-success mr-5"
              type="button"
            >
              Create New Event
            </button>
          </div>
        </div>
        <div className="d-flex">
          <button
            className=" btn btn-lg btn-outline-primary mr-5"
            type="button"
          >
            Event Types
          </button>
          <button className=" btn btn-lg btn-outline-info mr-5" type="button">
            Scheduled Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
