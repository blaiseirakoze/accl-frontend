import React, { FunctionComponent } from "react";
import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";
import AttorneyRoutes from './AttorneyRoutes';
import { BrowserRouter as Router } from "react-router-dom";

const rootRoutes: FunctionComponent = () => {
  return (
    <Router>
      <AuthRoutes />
      <CustomerRoutes />
      <AttorneyRoutes/>
    </Router>
  );
};

export default rootRoutes;
