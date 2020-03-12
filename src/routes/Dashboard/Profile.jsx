import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  let user = localStorage.getItem("logged");
  user = JSON.parse(user);

  return (
    <div className="container">
      <h1 className="text-center my-5">Profile</h1>

      <div className="col-md-3 my-5">
        <Link to="/dash/settings" className="btn btn-block btn-outline-dark">
          Edit Profile
        </Link>
      </div>
      <div className="row p-0 m-0">
        <div className="col-md-4 col-lg-4">
          <div className="text-center mb-5">
            <img
              src="https://via.placeholder.com/200"
              className="mx-auto img-fluid rounded-circle d-block"
              alt="avatar"
            />

            <label className="custom-file">
              <input type="file" id="file" className="custom-file-input" />
              <span className="custom-file-control border border-dark btn btn-light">
                Choose file
              </span>
            </label>
          </div>
        </div>
        <div className="col-md-8 col-lg-8 text-center">
          <p className="lead">Special Id : {user.id}</p>
          <h4 className="my-5">Username : {user.regUsername}</h4>
          <h4 className="my-5">+91 45567 34567</h4>
          <h4 className="my-5">Email : {user.regEmail}</h4>
          <h4 className="my-5">Status : {user.regStatus}</h4>
          <h4 className="my-5">Role : {user.regType}</h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;
