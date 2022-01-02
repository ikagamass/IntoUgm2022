import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Initial = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    // Initial Route
    history.push("/");
  }, []);

  return <div>{children}</div>;
};

export default Initial;
