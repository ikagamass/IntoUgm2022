import React from "react";
import { Link } from "react-router-dom";
import TitleText from "views/components/TitleText";

function ToKluster() {
  return (
    <>
      <TitleText judul="Pendaftaran" />
      <div className="w-full px-4 py-6 mx-auto mt-8 mb-24 text-center bg-white sm:bg-transparent rounded-3xl bg-opacity-70 sm:max-w-5xl lg:mx-0 lg:mr-auto">
        <h2 className="mx-auto sm:hidden acakadut">Pendaftaran</h2>

        {/* button */}
        <div className="flex flex-col sm:flex-row gap-y-3 gap-x-10 sm:justify-between">
          {button.map((item, idx) => (
            <Link
              to={item.tujuan}
              className="flex flex-col justify-end flex-grow h-20 px-3 pt-4 pb-2 yellowButton rounded-xl sm:max-w-md md:h-72 sm:h-44"
            >
              {/* <p className="text-sm text-left myGreen md:text-lg">{item.teks1}</p> */}
              <p className="mt-3 text-sm font-bold text-right sm:mt-auto myGreen md:text-xl">
                {item.teks2} >
              </p>
            </Link>
          ))}
          <a
            className="block mt-3 text-base font-semibold text-center text-myDarkBlue sm:hidden"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Sudah pernah mendaftar?{" "}
            <span className="font-bold ">Login Sekarang!</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ToKluster;

const button = [
  {
    teks1: "Belum pernah mendaftar Try Out?",
    teks2: "Saintek",
    tujuan: "/try-out/daftar/saintek",
  },
  {
    teks1: "Sudah pernah mendaftar Try Out??",
    teks2: "Soshum",
    tujuan: "/try-out/daftar/soshum",
  },
  {
    teks1: "Kebingungan Cara Akses Try Out?",
    teks2: "Khusus",
    tujuan: "/try-out/daftar/campuran",
  },
];
