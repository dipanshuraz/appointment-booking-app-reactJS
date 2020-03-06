import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BookingCard from "./BookingCard";

const AdminDashboard = props => {
  let user = localStorage.getItem("logged");
  user = JSON.parse(user);
  const { allSlots, isLoadingSlots } = props;

  const uniqSlots = allSlots.filter(slot => slot.userId == user.id);
  const openSlots = uniqSlots.filter(slot => slot.bookingStatus == "false");
  const closedSlots = uniqSlots.filter(slot => slot.bookingStatus != "false");
  return (
    <>
      <div className="container">
        <p className="text-center py-3 lead">Admin DashBord</p>
        <div className="row">
          {isLoadingSlots ? (
            "Is Loading"
          ) : (
            <div className="col-md- text-center6">
              <p className="lead display-4 text-center my-3">Booked</p>

              {closedSlots.length !== 0 ? (
                <BookingCard slot={closedSlots} />
              ) : (
                "Sorry....no booking!"
              )}

              <p className="lead display-4 text-center my-3 ">Open Slots</p>

              {openSlots.length !== 0 ? (
                <BookingCard slot={openSlots} />
              ) : (
                <Link to="/dash/createone" className="w-100">
                  <button
                    type="submit"
                    className="btn-outline-success btn-block py-2"
                  >
                    Create Now
                  </button>
                </Link>
              )}
            </div>
          )}

          <div className="col-md-6">
            <p className="display-4 text-center my-4">Create Slots</p>
            <div className="row card m-3 border p-2 align-items-center text-dark">
              <h4 className="card-title">
                <i className="fa-3x fas fa-user-friends" />
              </h4>
              <div className="col-md-8 text-center">
                <h1>Create Slots</h1>
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
  isLoadingSlots: state.adminReducer.isLoadingSlots,
  allSlots: state.adminReducer.allSlots
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
