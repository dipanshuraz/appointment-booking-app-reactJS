import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bool: false
    };
  }

  onClickEmail = () => {
    this.setState(prev => ({ bool: !prev.bool }));
  };

  render() {
    return (
      <>
        <div className="container mt-5">
          <button type="button" className="btn btn-light border btn-sm my-3">
            <Link to="/dash">
              <i className="fas fa-arrow-left border rounded-circle" /> GOTO
              DASHBOARD
            </Link>
          </button>
          <div className="row">
            <div className="col-md-6 ">
              <div className="row d-flex align-items-center h-100">
                <div className="col-md-2 " />
                <div className="col-md-8">
                  <button
                    type="button"
                    className="btn btn-lg btn-light border btn-block text-left"
                    onClick={this.onClickEmail}
                  >
                    <i className="far fa-envelope" /> Email
                  </button>
                  {this.state.bool ? (
                    <form action="">
                      <div className="form-group">
                        <input
                          className="form-control form-control-lg my-2"
                          type="text"
                          placeholder="Email"
                        />
                        <input
                          className="form-control form-control-lg my-2"
                          type="text"
                          placeholder="Password"
                        />
                        <button
                          type="button"
                          className="btn btn-lg btn-primary border btn-block text-center"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  ) : (
                      <>
                        <button
                          type="button"
                          className="btn btn-lg btn-primary border btn-block text-left"
                        >
                          <i className="fab fa-google" /> Gmail
                      </button>
                        <button
                          type="button"
                          className="btn btn-lg btn-secondary border btn-block text-left"
                        >
                          <i className="fab fa-facebook-f" /> Facebook
                      </button>
                      </>
                    )}
                </div>
                <div className="col-md-2 " />
              </div>
            </div>
            <div className="col-md-6">
              <img src="./images/ofc.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
