import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import UsersList from "../pages/admin/usersList";
import ProtectedRoute from './protectRoutes/adminProtectedRoutes'

const AdminRoutes: FC = () => {
  return (
    <Switch>
      <ProtectedRoute path='/admin/users/list' exact component={UsersList} />
    </Switch>
  );
};

export default AdminRoutes;