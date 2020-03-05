import React from "react";
import { Link } from "react-router-dom";
import BookingCard from "./BookingCard";
import { connect } from "react-redux";

const AdminDashboard = props => {
  const { allSlots, isLoadingSlots } = props;
  console.log(allSlots);

  return (
    <>
      <div className="container">
        <p className="text-center py-3 lead">Admin DashBord</p>
        <div className="row">
          {isLoadingSlots ? (
            "Is Loading"
          ) : (
            <div className="col-md-6">
              <p className="lead display-4 text-center my-3">Booked</p>
              <BookingCard />

              <p className="lead display-4 text-center my-3">Open Slots</p>
            </div>
          )}

          <div className="col-md-6">
            <p className="display-4 text-center my-4">Create Slots</p>

            <div className="row card m-3 border p-2 align-items-center text-dark">
              <h4 className="card-title">
                <i className="fa-3x fas fa-users" />
              </h4>
              <div className="col-md-8 text-center">
                <h1>Group Meet</h1>
              </div>
              <Link to="/dash/createtwo" className="w-100">
                <button
                  type="submit"
                  className="btn-outline-success btn-block py-2"
                >
                  Create
                </button>
              </Link>
            </div>
            <div className="row card m-3 border p-2 align-items-center text-dark">
              <h4 className="card-title">
                <i className="fa-3x fas fa-user-friends" />
              </h4>
              <div className="col-md-8 text-center">
                <h1>One on One Meet</h1>
              </div>

              <Link to="/dash/createone" className="w-100">
                <button
                  type="submit"
                  className="btn-outline-success btn-block py-2"
                >
                  Create
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  allSlots: state.adminReducer.allSlots,
  isLoadingSlots: state.adminReducer.isLoadingSlots
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
