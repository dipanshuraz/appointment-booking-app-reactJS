import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class UpcomingEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { allUserEvents } = this.props;
    console.log(allUserEvents);

    let upcoming_events = allUserEvents.filter(elem => {
      let todayDate = new Date();
      todayDate = todayDate.getDate();

      let date = elem.createSlotDate.split("-");
      if (date[2] > todayDate) return elem;
    });

    console.log(upcoming_events, "upcoming");

    // content template
    const content = upcoming_events.map(ele => (
      <div className="card col-sm-12 col-md-6 col-lg-4" key={ele.slotId}>
        <div className="card-body">
          <h3 className="card-title text-danger text-center">{ele.name}</h3>
          <h4 className="card-title text-center">{ele.createEventType}</h4>
          <h5 className="card-title text-center">{ele.createSlotDate}</h5>
          <h6 className="card-title text-center">{ele.createEventVenue}</h6>
        </div>
        <div className="card-footer bg-white">
          <Link
            className="btn btn-outline-info btn-block"
            to={`/dash/book/${ele.slotId}`}
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

const mapStateToProps = state => ({
  allUserEvents: state.userReducer.allUserEvents
});

export default connect(mapStateToProps, null)(UpcomingEvent);
