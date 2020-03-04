import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CreateSlot2 extends Component {
  render() {
    return (
      <div className="container my-5 ">
        <h1 className="text-center text-secondary">Create Group Slot</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <form action="">
              <div className="form">
                <div className="form-group">
                  <label htmlFor="">Name :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Duration :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="30 min"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Members :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 - 10"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Active Slots :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 - 10"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Price :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="₹ 200 "
                  />
                </div>
                <div className="form-group">
                  <label htmlFor=""> Venue :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Date :</label>
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
          <button type="submit" className="btn btn-success btn-block">
            Create
          </button>
        </Link>
      </div>
    );
  }
}

export default CreateSlot2;
