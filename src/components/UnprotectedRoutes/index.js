import React, { useContext } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";

/**unprotected routes redirects to root(/) if  logged in */
const UnProtectedRoute = ({ children, ...routeProps }) => {
	var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;

  const history = useHistory();
	const location = useLocation();
  return (
    <Route
      {...routeProps}
			render={() => {
        if (user!= null && (location.pathname=='/login/'||location.pathname=='/login')) {
					history.push('/dashboard')
        }
        else {
          return children
        }
      }}
    />
  );
};

export default UnProtectedRoute;
