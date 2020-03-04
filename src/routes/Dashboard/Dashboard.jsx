import React from "react";
import AdminDashboard from "../../components/AdminSide/AdminDashboard";
import UserDashboard from "../../components/Users/UserDashboard";
import { connect } from "react-redux";

const Dashboard = (props) => {
  return (
    <>
      {props.user.user_type === 'admin' ? (<AdminDashboard />) :
        (<UserDashboard />)}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user
})

export default connect(mapStateToProps, null)(Dashboard);
