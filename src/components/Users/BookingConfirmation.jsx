import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const BookingConfirmation = props => {
  // let event = this.state.event.filter(ele => Number(ele.id) === Number(this.props.eid))
  // console.log("confirmations page");
  // console.log("confirmations", this.props);
  // console.log(this.state);
  // console.log(event);
  const content = props.event.map(ele => (
    <>
      <h3>Event Name:{ele.name}</h3>
      <h3>Date:{ele.date}</h3>
      <h3>Time: 11:00 am to 11:20 am</h3>
      <h3>Venue: {ele.venue}</h3>
    </>
  ));
  return (
    <>
      <div className="mt-5 container">
        <div className="jumbotron">
          <h1 className="display-3 text-success text-center mb-5">
            Successful Payment!
          </h1>
          {content}

          <div className="text-center">
            <Link className="btn btn-outline-dark btn-lg mt-4" to="/dash">
              Go Back Dashboard
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    event: state.userReducer.event
  };
};
export default connect(mapStateToProps, null)(BookingConfirmation);
