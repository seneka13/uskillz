import React from "react";
import { Route, Redirect, Switch} from "react-router-dom";
import routes from "../../routes/routes";
import Login from "./Login";
import SignUp from "./SignUp";
import Reset from "./Reset";
import ChangePass from "./Reset/ResetConfirm";
import CheckMail from "./CheckMail";

const Auth = () => {
  return (
      <Switch>
        <Route path={routes.api.logIn} component={Login} />
        <Route path={routes.api.signUp} component={SignUp} />
        <Route path={routes.api.check} component={CheckMail} />
        <Route path={routes.api.resetPass} component={Reset} />
        <Route path={routes.api.resetPassConfirm}>{localStorage.resetToken ? <ChangePass /> : <Redirect to={routes.api.resetPass} />}</Route>
      </Switch>
  );
};

export default Auth;
