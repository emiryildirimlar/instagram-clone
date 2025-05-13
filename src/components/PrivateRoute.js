import { use } from "react";
import { Navigate,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


export default function PrivateRoute({ children }) {
    const user=useSelector((state) => state.auth.user);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" replace={true} state={{
            returnUrl: location.pathname
        }}/>;
    }
    return children;
}