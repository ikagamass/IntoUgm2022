import axios from "axios";
const send = (data) =>
  new Promise((resolve) => setTimeout(() => resolve({ data: data }), 2000));

const intoaxios = axios.create({
  baseURL: "https://into-ugm-api.herokuapp.com",
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
  return intoaxios
    .post("/user/register", {
      nama,
      asalSekolah,
      email,
      noHP,
      noWA,
      password,
      mataUjian,
    })
    .catch((err) => {
      console.log(err.response);
      console.log(err.request);
    });
};

export const POST_LOGIN = ({ email, password }) => {
  return intoaxios
    .post("/user/login", {
      email,
      password,
    })
    .catch((err) => {
      console.log(err.response);
      console.log(err.request);
    });
};

export const POST_CONTINUE_SESSION = (token) => {
  return intoaxios.post("/user/restore-token", token).catch((err) => {
    console.log(err.response);
    console.log(err.request);
  });
};
