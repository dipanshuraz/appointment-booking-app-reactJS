import React from "react";
import { Link } from "react-router-dom";

const BookingSlot = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3 mb-5">Booking Page</h1>
        <div className="row">
          <div className="col-12 col-lg-6 text-center my-2 ">
            <h3 className="bg-dark font-weight-bold text-white py-1 rounded-pill">
              Event Name
            </h3>
          </div>
          <div className="col-12 col-lg-6 text-center my-2">
            <h3>JavaScript Meetup</h3>
          </div>

          <div className="col-12 col-lg-6 text-center my-2">
            <h3 className="bg-dark font-weight-bold text-white py-1 rounded-pill">
              Category
            </h3>
          </div>
          <div className="col-12 col-lg-6 text-center my-2">
            <h3>Education</h3>
          </div>

          <div className="col-12 col-lg-6 text-center my-2">
            <h3 className="bg-dark font-weight-bold text-white py-1 rounded-pill">
              Venue
            </h3>
          </div>
          <div className="col-12 col-lg-6 text-center my-2">
            <h3>Bhive, HSR, Bangalore</h3>
          </div>

          <div className="col-12 col-lg-6 text-center my-2">
            <h3 className="bg-dark font-weight-bold text-white py-1 rounded-pill">
              Date
            </h3>
          </div>
          <div className="col-12 col-lg-6 text-center my-2">
            <h3>01/03/2020</h3>
          </div>

          <div className="col-12 col-lg-6 text-center my-2">
            <h3 className="bg-dark font-weight-bold text-white py-1 rounded-pill">
              Duration
            </h3>
          </div>
          <div className="col-12 col-lg-6 text-center my-2">
            <h3>120 min</h3>
          </div>

          <div className="col-12 col-lg-6 text-center my-2">
            <h3 className="bg-dark font-weight-bold text-white py-1 rounded-pill">
              Price
            </h3>
          </div>
          <div className="col-12 col-lg-6 text-center my-2">
            <h3>₹ 500</h3>
          </div>
        </div>
        <hr />
        <h1 className="text-center mt-5">Open Slots</h1>
        <div className="row mt-5 text-center">
          <div className="row col-12 mb-3">
            <div className="col-4">
              <h3>Slot 1</h3>
            </div>
            <div className="col-4">
              <h2>10:00 am to 10:20 am</h2>
            </div>
            <div className="col-4">
              <Link
                to="/dash/userdetail"
                className="btn btn-lg btn-outline-success"
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className="row col-12 mb-3">
            <div className="col-4">
              <h3>Slot 2</h3>
            </div>
            <div className="col-4">
              <h2>11:00 am to 11:20 am</h2>
            </div>
            <div className="col-4">
              <Link
                to="/dash/userdetail"
                className="btn btn-lg btn-outline-success"
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className="row col-12 mb-3">
            <div className="col-4">
              <h3>Slot 3</h3>
            </div>
            <div className="col-4">
              <h2>1:00 pm to 1:20 pm</h2>
            </div>
            <div className="col-4">
              <Link
                to="/dash/userdetail"
                className="btn btn-lg btn-outline-success"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSlot;
