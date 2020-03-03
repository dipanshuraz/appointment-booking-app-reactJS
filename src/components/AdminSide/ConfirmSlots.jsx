import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ConfirmSlots extends Component {
  render() {
    return (
      <div className="container my-5 p-2">
        <div className="">
          <h3 className="text-success text-center mb-3">
            Created Succesfully : <i className="fa-2x far fa-laugh-beam" />
          </h3>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 card py-2 px-4">
            <i className="fa-2x fas fa-clock m-2" />
            <p>Consultation</p>
            <p className="border p-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate quas ipsum accusantium animi, expedita numquam
              blanditiis omnis nulla est saepe?
            </p>
            <p className="text-bold lead">10 AM - 12 PM</p>
            <button className="btn btn-secondary btn-block">
              Send to <i className="far fa-envelope"> </i>
            </button>
            <button className="btn btn-secondary btn-block">
              Send to <i className="fas fa-mobile-alt"> </i>
            </button>
            <hr />
            <p className="lead bold">Create Another</p>
            <Link tp="/dash">
              <button className="btn btn-success btn-block">Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmSlots;
