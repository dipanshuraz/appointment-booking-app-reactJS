import React from "react";

const AccountSetting = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">Account Setting</h1>
        <div className="text-center mb-5">
          <img
            src="https://via.placeholder.com/150"
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
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <div
              data-target="#profile"
              data-toggle="tab"
              className="nav-link active h2"
            >
              Profile
            </div>
          </li>
          <li className="nav-item">
            <div data-target="#edit" data-toggle="tab" className="nav-link h2">
              Edit
            </div>
          </li>
        </ul>
        <div className="row my-2">
          <div className="col-lg-4  text-center" />

          <div className="col-lg-8">
            <div className="tab-content py-4">
              <div className="tab-pane active" id="profile">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <h4 className="my-5">Shivansh Singh</h4>
                    <h4 className="my-5">+91 45567 34567</h4>
                    <h4 className="my-5">shivansh@gmail.com</h4>
                    <h4 className="my-5">Amount Earned </h4>
                    <h4 className="text-danger">₹ 10000</h4>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="edit">
                <form role="form">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      First name
                    </label>
                    <div className="col-lg-9">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="John"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      Last name
                    </label>
                    <div className="col-lg-9">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Smith"
                      />
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
          </div>
        </div>
      </div>



      <div className="d-flex border border-dark p-5 justify-content-between">
        <div>
          <h4>Date: 22/10/12</h4>
          <h4>Name: JavaScript Meetup</h4>
          <h4>Venue: Bhive, HSR Layout, Bangalore</h4>
          <h4>Time: 11:00 am to 11:20 am</h4>

        </div>
        <div>
          <h4>JavaScript Meetup</h4>
          <h4>Bhive, HSR Layout, Bangalore</h4>
          <h4>22/10/12</h4>
        </div>



      </div>
    </>
  );
};

export default AccountSetting;
