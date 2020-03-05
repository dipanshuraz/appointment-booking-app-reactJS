import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function BookingCard(props) {
  const { allSlots } = props;
  return (
    <>
      {allSlots.map(elem => {
        return (
          <div className="container border w-100 my-3 p-3">
            <div className="row">
              <div className="col">
                <p>Creator : {elem.creator}</p>
                <p>Event Name: {elem.eventName}</p>
                <p>Person : {elem.members}</p>
                <p>Date : {elem.date}</p>
                <p>Duration : {elem.duration} hr</p>
                <p>Venue : {elem.venue}</p>
                <p>Price : Rs {elem.price}</p>
                <p>Type : {elem.type}</p>
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

const mapStateToProps = state => ({
  allSlots: state.adminReducer.allSlots
});

export default connect(mapStateToProps, null)(BookingCard);
