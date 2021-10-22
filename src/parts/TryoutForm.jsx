import React from "react";

// import "../pages/_tryout.css";

function TryoutForm() {
  return (
    <div className="w-full px-4 py-6 mx-auto mt-8 bg-white rounded-3xl bg-opacity-70 sm:max-w-4xl xl:mx-0 xl:mr-auto">
      <h2 className="mx-auto text-center sm:hidden acakadut">Pendaftaran</h2>

      <form className="text-gray-600">
        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">Nama</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-base rounded-full myInput"
          />
        </div>

        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">Asal Sekolah</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-base rounded-full myInput"
          />
        </div>

        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">Almat E-Mail</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-base rounded-full myInput"
          />
        </div>

        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">No. Handphone</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-base rounded-full myInput"
          />
        </div>

        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">No. WhatsApp</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-base rounded-full myInput"
          />
        </div>

        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">Password Akun</label>
          <input
            type="password"
            className="w-full px-3 py-1 text-base rounded-full myInput"
          />
        </div>

        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">Konfirmasi</label>
          <input
            type="password"
            className="w-full px-3 py-1 text-base rounded-full myInput"
          />
        </div>

        {/* daftar dan password note */}
        <div className="flex flex-col sm:flex-row sm:mt-3">
          <p className="mt-3 font-semibold text-center text-myDarkBlue textNormal">
            Password harus berupa kombinasi angka dan huruf
          </p>

          <input
            type="submit"
            value="Daftar"
            className="block px-3 py-1 mx-auto mt-1 text-base text-lg font-bold rounded-full sm:mr-0 text-mygreen bg-myYellow sm:px-5"
          />
        </div>
      </form>
      <a
        className="block mt-3 text-base font-semibold text-center text-myDarkBlue"
        style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        Sudah pernah mendaftar?{" "}
        <span className="font-bold ">Login Sekarang!</span>
      </a>
    </div>
  );
}

export default TryoutForm;

const button = [
  {
    teks1: "Belum pernah mendaftar Try Out?",
    teks2: "Daftar TO",
  },
  {
    teks1: "Sudah pernah mendaftar Try Out??",
    teks2: "Login Akun",
  },
  {
    teks1: "Kebingungan Cara Akses Try Out?",
    teks2: "Panduan TO",
  },
];
