import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

/**unprotected routes redirects to root(/) if  logged in */
const UnProtectedRoute = ({ children, ...routeProps }) => {
	var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;

  const history = useHistory();

  return (
    <Route
      {...routeProps}
			render={() => {
				debugger;
        if (user!= null) {
					history.push('/dashboard')
					debugger;
        }
        else {
          return children
        }
      }}
    />
  );
};

export default UnProtectedRoute;
