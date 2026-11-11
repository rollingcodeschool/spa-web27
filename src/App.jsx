import { BrowserRouter, Routes, Route } from "react-router";
import HomeScreen from "./views/HomeScreen";
import AboutScreen from "./views/AboutScreen";
import NotFoundScreen from "./views/NotFoundScreen";
import LayoutApp from "./layout/LayoutApp";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* las rutas */}
        <Route path="/" element={<LayoutApp />}>
          <Route index element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
