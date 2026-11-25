import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router";

const ProtectedAdminRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user?.rol === "admin") {
    return children;
  } else {
    return <Navigate to="/" />; //redirecciona al Home
  }
};

export default ProtectedAdminRoute;
