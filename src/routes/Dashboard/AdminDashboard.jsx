import React from "react";
import BookingCard from "../../components/others/BookingCard";

const AdminDashboard = () => {
  return (
    <div className="container">
      <p className="text-center py-3 lead">Admin DashBord</p>
      <div className="row">
        <div className="col-md-6">
          <p className="lead display-4 text-center my-3">Booked</p>
          <BookingCard />
          <BookingCard />
        </div>
        <div className="col-md-6">
          <p className="display-4 text-center my-4">Open Slots</p>

          <div className="row card m-3 border p-2 align-items-center text-dark">
            <h4 className="card-title">
              <i className="fa-3x fas fa-users" />
            </h4>
            <div className="col-md-8 text-center">
              <h1>Group Meet</h1>
            </div>
            <button className="btn-outline-success btn-block py-2">
              Create
            </button>
          </div>
          <div className="row card m-3 border p-2 align-items-center text-dark">
            <h4 className="card-title">
              <i className="fa-3x fas fa-user-friends" />
            </h4>
            <div className="col-md-8 text-center">
              <h1>One on One Meet</h1>
            </div>
            <button className="btn-outline-success btn-block py-2">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
