import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import ListAttorneys from "../pages/customer/attorneyList";
import CaseForm from "../pages/customer/attorneyDetails";
import ProtectedRoute from './clientProtectedRoutes'

const CustomerRoutes: FC = () => {
  return (
    <Switch>
      <ProtectedRoute path='/client' exact component={ListAttorneys} />
      <ProtectedRoute path='/client/attorney/list' exact component={ListAttorneys} />
      <ProtectedRoute path='/client/attorney/details' exact component={CaseForm} />
    </Switch>
  );
};

export default CustomerRoutes;