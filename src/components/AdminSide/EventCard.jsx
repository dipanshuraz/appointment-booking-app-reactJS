import React from "react";
import { Link } from "react-router-dom";

function EventCard(props) {
  return (
    <>
      {props.events.map(elem => {
        return (
          <div className="container border w-100 my-3 p-3">
            <div className="row">
              <div className="col">
                <p>Event Name: {elem.createEventName}</p>
                <p>Duration : {elem.createDuration} min</p>
                <p>Venue : {elem.createEventVenue}</p>
                <p>Price : Rs {elem.createEventPrice}</p>
                <p>Type : {elem.createEventType}</p>
                <p>ID : {elem.slotId}</p>
              </div>
            </div>
            <Link to="/dash/cancelslots">
              <button className="btn btn-block btn-outline-danger btn-block btn-sm ">
                Delete
              </button>
            </Link>
            <Link to={`/dash/events/${elem.slotId}`}>
              <button className="btn btn-block btn-outline-success btn-block btn-sm my-2">
                Open
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default EventCard;
