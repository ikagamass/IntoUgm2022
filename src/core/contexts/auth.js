import React, { useState, useEffect } from "react";
import {
  POST_REGISTER,
  POST_LOGIN,
  POST_CONTINUE_SESSION,
  POST_RESTORE_SESSION,
} from "../../api";

const AuthStore = () => {
  const [userData, setUserData] = useState({});
  const [errorMessage, seterrorMessage] = useState(null);
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("initial"); // initial | user | guest
  const [isRestore, setRestore] = useState(0); // initial | user | guest

  const authMethods = {
    // authenticate: async (token) => {
    //   const res = await POST_CONTINUE_SESSION(token);

    //   if (res.status === "OK") {
    //     setUserData(res.data.body.user_data);
    //     setToken(res.data.body.token);
    //     setStatus("user");
    //   } else {
    //     setStatus("guest");
    //   }
    // },

    login: async (props) => {
      const res = await POST_LOGIN(props);

      console.log("Woyyy jalan diluar");
      console.log(res);

      //success

      if (res.status === 200) {
        if (res.data.status === "OK") {
          setToken(res.data.body.token); //working
          setStatus("user");

          setUserData(res.data.body.user_data);
        } else {
          setStatus("guest");
        }
      }

      return res;
    },

    register: async (props) => {
      const res = await POST_REGISTER(props);

      console.log(res);

      if (res.data.status === "OK") {
        console.log("auth set : ", "user");

        setUserData(res.data.body.user_data);
        setToken(res.data.body.token);
        setStatus("user");
      } else {
        setStatus("guest");

        console.log("Auth Not OK :", res.data.message);
        seterrorMessage(res.data.message);
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

      console.log(res);

      if (res !== undefined) {
        if (res.data.status === "OK") {
          setStatus("user");
          setUserData(res.data.body.user_data);
        } else {
          setStatus("guest");
        }
      }
    },
  };

  useEffect(() => {
    // console.log("Woyyy harusnya ada user data");
    // console.log(userData);
  }, [userData]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log("token", token);

    authMethods.restoreSession(token);
  }, []);

  // Set token to local storage
  useEffect(() => {
    // console.log("save token");
    // console.log(token);
    if (token) localStorage.setItem("token", token);
    else {
      // console.log("ga ada token");
    }
  }, [token]);

  console.log("stussss", status);

  // Cek error
  useEffect(() => {
    console.log("auth error :", errorMessage);
  }, [errorMessage]);

  return {
    status,
    authMethods,
    userData,
    token,
    setStatus,
  };
};

export default AuthStore;
