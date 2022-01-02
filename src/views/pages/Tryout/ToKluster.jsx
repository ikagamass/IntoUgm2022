import React from "react";
import { Link } from "react-router-dom";
import TitleText from "views/components/TitleText";
import Saintek from "assets/images/Saintek.png";
import Soshum from "assets/images/Soshum.png";

function ToKluster({ currentTitle, handleClick }) {
  return (
    <>
      <TitleText judul="Pendaftaran" />
      <div className="w-full px-4 py-6 mx-auto mt-8 mb-24 text-center bg-white sm:bg-transparent rounded-3xl bg-opacity-70 sm:max-w-5xl lg:mx-0 lg:mr-auto">
        <h2 className="mx-auto sm:hidden acakadut">{currentTitle}</h2>

        {/* button */}
        <div className="flex flex-col sm:flex-row gap-y-3 gap-x-10 sm:justify-between">
          {button.map((item, idx) => (
            <button
              onClick={(e) => handleClick(item.nama)}
              className="flex flex-col justify-end flex-grow h-20 pt-4 overflow-hidden bgButtonKluster rounded-xl sm:max-w-md md:h-72 sm:h-44"
            >
              <img
                src={item.gambar}
                className="hidden mx-auto md:w-72 sm:w-52 sm:block"
              />

              <p className="w-full px-3 py-2 mt-3 text-sm font-bold text-right klusterText sm:mt-auto myGreen md:text-xl">
                {item.teks2}
              </p>
            </button>
          ))}
          <p
            className="block mt-3 text-base font-semibold text-center text-myDarkBlue sm:hidden"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Sudah pernah mendaftar?{" "}
            <span className="font-bold ">Login Sekarang!</span>
          </p>
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
    nama: "Saintek",
    gambar: Saintek,
  },
  {
    teks1: "Sudah pernah mendaftar Try Out??",
    teks2: "Soshum",
    nama: "Soshum",
    tujuan: "/try-out/daftar/soshum",
    gambar: Soshum,
  },
];
