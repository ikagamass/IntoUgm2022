import React from "react";

function DesktopHome() {
  return (
    <section
      className="hidden w-screen min-h-screen overflow-hidden lg:flex"
      id="Sectioondesktop"
      style={{ backgroundImage: "url('/images/bgHomeFull.jpg')" }}
    >
      <div id="AssetContainer" className="mx-auto my-auto ">
        {/* Into / Into */}
        <button id="Into">
          <img src="/images/menuDesktop/Into.png" alt="" />
        </button>

        {/* Ampera / Live */}
        <button id="Ampera">
          <img src="/images/menuDesktop/Live.png" alt="" />
        </button>

        {/* Monpera / Tryout */}
        <button id="Monpera">
          <img src="/images/menuDesktop/To.png" alt="" />
        </button>

        {/* LRT / Tour */}
        <button id="LRT">
          <img src="/images/menuDesktop/Tour.png" alt="" />
        </button>

        {/* TV / Merch */}
        <button id="TV">
          <img src="/images/menuDesktop/Merch.png" alt="" />
        </button>
      </div>
    </section>
  );
}

export default DesktopHome;
