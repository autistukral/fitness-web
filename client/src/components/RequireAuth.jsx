import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Account from "./Account";
import Galerie from "./Galerie";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.user
            ? <Galerie />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;