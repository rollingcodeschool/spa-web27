import { BrowserRouter, Routes, Route } from "react-router";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PrimaryRoutes from "./routes/PrimaryRoutes";
import LoginScreen from "./views/LoginScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* las rutas */}
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <PrimaryRoutes />
            </ProtectedRoutes>
          }
        />
        <Route path="login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
