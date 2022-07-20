import React from "react";
import {Navigate} from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const ProtectedRoutes = ({ children }) => {
  // get cookie from browser if logged in
  const token = cookies.get("TOKEN");
  // returns the user to the landing page if there is no valid token set
  if (!token) {
    return <Navigate to="/" replace />;
  }
  // returns route if there is a valid token set in the cookie
  return children;
 };

export default ProtectedRoutes;