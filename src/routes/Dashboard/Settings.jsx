import React, { Component } from "react";

export class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: ""
    };
  }

  componentDidMount = () => {
    let user = localStorage.getItem("logged");
    user = JSON.parse(user);
    if (user) {
      this.setState({ username: user.regUsername, email: user.regEmail });
    }
  };

  handleClick = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center my-5">SETTINGS PAGE</h1>
        <div className="row">
          <div className="col-4 col-lg-4">
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
          <div className="col-md-8">
            <div id="User-Detail" className="border  p-5 mb-5">
              <h2 className="text-center text-danger mb-5">User Details</h2>
              <form role="form">
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Name
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="John"
                      value={this.state.username}
                      name="username"
                      onChange={this.handleClick}
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
                      value={this.state.email}
                      name="email"
                      onChange={this.handleClick}
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
          </div>
        </div>

        <div id="password" className="border  p-5">
          <h2 className="text-center mb-5 text-danger">Change Password</h2>
          <form>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Old Password
              </label>
              <div className="col-lg-9">
                <input className="form-control" type="password" />
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
    );
  }
}

export default Settings;
