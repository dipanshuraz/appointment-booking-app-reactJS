import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CurrentBooking from "./CurrentBooking";
import PastBooking from "./PastBooking";
import CurrentEvent from "./CurrentEvent";
import UpcomingEvent from "./UpcomingEvent";

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "1",
      date: new Date().toLocaleDateString(),
      event: []
    };
  }

  componentDidMount() {
    axios("/event.json")
      .then(res => {
        console.log(res);
        this.setState({
          event: res.data
        });
      })
      .catch(error => console.log(error));
  }

  handleClick = a => {
    this.setState({
      ...this.state,
      page: a
    });
  };

  render() {
    console.log(this.state.page);
    let content;
    if (this.state.page === "1")
      content = (
        <CurrentEvent event={this.state.event} date={this.state.date} />
      );
    else if (this.state.page === "2")
      content = (
        <UpcomingEvent event={this.state.event} date={this.state.date} />
      );
    else if (this.state.page === "3") content = <CurrentBooking />;
    else if (this.state.page === "4") content = <PastBooking />;

    return (
      <>
        <div className="container">
          <h1 className="text-center mt-5">User Dashboard</h1>
          <div className="d-flex justify-content-between bg-dark my-5">
            <div>
              <button
                className="btn btn-outline-light btn-lg border-0 font-weight-bold"
                type="button"
                onClick={() => this.handleClick("1")}
              >
                Current Event
              </button>
              <button
                className=" btn btn-outline-light btn-lg border-0 font-weight-bold"
                type="button"
                onClick={() => this.handleClick("2")}
              >
                Upcoming Event
              </button>
            </div>
            <div>
              <button
                className=" btn btn-outline-light btn-lg border-0 font-weight-bold"
                type="button"
                onClick={() => this.handleClick("3")}
              >
                Current Booking
              </button>
              <button
                className=" btn btn-outline-light btn-lg border-0 font-weight-bold"
                type="button"
                onClick={() => this.handleClick("4")}
              >
                Past Booking
              </button>
            </div>
          </div>
        </div>
        <div className="container">{content}</div>
      </>
    );
  }
}

export default UserDashboard;
