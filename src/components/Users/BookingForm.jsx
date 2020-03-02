import React from "react";
import { Link } from "react-router-dom";

const BookingForm = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">Booking Page</h1>
        <form>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </label>

            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="John Doe"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="john@gmail.com"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="mobileNumber" className="col-sm-2 col-form-label">
              Mobile Number
            </label>
            <input type="number" className="form-control" id="mobileNumber" />
          </div>
          <div className="form-group row">
            <label htmlFor="detail" className="col-sm-2 col-form-label">
              Detail
            </label>

            <textarea className="form-control" id="detail" />
          </div>

          <div className="form-group row ">
            <div className="col-sm-12 mt-3">
              <Link
                to="/dash/payment"
                className="btn btn-outline-success  btn-block"
              >
                Payment
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
