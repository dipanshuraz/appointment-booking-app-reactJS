import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AdminDashboard from "../../components/AdminSide/AdminDashboard";
import UserDashboard from "../../components/Users/UserDashboard";

const Dashboard = props => {
  const { user } = props;
  return (
    <>{user.regType === "admin" ? <AdminDashboard /> : <UserDashboard />}</>
  );
};

Dashboard.propTypes = {
  user: PropTypes.objectOf.isRequired
};

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(mapStateToProps, null)(Dashboard);
