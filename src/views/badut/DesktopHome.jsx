import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PageNotReady from "views/components/modal/PageNotReady";
import tanya from "assets/images/tanya.png";
import Timeline from "./Timeline";

import { MdKeyboardArrowDown } from "react-icons/md";

function DesktopHome() {
  const history = useHistory();

  const [modal, setmodal] = useState(false);
  const [tutor, setTutor] = useState(false);
  const [timeline, setTimeline] = useState(false);

  const closeModal = () => {
    setmodal(false);
  };

  const handleClick = (type) => {
    switch (type) {
      case "Tryout": {
        history.push("/tryout");
        break;
      }

      case "Tour": {
        setmodal(true);
        // history.push("/tour-de-faculty");
        break;
      }

      case "Into": {
        setmodal(true);

        // history.push("/Into");
        break;
      }
      case "Live": {
        // history.push("/live");
        setmodal(true);
        break;
      }

      default:
        break;
    }
  };

  return (
    <section
      className="hidden w-screen min-h-screen overflow-hidden bg-no-repeat lg:flex"
      id="Sectioondesktop"
      style={{ backgroundImage: "url('/images/bgHomeFull.jpg')" }}
    >
      {/* 1024 */}
      <div id="AssetContainerSmall" className="mx-auto my-auto">
        {/* Into / Into */}
        <button id="Into" onClick={() => handleClick("Into")}>
          <img src="/images/menuLaptop/Into.png" alt="" />
        </button>

        {/* Ampera / Live */}
        <button id="Ampera" onClick={() => handleClick("Live")}>
          <img src="/images/menuLaptop/Live.png" alt="" />
        </button>

        {/* Monpera / Tryout */}
        <button id="Monpera" onClick={() => handleClick("Tryout")}>
          <img src="/images/menuLaptop/To.png" alt="" />
        </button>

        {/* LRT / Tour */}
        <button id="LRT" onClick={() => handleClick("Tour")}>
          <img src="/images/menuLaptop/Tour.png" alt="" />
        </button>

        {/* TV / Merch */}
        <button id="TV">
          {/* <img src="/images/menuDesktop/Merch.png" alt="" /> */}
        </button>
      </div>

      {/* 1280  */}
      <div id="AssetContainer" className="mx-auto my-auto ">
        {/* Into / Into */}
        <button id="Into" onClick={() => handleClick("Into")}>
          <img src="/images/menuDesktop/Into.png" alt="" />
        </button>

        {/* Ampera / Live */}
        <button id="Ampera" onClick={() => handleClick("Live")}>
          <img src="/images/menuDesktop/Live.png" alt="" />
        </button>

        {/* Monpera / Tryout */}
        <button id="Monpera" onClick={() => handleClick("Tryout")}>
          <img src="/images/menuDesktop/To.png" alt="" />
        </button>

        {/* LRT / Tour */}
        <button id="LRT" onClick={() => handleClick("Tour")}>
          <img src="/images/menuDesktop/Tour.png" alt="" />
        </button>

        {/* TV / Merch */}
        {/* <button id="TV" onClick={() => handleClick("Merch")}>
          <img src="/images/menuDesktop/Merch.png" alt="" />
        </button> */}
      </div>

      {modal && <PageNotReady closeModal={closeModal} />}

      {/* Tanda tanya button */}
      {!tutor && (
        <button
          className="fixed text-lg rounded-full bottom-4 right-4 text-mygreen"
          onClick={() => setTutor(true)}
        >
          <img src={tanya} height={80} width={80} />
        </button>
      )}

      {/* Tutor screen */}
      {/* 1024 */}
      {tutor && (
        <div className="fixed z-40 flex w-full h-full tutorScreen">
          {/* <div className="flex"> */}
          <div className="flex mx-auto my-auto TutorModal">
            <div className="mx-auto my-auto">
              <p className="w-full text-lg font-bold text-center text-mygreen px-80">
                Selamat datang di website InTO UGM 2022! Anda dapat mengklik
                berbagai objek yang ada untuk mengakses menu dalam website ini
              </p>
              <div className="flex ">
                <button
                  onClick={() => setTutor(false)}
                  className="px-3 py-1 mx-auto mt-1 text-base text-lg font-bold text-white rounded-full bg-mygreen "
                >
                  {"Lanjut >"}
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}

      {/* Tombol Timeline and timeline */}
      <div
        className="fixed top-0 left-0 right-0 bg-white rounded-b-full bg-opacity-30"
        onClick={() => setTimeline(true)}
      >
        <p className="flex justify-center py-1 font-bold text-center text-mygreen clickAble gap-x-1">
          Lini Masa{" "}
          <MdKeyboardArrowDown
            className="my-auto"
            stroke-width="2"
            stroke="none"
          />
        </p>
      </div>

      {timeline && <Timeline setTimeline={setTimeline} />}
    </section>
  );
}

export default DesktopHome;
