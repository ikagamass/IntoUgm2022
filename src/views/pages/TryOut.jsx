import TryOutLayout from "../components/TryoutLayout";
import ToMenu from "../parts/ToMenu";
import React from "react";

function TryOut() {
  return (
    <TryOutLayout backto={"/"}>
      <ToMenu />
    </TryOutLayout>
  );
}

export default TryOut;
