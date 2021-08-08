import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { decode } from "jsonwebtoken";

const userToken:any = localStorage.getItem("USER-TOKEN");
const token:any =  decode(userToken); 
const role = token && token.sub;
const expiresIn = token && token.exp;

const attorneyProtectedRoute = ({ isAttorney, component: Component, ...rest }: {
  [x: string]: any;
  isAttorney: any;
  component: any;
}) => (
  <Route
    {...rest}
    render={props => {
      if(userToken && expiresIn > Math.floor(Date.now() / 1000) && isAttorney){
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
    isAttorney: token ? role === "attorney" : null,
  };
}

export default connect(mapStateToProps)(attorneyProtectedRoute);