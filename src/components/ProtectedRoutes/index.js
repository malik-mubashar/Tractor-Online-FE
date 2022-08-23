import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { RootContext } from "../../context/RootContext";

/**protected routes redirects to login page if not logged in */
const ProtectedRoute = ({ children, ...routeProps }) => {
  const history = useHistory();
  const { currentUser } = useContext(RootContext);

  return (
    <Route
      {...routeProps}
      render={() => {
        if (currentUser && currentUser == null) {
          history.push("/login");
        } else {
          debugger;
          if (currentUser && currentUser.role && currentUser.role[0]) {
            if (currentUser && currentUser.role[0].name === "admin") {
              return children;
            } else if (currentUser && currentUser.role[0].name === "customer") {
              if (window.location.pathname.includes("/profile-settings")) {
                return children;
              }
            } else {
              if (window.location.pathname.includes("/dashboard")) {
                history.push("/");
              }
            }
          } else {
            history.push("/");
          }
        }
      }}
    />
  );
};

export default ProtectedRoute;
