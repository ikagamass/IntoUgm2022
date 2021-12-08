import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ConfirmRegistration from "views/components/modal/ConfirmRegistration";
import TitleText from "views/components/TitleText";
import { useLocation } from "react-router-dom";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useAuth } from "core/contexts";

function ToForm() {
  const location = useLocation();
  const klaster = location.pathname.split("/")[3];

  const [isOpen, setIsOpen] = useState(false); //
  const { authMethods } = useAuth();
  const [confirm, setConfirm] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    // console.log(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const confirmTrue = () => {
    setConfirm(true);
  };

  const [values, setValues] = useState({
    nama: "",
    sekolah: "",
    email: "",
    noHp: "",
    noWa: "",
    pass: "",
    conPass: "",
  });

  const [isValid, setValid] = useState({
    isValidNama: "empty",
    isValidSekolah: "empty",
    isValidEmail: "empty",
    isValidNoHp: "empty",
    isValidNoWa: "empty",
    isValidPass: "empty",
    isValidConPass: "empty",
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

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(input_str);
  }

  function validatePassword(input_str) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/im;

    return re.test(input_str);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);

    // validation

    // nama
    if (values.nama === "") {
      setValid({ ...isValid, isValidNama: "empty" });
    } else {
      console.log("namanya benar woyyy");
      setValid({ ...isValid, isValidNama: "true" });
    }

    // sekolah
    if (values.sekolah === "") {
      setValid({ ...isValid, isValidSekolah: "empty" });
    } else {
      setValid({ ...isValid, isValidSekolah: "true" });
    }

    // email
    if (values.email === "") {
      setValid({ ...isValid, isValidEmail: "empty" });
    } else if (validateEmail(values.email)) {
      setValid({ ...isValid, isValidEmail: "true" });
    } else {
      setValid({ ...isValid, isValidEmail: "false" });
    }

    // hp
    if (values.noHp === "") {
      setValid({ ...isValid, isValidNoHp: "empty" });
    } else if (validatePhoneNumber(values.email)) {
      setValid({ ...isValid, isValidNoHp: "true" });
    } else {
      setValid({ ...isValid, isValidNoHp: "false" });
    }

    // wa
    if (values.noWa === "") {
      setValid({ ...isValid, isValidNoWa: "empty" });
    } else if (validatePhoneNumber(values.email)) {
      setValid({ ...isValid, isValidNoWa: "true" });
    } else {
      setValid({ ...isValid, isValidNoWa: "false" });
    }

    // password
    if (values.pass === "") {
      setValid({ ...isValid, isValidPass: "empty" });
    } else if (validatePassword(values.pass)) {
      setValid({ ...isValid, isValidPass: "true" });
    } else {
      setValid({ ...isValid, isValidPass: "false" });
    }

    // password confirmation
    if (values.conPass === "") {
      setValid({ ...isValid, isValidConPass: "empty" });
    } else if (values.conPass === values.pass) {
      setValid({ ...isValid, isValidConPass: "true" });
    } else {
      setValid({ ...isValid, isValidConPass: "false" });
    }

    const result = await authMethods.register({
      nama: values.nama,
      asalSekolah: values.sekolah,
      email: values.email,
      noHp: values.noHp,
      noWa: values.noWa,
      password: values.pass,
      mataUjian: klaster,
    });
    console.log(result);
  };

  const confirmModal = (
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
          <button
            type="submit"
            className="py-1 px-3 text-lg font-bold text-white rounded-full bg-myDarkGreen"
            onClick={confirmTrue}
          >
            Lanjutkan
            <IoChevronForward className="inline mr-1" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <TitleText judul="Pendaftaran" />
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
              className="block px-3 py-1 mx-auto mt-1 text-base text-lg font-bold rounded-full sm:mr-0 text-mygreen bg-myYellow sm:px-5"
            >
              Daftar {isOpen}
            </button>
          </div>
        </form>
        <div className="flex-cc gap-2">
          <p
            className="block mt-3 text-base font-semibold text-center text-myDarkBlue"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Sudah pernah mendaftar?{" "}
          </p>
          <Link
            to={"/login"}
            className="font-bold mt-3 text-base text-center text-myDarkBlue"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Login Sekarang!
          </Link>
        </div>
      </div>
    </>
  );
}

export default ToForm;
