import React from "react";
import { Link } from "react-router-dom";

class UpcomingEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { event } = this.props;
    const { date } = this.props;

    console.log(this.props.event);
    console.log(this.props.date);

    // creating upcoming events arrays
    const upcoming_events = event.filter(ele => {
      // yyyy-mm-dd
      const arr = ele.date
        .trim()
        .split("-")
        .map(ele => Number(ele));
      // chrome ->  dd/mm/yyyy  firefox --> mm/dd/yyyy
      const today_date = date
        .trim()
        .split("/")
        .map(ele => Number(ele));

      // YYYY === YYYY    &&    MM  > MM
      if (arr[0] === today_date[2] && arr[1] > today_date[1]) return ele;
      if (arr[0] === today_date[2] && arr[1] === today_date[1]) {
        // DD > DD
        if (arr[2] > today_date[0]) return ele;
      }

      //    upcoming_events
      console.log(today_date);
    });

    // Sorting upcoming events
    upcoming_events.sort((a, b) => {
      const arr1 = a.date.split("-").map(ele => Number(ele));
      const arr2 = b.date.split("-").map(ele => Number(ele));

      // comparing months
      if (arr1[1] > arr2[1]) return a - b;
      if (arr1[1] < arr2[1]) return b - a;

      // comparing day
      if (arr1[2] > arr2[2]) return a - b;
      if (arr1[2] < arr2[2]) return b - a;
    });

    // content template
    const content = upcoming_events.map(ele => (
      <div className="card col-sm-12 col-md-6 col-lg-4" key={ele.id}>
        <div className="card-body">
          <h3 className="card-title text-danger text-center">{ele.name}</h3>
          <h4 className="card-title text-center">{ele.type}</h4>
          <h5 className="card-title text-center">{ele.date}</h5>
          <h6 className="card-title text-center">{ele.venue}</h6>
        </div>
        <div className="card-footer bg-white">
          <Link
            className="btn btn-outline-info btn-block"
            to={`/dash/book/${ele.eid}`}
          >
            Book Now
          </Link>
        </div>
      </div>
    ));
    console.log(upcoming_events);
    return (
      <>
        <h2 className="text-center">Upcoming Event</h2>

        <div className="card-group row m-0 p-0">{content}</div>
      </>
    );
  }
}

export default UpcomingEvent;
