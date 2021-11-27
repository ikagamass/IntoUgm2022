import React from "react";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.png";
import ikagamas from "../../assets/images/ikagamass.png";

import { IoChevronForward } from "react-icons/io5";

import "../../assets/styles/_tryout.css";
import { Link } from "react-router-dom";

function HomeLayout({ children }) {
  return (
    <section
      className="flex flex-col justify-between min-h-screen text-lg bg-center lg:hidden"
      style={{
        background: "url('/images/bgAccountDesktop.jpg')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative px-10 ">
        <img
          src={logo}
          className="h-16 mx-auto mt-16 sm:h-24 sm:mr-0 sm:mt-10"
        />

        {children}
      </div>

      <div id="back and footer">
        {/* footer */}
        <div
          className="sm:hidden"
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
            <p className="mt-1 font-semibold ">
              Ikatan Keluarga Gadjah Mada Sumatra Selatan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeLayout;
