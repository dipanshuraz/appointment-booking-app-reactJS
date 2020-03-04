import React, { Component } from "react";
import { Link } from "react-router-dom";

export class BookingCard extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { type, venue } = this.props
    return (
      <div className="container border w-100 my-3 p-3">
        <div className="row text-center">
          <div className="col-md-4 ">8 am - 10 pm</div>
          <div className="col-md-4">100 ₹</div>
          <div className="col-md-4">Barber</div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            {venue}
          </div>
          <div className="col-md-4">One to One</div>
          <div className="col-md-4">
            <Link className="" to="/dash/cancelslots">
              <button className="btn btn-block btn-outline-danger btn-block btn-sm ">
                {type}
              </button>
            </Link>
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
