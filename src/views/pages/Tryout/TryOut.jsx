import TryOutLayout from "../../components/TryoutLayout";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import ToMenu from "./ToMenu";
import ToKluster from "views/pages/Tryout/ToKluster";
import ToPaket from "./ToPaket";
import ToForm from "./ToForm";

function TryOut() {
  const history = useHistory();
  const [modal, setmodal] = useState("menu");
  const [currentTitle, setcurrentTitle] = useState("Try Out");
  const [hargaDibayar, sethargaDibayar] = useState(30000);
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
        sethargaDibayar(30000);
        setmodal("kluster");
        break;
      }
      case "couple": {
        sethargaDibayar(50000);
        setmodal("kluster");
        break;
      }
      case "geng": {
        sethargaDibayar(120000);
        setmodal("kluster");
        break;
      }

      // Kluster
      case "Saintek": {
        setMataUjian("Saintek");
        setmodal("daftar");
        break;
      }
      case "Soshum": {
        setMataUjian("Soshum");
        setmodal("daftar");
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
        setcurrentTitle("Pendaftaran");
        setmodal("menu");
        break;
      }
      case "kluster": {
        // setcurrentTitle("Live Streaming");
        setmodal("paket");
        break;
      }
      case "daftar": {
        // setcurrentTitle("Live Streaming");
        setmodal("kluster");
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
      {modal === "daftar" && (
        <ToForm
          currentTitle={currentTitle}
          handleClick={handleClick}
          hargaDibayar={hargaDibayar}
          mataUjian={mataUjian}
        />
      )}
    </TryOutLayout>
  );
}

export default TryOut;
