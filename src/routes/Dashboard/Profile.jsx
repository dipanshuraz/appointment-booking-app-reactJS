import React from "react";

const Profile = () => {
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
          <h4 className="my-5">Shivansh Singh</h4>
          <h4 className="my-5">+91 45567 34567</h4>
          <h4 className="my-5">shivansh@gmail.com</h4>
        </div>
      </div>

    </div>
  )
};

export default Profile;
