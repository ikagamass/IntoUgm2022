import TryOutLayout from "../../components/TryoutLayout";
import ToForm from "./ToForm";
import React from "react";
import { useParams } from "react-router-dom";

function TryOutPendaftaran() {
  const { kluster } = useParams();
  console.log(kluster);

  return (
    <TryOutLayout backto="/try-out/kluster">
      <ToForm />
    </TryOutLayout>
  );
}

export default TryOutPendaftaran;
