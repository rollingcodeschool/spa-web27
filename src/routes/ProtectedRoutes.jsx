import { useState } from "react";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const [login, setLogin] = useState(true);

  if (login) {
    return children;
  } else {
    return <Navigate to="/" />; //redirecciona al Home
  }
};

export default ProtectedRoutes;
