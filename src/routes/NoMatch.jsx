import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const NoMatch = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <img src="./images/404.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-md-5 col-sm">
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
