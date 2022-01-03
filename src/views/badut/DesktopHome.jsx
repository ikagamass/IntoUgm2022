import React from "react";
import { useHistory } from "react-router-dom";

function DesktopHome() {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case "Tour": {
        history.push("/tour-de-faculty");
        break;
      }

      case "Tryout": {
        history.push("/tryout");
        break;
      }
      case "Into": {
        history.push("/Into");
        break;
      }
      case "Live": {
        history.push("/live");
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
      <div id="AssetContainerSmall" className="mx-auto my-auto border">
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
    </section>
  );
}

export default DesktopHome;
