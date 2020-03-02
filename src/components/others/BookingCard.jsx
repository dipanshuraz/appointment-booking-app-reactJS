import React, { Component } from "react";

export class BookingCard extends Component {
  render() {
    return (
      <div className="container border w-100 my-3 p-3">
        <div className="row text-center">
          <div className="col-md-4 ">8 am - 10 pm</div>
          <div className="col-md-2">100 ₹</div>
          <div className="col-md-6">Barber</div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <i className="fas fa-rupee-sign mx-2" />
            Online
          </div>
          <div className="col-md-4">One to One</div>
          <div className="col-md-2">
            <button className="btn btn-block btn-outline-danger btn-block btn-sm ">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingCard;

{
  /* < div className = "col-md-2 bg-light" >
    <button className='btn btn-block btn-outline-success btn-block btn-sm'>Update</button>
          </div >
  <div className="col-md-2">
   
  </div> */
}
