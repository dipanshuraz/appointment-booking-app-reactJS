import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class BookingConfirmation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event: ""
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

  render() {
    console.log(this.state.event);
    return (
      <>
        <div className="mt-5 container">
          <div className="jumbotron">
            <h1 className="display-3 text-success text-center mb-5">
              Successful Payment!
            </h1>
            <h3>Event Name: JavaScript Meetup</h3>
            <h3>Date: 1st Mar 2019</h3>
            <h3>Time: 10:00 am to 10:20 am</h3>
            <h3>Venue: Bhive, HSR, Bangalore</h3>

            <div className="text-center">
              <Link className="btn btn-outline-dark btn-lg mt-4" to="/dash">
                Go Back Dashboard
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BookingConfirmation;
