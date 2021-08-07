import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "../pages/auth/signin";
import SignUp from "../pages/auth/signup/attorney";
import SignUpType from "../pages/auth/signup/signupType";

const AuthRoutes: FC = () => {
  return (
    <Switch>
      <Route path='/signin' exact component={SignIn} />
      <Route path='/signup/type' exact component={SignUpType} />
      <Route path='/signup/customer' exact component={SignUp} />
      <Route path='/signup/attorney' exact component={SignUp} />
    </Switch>
  );
};

export default AuthRoutes;
