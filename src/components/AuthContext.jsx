/* eslint-disable react/prop-types */
import { createContext, useMemo, useState } from "react";
import { useSelector } from 'react-redux'
import { selectCurrentUser } from "../slices/auth.slice.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // Logika autentikasi (misalnya, verifikasi data login)
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Logika logout
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
};
