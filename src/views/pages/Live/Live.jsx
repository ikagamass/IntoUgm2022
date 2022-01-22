import React, { useState, useEffect } from "react";
import UserOnlyRoute from "../../../core/routeblocks/UserOnlyRoute";
import LiveLayout from "./LiveLayout";
import segitiga from "../../../assets/images/segitiga.svg";

import { Link } from "react-router-dom";
import TitleText from "views/components/TitleText";
import { useHistory } from "react-router-dom";
import "./Live.css";

const Live = () => {
  const [menu, setmenu] = useState("menu");
  const [currentTitle, setcurrentTitle] = useState("Live Streaming");
  const history = useHistory();

  const openVideo = (tujuan, date = "121212") => {
    if (tujuan === "Opening") {
      setmenu("video");

      setcurrentTitle("Opening Main Event");
    } else if (tujuan === "Talkshow") {
      setcurrentTitle("Talkshow");
    } else if (tujuan === "Closing") {
      setcurrentTitle("Closing Main Event");
    }
  };

  const handleBack = () => {
    switch (menu) {
      case "menu": {
        history.push("/");
        break;
      }
      case "video": {
        console.log("clicked");
        setcurrentTitle("Live Streaming");
        setmenu("menu");
        break;
      }

      default:
        break;
    }
  };

  return (
    // <Initial redirect="/login">
    <UserOnlyRoute>
      <LiveLayout handleBack={handleBack}>
        <TitleText judul={currentTitle} />
        {menu === "menu" && (
          <div className="w-full px-4 py-6 mx-auto mt-8 mb-24 text-center bg-white rounded-3xl bg-opacity-70 sm:max-w-4xl lg:mx-0 lg:mr-auto">
            <>
              <h2 className="mx-auto mb-2 text-sm sm:hidden font-acakadut-mobile">
                {currentTitle}
              </h2>

              {/* button */}
              <div className="flex flex-col sm:flex-row gap-y-3 gap-x-3 sm:justify-between ">
                {button.map((item, idx) => (
                  <button
                    onClick={(e) => openVideo(item.tujuan)}
                    className={`flex justify-between px-3 pt-4 pb-2 yellowButton rounded-xl md:h-48 sm:h-44  ${
                      item.tujuan === "Opening" ? "bg-myYellow" : "bg-myGrey"
                    }`}
                  >
                    <div
                      className={`flex flex-col justify-between h-full ${
                        item.tujuan === "Opening"
                          ? "myGreen"
                          : "text-myGreyFont"
                      }`}
                    >
                      <p className="text-3xl font-bold text-left ">
                        {item.teks1}
                      </p>
                      <p className="mt-2 text-sm font-bold text-left sm:mt-auto md:text-xl">
                        {item.teks2}
                      </p>
                    </div>
                    <img
                      src={segitiga}
                      alt=""
                      height={50}
                      className="my-auto ml-2"
                    />
                  </button>
                ))}
              </div>
            </>
          </div>
        )}
        {menu === "video" && (
          <div className="w-full px-6 py-6 mx-auto mt-8 text-center bg-white rounded-3xl bg-opacity-70 lg:mx-0 ">
            <>
              <h2 className="mx-auto mb-2 text-sm sm:hidden font-acakadut-mobile">
                360° Virtual Expo
              </h2>

              <div className="grid lg:grid lg:grid-cols-5 lg:gap-8">
                {/* Tulisan */}
                <div className="order-last col-span-2 my-4 text-xl font-bold text-center lg:text-left lg:my-0 text-myDarkBlue ">
                  <div className="h-full px-10 py-10 rounded-3xl bg-myYellow text-mygreen">
                    <p className="mb-10 text-4xl">Main Event InTO UGM 2O22</p>
                    <p>
                      Saksikan acara puncak InTO UGM 2022 yang akan diisi dengan
                      opening, webinar, beragam penampilan, dan pengumuman juara
                      Try Out InTO UGM 2O22!
                      <br /> <br />
                      Peserta dapat mengikuti Main Event InTO UGM 2022 melalui
                      tautan Zoom di Grup WhatsApp peserta InTO UGM 2022.{" "}
                    </p>
                  </div>
                </div>

                {/* Video */}
                <div className="col-span-3">
                  <div className="container items-center h-full">
                    <iframe
                      className="responsive-iframe"
                      src="https://www.youtube.com/embed/R4bWC7uBfmM"
                      title="Teaser Virtual Tour"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                </div>
              </div>
            </>
          </div>
        )}
      </LiveLayout>
    </UserOnlyRoute>
  );
};

export default Live;

const button = [
  {
    teks1: "Main Event InTO UGM 2022",
    teks2: "Minggu, 23 Januari 2022 - 08.45 WIB",
    date: "121212",
    tujuan: "Opening",
  },

  {
    teks1: "After Movie InTO UGM 2022",
    teks2: "Saksikan Sekarang",
    date: "121212",
    tujuan: "Closing",
  },
];
