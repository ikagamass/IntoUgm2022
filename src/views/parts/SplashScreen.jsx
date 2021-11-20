import React from "react";
// import SplashInto from "../../assets/images/splashInto.png";
// import SplashOrmada from "../../assets/images/splashOrmada";

function SplashScreen() {
  return (
    <div
      className="fixed z-50 flex w-screen min-h-screen bg-opacity-80 "
      style={{ backgroundColor: "#00295DDC" }}
    >
      <div className="flex justify-center mx-auto my-auto gap-x-10">
        <img src="/images/splashInto.png" alt="" className=" lg:w-80" />
        <img src="/images/splashOrmada.png" alt="" className=" lg:w-80" />
      </div>
    </div>
  );
}

export default SplashScreen;
