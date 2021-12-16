import React, { useContext, useEffect } from "react";
import AuthStore from "./auth";

const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const { token, authMethods, setStatus } = useAuth();

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else {
      const savedToken = localStorage.getItem("token");
      if (savedToken) authMethods.authenticate(savedToken);
      else setStatus("guset");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <AppContext.Provider
      value={{
        auth: AuthStore(),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAuth = () => useContext(AppContext).auth;
