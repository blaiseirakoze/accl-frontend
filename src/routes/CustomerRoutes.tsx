import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import ListAttorneys from "../pages/customer/attorneyList";
import CaseForm from "../pages/customer/attorneyDetails";

const CustomerRoutes: FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={ListAttorneys} />
      <Route path='/attorney/list' exact component={ListAttorneys} />
      <Route path='/attorney/details' exact component={CaseForm} />
    </Switch>
  );
};

export default CustomerRoutes;