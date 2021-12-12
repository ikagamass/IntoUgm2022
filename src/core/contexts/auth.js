import { useState, useEffect } from "react";
import { POST_REGISTER, POST_LOGIN } from "../../api";

const AuthStore = () => {
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("initial"); // initial | user | guest

  const authMethods = {
    authenticate: () => {},
    login: async (props) => {
      const res = await POST_LOGIN(props);
      //success
      if (res.status === "OK") {
        console.log("login");
        setStatus("user");
      } else {
        setStatus("guest");
      }
    },

    register: async (props) => {
      console.log("prtop");
      console.log(props);
      const res = await POST_REGISTER(props);
      console.log(res);
      console.log("woyyy gua disini jalan napa");

      // setUserData(res.data.body.user_data);
      // setToken(res.data.body.token);

      // if (res.data.status === "OK") {
      //   console.log("user");
      //   setStatus("user");
      // } else {
      //   setStatus("guest");
      //   console.log("guest");
      //   // console.log(res.data.status);
      // }

      console.log(userData);
    },
    logout: () => {
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
  };
};

export default AuthStore;
