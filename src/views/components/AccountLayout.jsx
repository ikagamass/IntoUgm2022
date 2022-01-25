import React from "react";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.png";
import ikagamas from "../../assets/images/ikagamass.png";
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

        <div className="absolute bottom-0 left-0 right-0 z-0 grid w-screen grid-cols-12 overflow-hidden bg-white bg-no-repeat">
          <div className="flex flex-wrap justify-between col-span-6 px-5 py-2 gap-x-3">
            <p>Sponsored by:</p>
            <img src={sponsor1} />
            <img src={sponsor2} />
            <img src={sponsor3} />
            <img src={sponsor4} />
            <img src={sponsor5} />
            <img src={sponsor6} />
            <img src={sponsor7} />
            <img src={sponsor8} />
            <img src={sponsor9} />
          </div>
          <div className="flex flex-wrap col-span-3 px-5 py-2 gap-x-3">
            <p>Supported by:</p>
            <img src={support1} className="h-8 my-auto" />
            <img src={support2} className="h-8 my-auto" />
          </div>
          <div className="flex flex-wrap col-span-3 px-5 py-2 gap-x-3">
            <p>Media Partner:</p>
            <img src={medpart1} className="h-12 my-auto" />
            <img src={medpart2} className="h-12 my-auto" />
          </div>
        </div>

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

export default AccountLayout;
