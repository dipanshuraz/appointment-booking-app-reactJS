import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dashboard from "./Dashboard/Dashboard";
import Settings from "./Dashboard/Settings";
import Profile from "./Dashboard/Profile";
import Reports from "./Dashboard/Reports";
import NavBar from "./Dashboard/NavBar";
import BookingSlot from "../components/Users/BookingSlot";
import BookingForm from "../components/Users/BookingForm";
import BookingPayment from "../components/Users/BookingPayment";
import BookingConfirmation from "../components/Users/BookingConfirmation";
import CreateOne from "../components/AdminSide/CreateSlot";
import ConfirmSlots from "../components/AdminSide/ConfirmSlots";
import CancelSlots from "../components/AdminSide/CancelSlots";
import { fetchSlots } from "../redux/Admin/actions";

const DashboardRoutes = props => {
  useEffect(() => {
    const { fetchSlots } = props;
    fetchSlots();
  }, []);
  const { isAuth } = props;
  console.log(isAuth);
  return isAuth ? (
    <>
      <Route path="/dash" component={NavBar} />

      <Route path="/dash" exact render={() => <Dashboard />} />
      <Route exact path="/dash/book" render={() => <BookingSlot />} />
      <Route exact path="/dash/userdetail">
        <BookingForm />
      </Route>
      <Route exact path="/dash/payment">
        <BookingPayment />
      </Route>
      <Route exact path="/dash/successful">
        <BookingConfirmation />
      </Route>
      <Route exact path="/dash/createone" component={CreateOne} />
      <Route exact path="/dash/confirm" component={ConfirmSlots} />
      <Route exact path="/dash/cancelslots" component={CancelSlots} />
      <Route path="/dash/settings" render={() => <Settings />} />
      <Route path="/dash/profile" render={() => <Profile />} />
      <Route path="/dash/reports" render={() => <Reports />} />
    </>
  ) : (
    <Redirect to="/login" />
  );
};

DashboardRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = {
  fetchSlots
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRoutes);
