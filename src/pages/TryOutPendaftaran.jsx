import TryOutLayout from "components/TryoutLayout";
import TryoutForm from "parts/TryoutForm";
import React from "react";
import { useParams } from "react-router-dom";

function TryOutPendaftaran() {
  const { kluster } = useParams();
  console.log(kluster);

  return (
    <TryOutLayout>
      <TryoutForm />
    </TryOutLayout>
  );
}

export default TryOutPendaftaran;
