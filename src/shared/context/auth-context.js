import { createContext, useCallback, useEffect, useState } from "react";
import { useHttpRequest } from "../hooks/fetchData-hook";

export const AuthContext = createContext({
  isLoggedIn: false,
  user: {},
  onLogin: () => {},
  onLogout: () => {},
  sendAuthRequest: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { sendRequest } = useHttpRequest();
  const [user, setUser] = useState({});

  const loginHandler = (token, user) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    setUser(user);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const sendAuthRequest = useCallback((endPoint, body, headers, fn) => {
    sendRequest(
      process.env.REACT_APP_BACKEND_URL + `/api/v1/auth/${endPoint}`,
      "POST",
      undefined,
      body,
      headers,
      (data) => {
        fn(data);
      }
    );
  }, []);

  const getCurentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/api/v1/auth/currentUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      getCurentUser();
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        sendAuthRequest,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
