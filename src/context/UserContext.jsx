import { createContext, useState } from "react";

export const UserContext = createContext(null);

//crear el provider

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //función de inicio de sesión
  const logIn = (correo, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || null;

    if (!users) {
      return { ok: false, message: "No hay datos de usuarios en la BD" };
    }

    const findUser = users.find(
      (user) => user.correo === correo && user.password === password,
    );

    if (!findUser) {
      return { ok: false, message: "❌Correo o contraseña incorrectos" };
    } else {
      const { correo, id, rol } = findUser;
      setUser({ correo, id, rol });
      return { ok: true, message: "✅Login ok!" };
    }
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
