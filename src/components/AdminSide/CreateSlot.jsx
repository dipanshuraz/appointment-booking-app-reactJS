import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createSlot } from "../../redux/Admin/actions";

export class CreateSlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createEvent: {
        createEventName: "",
        createDuration: "",
        createEventPrice: "",
        createEventVenue: "",
        createEventType: "",
        createEventMembers: 1 || "",
        createActiveSlots: "",
        createEventDetails: "",
        createEventEnd: "",
        createEventStart: ""
      }
    };
  }

  handleChange = e => {
    let user = localStorage.getItem("logged");
    user = JSON.parse(user);

    const { regUsername, regEmail, id } = user;
    const userId = id;
    const { createEvent } = this.state;
    const obj = {
      ...createEvent,
      [e.target.name]: e.target.value,
      regUsername,
      regEmail,
      userId
    };
    this.setState({ createEvent: obj });
  };

  handleClick = () => {
    this.props.createSlot(this.state.createEvent);
  };

  render() {
    return (
      <div className="container my-5 ">
        <h1 className="text-center text-secondary">Create Event</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <form action="">
              <div className="form">
                <div className="form-group">
                  <label htmlFor=""> EventType :</label>
                  <select
                    className="form-control form-control my-2"
                    id="exampleFormControlSelect1"
                    onChange={this.handleChange}
                    value={this.state.createEvent.createEventType}
                    name="createEventType"
                  >
                    <option value="">Select Type</option>
                    <option value="single">Single</option>
                    <option value="group">Group</option>
                  </select>
                </div>
                {this.state.createEvent.createEventType == "group" ? (
                  <div className="form-group">
                    <label htmlFor=""> Members :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="0 -10"
                      value={this.state.createEvent.createEventMembers}
                      onChange={this.handleChange}
                      name="createEventMembers"
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className="form-group">
                  <label htmlFor="">Event Name :</label>
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
                  <label htmlFor=""> Details :</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="contactMessage"
                    value={this.state.createEventDetails}
                    onChange={this.handleChange}
                    name="createEventDetails"
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
                  <input
                    type="Date"
                    className="form-control"
                    value={this.state.createEvent.createSlotDate}
                    onChange={this.handleChange}
                    name="createSlotDate"
                  />
                </div>
                <div className="form-group">
                  <label for="appt">Select Start Time:</label>
                  <input
                    type="time"
                    className="form-control"
                    value={this.state.createEvent.createEventStart}
                    onChange={this.handleChange}
                    name="createEventStart"
                  />
                </div>
                <div className="form-group">
                  <label for="appt">Select End Time:</label>
                  <input
                    type="time"
                    className="form-control"
                    value={this.state.createEvent.createEventEnd}
                    onChange={this.handleChange}
                    name="createEventEnd"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6 p-5">
            <div className="w-100 h-50 bg-secondary " />
          </div>
        </div>
        <Link to="/dash/confirm">
          <button
            onClick={this.handleClick}
            className="btn btn-success btn-block"
          >
            Create
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createSlot: payload => dispatch(createSlot(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSlot);
