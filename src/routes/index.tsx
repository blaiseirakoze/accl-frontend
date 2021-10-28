import React, { FunctionComponent } from "react";
import AuthRoutes from "./AuthRoutes";
import ClientRoutes from "./ClientRoutes";
import AttorneyRoutes from './AttorneyRoutes';
import AdminRoutes from './AdminRoutes';
import CourtRoutes from './CourtRoutes';
import GuestRoutes from './GuestRoutes';
import { BrowserRouter as Router } from "react-router-dom";

const rootRoutes: FunctionComponent = () => {
  return (
    <Router>
      <AuthRoutes />
      <ClientRoutes />
      <AttorneyRoutes/>
      <GuestRoutes />
      <AdminRoutes />
      <CourtRoutes />
    </Router>
  );
};

export default rootRoutes;
