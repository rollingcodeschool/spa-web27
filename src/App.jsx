import { BrowserRouter, Routes, Route } from "react-router";

import PrimaryRoutes from "./routes/PrimaryRoutes";
import LoginScreen from "./views/LoginScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* las rutas */}
        <Route path="/*" element={<PrimaryRoutes />} />
        <Route path="login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
