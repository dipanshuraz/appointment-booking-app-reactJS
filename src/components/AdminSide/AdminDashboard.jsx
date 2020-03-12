import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventCard from "./EventCard";
import { fetchEvents, fetchSlots } from "../../redux/Admin/actions";

const AdminDashboard = props => {
  const { allEvents, isLoadingEvent } = props;
  useEffect(() => {
    const { fetchEvents, fetchSlots } = props;
    fetchEvents();
    fetchSlots();
  }, []);

  return (
    <>
      <div className="container">
        <p className="text-center py-3 lead">Admin DashBord</p>
        <div className="row">
          <div className="col-md-6">
            <hr />
            <p className="lead text-center my-4">Slots</p>
            <hr />
            {isLoadingEvent ? "Loading" : <EventCard events={allEvents} />}
          </div>
          <div className="col-md-6">
            <hr />
            <p className="lead text-center my-4">Create Slots</p>
            <hr />
            <div className="row card m-3 border p-2 align-items-center text-dark">
              <h4 className="card-title">
                <i className="fa-3x fas fa-user-friends" />
              </h4>
              <div className="col-md-8 text-center">
                <h3>Create Slots</h3>
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

AdminDashboard.propTypes = {
  allEvents: PropTypes.objectOf.isRequired,
  isLoadingEvent: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  allEvents: state.adminReducer.allEvents,
  isLoadingEvent: state.adminReducer.isLoadingEvent
});

const mapDispatchToProps = {
  fetchEvents,
  fetchSlots
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
