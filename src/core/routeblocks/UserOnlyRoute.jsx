import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/index";

const UserOnlyRoute = ({ children, redirect }) => {
  let { status } = useAuth();
  const history = useHistory();

  useEffect(() => {
    console.log(status);
    if (status !== "user") {
      // history.push("/login");
      status = "user";
    }
    // alert(status);
  }, [status]);

  return <div>{status === "user" && children}</div>;
};

export default UserOnlyRoute;
