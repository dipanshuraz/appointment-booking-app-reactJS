import React from "react";
import { Link } from "react-router-dom";

function BookingCard(props) {
  console.log(props.slot);
  return (
    <>
      {props.slot.map(elem => {
        return (
          <div className="container border w-100 my-3 p-3">
            <div className="row">
              <div className="col">
                <p>Creator : {elem.regUsername}</p>
                <p>Event Name: {elem.createEventName}</p>
                <p>Person : {elem.createEventMembers}</p>
                <p>Duration : {elem.createDuration} min</p>
                <p>Venue : {elem.createEventVenue}</p>
                <p>Price : Rs {elem.createEventPrice}</p>
                <p>Type : {elem.createEventType}</p>
              </div>
            </div>
            <Link className="" to="/dash/cancelslots">
              <button className="btn btn-block btn-outline-danger btn-block btn-sm ">
                Cancel
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default BookingCard;
