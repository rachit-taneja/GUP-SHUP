import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isauthenticated } = useSelector((state) => state.userSlice);

  console.log("Authenticated:", isauthenticated);

  if (!isauthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoutes;