import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CancelSlots extends Component {
  render() {
    return (
      <div className="container my-5 p-2">
        <div className="">
          <h4 className="text-danger text-center mb-3">
            Cancelled : <i className="fa-2x far fa-frown text-danger" />
          </h4>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 card py-2 px-4">
            <i className="fa-2x fas fa-clock m-2" />
            <p>Consultation</p>
            <p className="border p-3">
              we are sorry to infrom you <br /> Your Booking with [ Doctor ] has
              been cancelled
            </p>
            <p className="text-bold lead">10 AM - 12 PM</p>
            <hr />

            <p>Get Cancellation Info on : </p>
            <button className="btn btn-secondary btn-block">
              Send to <i className="far fa-envelope"> </i>
            </button>
            <button className="btn btn-secondary btn-block">
              Send to <i className="fas fa-mobile-alt"> </i>
            </button>
            <hr />
            <p>Find More</p>
            <p className="lead bold">Schedule Another</p>
            <Link to="/dash">
              <button className="btn btn-success btn-block">Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CancelSlots;
