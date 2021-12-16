import React, { useState } from "react";
import AccountLayout from "../components/AccountLayout";
import { Link } from "react-router-dom";
import { useAuth } from "core/contexts";
import { useHistory } from "react-router-dom";

function Login() {
  const { authMethods, status, userData } = useAuth();
  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [isValid, setValid] = useState({
    isValidEmail: "empty",
    isValidPass: "empty",
  });

  const handleEmailChange = (newData) => {
    setValues({ ...values, email: newData });
  };
  const handlePassChange = (newData) => {
    setValues({ ...values, pass: newData });
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validatePassword(input_str) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/im;

    return re.test(input_str);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // validation

    // email
    if (values.email === "") {
      setValid({ ...isValid, isValidEmail: "empty" });
    } else if (validateEmail(values.email)) {
      setValid({ ...isValid, isValidEmail: "true" });
    } else {
      setValid({ ...isValid, isValidEmail: "false" });
    }

    // password
    if (values.pass === "") {
      setValid({ ...isValid, isValidPass: "empty" });
    } else if (validatePassword(values.pass)) {
      setValid({ ...isValid, isValidPass: "true" });
    } else {
      setValid({ ...isValid, isValidPass: "false" });
    }

    const payload = {
      email: values.email,
      password: values.pass,
    };

    await authMethods.login(payload);
    if (status === "user") {
      // history.push("/profile");
      console.log(userData);
    }
  };
  return (
    <AccountLayout>
      <h4 className="hidden mt-8 mb-16 text-4xl font-bold text-center sm:block font-acakadut">
        Login Akun
      </h4>
      <div className="w-full px-4 py-6 mx-auto mt-8 bg-white rounded-3xl bg-opacity-70 sm:max-w-4xl ">
        <h2 className="mx-auto text-center sm:hidden acakadut">Login Akun</h2>

        <form className="text-gray-600" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">Alamat E-Mail</label>
            <input
              type="text"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              onChange={(e) => handleEmailChange(e.target.value)}
              value={values.email}
            />
          </div>

          <div className="flex flex-col mt-2 sm:flex-row">
            <label className="font-bold w-52 text-mygreen">Password</label>
            <input
              type="password"
              className="w-full px-3 py-1 text-base rounded-full myInput"
              onChange={(e) => handlePassChange(e.target.value)}
              value={values.pass}
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
