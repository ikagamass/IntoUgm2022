import React, { useState } from "react";

function TryoutForm() {
  const [values, setValues] = useState({
    nama: "",
    sekolah: "",
    email: "",
    noHp: "",
    noWa: "",
    pass: "",
    conPass: "",
  });

  const handleNamaChange = (newData) => {
    setValues({ ...values, nama: newData });
  };
  const handleSekolahChange = (newData) => {
    setValues({ ...values, sekolah: newData });
  };
  const handleEmailChange = (newData) => {
    setValues({ ...values, email: newData });
  };
  const handleNoHPChange = (newData) => {
    setValues({ ...values, noHp: newData });
  };
  const handleNoWAChange = (newData) => {
    setValues({ ...values, noWa: newData });
  };
  const handlePassChange = (newData) => {
    setValues({ ...values, pass: newData });
  };
  const handleConPassChange = (newData) => {
    setValues({ ...values, conPass: newData });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div className="w-full px-4 py-6 mx-auto mt-8 bg-white rounded-3xl bg-opacity-70 sm:max-w-4xl lg:mx-0 lg:mr-auto">
      <h2 className="mx-auto text-center sm:hidden acakadut">Pendaftaran</h2>

      <form className="text-gray-600" onSubmit={handleSubmit}>
        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">Nama</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-base rounded-full myInput"
            onChange={(e) => handleNamaChange(e.target.value)}
            value={values.nama}
          />
        </div>

        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">Asal Sekolah</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-base rounded-full myInput"
            onChange={(e) => handleSekolahChange(e.target.value)}
            value={values.sekolah}
          />
        </div>

        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">Almat E-Mail</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-base rounded-full myInput"
            onChange={(e) => handleEmailChange(e.target.value)}
            value={values.email}
          />
        </div>

        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">No. Handphone</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-base rounded-full myInput"
            onChange={(e) => handleNoHPChange(e.target.value)}
            value={values.noHp}
          />
        </div>

        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">No. WhatsApp</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-base rounded-full myInput"
            onChange={(e) => handleNoWAChange(e.target.value)}
            value={values.noWa}
          />
        </div>

        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">Password Akun</label>
          <input
            type="password"
            className="w-full px-3 py-1 text-base rounded-full myInput"
            onChange={(e) => handlePassChange(e.target.value)}
            value={values.pass}
          />
        </div>

        <div className="flex flex-col mt-2 sm:flex-row">
          <label className="font-bold w-52 text-mygreen">Konfirmasi</label>
          <input
            type="password"
            className="w-full px-3 py-1 text-base rounded-full myInput"
            onChange={(e) => handleConPassChange(e.target.value)}
            value={values.conPass}
          />
        </div>

        {/* daftar dan password note */}
        <div className="flex flex-col sm:flex-row sm:mt-3">
          <p className="mt-3 font-semibold text-center text-myDarkBlue textNormal">
            Password harus berupa kombinasi angka dan huruf
          </p>

          <button
            type="submit"
            // value="Daftar"
            className="block px-3 py-1 mx-auto mt-1 text-base text-lg font-bold rounded-full sm:mr-0 text-mygreen bg-myYellow sm:px-5"
          >
            Daftar
          </button>
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
