import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (props.loggedIn === false) {
        console.log(false);
    }
    return (
        loggedIn ? <Component {...props} /> : <Navigate to="/signin" />
    )
}

export default ProtectedRoute;