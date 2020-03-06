import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
    return (
        <div className="container">
            <h1 className="text-center">User Dashboard</h1>

            <div className="d-flex justify-content-between bg-dark my-5">
                <div>
                    <button
                        className="btn btn-outline-light btn-lg border-0 font-weight-bold"
                        type="button"
                    >
                        Current Event
                    </button>
                    <button
                        className=" btn btn-outline-light btn-lg border-0 font-weight-bold"
                        type="button"
                    >
                        Upcoming Event
                    </button>
                </div>
                <div>
                    <button
                        className=" btn btn-outline-light btn-lg border-0 font-weight-bold"
                        type="button"
                    >
                        Current Booking
                    </button>
                    <button
                        className=" btn btn-outline-light btn-lg border-0 font-weight-bold"
                        type="button"
                    >
                        Past Booking
                    </button>
                </div>
            </div>

            <>
                <h2 className="text-center">Current Event</h2>
                <h2 className="text-center mt-2 mb-5">1st Mar 2019</h2>

                <div className="card-group row">
                    <div className="card col-sm-12 col-md-6 col-lg-4">
                        <div className="card-body">
                            <h3 className="card-title text-danger text-center">
                                JavaScript Meetup
                            </h3>
                            <h4 className="card-title text-center">Group</h4>
                            <h6 className="card-title text-center">HSR, Bangalore</h6>
                        </div>
                        <div className="card-footer bg-white">
                            <Link className="btn btn-outline-info btn-block" to="/dash/book">
                                Book Now
                            </Link>
                        </div>
                    </div>

                    <div className="card col-sm-12 col-md-6 col-lg-4">
                        <div className="card-body">
                            <h3 className="card-title text-danger text-center">
                                Dr. S K Agarwal
                            </h3>
                            <h4 className="card-title text-center">One to One</h4>
                            <h6 className="card-title text-center">RR Nagar, Bangalore</h6>
                        </div>
                        <div className="card-footer bg-white">
                            <Link className="btn btn-outline-info btn-block" to="/dash/book">
                                Book Now
                             </Link>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md-6 col-lg-4">
                        <div className="card-body">
                            <h3 className="card-title text-danger text-center">
                                Styler Saloon
                            </h3>
                            <h4 className="card-title text-center">One to One</h4>
                            <h6 className="card-title text-center">Kormangala, Bangalore</h6>
                        </div>
                        <div className="card-footer bg-white">
                            <Link className="btn btn-outline-info btn-block" to="/dash/book">
                                Book Now
                            </Link>
                        </div>
                    </div>

                </div>
            </>
        </div>
    );
};

export default UserDashboard;
