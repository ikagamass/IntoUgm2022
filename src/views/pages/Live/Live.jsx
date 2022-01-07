import React, { useState, useEffect } from "react";
import UserOnlyRoute from "../../../core/routeblocks/UserOnlyRoute";
import LiveLayout from "./LiveLayout";
import segitiga from "../../../assets/images/segitiga.svg";

import { Link } from "react-router-dom";
import TitleText from "views/components/TitleText";
import { useHistory } from "react-router-dom";

const Live = () => {
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
    // <Initial redirect="/login">
    <UserOnlyRoute>
      <LiveLayout handleBack={handleBack}>
        <TitleText judul={currentTitle} />
        <div className="w-full px-4 py-6 mx-auto mt-8 mb-24 text-center bg-white rounded-3xl bg-opacity-70 sm:max-w-4xl lg:mx-0 lg:mr-auto">
          {menu === "menu" && (
            <>
              <h2 className="mx-auto mb-2 text-sm sm:hidden font-acakadut-mobile">
                {currentTitle}
              </h2>

              {/* button */}
              <div className="flex flex-col sm:flex-row gap-y-3 gap-x-3 sm:justify-between">
                {button.map((item, idx) => (
                  <button
                    onClick={(e) => openVideo(item.tujuan)}
                    to={item.tujuan}
                    className="flex justify-between px-3 pt-4 pb-2 yellowButton rounded-xl sm:max-w-xs md:h-48 sm:h-44"
                  >
                    <div className="flex-col justify-between">
                      <p className="text-xl font-bold text-left myGreen">
                        {item.teks1}
                      </p>
                      <p className="mt-2 text-sm font-bold text-left sm:mt-auto myGreen md:text-xl">
                        {item.teks2}
                      </p>
                    </div>
                    <img src={segitiga} alt="" height={50} />
                  </button>
                ))}
              </div>
            </>
          )}

          {menu === "video" && (
            <div className="videoWrapper">
              <h2 className="mx-auto mb-2 text-sm sm:hidden font-acakadut-mobile">
                {currentTitle}
              </h2>
              <iframe
                width="560"
                height="315"
                src={
                  "https://www.youtube.com/embed/onVjiCfi0wQ?list=RDid7O6MGqT2I"
                }
                frameborder="0"
                className="mx-auto"
                allowfullscreen
              ></iframe>
            </div>
          )}
        </div>
      </LiveLayout>
    </UserOnlyRoute>
  );
};

export default Live;

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
