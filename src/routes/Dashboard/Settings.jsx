import React from "react";

const Settings = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5">SETTINGS PAGE</h1>
      <div id="User-Detail" className="border  p-5 mb-5">
        <h2 className="text-center text-danger mb-5">User Details</h2>
        <form role="form">
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              First name
            </label>
            <div className="col-lg-9">
              <input className="form-control" type="text" placeholder="John" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Last name
            </label>

            <div className="col-lg-9">
              <input className="form-control" type="text" placeholder="Smith" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Email
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="email"
                placeholder="email@gmail.com"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label" />
            <div className="col-lg-9">
              <input
                type="reset"
                className="btn btn-secondary mr-2"
                value="Cancel"
              />
              <input
                type="button"
                className="btn btn-primary ml-2"
                value="Save Changes"
              />
            </div>
          </div>
        </form>
      </div>
      <div id="password" className="border  p-5">
        <h2 className="text-center mb-5 text-danger">Change Password</h2>
        <form>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Password
            </label>
            <div className="col-lg-9">
              <input className="form-control" type="password" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Confirm password
            </label>
            <div className="col-lg-9">
              <input className="form-control" type="password" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label" />
            <div className="col-lg-9">
              <input
                type="reset"
                className="btn btn-secondary mr-2"
                value="Cancel"
              />
              <input
                type="button"
                className="btn btn-primary ml-2"
                value="Save Changes"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
