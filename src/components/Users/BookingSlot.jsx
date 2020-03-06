import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class BookingSlot extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      eid: "",
      event: []
    }


  }
  componentDidMount() {
    axios("/event.json")
      .then((res) => {
        console.log(res);
        this.setState({
          event: res.data.filter(ele => ele.eid === this.props.match.params.id)
        })
      })
      .catch((error) => console.log(error))
  }

  render() {
    console.log("Booking", this.props);
    // let event_id = this.props.match.params.id;
    // let event = this.state.event.filter(ele => ele.eid === event_id);
    console.log("booking events", this.state.event);
    // const event_name = this.state.event[0]["name"];

    let content = this.state.event.map(ele => (
      <>
        <div className="row">
          <div className="col-12 col-lg-6 text-center my-2 ">
            <h3 className="bg-dark font-weight-bold text-white py-1 rounded-pill">
              Event Name
             </h3>
          </div>
          <div className="col-12 col-lg-6 text-center my-2">
            <h3>{ele.name}</h3>
          </div>

          <div className="col-12 col-lg-6 text-center my-2">
            <h3 className="bg-dark font-weight-bold text-white py-1 rounded-pill">
              Type
            </h3>
          </div>
          <div className="col-12 col-lg-6 text-center my-2">
            <h3>{ele.type}</h3>
          </div>

          <div className="col-12 col-lg-6 text-center my-2">
            <h3 className="bg-dark font-weight-bold text-white py-1 rounded-pill">
              Venue
            </h3>
          </div>
          <div className="col-12 col-lg-6 text-center my-2">
            <h3>{ele.venue}</h3>
          </div>

          <div className="col-12 col-lg-6 text-center my-2">
            <h3 className="bg-dark font-weight-bold text-white py-1 rounded-pill">
              Date
            </h3>
          </div>
          <div className="col-12 col-lg-6 text-center my-2">
            <h3>{ele.date}</h3>
          </div>

          <div className="col-12 col-lg-6 text-center my-2">
            <h3 className="bg-dark font-weight-bold text-white py-1 rounded-pill">
              Duration
            </h3>
          </div>
          <div className="col-12 col-lg-6 text-center my-2">
            <h3>{ele.duration} min</h3>
          </div>

          <div className="col-12 col-lg-6 text-center my-2">
            <h3 className="bg-dark font-weight-bold text-white py-1 rounded-pill">
              Price
            </h3>
          </div>
          <div className="col-12 col-lg-6 text-center my-2">
            <h3>₹ {ele.price}</h3>
          </div>
        </div>
        <hr />

        <h1 className="text-center mt-5">Open Slots</h1>
        <div className="row mt-5 text-center">
          <div className="row col-12 mb-3">
            <div className="col-4">
              <h3>Slot 1</h3>
            </div>
            <div className="col-4">
              <h2>10:00 am to 10:20 am</h2>
            </div>
            <div className="col-4">
              <Link
                to={`/dash/userdetail/${ele.eid}`}
                className="btn btn-lg btn-outline-success"
              >
                Book Now
        </Link>
            </div>
          </div>
          <div className="row col-12 mb-3">
            <div className="col-4">
              <h3>Slot 2</h3>
            </div>
            <div className="col-4">
              <h2>11:00 am to 11:20 am</h2>
            </div>
            <div className="col-4">
              <Link
                to={`/dash/userdetail/${ele.eid}`}
                className="btn btn-lg btn-outline-success"
              >
                Book Now
        </Link>
            </div>
          </div>
          <div className="row col-12 mb-3">
            <div className="col-4">
              <h3>Slot 3</h3>
            </div>
            <div className="col-4">
              <h2>1:00 pm to 1:20 pm</h2>
            </div>
            <div className="col-4">
              <Link
                to={`/dash/userdetail/${ele.eid}`}
                className="btn btn-lg btn-outline-success"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="row col-12 mb-3">
            <div className="col-4">
              <h3>Slot 4</h3>
            </div>
            <div className="col-4">
              <h2>2:00 pm to 2:20 pm</h2>
            </div>
            <div className="col-4">
              <Link
                to={`/dash/userdetail/${ele.eid}`}
                className="btn btn-lg btn-outline-success"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </>
    ))


    return (
      <>
        <div className="container">
          <h1 className="text-center mt-3 mb-5">Booking Page</h1>
          {content}
        </div>
      </>
    )
  }
};

export default BookingSlot;
