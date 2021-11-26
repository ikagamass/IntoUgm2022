import { useState, useEffect } from "react";

const AuthStore = () => {
  const [userData, setUserData] = useState({});
  const [status, setStatus] = useState("initial"); // initial | user | guest

  const authMethods = {
    authenticate: () => {},
    login: (username, password) => {
      //success
      setStatus("user");
      // fail
      setStatus("guest");
    },
    signup: ({ name, email, password }) => {
      // return gamaxios
      //   .post("/register-customer", {
      //     name,
      //     email,
      //     password,
      //   })
      //   .then((res) => {
      //     setStatus("user");
      //     setUserData(res.data.body.user_data);
      //   })
      //   .catch((err) => console.log(err.response.data.message));
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

  return {
    status,
    authMethods,
    userData,
  };
};

export default AuthStore;
