import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NavBarPublic from "./NavbarPublic";
import NoMatch from "./NoMatch";
import { connect } from "react-redux";
import { checkLogin } from "../redux/authentication/actions";

const Routes = ({ checkLogin }) => {
  useEffect(() => {
    let user = localStorage.getItem("logged");
    if (user) {
      user = JSON.parse(user);
      checkLogin(user);
    }
  }, []);

  return (
    <>
      <Route path="/" component={NavBarPublic} />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/dash" render={() => <DashboardRoutes />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  checkLogin: payload => dispatch(checkLogin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
