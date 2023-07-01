import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Contexts/authContext";

export default function PrivateRoute({children}){
    const { token } = useAuth();
    const location = useLocation()
    return token ? children : <Navigate to="/login" state={{from:location}} />
}