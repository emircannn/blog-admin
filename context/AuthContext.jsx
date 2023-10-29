'use client'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const { createContext } = require("react");

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true)
  
  const token = typeof window != "undefined" && window.localStorage && window.localStorage.getItem("token");

  useEffect(() => {
      setLoading(true);
    if (token) {
        const getToken = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}auth/verifyUserToken`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if(!res.data.error) {
                    if (res.data.data) {
                        setAuth(res.data.data);
                        setLoading(false);
                    }
                    else {
                        setAuth(null);
                        setLoading(false);
                    }
                }
                else {
                    setAuth(null);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        }
        getToken()
    } else {
        setAuth(null)
        setLoading(false);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
