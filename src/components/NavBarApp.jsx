const NavBarApp = () => {
  return (
    <nav className="w-screen flex justify-between px-10 py-5 items-center bg-indigo-600 text-white">
      <div>
        <span>Stickers Nerds</span>
      </div>
      <ul className="flex gap-4">
        <li>Inicio</li>
        <li>Sobre nosotros</li>
      </ul>
    </nav>
  );
};

export default NavBarApp;
