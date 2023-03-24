import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Account from "./Account";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.user
            ? <Account />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;