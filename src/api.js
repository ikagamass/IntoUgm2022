import axios from "axios";
const send = (data) =>
  new Promise((resolve) => setTimeout(() => resolve({ data: data }), 2000));

const intoaxios = axios.create({
  baseURL: "http://into-ugm-api.herokuapp.com",
});

export default intoaxios;

//API DOCUMENTATION

//AUTH APIs

export const POST_REGISTER = ({
  nama,
  asalSekolah,
  email,
  noHP,
  noWA,
  password,
  mataUjian,
}) => {
  // const response = {
  //   token: "vcdtykmasdasdsa",
  //   user_data: {
  //     _id: "1",
  //     nama: "test",
  //     asalSekolah: "test",
  //     email: "test@gmail.com",
  //     noHP: "08123456789",
  //     noWA: "08123456789",
  //     mataUjian: "saintek",
  //   },
  // };

  console.log({
    nama,
    asalSekolah,
    email,
    noHP,
    noWA,
    password,
    mataUjian,
  });

  return intoaxios.post("/user/register", {
    nama,
    asalSekolah,
    email,
    noHP,
    noWA,
    password,
    mataUjian,
  }).catch(err=>{
    console.log(err.response);
    console.log(err.request);
  });

  // return send({ status: "OK", code: "success", body: response });
};

export const POST_LOGIN = ({ email, password }) => {
  return intoaxios.post("/user/login", {
    email,
    password,
  });
};

export const POST_CONTINUE_SESSION = () => {
  const post = {
    refreshToken: "jsdnckjncdd",
  };

  const response = {
    token: "ejgbnkjsdnfgbk",
    refreshToken: "jsdnckjncdd",
    user_data: {
      _id: "scbakscbnasnx",
      role: "customer",
      name: "R. Bintang Bagus",
      email: "bintangbagus01@mail.ugm.ac.id",
    },
  };

  intoaxios
    .post("/auth/continue-session", post)
    .then((api) => console.log("api-ready", api))
    .catch(() => {});

  return send({ status: "OK", body: response });
};
