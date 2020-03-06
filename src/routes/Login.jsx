import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import uniqid from "uniqid";
import { loginUser } from "../redux/authentication/actions";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bool: false,
      logUser: {
        log_email: "",
        log_pass: "",
        log_type: ""
      }
    };
  }

  handleClick = async () => {
    console.log(this.state.logUser.log_type);
    if (
      this.state.logUser.log_email !== "" &&
      this.state.logUser.log_user !== "" &&
      this.state.logUser.log_type !== ""
    ) {
      await this.props.loginUser(this.state.logUser);
      this.setState({
        logUser: {
          log_email: "",
          log_pass: "",
          log_type: ""
        }
      });
    } else {
      alert("Check credentials");
    }
  };

  handleChange = e => {
    const obj = { ...this.state.logUser, [e.target.name]: e.target.value };
    this.setState({ logUser: obj }, () => console.log(this.state));
  };

  onClickEmail = () => {
    this.setState(prev => ({ bool: !prev.bool }));
    // console.log(uniqid());
  };

  render() {
    const { bool } = this.state;
    return (
      <>
        {this.props.isAuth ? (
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
                            value={this.state.logUser.log_email}
                            name="log_email"
                          />
                          <input
                            className="form-control form-control-lg my-2"
                            type="text"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.logUser.log_pass}
                            name="log_pass"
                          />
                          <select
                            className="form-control form-control-lg my-2"
                            id="exampleFormControlSelect1"
                            onChange={this.handleChange}
                            value={this.state.logUser.type}
                            name="log_type"
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
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  user: state.authReducer.user
});

const mapDispatchToProps = {
  loginUser: payload => loginUser(payload)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
