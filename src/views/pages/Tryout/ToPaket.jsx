import React from "react";
import { Link } from "react-router-dom";
import TitleText from "views/components/TitleText";

function ToPaket({ currentTitle, handleClick }) {
  return (
    <>
      <TitleText judul={currentTitle} />
      <div className="w-full px-4 py-6 mx-auto mt-8 mb-24 text-center bg-white rounded-3xl bg-opacity-70 sm:max-w-4xl lg:mx-0 lg:mr-auto">
        <h2 className="mx-auto sm:hidden acakadut">{currentTitle}</h2>
        <p className="mx-auto mb-3 text-xs px-7 lg:text-xl sm:text-base myBlueImp ">
          Pendaftaran Try Out InTO UGM 2022 telah ditutup. Tapi, kamu tetap
          dapat beli paket lainnya dari InTO UGM 2022!
        </p>

        {/* button */}
        <div className="flex flex-col sm:flex-row gap-y-3 gap-x-3 sm:justify-between">
          {button.map((item, idx) => (
            <button
              onClick={(e) => handleClick(item.nama)}
              className="flex flex-col justify-between w-full bgYellowButton md:h-48 sm:h-44 rounded-xl"
            >
              <div className="px-3 sm:pt-4">
                <p className="mb-3 text-sm font-bold text-left myGreen lg:text-3xl sm:text-xl">
                  {item.teks1}
                </p>
                <p className="text-sm text-left myGreen md:text-lg">
                  {item.teks2}
                </p>
              </div>

              <div
                className="flex justify-between w-full px-3 mt-2 text-xl text-white sm:py-2 sm:mx-0 rounded-xl"
                style={{ background: "#00295D", color: "white" }}
              >
                <p>{item.harga}</p>
                <p>{">"}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ToPaket;

const button = [
  // {
  //   teks1: "Ngambis",
  //   teks2: "Satu harga untuk satu akun.",
  //   harga: "Rp 20.000",
  //   nama: "ambis",
  // },
  // {
  //   teks1: "Couple Ambis",
  //   teks2: "Satu harga untuk dua akun.",
  //   harga: "Rp 35.000",
  //   nama: "couple",
  // },
  // {
  //   teks1: "Geng Ambis",
  //   teks2: "Satu harga untuk lima akun.",
  //   harga: "Rp 75.000",
  //   nama: "geng",
  // },
  {
    teks1: "Festival",
    teks2:
      "Kamu bakal mendapatkan akses ke 360° Virtual Expo, Tes Minat Bakat dari Satu Persen, dan Webinar serta Acara Puncak InTO UGM 2022!",
    harga: "Rp 10.000",
    nama: "festival",
  },
];
