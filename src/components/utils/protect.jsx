import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return children;
};

export default ProtectedRoute;
