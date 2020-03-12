import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/authentication/actions";

const NavBar = props => {
  let user = localStorage.getItem("logged");
  user = JSON.parse(user);
  const logOut = () => {
    props.logoutUser();
  };
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
                <Link style={{ color: "black" }} to="/dash">
                  Dashboard
                </Link>
              </div>
              <div className="col-md-3 py-3">
                <Link style={{ color: "black" }} to="/dash/settings">
                  Settings
                </Link>
              </div>
              <div className="col-md-3 py-3">
                <Link style={{ color: "black" }} to="/dash/profile">
                  Profile
                </Link>
              </div>
              <div className="col-md-3 py-3">
                <Link style={{ color: "black" }} to="/dash/reports">
                  Reports
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2 bg-dark d-flex justify-content-center align-items-center p-2  dropdown">
            <div
              className="btn text-white"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-arrow-circle-down" /> {user.regUsername}
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button onClick={logOut} className="dropdown-item btn">
                Logout <i className="fas fa-unlock-alt" />
              </button>
            </div>

            <i className="fa-2x fas fa-user-circle mx-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { logoutUser })(NavBar);
