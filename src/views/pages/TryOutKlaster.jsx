import TryOutLayout from "../components/TryoutLayout";
import ToKluster from "../parts/ToKluster";
import React from "react";

function TryOutKluster() {
  return (
    <TryOutLayout backto="/try-out">
      <ToKluster />
    </TryOutLayout>
  );
}

export default TryOutKluster;
