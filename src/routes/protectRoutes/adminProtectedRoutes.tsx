import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { decode } from "jsonwebtoken";

let userToken:any = localStorage.getItem("USER-TOKEN");
  userToken = userToken && userToken.split(',');  
  const token:any = userToken && decode(userToken[0]); 

const role = userToken && userToken[1];
const expiresIn = token && token.exp;

const adminProtectedRoute = ({ isAdmin, component: Component, ...rest }: {
  [x: string]: any;
  isAdmin: any;
  component: any;
}) => (
  <Route
    {...rest}
    render={props => {
      if(token && expiresIn > Math.floor(Date.now() / 1000) && isAdmin){
        return <Component {...props} />;
      } 
      else {
        return (
          <Redirect
            to={{
              pathname: "/signin",
              state: {
                from: props.location
              }
            }}
          />
        );
      }
    }}
  />
);

function mapStateToProps() {
  return {
    isAdmin: token ? role === "admin" : null,
  };
}

export default connect(mapStateToProps)(adminProtectedRoute);