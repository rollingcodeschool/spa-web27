import { BrowserRouter, Routes, Route } from "react-router";

import PrimaryRoutes from "./routes/PrimaryRoutes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* las rutas */}
        <Route path="/*" element={<PrimaryRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
