import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {RootContext} from '../../context/RootContext';

/**protected routes redirects to login page if not logged in */
const ProtectedRoute = ({ children, ...routeProps }) => {

	const history = useHistory();
	const { currentUser } = useContext(RootContext);


  return (
    <Route
      {...routeProps}
      render={() => {
        if (currentUser == null) {
          history.push('/login')
        }
        else {
          return children
        }
      }}
    />
  );
};

export default ProtectedRoute;
