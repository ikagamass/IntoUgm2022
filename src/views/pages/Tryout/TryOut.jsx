import TryOutLayout from "../../components/TryoutLayout";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import ToMenu from "./ToMenu";
import ToKluster from "views/pages/Tryout/ToKluster";
import ToPaket from "./ToPaket";

function TryOut() {
  const history = useHistory();
  const [modal, setmodal] = useState("paket");
  const [currentTitle, setcurrentTitle] = useState("Try Out");
  const [hargaDibayar, sethargaDibayar] = useState(20000);
  const [mataUjian, setMataUjian] = useState("Saintek");

  const handleClick = (nama) => {
    switch (nama) {
      // Menu
      case "daftar": {
        setmodal("paket");
        setcurrentTitle("Pendaftaran");
        break;
      }
      case "login": {
        history.push("/login");
        break;
      }
      case "panduan": {
        break;
      }

      // Paket
      case "ambis": {
        sethargaDibayar(20000);
        setmodal("kluster");
        break;
      }
      case "couple": {
        sethargaDibayar(35000);
        setmodal("kluster");
        break;
      }
      case "ambis": {
        sethargaDibayar(75000);
        setmodal("kluster");
        break;
      }

      default:
        break;
    }
  };

  const handleBack = () => {
    switch (modal) {
      case "menu": {
        history.push("/");
        break;
      }
      case "paket": {
        // setcurrentTitle("Live Streaming");
        setmodal("menu");
        break;
      }
      case "kluster": {
        // setcurrentTitle("Live Streaming");
        setmodal("menu");
        break;
      }

      default:
        break;
    }
  };

  return (
    <TryOutLayout backto={"/"} handleBack={handleBack}>
      {modal === "menu" && (
        <ToMenu ccurrentTitle={currentTitle} handleClick={handleClick} />
      )}
      {modal === "paket" && (
        <ToPaket ccurrentTitle={currentTitle} handleClick={handleClick} />
      )}
      {modal === "kluster" && (
        <ToKluster currentTitle={currentTitle} handleClick={handleClick} />
      )}
    </TryOutLayout>
  );
}

export default TryOut;
