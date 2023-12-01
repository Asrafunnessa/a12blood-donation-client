/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        // return  <span className="loading loading-infinity loading-lg"></span>
        return  <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
    // return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;