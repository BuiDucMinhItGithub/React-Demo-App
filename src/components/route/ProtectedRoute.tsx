import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/store";

export function ProtectedRoute() {
    // `auth` reducer is mounted at `state.auth`; read from that slice
    const isAuthen = useAppSelector((state) => state.auth.isAuthenticated);
    console.log("isAuthen (protected route):", isAuthen);
    const location = useLocation();
    if (!isAuthen) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return <Outlet />;
}