import React, { useState } from "react";
import UserOnlyRoute from "../../../core/routeblocks/UserOnlyRoute";
import TitleText from "views/components/TitleText";
import { useHistory } from "react-router-dom";
import TourLayout from "./TourLayout";
import "./tour.css";

const TourDeFaculty = () => {
  const [menu, setmenu] = useState("menu");
  const [currentTitle, setcurrentTitle] = useState("Live Streaming");
  const history = useHistory();

  const openVideo = (tujuan, date = "121212") => {
    if (tujuan === "Opening") {
      setcurrentTitle("Opening Main Event");
    } else if (tujuan === "Talkshow") {
      setcurrentTitle("Talkshow");
    } else if (tujuan === "Closing") {
      setcurrentTitle("Closing Main Event");
    }
    setmenu("video");
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
    <UserOnlyRoute currentPage="Tour">
      <TourLayout handleBack={handleBack}>
        <TitleText judul={"360° Virtual Expo"} />
        <div className="w-full px-6 py-6 mx-auto mt-8 text-center bg-white rounded-3xl bg-opacity-70 lg:mx-0 ">
          <>
            <h2 className="mx-auto mb-2 text-sm sm:hidden font-acakadut-mobile">
              360° Virtual Expo
            </h2>

            {/* button */}
            <div className="grid lg:grid lg:grid-cols-5 lg:gap-8">
              {/* Tulisan */}
              <div className="order-last col-span-2 my-4 text-xl font-bold text-center lg:text-left lg:my-0 text-myDarkBlue lg:order-first">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <p className="mb-3 ">
                      360° Virtual Expo hadir mulai tanggal 20 Januari 2022 di
                      platform Mozilla Hubs!
                    </p>
                    <p>
                      Klik tautan berikut untuk mengunjungi 360° Virtual Expo
                      InTO UGM 2022!
                    </p>
                  </div>
                  <div>
                    <p
                      className="w-full px-3 py-1 mt-4 mb-2 text-base text-center text-white rounded-full cursor-pointer bg-mygreen"
                      onClick={() =>
                        window.open("https://linktr.ee/intougm2022")
                      }
                    >
                      360° Virtual Expo
                    </p>
                    <p className="w-full px-3 py-1 mt-2 mb-4 text-base text-center bg-white rounded-full text-myDarkBlue">
                      Panduan 360° Virtual Expo
                    </p>
                  </div>
                  <p className="text-lg text-center">
                    360° Virtual Expo hanya dapat diakses jika Anda telah
                    mendaftarkan akun InTO UGM 2022
                  </p>
                </div>
              </div>

              {/* Video */}
              <div className="col-span-3">
                <div className="container items-center h-full">
                  <iframe
                    className="responsive-iframe"
                    // src="https://www.youtube.com/embed/T3bxbVGWy5k"
                    src="https://www.youtube.com/embed/T3bxbVGWy5"
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
      </TourLayout>
    </UserOnlyRoute>
  );
};

export default TourDeFaculty;

const button = [
  {
    teks1: "Opening Main Event",
    teks2: "Hari, X Januari 2022 - XX.XX WIB",
    date: "121212",
    tujuan: "Opening",
  },
  {
    teks1: "Talkshow",
    teks2: "Hari, X Januari 2022 - XX.XX WIB",
    date: "121212",
    tujuan: "Talkshow",
  },
  {
    teks1: "Closing Main Event",
    teks2: "Hari, X Januari 2022 - XX.XX WIB",
    date: "121212",
    tujuan: "Closing",
  },
];
