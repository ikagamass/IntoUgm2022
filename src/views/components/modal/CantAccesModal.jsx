import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function CantAccesModal({ closeModal }) {
  return (
    <div className="fixed z-50 flex w-screen min-h-screen bg-black bg-opacity-80 ">
      {/* modal */}
      <div
        className="relative p-5 mx-5 my-auto sm:p-16 sm:mx-auto rounded-2xl w-96 bg-myYellow"
        style={{ width: "610px" }}
      >
        <p className="font-bold text-center text-mygreen">
          Untuk bisa mengakses menu ini, mohon mendaftar Try Out lebih dahulu
        </p>

        <div className="flex justify-center mt-7">
          <button
            className="inline-block px-3 py-1 mx-auto text-lg font-bold text-white rounded-full bg-myDarkGreen"
            onClick={closeModal}
          >
            <IoChevronBack className="inline mr-1" />
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

export default CantAccesModal;
