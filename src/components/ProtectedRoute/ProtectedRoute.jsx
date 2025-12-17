import { Navigate, useLocation } from "react-router-dom";
import AppContext from "../context/ApiContext";
import { useContext } from "react";

export function ProtectedRoute({ children, anonymous = false }) {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { isLoggedIn } = useContext(AppContext);

  if (anonymous && isLoggedIn) {
    console.log(
      "Redirigiendo porque el usuario ya está autenticado",
      isLoggedIn
    );
    return <Navigate to={from} />;
  }
  if (!anonymous && !isLoggedIn) {
    console.log(
      "Redirigiendo al login porque el usuario no está autenticado",
      isLoggedIn
    );
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
