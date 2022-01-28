import React from "react";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.png";
import ikagamas from "../../assets/images/ikagamass.png";

import sp1 from "../../assets/images/sp1.jpg";
import sp2 from "../../assets/images/sp2.jpg";

import { useHistory } from "react-router-dom";

import { IoChevronBack } from "react-icons/io5";

import "../../assets/styles/_tryout.css";
import { Link } from "react-router-dom";

import sponsor1 from "assets/images/sponsor/1.png";
import sponsor2 from "assets/images/sponsor/2.jpg";
import sponsor3 from "assets/images/sponsor/3.jpg";
import sponsor4 from "assets/images/sponsor/4.jpg";
import sponsor5 from "assets/images/sponsor/5.jpg";
import sponsor6 from "assets/images/sponsor/6.png";
import sponsor7 from "assets/images/sponsor/7.png";
import sponsor8 from "assets/images/sponsor/8.png";
import sponsor9 from "assets/images/sponsor/9.png";

import support1 from "assets/images/sponsor/s1.jpg";
import support2 from "assets/images/sponsor/s2.jpg";

import medpart1 from "assets/images/sponsor/m1.jpg";
import medpart2 from "assets/images/sponsor/m2.jpg";

function AccountLayout({ children }) {
  const history = useHistory();

  return (
    <section
      className="flex flex-col justify-between min-h-screen text-lg bg-center"
      style={{
        background: "url('/images/bgAccountDesktop.jpg')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative px-10 ">
        <img
          onClick={() => history.push("/")}
          src={logo}
          className="h-16 mx-auto mt-16 sm:h-24 sm:mr-0 sm:mt-10 logoInto"
        />

        {children}
      </div>

      <div id="back and footer">
        {/* back button */}
        <div className="px-10 mt-12 mb-5 sm:mt-0">
          <Link
            className="inline-block px-3 py-2 text-lg font-bold text-white rounded-full n bg-myDarkGreen"
            to={"/"}
          >
            <IoChevronBack className="z-10 inline mr-1 " />
            Kembali
          </Link>
        </div>

        <div
          style={{ backgroundImage: "url('/images/sponsor.jpg')" }}
          className="absolute bottom-0 left-0 right-0 hidden h-24 bg-white bg-center bg-no-repeat lg:block"
        />

        {/* footer */}
        <div
          className=""
          style={{
            backgroundColor: "#11645B",
          }}
        >
          <div className="flex justify-center py-4 gap-x-1 sm:hidden">
            <div className="w-16 h-12 ">
              <img src={logo2} alt="" className="object-contain " />
            </div>

            <div className="w-16 h-12 ">
              <img src={ikagamas} alt="" className="h-12 mx-auto" />
            </div>
          </div>

          {/* Sponsor */}
          <div className="flex flex-wrap justify-center h-auto gap-1 py-4 bg-white lg:hidden ">
            <div className="">
              <img src={sp1} alt="" className="object-contain " />
            </div>

            <div className="">
              <img src={sp2} alt="" className="object-contain " />
            </div>
          </div>

          <div
            className="py-4 text-xs text-center text-white sm:hidden"
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

export default AccountLayout;
