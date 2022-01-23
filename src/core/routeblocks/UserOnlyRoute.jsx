import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/index";

const UserOnlyRoute = ({ children, redirect, currentPage }) => {
  let { status, userData } = useAuth();
  const history = useHistory();

  useEffect(() => {
    console.log("User only route", userData);
    if (status !== "user" && status !== "initial") {
      history.push("/login");
      status = "user";
    }
  }, [status]);

  // Bayar Only Route
  useEffect(() => {
    if (
      userData !== null &&
      userData.status == false &&
      currentPage === "Tour"
    ) {
      history.push("/login");
      status = "user";
    }
  }, [userData]);

  return <div>{status === "user" && children}</div>;
};

export default UserOnlyRoute;
