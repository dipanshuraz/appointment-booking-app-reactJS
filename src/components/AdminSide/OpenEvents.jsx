import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchEvents } from "../../redux/Admin/actions";

function OpenEvents(props) {
  const [arr, setArr] = useState([]);
  const [flag, setFlag] = useState(true);
  const { fetchEvents, allEvents } = props;
  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    setSlot();
  }, []);

  const event = allEvents.find(slot => {
    return slot.slotId === props.match.params.eventId;
  });

  const duration = event.createDuration * 60000;
  const slotsNum = event.createActiveSlots;
  const startTime = `${event.createSlotDate} ${event.createEventStart}`;
  const EndTime = `${event.createSlotDate} ${event.createEventEnd}`;

  const eventStartTime = new Date(startTime).getTime();
  const eventEndTime = new Date(EndTime).getTime();

  const setSlot = () => {
    let count = 0;
    const temp = [];
    for (let i = eventStartTime; i < eventEndTime; i += duration) {
      if (count < slotsNum) {
        temp.push(i);
        count++;
      }
    }

    setArr(temp);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <p>Event Id : {props.match.params.eventId}</p>
            <div className="col">
              <p>Event Name: {event.createEventName}</p>
              <p>Duration : {event.createDuration} min</p>
              <p>Venue : {event.createEventVenue}</p>
              <p>Price : Rs {event.createEventPrice}</p>
              <p>Type : {event.createEventType}</p>
              <p>Slots : {event.createActiveSlots}</p>
              <p>ID : {event.slotId}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {arr.map(elem => {
            return (
              <div className="col-md-4">
                <Link
                  to={`/dash/confirm/${elem}`}
                  className="btn btn-outline-success btn-block m-2"
                >
                  Book {new Date(elem).toLocaleTimeString()}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  allEvents: state.adminReducer.allEvents
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenEvents);
