import React from "react";
import UserOnlyRoute from "../../core/routeblocks/UserOnlyRoute";

const Live = () => {
  return (
    <UserOnlyRoute redirect="/login">
      <div>ini live</div>
    </UserOnlyRoute>
  );
};

export default Live;
