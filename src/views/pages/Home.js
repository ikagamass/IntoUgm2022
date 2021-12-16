import React, { useState, useEffect } from "react";
import SplashScreen from "views/parts/SplashScreen";
import Navbar from "../components/Navbar";
import Initial from "../../core/routeblocks/Initial";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true); // modal

  const openSplash = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen === true) {
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }
  }, [isOpen]);

  const closeSplash = () => {
    setIsOpen(false);
  };
  return (
    <Initial>
      <section
        className="flex flex-col justify-between min-h-screen text-lg bg-left-bottom"
        style={{
          background: "url('/images/bgdesktop.jpg')",
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {isOpen && <SplashScreen closeSplash={closeSplash} />}

        <Navbar />
      </section>
    </Initial>
  );
};

export default Home;
