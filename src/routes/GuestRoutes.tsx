import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import ListAttorneys from "../pages/guest/attorneyList";

const CustomerRoutes: FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={ListAttorneys} />
      <Route path='/attorney/list' exact component={ListAttorneys} />
    </Switch>
  );
};

export default CustomerRoutes;