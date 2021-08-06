import React, { FunctionComponent } from "react";
import AuthRoutes from "./AuthRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const rootRoutes: FunctionComponent = () => {
  return (
    <Router>
      <AuthRoutes />
    </Router>
  );
};

export default rootRoutes;
