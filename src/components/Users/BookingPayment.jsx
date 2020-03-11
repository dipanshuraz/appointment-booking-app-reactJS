import React from "react";
import { Link } from "react-router-dom";
import { addToBooked } from "../../redux/User/action";
import { connect } from "react-redux";


const BookingPayment = (props) => {

  console.log("payment", props);
  return (
    <>
      <div className="bg-dark ">
        <h2 className="text-white text-center p-3">
          <i className="fas fa-credit-card" /> Payment Gateway
        </h2>
      </div>

      <div className="container my-5 border">
        <div className="row p-5">
          <div className="col-md-4" />
          <div className="col-md-4">
            <h1 className="text-center font-weight-normal">Card Details</h1>
            <hr />
            <form className="require-validation mt-5" id="payment-form">
              <div className="form-group">
                <div className="col-xs-12 form-group required">
                  <label htmlFor="name" className="control-label">
                    Name on Card
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Steven Smith"
                    id="name"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12 form-group  required">
                  <label htmlFor="card-number" className="control-label">
                    Card Number
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control card-number"
                    size="16"
                    type="number"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    id="card-number"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-4 form-group cvc required">
                  <label htmlFor="cvc" className="control-label">
                    CVC
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control card-cvc"
                    placeholder="ex. 311"
                    size="3"
                    type="password"
                    id="cvc"
                  />
                </div>
                <div className="col-4 form-group expiration required">
                  <label htmlFor="month" className="control-label">
                    Validity
                  </label>
                  <input
                    className="form-control card-expiry-month"
                    placeholder="MM"
                    size="2"
                    type="number"
                    id="month"
                  />
                </div>
                <div className="col-4 form-group expiration required">
                  <label htmlFor="year" className="control-label">
                    {" "}
                  </label>
                  <input
                    className="form-control card-expiry-year mt-2"
                    placeholder="YYYY"
                    size="2"
                    type="number"
                    id="year"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-12">
                  <div className="form-control total btn btn-dark">
                    Total:
                      <span className="amount ml-3">₹ {props.event[0].price}</span>
                  </div>
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-md-12 form-group">
                  <Link
                    to="/dash/successful"
                    className="form-control btn btn-danger submit-button"
                    onClick={() => props.addToBooked({
                      event: props.event,
                      details: props.details
                    })}
                  >
                    Pay Now
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {

  return {
    event: state.userReducer.event,
    details: state.userReducer.hold,

  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addToBooked: (a) => dispatch(addToBooked(a))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingPayment);
