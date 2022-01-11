import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TitleText from "views/components/TitleText";
import { useLocation } from "react-router-dom";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useAuth } from "core/contexts";
import { useHistory } from "react-router-dom";

import useForm from "../../../core/hooks/useForm";
import LoadingScreen from "views/components/LoadingScreen";

function ToForm({ currentTitle, handleClick, hargaDibayar, mataUjian }) {
  const location = useLocation();
  const history = useHistory();

  const { form, mutateForm, resetForm } = useForm({
    name: "",
    school: "",
    email: "",
    noHp: "",
    noWa: "",
    password: "",
    confirmPassword: "",
  });

  const [isOpen, setIsOpen] = useState(false); //Modal Succes
  const [isLoading, setIsLoading] = useState(false); //Loadin Screen
  const { authMethods, status, userData } = useAuth();

  const [isError, setIsError] = useState(false); // Modal Error
  const [errorMessage, setErrorMessage] = useState(null); // Error Message

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    // console.log(isOpen);
  }, [isOpen]);

  // Close Modal Confirmation
  const closeModal = () => {
    setIsOpen(false);
  };

  // Close Modal Error
  const closeModalError = () => {
    setIsError(false);
  };

  // redirect to profile
  useEffect(() => {
    // console.log(status);
    if (status === "user") {
      history.push("/profile");
    }
  }, [status]);

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/im;
    return re.test(input_str);
  }

  function validatePassword(input_str) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/im;

    return re.test(input_str);
  }

  const validateAll = () => {
    if (form.name === "") {
      // Empty Name
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("empty-name");
      return false;
    } else if (form.school === "") {
      // Empty School
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("empty-school");
      return false;
    } else if (form.email === "") {
      // Empty Email
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("empty-email");
      return false;
    } else if (!validateEmail(form.email)) {
      // Incorrect Email
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("incorrect-email");
      return false;
    } else if (form.noHp === "") {
      // Empty Phone
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("empty-phone");
      return false;
    } else if (!validatePhoneNumber(form.noHp)) {
      // Inccorect Phone
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("incorrect-phone");
      return false;
    } else if (form.noWa === "") {
      // Empty WA
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("empty-whatsapp");
      return false;
    } else if (!validatePhoneNumber(form.noWa)) {
      // Inccorect WA
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("incorrect-whatsapp");
      return false;
    } else if (form.password === "") {
      // Empty password
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("empty-password");
      return false;
    } else if (!validatePassword(form.password)) {
      // Incorrect Password
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("incorrect-password");
      return false;
    } else if (form.confirmPassword === "") {
      // Empty Confirmpassword
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("empty-confirmPassword");
      return false;
    } else if (!validatePassword(form.confirmPassword)) {
      // Incorrect ConfirmPassword
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("incorrect-confirmPassword");
      return false;
    } else if (form.password !== form.confirmPassword) {
      // Password gak sama
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("password-notMatch");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    setIsOpen(false);
    event.preventDefault();
    // console.log(form);

    // validation
    const isValid = validateAll();
    if (!isValid) {
      return;
    }

    // console.log(form.nama);
    // console.log(form.asalSekolah);

    const payload = {
      nama: form.name,
      asalSekolah: form.school,
      email: form.email,
      noHP: form.noHp,
      noWA: form.noWa,
      password: form.pass,
      mataUjian: mataUjian,
      password: form.password,
      harga: hargaDibayar,
    };

    const daftar = await authMethods.register(payload);
    // console.log(daftar);

    setIsLoading(false);
    if (daftar.status !== 200) {
      // console.log("Error anjir", daftar.data.message);
      setIsError(true);
      setErrorMessage(daftar.data.message);
    }
  };

  // Modal Cek is Error
  useEffect(() => {
    // console.log(isError);
  }, [isError]);

  const paketUjian = (harga) => {
    if (harga == 30000) return "Ngambis - 30.000";
    else if (harga == 50000) return "Couple Ambis - 50.000";
    if (harga == 120000) return "Geng Ambis - 130.000";
  };

  const confirmModal = (
    <div className="absolute top-0 left-0 flex w-screen h-full min-h-screen bg-black bg-opacity-80">
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
            className="px-3 py-1 text-lg font-bold text-white rounded-full bg-myDarkGreen"
            onClick={closeModal}
          >
            <IoChevronBack className="inline mr-1" />
            Kembali
          </button>
          <button
            className="px-3 py-1 text-lg font-bold text-white rounded-full bg-myDarkGreen"
            onClick={handleSubmit}
          >
            Lanjutkan
            <IoChevronForward className="inline mr-1" />
          </button>
        </div>
      </div>
    </div>
  );

  const errorMessageUI = () => {
    switch (errorMessage) {
      case "empty-name": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">Nama kosong</p>
            <p className="font-bold text-center text-mygreen">
              Mohon tuliskan nama anda
            </p>
          </>
        );
        break;
      }

      case "empty-school": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">
              Asal sekolah kosong
            </p>
            <p className="font-bold text-center text-mygreen">
              Mohon tuliskan asal sekolah anda
            </p>
          </>
        );
        break;
      }

      case "empty-email": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">Email kosong</p>
            <p className="font-bold text-center text-mygreen">
              Mohon tuliskan email anda
            </p>
          </>
        );
        break;
      }

      case "incorrect-email": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">Email salah</p>
            <p className="font-bold text-center text-mygreen">
              Periksa kembali email anda
            </p>
          </>
        );
        break;
      }

      case "empty-phone": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">
              No handphone kosong
            </p>
            <p className="font-bold text-center text-mygreen">
              Mohon tuliskan nomor handphone anda
            </p>
          </>
        );
        break;
      }

      case "incorrect-phone": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">
              Nomor handphone salah
            </p>
            <p className="font-bold text-center text-mygreen">
              Periksa kembali nomor handphone anda
            </p>
          </>
        );
        break;
      }

      case "empty-whatsapp": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">
              No whatsapp kosong
            </p>
            <p className="font-bold text-center text-mygreen">
              Mohon tuliskan nomor whatsapp anda
            </p>
          </>
        );
        break;
      }

      case "incorrect-whatsapp": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">
              Nomor whatsapp salah
            </p>
            <p className="font-bold text-center text-mygreen">
              Periksa kembali nomor whatsapp anda
            </p>
          </>
        );
        break;
      }

      case "empty-password": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">
              password kosong
            </p>
            <p className="font-bold text-center text-mygreen">
              Mohon tuliskan password anda
            </p>
          </>
        );
        break;
      }

      case "incorrect-password": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">Password salah</p>
            <p className="font-bold text-center text-mygreen">
              Periksa kembali password anda, pastikan password tediri dari
              minimal 8 karakter kombinasi angka dan huruf
            </p>
          </>
        );
        break;
      }

      case "empty-confirmPassword": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">
              Konfirmasi password kosong
            </p>
            <p className="font-bold text-center text-mygreen">
              Mohon tuliskan konfirmasi password anda
            </p>
          </>
        );
        break;
      }

      case "incorrect-confirmPassword": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">
              Konfirmasi Password salah
            </p>
            <p className="font-bold text-center text-mygreen">
              Periksa kembali konfirmasi password anda, pastikan password tediri
              dari minimal 8 karakter kombinasi angka dan huruf
            </p>
          </>
        );
        break;
      }

      case "password-notMatch": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">
              Password dan Konfirmasi password tidak sama
            </p>
            <p className="font-bold text-center text-mygreen">
              Periksa kembali password dan Konfirmasi password anda
            </p>
          </>
        );
        break;
      }

      default:
        return (
          <p className="font-bold text-center text-mygreen">
            Terjadi error : {errorMessage}
          </p>
        );
        break;
    }
  };

  const errorModal = (
    <div className="absolute top-0 left-0 flex w-screen min-h-screen bg-black bg-opacity-80">
      {/* modal */}
      <div
        className="relative p-5 mx-5 my-auto sm:p-16 sm:mx-auto rounded-2xl w-96 bg-myYellow"
        style={{ width: "610px" }}
      >
        {errorMessageUI()}

        <div className="flex justify-center w-full mt-7">
          <button
            className="px-3 py-1 text-lg font-bold text-white rounded-full bg-myDarkGreen"
            onClick={closeModalError}
          >
            <IoChevronBack className="inline mr-1" />
            Kembali
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <TitleText judul="Pendaftaran" />
      <div className="w-full px-4 py-6 mx-auto mt-8 bg-white rounded-3xl bg-opacity-70 sm:max-w-4xl lg:mx-0 lg:mr-auto">
        <h2 className="mx-auto text-center sm:hidden acakadut">
          {currentTitle}
        </h2>

        <div className="text-gray-600">
          {/* Nama */}
          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">Nama</label>
            <input
              name="name"
              type="text"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              onChange={mutateForm}
              value={form.name}
            />
          </div>

          {/* Asal Sekolah */}
          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">Asal Sekolah</label>
            <input
              name="school"
              type="text"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              onChange={mutateForm}
              value={form.school}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">Almat E-Mail</label>
            <input
              name="email"
              type="text"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              onChange={mutateForm}
              value={form.email}
            />
          </div>

          {/* No Hp */}
          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">No. Handphone</label>
            <input
              name="noHp"
              type="text"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              onChange={mutateForm}
              value={form.noHp}
            />
          </div>

          {/* No Wa */}
          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">No. WhatsApp</label>
            <input
              name="noWa"
              type="text"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              onChange={mutateForm}
              value={form.noWa}
            />
          </div>

          {/* Paket */}
          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">Paket</label>
            <input
              name="paket"
              type="text"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              disabled={true}
              placeholder={paketUjian(hargaDibayar)}
            />
          </div>

          {/* Mata Ujian */}
          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">Mata Ujian</label>
            <input
              name="paket"
              type="text"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              disabled={true}
              placeholder={mataUjian}
            />
          </div>

          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">Password Akun</label>
            <input
              name="password"
              type="password"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              onChange={mutateForm}
              value={form.password}
            />
          </div>

          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">Konfirmasi</label>
            <input
              name="confirmPassword"
              type="password"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              onChange={mutateForm}
              value={form.confirmPassword}
            />
          </div>

          {/* daftar dan password note */}
          <div className="flex flex-col sm:flex-row sm:mt-3">
            <p className="px-3 mt-3 font-semibold text-center text-white rounded-lg textNormal bg-myDarkBlue">
              Password harus berupa kombinasi angka dan huruf dan minimal 8
              karakter
            </p>

            <button
              onClick={openModal}
              className="block px-3 py-1 mx-auto mt-1 text-base text-lg font-bold rounded-full sm:mr-0 text-mygreen bg-myYellow sm:px-5"
            >
              Daftar
            </button>
          </div>
        </div>
        <div className="gap-2 flex-cc">
          <p
            className="block mt-3 text-base font-semibold text-center text-myDarkBlue"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Sudah pernah mendaftar?{" "}
          </p>
          <Link
            to={"/login"}
            className="mt-3 text-base font-bold text-center text-myDarkBlue"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Login Sekarang!
          </Link>
        </div>
      </div>
      <>{isOpen && confirmModal}</>
      <>{isLoading && <LoadingScreen />}</>
      <>{isError && errorModal}</>
    </>
  );
}

export default ToForm;
