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
				}
				else {
          if (currentUser && currentUser.roles ) {
            if (currentUser && currentUser.roles.indexOf('admin')>-1) {
              return children;
            } else if (currentUser && currentUser.roles.indexOf('customer')>-1) {
              if (window.location.pathname.includes("/profile-settings")) {
                return children;
							} else {
                history.push("/");
							}
            } else {
              if (window.location.pathname.includes("/dashboard")) {
                history.push("/");
              }
            }
					}
					else {
            history.push("/");
          }
        }
      }}
    />
  );
};

export default ProtectedRoute;
