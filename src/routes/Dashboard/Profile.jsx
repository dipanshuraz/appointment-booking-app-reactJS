import React from "react";

const Profile = () => {
  let user = localStorage.getItem("logged");
  user = JSON.parse(user);
  console.log(user);
  return (
    <div>
      <h1 className="text-center my-5">Profile</h1>
      <div className="row p-0 m-0">
        <div className="col-12 col-lg-4">
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
        <div className="col-12 col-lg-8 text-center">
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
