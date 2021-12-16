import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Initial = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    history.push("/login");
  }, []);

  return <div>{children}</div>;
};

export default Initial;
