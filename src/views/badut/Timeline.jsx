import React from "react";

import Saintek from "../../assets/images/Saintek.jpg";
import Menu1 from "../../assets/images/Menu1.jpg";
import Menu2 from "../../assets/images/Menu2.jpg";
import Menu3 from "../../assets/images/Menu3.jpg";
import Menu4 from "../../assets/images/Menu4.jpg";
import Up from "../../assets/images/Up.png";
import { Link } from "react-router-dom";
import { useAuth } from "core/contexts";
import { MdKeyboardArrowUp } from "react-icons/md";

function Timeline({ setTimeline }) {
  const { authMethods, status, userData } = useAuth();

  return (
    <div className="fixed z-40 flex w-full h-full timelineSceen">
      {/* Menu */}
      <div className="flex mx-auto my-auto ">
        <div className="mx-auto my-auto">
          <div className="flex flex-col sm:flex-row gap-y-3 gap-x-10 sm:justify-between">
            {menu.map((item, idx) => (
              <div className="lg:w-56 xl:w-64 bgYellowButton rounded-xl sm:max-w-xs clickAble">
                {/* md:h-48 sm:h-44 */}
                <img
                  src={item.pict}
                  className="w-full lg:h-56 xl:h-64 rounded-b-3xl rounded-t-xl"
                />
                <div className="px-3 my-4">
                  <p className="text-sm font-bold text-left myGreen md:text-lg">
                    {item.text1}
                  </p>
                  <p className="mt-3 text-sm font-bold text-left sm:mt-auto myGreen md:text-xl w-80">
                    {item.text2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="fixed top-10 left-10">
        <p className="mb-2 text-xl font-bold myGreen">Halo, {userData.nama}</p>
        <Link
          className="inline px-3 py-1 mt-3 text-base text-lg font-bold text-white rounded-full myGreen bg-mygreen"
          to={"/profile"}
        >
          {"Lihat Akun Anda >"}
        </Link>
      </div>

      {/* Kembali */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-30"
        onClick={() => setTimeline(false)}
      >
        <p className="flex justify-center py-1 font-bold text-center text-mygreen clickAble gap-x-1">
          Kembali{" "}
          <MdKeyboardArrowUp
            className="my-auto"
            stroke-width="2"
            stroke="none"
          />
        </p>
      </div>
    </div>
  );
}

export default Timeline;

const menu = [
  {
    text1: "INTO",
    text2: "Bercengkerama",
    pict: Menu1,
    to: "",
  },
  {
    text1: "Kilas Balik",
    text2: "Into UGM 2021",
    pict: Menu2,
    to: "",
  },
  {
    text1: "Untuk Ekspresi:",
    text2: "Tulis Harapanmu!",
    pict: Menu3,
    to: "",
  },
  {
    text1: "Kunjungi Akun",
    text2: "Tiktok Kami",
    pict: Menu4,
    to: "",
  },
];
