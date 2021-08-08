import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { decode } from "jsonwebtoken";

const userToken:any = localStorage.getItem("USER-TOKEN");
const token:any =  decode(userToken); 
const role = token && token.sub;
const expiresIn = token && token.exp;

const clientProtectedRoute = ({ isClient, component: Component, ...rest }: {
  [x: string]: any;
  isClient: any;
  component: any;
}) => (
  <Route
    {...rest}
    render={props => {
      if(userToken && expiresIn > Math.floor(Date.now() / 1000) && isClient){
        return <Component {...props} />;
      } else {
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
    isClient: token ? role === "client" : null,
  };
}

export default connect(mapStateToProps)(clientProtectedRoute);