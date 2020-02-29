import React from "react";
import { Link } from "react-router-dom";
// import styles from "./DashboardRoutes.module.css";

const NavBar = () => {
  return (
    <>
      <div className="container-fluid text-white">
        <div className="row">
          <div className="col-md-2 bg-dark text-center p-2">
            <Link style={{ color: "white" }} to="/dash">
              <i className="fa-2x fas fa-mug-hot" />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="row bg-light justify-content-around h-100 text-center text-dark ">
              <div className="col-md-3 py-3">
                <Link style={{ color: "black" }} to="/dash">Dashboard</Link>
              </div>
              <div className="col-md-3 py-3">
                <Link style={{ color: "black" }} to="/dash/settings">Settings</Link>
              </div>
              <div className="col-md-3 py-3">
                <Link style={{ color: "black" }} to="/dash/profile">Profile</Link>
              </div>
              <div className="col-md-3 py-3">
                <Link style={{ color: "black" }} to="/dash/reports">Reports</Link>
              </div>
            </div>
          </div>
          <div className="col-md-2 bg-dark d-flex justify-content-center align-items-center p-2">
            User Id
          <i className="fa-2x fas fa-user-circle mx-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
