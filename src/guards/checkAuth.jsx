import React from "react";
import { Navigate } from "react-router-dom";
import BasicAxios from "../helpers/axios/index";
import { useSelector, useDispatch } from "react-redux";
import { getJwtToken } from "../helpers/jwt";
import { setJwtToken } from "../helpers/jwt";
import Login from "../pages/Login/Login";
import Loading from "../pages/Loading/Loading";

const checkAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    console.log(props.data);

    if (!props.data && props.loading) {
      // Handle loading state, e.g. show a spinner
      return <Loading />;
    }

    if (!props.data && !props.loading) {
      return <Navigate to="/login" />;
      // Redirect to login page if user is not authenticated
    }

    // Render the protected component if user is authenticated
    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default checkAuth;
