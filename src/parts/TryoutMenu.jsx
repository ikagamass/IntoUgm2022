import React from "react";
import { Link } from "react-router-dom";

function TryoutMenu() {
  return (
    <div className="w-full px-4 py-6 mx-auto mt-8 mb-24 text-center bg-white rounded-3xl bg-opacity-70 sm:max-w-4xl lg:mx-0 lg:mr-auto">
      <h2 className="mx-auto sm:hidden acakadut">Try Out</h2>
      <p className="mx-auto text-xs px-7 lg:text-xl sm:text-base myBlueImp ">
        InTO UGM 2022 bekerjasama dengan Pahamify untuk menyelenggarakan Try Out
        ini.
      </p>
      <p className="mx-auto mt-3 mb-3 text-xs px-7 lg:text-xl sm:text-base myBlueImp ">
        Try Out dapat mulai dikerjakan mulai tanggal XX Januari hingga XX
        Januari pukul 23.59 WIB.{" "}
      </p>

      {/* button */}
      <div className="flex flex-col sm:flex-row gap-y-3 gap-x-3 sm:justify-between">
        {button.map((item, idx) => (
          <Link
            to={item.tujuan}
            className="flex flex-col justify-between px-3 pt-4 pb-2 yellowButton rounded-xl sm:max-w-xs md:h-48 sm:h-44"
          >
            <p className="text-sm text-left myGreen md:text-lg">{item.teks1}</p>
            <p className="mt-3 text-sm font-bold text-right sm:mt-auto myGreen md:text-xl">
              {item.teks2} >
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TryoutMenu;

const button = [
  {
    teks1: "Belum pernah mendaftar Try Out?",
    teks2: "Daftar TO",
    tujuan: "/try-out/kluster",
  },
  {
    teks1: "Sudah pernah mendaftar Try Out??",
    teks2: "Login Akun",
    tujuan: "/",
  },
  {
    teks1: "Kebingungan Cara Akses Try Out?",
    teks2: "Panduan TO",
    tujuan: "/",
  },
];
