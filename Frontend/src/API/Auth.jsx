import React, { useState, useEffect, useMemo } from "react";
import instance from "../API/axios";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [inforUser, setInforUser] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      instance.defaults.headers.common["Authorization"] = "token " + token;
      setCurrentUser(true);
    } else {
      setCurrentUser(false);
    }
  }, []);

  useEffect(() => {
    async function getUser() {
      const response = await instance
        .get("auth/profile/")
        .then((r) => r.data)
        .catch((err) => err.message);
      setInforUser(response);
    }
    getUser();
  }, []);

  const providerValue = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      inforUser,
      setInforUser,
    }),
    [currentUser, inforUser]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
