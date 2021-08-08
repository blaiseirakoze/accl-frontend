import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "../pages/auth/signin";
import SignUpAttorney from "../pages/auth/signup/attorney";
import SignUpClient from "../pages/auth/signup/customer";
import SignUpType from "../pages/auth/signup/signupType";

const AuthRoutes: FC = () => {
  return (
    <Switch>
      <Route path='/signin' exact component={SignIn} />
      <Route path='/signup/type' exact component={SignUpType} />
      <Route path='/signup/customer' exact component={SignUpClient} />
      <Route path='/signup/attorney' exact component={SignUpAttorney} />
    </Switch>
  );
};

export default AuthRoutes;
