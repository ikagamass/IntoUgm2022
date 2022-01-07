import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/index";

const UserOnlyRoute = ({ children, redirect, currentPage }) => {
  let { status } = useAuth();
  const history = useHistory();

  useEffect(() => {
    console.log("User only route", status);
    if (status !== "user" && status !== "initial") {
      history.push("/login");
      status = "user";
    }
  }, [status]);

  return <div>{status === "user" && children}</div>;
};

export default UserOnlyRoute;
