import { createContext, useState } from "react";

export const AuthStatus = createContext();

const ContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(localStorage.getItem("authData"));

  return (
    <AuthStatus.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthStatus.Provider>
  );
};
export default ContextProvider;
