import { NavLink, Link } from "react-router";
const NavBarApp = () => {
  const itemsMenu = [
    {
      id: 1,
      path: "/",
      text: "Inicio",
    },
    {
      id: 2,
      path: "about",
      text: "Sobre nosotros",
    },
    {
      id: 3,
      path: "Login",
      text: "Inicio de sesión",
    },
  ];

  return (
    <nav className="w-screen flex justify-between px-10 py-5 items-center bg-indigo-600 text-white">
      <div>
        <Link to="/">
          <span>Stickers Nerds</span>
        </Link>
      </div>
      <ul className="flex gap-4">
        {itemsMenu.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-slate-50 font-semibold underline" : ""
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBarApp;
