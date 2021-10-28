import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import CaseList from "../pages/attorney/caseList";
import ProtectedRoute from './protectRoutes/attorneyProtectedRoutes'

const CustomerRoutes: FC = () => {
  return (
    <Switch>
      <ProtectedRoute path='/attorney/case/list' exact component={CaseList} />
    </Switch> 
  );
};

export default CustomerRoutes;