import React from "react";
import { connect } from "react-redux";

const CurrentBooking = props => {
  const bookEvent = props.booked;
  const date = new Date().toLocaleDateString();

  console.log(bookEvent);
  console.log(date);
  const content =
    bookEvent &&
    bookEvent.map(ele => (
      <div className="d-flex border border-dark p-5 justify-content-between my-5">
        <div>
          <h4>Date: {ele.event[0].date}</h4>
          <h4>Name: {ele.event[0].name}</h4>
          <h4>Venue:{ele.event[0].venue}</h4>
          <h4>Time: 11:00 am to 11:20 am</h4>
        </div>
        <div>
          <h4>{ele.details.name}</h4>
          <h4>{ele.details.email}</h4>
          <h4>{ele.details.mobile}</h4>
          <h4>{ele.details.detail}</h4>
        </div>
      </div>
    ));
  // creating upcoming events arrays
  // const current_booked = bookEvent.filter(ele => {
  //   // yyyy-mm-dd
  //   const arr = ele.event.date
  //     .trim()
  //     .split("-")
  //     .map(ele => Number(ele));
  //   // chrome ->  dd/mm/yyyy  firefox --> mm/dd/yyyy
  //   const today_date = date
  //     .trim()
  //     .split("/")
  //     .map(ele => Number(ele));

  //   // YYYY === YYYY    &&    MM  > MM
  //   if (arr[0] === today_date[2] && arr[1] >= today_date[1]) return ele;
  //   if (arr[0] === today_date[2] && arr[1] === today_date[1]) {
  //     // DD > DD
  //     if (arr[2] > today_date[0]) return ele;
  //   }

  //   //    upcoming_events
  //   console.log(today_date);
  // });

  // // Sorting upcoming events
  // current_booked.sort((a, b) => {
  //   const arr1 = a.date.split("-").map(ele => Number(ele));
  //   const arr2 = b.date.split("-").map(ele => Number(ele));

  //   // comparing months
  //   if (arr1[1] > arr2[1]) return a - b;
  //   if (arr1[1] < arr2[1]) return b - a;

  //   // comparing day
  //   if (arr1[2] > arr2[2]) return a - b;
  //   if (arr1[2] < arr2[2]) return b - a;
  // });

  // console.log("current_booking", current_booked);

  return (
    <>
      <h1 className="text-center">Current Booking</h1>
      {content}
    </>
  );
};

const mapStateToProps = state => {
  return {
    booked: state.userReducer.booked
  };
};
export default connect(mapStateToProps, null)(CurrentBooking);
