import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userRegister } from '../redux/authentication/actions'
import { connect } from "react-redux";
import uniqid from 'uniqid'
export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bool: false,
      regUser: {
        uniqid: '',
        user_full_name: '',
        user_email: '',
        user_type: '',
        user_pass: ''
      }
    };
  }

  onClickEmail = () => {
    this.setState(prev => ({ bool: !prev.bool }));
  };


  handleChange = e => {
    let obj = { ...this.state.regUser, [e.target.name]: e.target.value }
    this.setState({ regUser: obj })
  }


  handleClick = () => {
    this.setState({ ...this.state.regUser, regUser: { uniqid: uniqid() } }, () => {
      // this.props.userRegister(this.state.regUser)
      console.log(this.state.regUser);

    })
  }

  render() {
    const { bool } = this.state;
    return (
      <>
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
                          placeholder="Name"
                          onChange={this.handleChange}
                          value={this.state.regUser.user_full_name}
                          name='user_full_name'
                        />
                        <input
                          className="form-control form-control-lg my-2"
                          type="text"
                          placeholder="Email"
                          onChange={this.handleChange}
                          value={this.state.regUser.user_email}
                          name='user_email'
                        />
                        <select
                          className="form-control form-control-lg my-2"
                          id="exampleFormControlSelect1"
                          onChange={this.handleChange}
                          value={this.state.regUser.user_type}
                          name='user_type'
                        >
                          <option value="">Select Type</option>
                          <option value='admin'>Admin</option>
                          <option value='user'>User</option>
                        </select>
                        <input
                          className="form-control form-control-lg my-2"
                          type="text"
                          placeholder="Password"
                          onChange={this.handleChange}
                          value={this.state.regUser.user_pass}
                          name='user_pass'
                        />
                        <button
                          type="button"
                          className="btn btn-lg btn-primary border btn-block text-center"
                          onClick={this.handleClick}
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
              <img src="./images/pic5.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  userRegister: payload => userRegister(payload)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
