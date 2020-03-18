import React from "react";
import { connect } from "react-redux";

const CurrentBooking = props => {
  const { allUserEvents } = props;
  console.log(allUserEvents);

  const todayArr = allUserEvents.filter(elem => {
    let todayDate = new Date();
    todayDate = todayDate.getDate();

    const date = elem.createSlotDate.split("-");
    if (date[2] == todayDate) return elem;
  });
  console.log(todayArr);

  return (
    <>
      <h1 className="text-center">Current Booked 2</h1>
      {todayArr.map(ele => {
        return (
          <div className="d-flex border border-dark p-5 justify-content-between my-5">
            <div>
              <h4>Date: {ele.createSlotDate}</h4>
              <h4>Name: {ele.createEventName}</h4>
              <h4>Venue:{ele.createEventVenue}</h4>
              <h4>
                {ele.createEventStart} to {ele.createEventEnd}
              </h4>
            </div>
            <div>
              {/* <h4>{ele.details.name}Name</h4>
              <h4>{ele.details.email}Email</h4>
              <h4>{ele.details.mobile}Mob</h4>
              <h4>{ele.details.detail}details</h4> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = state => ({
  allUserEvents: state.userReducer.allUserEvents
});

export default connect(mapStateToProps, null)(CurrentBooking);
