/* eslint-disable no-alert */
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../redux/authentication/actions";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bool: false,
      logUser: {
        logEmail: "",
        logPass: "",
        logType: ""
      }
    };
  }

  handleClick = async () => {
    const {
      logUser: { logEmail, logPass, logType }
    } = this.state;
    const { logUser } = this.state;
    const { loginUser1 } = this.props;

    if (logEmail !== "" && logPass !== "" && logType !== "") {
      await loginUser1(logUser);
      this.setState({
        logUser: {
          logEmail: "",
          logPass: "",
          logType: ""
        }
      });
    } else {
      alert("Check credentials");
    }
  };

  handleChange = e => {
    const { logUser } = this.state;
    const obj = { ...logUser, [e.target.name]: e.target.value };
    this.setState({ logUser: obj });
  };

  onClickEmail = () => {
    this.setState(prev => ({ bool: !prev.bool }));
  };

  render() {
    const { isAuth } = this.props;
    const {
      logUser: { logEmail, logPass, logType }
    } = this.state;

    const { bool } = this.state;
    return (
      <>
        {isAuth ? (
          <Redirect to="/dash" />
        ) : (
          <div className="container mt-5">
            <button type="button" className="btn btn-light border btn-sm my-3">
              <Link to="/">
                <i className="fas fa-arrow-left border rounded-circle" />{" "}
                <span className="text-dark">Landing Page</span>
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
                    {bool ? (
                      <form action="">
                        <div className="form-group">
                          <input
                            className="form-control form-control-lg my-2"
                            type="text"
                            placeholder="Email"
                            onChange={this.handleChange}
                            value={logEmail}
                            name="logEmail"
                          />
                          <input
                            className="form-control form-control-lg my-2"
                            type="text"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={logPass}
                            name="logPass"
                          />
                          <select
                            className="form-control form-control-lg my-2"
                            id="exampleFormControlSelect1"
                            onChange={this.handleChange}
                            value={logType}
                            name="logType"
                          >
                            <option value="">Select Type</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                          </select>
                          <button
                            onClick={this.handleClick}
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
        )}
      </>
    );
  }
}

Login.propTypes = {
  loginUser1: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  user: state.authReducer.user
});

const mapDispatchToProps = {
  loginUser1: payload => loginUser(payload)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
