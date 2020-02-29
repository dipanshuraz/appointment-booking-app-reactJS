/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarPublic.module.css";
import '../index.css'

const NavBar = ({ location: { pathname } }) => {
  if (pathname.startsWith("/dash")) return null;
  return (


    <div className="container-fluid text-white">
      <div className="row">
        <div className="col-md-2 bg-dark text-center"><i class="fa-2x fas fa-mug-hot m-2"></i></div>

        <div className="col-md-8 d-flex justify-content-around align-items-center">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>


        <div className="col-md bg-dark d-flex justify-content-center align-items-center p-2">
          <i class="fa-2x fas fa-user-circle mx-2"></i> Deepanshu
        </div>
      </div>
    </div >
  );
};

export default NavBar;