import React from "react";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
  return (
    <>
      <div>DASHBOARD HOME</div>
      <UserDashboard />
      <AdminDashboard />
    </>
  );
};

export default Dashboard;
