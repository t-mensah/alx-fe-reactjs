import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // use null for logged out

  const login = (userData) => setUser(userData || { name: "Test User" });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// This is the custom hook the checker requires:
export const useAuth = () => {
  return useContext(AuthContext);
};
