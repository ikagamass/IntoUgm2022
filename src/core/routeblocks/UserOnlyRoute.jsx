import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/index";

const UserOnlyRoute = ({ children, redirect }) => {
  const { status } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (status !== "user" && status !== "initial") {
      history.push(redirect);
    }
  }, [status]);

  return <div>{status === "user" && children}</div>;
};

export default UserOnlyRoute;
