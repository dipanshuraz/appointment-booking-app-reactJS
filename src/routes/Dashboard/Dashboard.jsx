import React from "react";
import { connect } from "react-redux";
import AdminDashboard from "../../components/AdminSide/AdminDashboard";
import UserDashboard from "../../components/Users/UserDashboard";
import AccountSetting from "../../components/AccountSetting";


const Dashboard = props => {
  return (
    <>
      {
        props.user.user_type === "admin" ? (
          <AdminDashboard />
        ) : (
            <UserDashboard />
          )
      }
      <AccountSetting />
    </>
  );
};

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(mapStateToProps, null)(Dashboard);
