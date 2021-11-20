import React from "react";
// import SplashInto from "../../assets/images/splashInto.png";
// import SplashOrmada from "../../assets/images/splashOrmada";

function SplashScreen() {
  return (
    <div
      className="fixed z-50 flex w-screen min-h-screen bg-opacity-80 "
      style={{ backgroundColor: "#00295DDC" }}
    >
      <div className="flex flex-col justify-center gap-10 mx-auto my-auto sm:flex-row">
        <img
          src="/images/splashInto.png"
          alt=""
          className="w-36 lg:w-80 sm:w-56"
        />
        <img
          src="/images/splashOrmada.png"
          alt=""
          className="w-36 lg:w-80 sm:w-56"
        />
      </div>
    </div>
  );
}

export default SplashScreen;
