import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const NoMatch = () => {
  return (
    <div className="container h-70">
      <div className="row justify-content-center ">
        <img src="./images/404.jpg" className="img-fluid" alt="" />
        <div className="col-md-4 col-sm">
          <hr />
          <p className="lead text-center">Go To Home</p>
          <hr />
          <center>
            <Link to="/">
              <i className="fa-3x fas fa-home" />
            </Link>
          </center>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
