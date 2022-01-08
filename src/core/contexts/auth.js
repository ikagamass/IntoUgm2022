import React, { useState, useEffect } from "react";
import {
  POST_REGISTER,
  POST_LOGIN,
  POST_CONTINUE_SESSION,
  POST_RESTORE_SESSION,
} from "../../api";

const AuthStore = () => {
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("initial"); // initial | user | guest
  const [isRestore, setRestore] = useState(0); // initial | user | guest

  const authMethods = {
    login: async (props) => {
      const res = await POST_LOGIN(props);

      //success

      if (res.data.status === "OK") {
        setToken(res.data.body.token); //working
        setStatus("user");

        setUserData(res.data.body.user_data);
      } else {
        setStatus("guest");
      }

      return res;
    },

    register: async (props) => {
      // console.log(props);
      const res = await POST_REGISTER(props);

      if (res.data.status === "OK") {
        setUserData(res.data.body.user_data);
        setToken(res.data.body.token);
        setStatus("user");
      } else {
        setStatus("guest");
      }

      return res;
    },

    logout: () => {
      window.localStorage.removeItem("token");
      setUserData({});
      setToken("");
      setStatus("guest");
    },

    restoreSession: async (props) => {
      const res = await POST_RESTORE_SESSION(props);
      // console.log(res);

      if (res !== undefined) {
        if (res.data.status === "OK") {
          setStatus("user");
          setUserData(res.data.body.user_data);
        } else {
          // console.log("Gagal resore, guest");
          setStatus("guest");
        }
      } else {
        // console.log("Gagal resore, guest");
        setStatus("guest");
      }
    },
  };

  useEffect(() => {}, [userData]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    authMethods.restoreSession(token);
  }, []);

  // Set token to local storage
  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else {
      // console.log("ga ada token");
    }
  }, [token]);

  return {
    status,
    authMethods,
    userData,
    token,
    setStatus,
  };
};

export default AuthStore;
