import React from "react";
import bgMobile from "./../images/tryoutBackground.jpg";
import logo from "./../images/logo.png";
import logo2 from "./../images/logo2.png";
import ikagamas from "./../images/ikagamass.png";

import "./_tryout.css";

const TryOut = () => {
  return (
    <section
      className="flex flex-col justify-between min-h-screen text-lg bg-blue-300"
      style={{ background: "url('/images/tryoutBackground.jpg')" }}
    >
      <div className="relative px-10 bg-green-300">
        <img src={logo} className="h-16 mx-auto mt-16 " />

        <div className="w-full px-4 py-6 mx-auto mt-8 mb-24 text-center bg-white rounded-3xl bg-opacity-70 sm:max-w-4xl sm:mx-0 sm:mr-auto">
          <h2 className="mx-auto ">Try Out</h2>
          <p className="mx-auto text-xs px-7 lg:text-3xl">
            InTO UGM 2022 bekerjasama dengan Pahamify untuk menyelenggarakan Try
            Out ini.
          </p>
          <p className="mx-auto mb-3 text-xs px-7 lg:text-3xl">
            Try Out dapat mulai dikerjakan mulai tanggal XX Januari hingga XX
            Januari pukul 23.59 WIB.{" "}
          </p>

          {/* button */}
          <div className="flex flex-col sm:flex-row gap-y-3 gap-x-1 sm:justify-between">
            {button.map((item, idx) => (
              <div className="px-3 pt-4 pb-2 yellowButton rounded-xl sm:max-w-xs sm:h-48">
                <p className="text-sm text-left myGreen sm:mt-auto">
                  {item.teks1}
                </p>
                <p className="mt-3 text-sm font-bold text-right myGreen">
                  {item.teks2} >
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* <p className="w-16 h-16 ml-auto text-center align-middle bg-yellow-400 rounded-full py-auto">
          ?
        </p> */}
      </div>

      {/* footer */}
      <div
        className=""
        style={{
          backgroundColor: "#11645B",
        }}
      >
        <div className="flex justify-center py-4 gap-x-1">
          <div className="w-16 h-12 ">
            <img src={logo2} alt="" className="object-contain " />
          </div>

          <div className="w-16 h-12 ">
            <img src={ikagamas} alt="" className="h-12 mx-auto" />
          </div>
        </div>

        <div
          className="py-4 text-xs text-center text-white"
          style={{ background: "#00295D" }}
        >
          <p>presented by</p>
          <p className="mt-1 font-bold ">
            Ikatan Keluarga Gadjah Mada Sumatra Selatan
          </p>
        </div>
      </div>
    </section>
  );
};

export default TryOut;

const button = [
  {
    teks1: "Belum pernah mendaftar Try Out?",
    teks2: "Daftar TO",
  },
  {
    teks1: "Sudah pernah mendaftar Try Out??",
    teks2: "Login Akun",
  },
  {
    teks1: "Kebingungan Cara Akses Try Out?",
    teks2: "Panduan TO",
  },
];
