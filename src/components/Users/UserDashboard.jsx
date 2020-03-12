import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import CurrentBooking from "./CurrentBooking";
import PastBooking from "./PastBooking";
import CurrentEvent from "./CurrentEvent";
import UpcomingEvent from "./UpcomingEvent";
import { connect } from "react-redux";
import { fetchEvents } from "../../redux/User/action";

export class UserDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "1",
      date: new Date().toLocaleDateString(),
      todayEvent: []
    };
  }

  componentDidMount = async () => {
    await this.props.fetchEvents();
  };

  handleClick = a => {
    this.setState({
      ...this.state,
      page: a
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center mt-5">User Dashboard</h1>
          <div className="d-flex justify-content-between bg-dark my-5">
            <div>
              <Link
                to="/dash"
                className="btn btn-outline-light btn-lg border-0 font-weight-bold"
                type="button"
              >
                Current Event
              </Link>
              <Link
                to="/dash/upcoming-events"
                className=" btn btn-outline-light btn-lg border-0 font-weight-bold"
                type="button"
              >
                Upcoming Event
              </Link>
            </div>
            <div>
              <Link
                to="/dash/current-booking"
                className=" btn btn-outline-light btn-lg border-0 font-weight-bold"
                type="button"
              >
                Current Booking
              </Link>
              <Link
                to="/dash/past-booking"
                className=" btn btn-outline-light btn-lg border-0 font-weight-bold"
                type="button"
              >
                Past Booking
              </Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/dash" render={() => <CurrentEvent />} />
          <Route
            path="/dash/current-booking"
            render={() => <CurrentBooking />}
          />
          <Route
            path="/dash/upcoming-events"
            render={() => <UpcomingEvent />}
          />
          <Route path="/dash/past-booking" render={() => <PastBooking />} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => ({
  allUserEvents: state.userReducer.allUserEvents,
  isLoading: state.userReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
