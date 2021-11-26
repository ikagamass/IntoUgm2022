import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function ConfirmRegistration({ closeModal }) {
  return (
    <div className="absolute top-0 left-0 flex w-screen min-h-screen bg-black bg-opacity-80 ">
      {/* modal */}
      <div
        className="relative p-5 mx-5 my-auto sm:p-16 sm:mx-auto rounded-2xl w-96 bg-myYellow"
        style={{ width: "610px" }}
      >
        <p className="font-bold text-center text-mygreen">
          Mohon pastikan data yang telah Anda isikan sudah benar dan sesuai
          dengan yang ingin anda masukkan pada akun Pahamify Anda!
        </p>

        <div className="flex justify-between w-full mt-7">
          <button
            className="py-1 px-3 text-lg font-bold text-white rounded-full bg-myDarkGreen"
            onClick={closeModal}
          >
            <IoChevronBack className="inline mr-1" />
            Kembali
          </button>
          <Link
            to={"/profile"}
            className="py-1 px-3 text-lg font-bold text-white rounded-full bg-myDarkGreen"
            onClick={closeModal}
          >
            Lanjutkan
            <IoChevronForward className="inline mr-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmRegistration;
