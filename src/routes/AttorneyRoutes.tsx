import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import CaseList from "../pages/attorney/caseList";

const CustomerRoutes: FC = () => {
  return (
    <Switch>
      <Route path='/case/list' exact component={CaseList} />
    </Switch> 
  );
};

export default CustomerRoutes;