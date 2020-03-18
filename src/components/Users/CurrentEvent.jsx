import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class CurrentEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { allUserEvents } = this.props;
    console.log(allUserEvents);

    const todayArr = allUserEvents.filter(elem => {
      let todayDate = new Date();
      todayDate = todayDate.getDate();

      const date = elem.createSlotDate.split("-");
      if (date[2] == todayDate) return elem;
    });

    console.log(todayArr, "curr");

    const content = todayArr.map(ele => (
      <div className="card col-sm-12 col-md-6 col-lg-4 " key={ele.slotId}>
        <div className="card-body">
          <h3 className="card-title text-danger text-center">
            {ele.createEventName}
          </h3>
          <h4 className="card-title text-center">{ele.createEventType}</h4>
          <h5 className="card-title text-center">{ele.createSlotDate}</h5>
          <h6 className="card-title text-center">{ele.createEventVenue}</h6>
          <h6 className="card-title text-center">{ele.createEventDetails}</h6>
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

    return (
      <>
        <h2 className="text-center">Current Event</h2>

        <div className="card-group row m-0 p-0">{content}</div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  allUserEvents: state.userReducer.allUserEvents
});

export default connect(mapStateToProps, null)(CurrentEvent);
