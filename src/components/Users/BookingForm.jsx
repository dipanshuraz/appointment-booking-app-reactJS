import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { holdUserDetail } from "../../redux/User/action";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      mobile: "",
      detail: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });



  };



  // handleClick = (e) => {
  //   console.log("Hello World");
  //   this.props.add(e)
  // }

  render() {
    // console.log(this.state);
    return (
      <>
        <div className="container">
          <h1 className="text-center mt-5">Booking Page</h1>
          <form>
            <div className="form-group row">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Name
              </label>

              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="John Doe"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="john@gmail.com"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group row">
              <label htmlFor="mobileNumber" className="col-sm-2 col-form-label">
                Mobile Number
              </label>
              <input
                type="number"
                className="form-control"
                id="mobileNumber"
                name="mobile"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group row">
              <label htmlFor="detail" className="col-sm-2 col-form-label">
                Detail
              </label>

              <textarea
                className="form-control"
                id="detail"
                value={this.state.value}
                name="detail"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group row ">
              <div className="col-sm-12 mt-3">
                <Link
                  to="/dash/payment"
                  className="btn btn-outline-success  btn-block"
                  onClick={() => this.props.addHold(this.state)}
                >
                  Payment
                </Link>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = dispatch => {
  return {
    addHold: a => dispatch(holdUserDetail(a))
  };
};

export default connect(null, mapDispatchToProps)(BookingForm);
