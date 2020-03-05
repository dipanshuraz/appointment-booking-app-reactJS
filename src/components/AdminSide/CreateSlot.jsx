import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CreateSlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createEvent: {
        createEventName: "",
        createActiveSlots: "",
        createDuration: "",
        createEventName: "",
        createEventPrice: "",
        createEventVenue: ""
      }
    };
  }
  handleChange = e => {
    const { createEvent } = this.state;
    const obj = { ...createEvent, [e.target.name]: e.target.value };
    this.setState({ createEvent: obj });
    console.log();
  };

  render() {
    // var user = localStorage.getItem("logged");
    // user = JSON.parse(user);
    return (
      <div className="container my-5 ">
        <h1 className="text-center text-secondary">Create One on One Slot</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <form action="">
              <div className="form">
                <div className="form-group">
                  <label htmlFor=""> Name :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    value={this.state.createEvent.createEventName}
                    onChange={this.handleChange}
                    name="createEventName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor=""> Duration :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="30 min"
                    value={this.state.createEvent.createDuration}
                    onChange={this.handleChange}
                    name="createDuration"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor=""> Active Slots :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 - 10"
                    value={this.state.createEvent.createActiveSlots}
                    onChange={this.handleChange}
                    name="createActiveSlots"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor=""> Price :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="₹ 200 "
                    value={this.state.createEvent.createEventPrice}
                    onChange={this.handleChange}
                    name="createEventPrice"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor=""> Venue :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    value={this.state.createEvent.createEventVenue}
                    onChange={this.handleChange}
                    name="createEventVenue"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor=""> Date :</label>
                  <input type="Date" className="form-control" />
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6 p-5">
            <div className="w-100 h-100 bg-secondary " />
          </div>
        </div>
        <Link to="/dash/confirm">
          <button className="btn btn-success btn-block">Create</button>
        </Link>
      </div>
    );
  }
}

export default CreateSlot;
