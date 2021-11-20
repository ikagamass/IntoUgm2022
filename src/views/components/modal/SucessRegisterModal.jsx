import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { AiOutlineWhatsApp } from "react-icons/ai";

function SuccessRegisterModal({ closeModal }) {
  return (
    <div className="fixed z-50 flex w-screen min-h-screen bg-black bg-opacity-80 ">
      {/* modal */}
      <div
        className="relative p-5 pb-2 mx-5 my-auto sm:p-10 sm:pb-8 sm:mx-auto rounded-2xl w-96 bg-myYellow"
        style={{ width: "610px" }}
      >
        <p className="font-bold text-center text-mygreen sm:px-6">
          Selamat, akun anda telah aktif! <br />
          Dimohon agar segera bergabung dengan grup WhatsApp peserta inTO UGM
          2022 melalui tautan link berikut :
        </p>

        {/* wa buttonn */}
        <div className="flex mt-7">
          <a
            className="inline-block px-3 py-1 mx-auto text-lg font-bold text-white rounded-full bg-myDarkGreen"
            onClick={closeModal}
            style={{ backgroundColor: "#25D366" }}
          >
            <AiOutlineWhatsApp className="inline-block mb-1 mr-1 sm:hidden md:inline-block" />
            Grup WhatsApp IntoUgm 2020
          </a>
        </div>

        {/* back buttonn */}
        <div className="flex justify-end mt-16">
          <Link
            className="inline-block px-3 py-1 text-lg font-bold text-white rounded-full bg-myDarkGreen"
            onClick={closeModal}
            to="/badut"
          >
            Menuju Ke Halaman Akun
            <IoChevronForward className="inline ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessRegisterModal;
