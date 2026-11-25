import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />; //redirecciona al Login
  }
};

export default ProtectedRoutes;
