import React from "react";
import { Navigate } from "react-router-dom";

const Protected = (props) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }
  return props.children; // Use props.children instead of just children
};

export default Protected;
