import React from "react";
import UserOnlyRoute from "../../core/routeblocks/UserOnlyRoute";
import Initial from "../../core/routeblocks/Initial";

const Live = () => {
  return (
    <Initial redirect="/login">
      <div>ini live</div>
    </Initial>
  );
};

export default Live;
