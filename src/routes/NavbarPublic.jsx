/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarPublic.module.css";
import "../index.css";

const NavBar = ({ location: { pathname } }) => {
  if (pathname.startsWith("/dash")) return null;
  return (
    <div className="container-fluid text-white">
      <div className="row">
        <div className="col-md-2 bg-dark text-center p-2">
          <Link style={{ color: "white" }} to="/">
            <i className="fa-2x fas fa-mug-hot" />
          </Link>
        </div>

        <div className="col-md-8">
          <div className="row justify-content-around align-items-center bg-light h-100 text-center text-dark">
            <div className="col-md-3 py-3 nav-hover">
              <Link style={{ color: "black" }} to="/login">
                Login
              </Link>
            </div>
            <div className="col-md-3 py-3 nav-hover">
              <Link style={{ color: "black" }} to="/register">
                Register
              </Link>
            </div>

            <div className="col-md-3 py-3 nav-hover">
              <Link
                style={{ color: "black" }}
                className={styles.navHover}
                to="/about"
              >
                About
              </Link>
            </div>
            <div className="col-md-3 py-3 nav-hover">
              <Link
                style={{ color: "black" }}
                className={styles.navHover}
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-2 bg-dark d-flex justify-content-center align-items-center p-2">
          User Id
          <i className="fa-2x fas fa-user-circle mx-2" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
