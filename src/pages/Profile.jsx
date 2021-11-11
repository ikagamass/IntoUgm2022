import React, { useState } from "react";
import AccountLayout from "components/AccountLayout";
import Eula from "../images/eula.jpg";

function Profile() {
  return (
    <AccountLayout>
      <h4 className="hidden mt-8 mb-16 text-4xl font-bold text-center sm:block">
        Akun
      </h4>

      <div className="w-full px-4 py-6 mx-auto mt-8 bg-white rounded-3xl bg-opacity-70 sm:max-w-4xl ">
        <div className="flex flex-col items-center md:flex-row">
          {/* mata kuliah */}
          <div className="flex justify-center">
            <h2 className="inline px-3 py-1 text-center text-white rounded-full acakadut bg-myDarkBlue">
              Soshum
            </h2>
          </div>

          {/* Foto Mobile */}
          <img
            src={Eula}
            width="100"
            alt="Foto profile"
            className="mt-2 rounded-full "
          />

          <button className="px-3 py-1 mt-1 text-base text-white bg-gray-500 rounded-full">
            Atur Foto
          </button>

          <p className="mt-2 text-sm">
            Status Akun: <span className="font-bold text-green-500">Aktif</span>
          </p>
        </div>

        {/* data diri */}
        <div className="text-base font-bold text-mygreen">
          {/* nama */}
          <div className="flex ">
            <p className="w-32">Nama</p>
            <p className="">Eula Lawrence</p>
          </div>

          {/* email */}
          <div className="flex ">
            <p className="w-32">Asal Sekolah</p>
            <p className="">Sma Mondstat Raya</p>
          </div>

          {/* email */}
          <div className="flex ">
            <p className="w-32">Alamat E-mail</p>
            <p className="">Eula@lawrence.com</p>
          </div>

          {/* hp */}
          <div className="flex ">
            <p className="w-32">No. Handphone</p>
            <p className="">081234567890</p>
          </div>

          {/* wa */}
          <div className="flex ">
            <p className="w-32">No. WhatsApp</p>
            <p className="">081234567890</p>
          </div>
        </div>

        {/* button */}
        <button
          className="w-full py-1 mt-3 text-base font-bold text-center text-white rounded-full"
          style={{ backgroundColor: "#577CFF" }}
        >
          Akses Akun Pahamify
        </button>

        <button
          className="w-full py-1 mt-3 text-base font-bold text-center text-white rounded-full"
          style={{ backgroundColor: "#25D366" }}
        >
          Grup WA InTO UGM 2022
        </button>
      </div>

      <p className="mt-10 font-semibold text-center text-mygreen ">
        Belum punya akun? <span className="font-bold">Daftar sekarang</span>
      </p>
    </AccountLayout>
  );
}

export default Profile;
