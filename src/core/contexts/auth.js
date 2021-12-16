import { useState, useEffect } from "react";
import { POST_REGISTER, POST_LOGIN, POST_CONTINUE_SESSION } from "../../api";

const AuthStore = () => {
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("initial"); // initial | user | guest

  const authMethods = {
    authenticate: async (token) => {
      const res = await POST_CONTINUE_SESSION(token);

      if (res.status === "OK") {
        setUserData(res.data.body.user_data);
        setToken(res.data.body.token);
        setStatus("user");
      } else {
        setStatus("guest");
      }
    },

    login: async (props) => {
      const res = await POST_LOGIN(props);
      //success
      if (res.status === "OK") {
        setUserData(res.data.body.user_data);
        setToken(res.data.body.token);
        setStatus("user");
      } else {
        setStatus("guest");
      }
    },

    register: async (props) => {
      const res = await POST_REGISTER(props);

      if (res.data.status === "OK") {
        setUserData(res.data.body.user_data);
        setToken(res.data.body.token);
        setStatus("user");
      } else {
        setStatus("guest");
      }
    },
    logout: () => {
      localStorage.removeItem("token");
      setUserData({});
      setToken("");
      setStatus("guest");
    },
  };

  useEffect(() => {
    //masuk
    setStatus("user");
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    console.log("save token");
    if (token) localStorage.setItem("token", token);
    else {
      console.log("ga ada token");
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
