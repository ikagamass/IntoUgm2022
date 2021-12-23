import React, { useState, useEffect } from "react";
import AccountLayout from "../components/AccountLayout";
import { Link } from "react-router-dom";
import { useAuth } from "core/contexts";
import { useHistory } from "react-router-dom";
import LoadingScreen from "views/components/LoadingScreen";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import useForm from "../../core/hooks/useForm";

function Login() {
  const { authMethods, status, userData } = useAuth();
  const history = useHistory();

  const { form, mutateForm, resetForm } = useForm({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false); //Loading
  const [isError, setIsError] = useState(false); // Modal Error
  const [errorMessage, setErrorMessage] = useState(null); // Error Message

  // Close Modal Error
  const closeModalError = () => {
    setIsError(false);
  };

  function validateEmail(input) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input);
  }

  function validatePassword(input) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/im;

    return re.test(input);
  }

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    // validation
    const emailTest = validateEmail(form.email);
    if (!emailTest) {
      setIsLoading(false);
      setIsError(true);
      setErrorMessage(`incorrect-email`);
      return;
    }

    const payload = {
      email: form.email,
      password: form.password,
    };

    const login = await authMethods.login(payload);
    console.log("login: ", login);
    setIsLoading(false);

    if (login.status !== 200) {
      console.log("Error anjir", login.data.code);
      setIsError(true);
      setErrorMessage(login.data.code);
    }
  };

  useEffect(() => {
    // console.log(status);
    if (status === "user") {
      history.push("/profile");
    }
  }, [status]);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  console.log("userData luar", userData);

  const errorMessageUI = () => {
    switch (errorMessage) {
      case "user-data-not-found": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">
              Pengguna tidak ditemukan
            </p>
            <p className="font-bold text-center text-mygreen">
              Periksa kembali email dan password anda
            </p>
          </>
        );
        break;
      }
      case "incorrect-password": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">Password Salah</p>
            <p className="font-bold text-center text-mygreen">
              Periksa kembali password anda
            </p>
          </>
        );
        break;
      }
      case "incorrect-email": {
        return (
          <>
            <p className="font-bold text-center text-mygreen">
              Email yang kamu masukkan salah
            </p>
            <p className="font-bold text-center text-mygreen">
              Periksa kembali email anda
            </p>
          </>
        );
        break;
      }
      default:
        return (
          <p className="font-bold text-center text-mygreen">{errorMessage}</p>
        );
        break;
    }
  };

  // Error Modal
  const errorModal = (
    <div className="absolute top-0 left-0 flex w-screen min-h-screen bg-black bg-opacity-80">
      {/* modal */}
      <div
        className="relative p-5 mx-5 my-auto sm:p-16 sm:mx-auto rounded-2xl w-96 bg-myYellow"
        style={{ width: "610px" }}
      >
        <p className="font-bold text-center text-mygreen">{errorMessageUI()}</p>

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
    <AccountLayout>
      {isLoading && <LoadingScreen />}
      <>{isError && errorModal}</>
      <h4 className="hidden mt-8 mb-16 text-4xl font-bold text-center sm:block font-acakadut">
        Login Akun
      </h4>
      <div className="w-full px-4 py-6 mx-auto mt-8 bg-white rounded-3xl bg-opacity-70 sm:max-w-4xl ">
        <h2 className="mx-auto text-center sm:hidden acakadut">Login Akun</h2>

        <form className="text-gray-600" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">Alamat E-Mail</label>
            <input
              name="email"
              type="text"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              onChange={mutateForm}
              value={form.email}
              placeholder="Masukkan Email"
            />
          </div>

          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">Password</label>
            <input
              type="password"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              name="password"
              onChange={mutateForm}
              value={form.password}
            />
          </div>

          {/* daftar dan password note */}
          <div className="flex flex-col sm:mt-1">
            <p className="mt-3 font-semibold text-right text-mygreen textNormal">
              Lupa Password ?
            </p>

            <p className="hidden mt-1 font-bold text-center text-myDarkBlue textNormal">
              Password yang Anda masukkan salah!
            </p>

            <button
              type="submit"
              // value="Daftar"
              className="block px-3 py-1 mx-auto mt-3 text-base text-lg font-bold rounded-full text-mygreen bg-myYellow sm:px-5"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="gap-2 mt-10 flex-cc">
        <p className="font-semibold text-center text-mygreen ">
          Belum punya akun?
        </p>
        <Link
          className="font-bold text-center text-mygreen hover:text-myDarkBlue"
          to={"try-out/kluster"}
        >
          {"Daftar Sekarang"}
        </Link>
      </div>
    </AccountLayout>
  );
}

export default Login;
