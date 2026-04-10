import { useContext } from "react";
import { AuthContext } from "../authContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span>Loading...</span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signIn" />;
};

export default PrivateRoute;