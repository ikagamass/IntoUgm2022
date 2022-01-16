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

  // Modal Gak Bisa diakses
  const [modalPendaftaranDitutup, setmodalPendaftaranDitutup] = useState(false);

  const handleClick = (nama) => {
    switch (nama) {
      // Menu
      case "daftar": {
        setmodal("paket");
        setcurrentTitle("Pendaftaran");
        // setmodalPendaftaranDitutup(true);

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
      case "geng": {
        sethargaDibayar(75000);
        setmodal("kluster");
        break;
      }

      case "festival": {
        sethargaDibayar(10000);
        setmodal("daftar");
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
        setmodal("paket");
        // setmodal("kluster"); yg lama make ini
        break;
      }

      default:
        break;
    }
  };

  return (
    <TryOutLayout backto={"/"} handleBack={handleBack}>
      {/* Modal Pendaftaran ditutup */}

      {modalPendaftaranDitutup && (
        <>
          <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex w-screen min-h-screen bg-black bg-opacity-80 ">
            {/* modal */}
            <div
              className="relative p-5 mx-5 my-auto sm:p-16 sm:mx-auto rounded-2xl w-96 bg-myYellow"
              style={{ width: "610px" }}
            >
              <p className="font-bold text-center text-mygreen">
                Pendaftaran Tryout ditutup
              </p>

              <div className="flex justify-center mt-7">
                <button
                  className="inline-block px-3 py-1 mx-auto text-lg font-bold text-white rounded-full bg-myDarkGreen"
                  onClick={() => setmodalPendaftaranDitutup(false)}
                >
                  {/* <IoChevronBack className="inline mr-1" /> */}
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </>
      )}

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
