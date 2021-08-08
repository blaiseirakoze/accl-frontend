import React, { FunctionComponent } from "react";
import AuthRoutes from "./AuthRoutes";
import ClientRoutes from "./ClientRoutes";
import AttorneyRoutes from './AttorneyRoutes';
import GuestRoutes from './GuestRoutes';
import { BrowserRouter as Router } from "react-router-dom";

const rootRoutes: FunctionComponent = () => {
  return (
    <Router>
      <AuthRoutes />
      <ClientRoutes />
      <AttorneyRoutes/>
      <GuestRoutes />
    </Router>
  );
};

export default rootRoutes;
