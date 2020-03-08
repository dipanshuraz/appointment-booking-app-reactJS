import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../../redux/Admin/actions";

function OpenEvents(props) {
  const [arr, setArr] = useState([]);
  const { fetchEvents, allEvents } = props;
  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    setArr(arr);
  }, []);

  const event = allEvents.find(slot => {
    return slot.slotId === props.match.params.eventId;
  });

  const startTime = `${event.createSlotDate} ${event.createEventStart}`;
  const EndTime = `${event.createSlotDate} ${event.createEventEnd}`;

  const eventStartTime = new Date(startTime).getTime();
  const eventEndTime = new Date(EndTime).getTime();

  let count = 0;
  for (let i = eventStartTime; i < eventEndTime; i += 1800000) {
    if (count < 10) {
      arr.push(i);
      count++;
    }
  }
  return (
    <div>
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
              <p>ID : {event.slotId}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  allEvents: state.adminReducer.allEvents
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenEvents);
