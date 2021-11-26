import React from "react";
import UserOnlyRoute from "../../core/routeblocks/UserOnlyRoute";

const TourDeFaculty = () => {
  return (
    <UserOnlyRoute redirect="/login">
      <div>ini tour de facultty</div>
    </UserOnlyRoute>
  );
};

export default TourDeFaculty;
