import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectAuthentificated } from 'redux/authReducer';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authentificated = useSelector(selectAuthentificated);

  return authentificated ? children : <Navigate to={redirectTo}/>;
};

export default PrivateRoute;
