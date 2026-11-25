import { Routes, Route } from "react-router";
import LayoutApp from "../layout/LayoutApp";
import HomeScreen from "../views/HomeScreen";
import AboutScreen from "../views/AboutScreen";
import NotFoundScreen from "../views/NotFoundScreen";
import AdminScreen from "../views/AdminScreen";
import ProtectedAdminRoute from "./ProtectedAdminRoute";

const PrimaryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
        <Route
          path="admin"
          element={
            <ProtectedAdminRoute>
              <AdminScreen />
            </ProtectedAdminRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default PrimaryRoutes;
