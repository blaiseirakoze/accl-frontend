import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import AttorneyList from "../pages/court/attorneyList";
import ProtectedRoute from './protectRoutes/courtProtectedRoutes'

const AdminRoutes: FC = () => {
  return (
    <Switch>
      <ProtectedRoute path='/court/attorney/list' exact component={AttorneyList} />
    </Switch>
  );
};

export default AdminRoutes;