import { Outlet } from "react-router";
import NavBarApp from "../components/NavBarApp";
import FooterApp from "../components/FooterApp";

const LayoutApp = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <header>
        <NavBarApp />
      </header>
      <main className="h-full">
        <Outlet />
      </main>
      <footer>
        <FooterApp />
      </footer>
    </div>
  );
};

export default LayoutApp;
