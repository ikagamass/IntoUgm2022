import React from "react";
import { Link } from "react-router-dom";
import MobileHome from "./MobileHome";
import DesktopHome from "./DesktopHome";

import "./homepage.css";

function BadutHomePage() {
  return (
    <>
      <MobileHome />
      <DesktopHome />
    </>
  );
}

export default BadutHomePage;
