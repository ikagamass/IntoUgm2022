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
  const ayam = intoaxios
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

      return err.response;
    });

  // console.log(ayam);
  return ayam;
};

export const POST_LOGIN = ({ email, password }) => {
  const ayam = intoaxios
    .post("/user/login", {
      email,
      password,
    })
    .catch((err) => {
      console.log(err.response);
      console.log(err.request);

      return err.response;
    });

  // console.log(ayam);
  return ayam;
};

export const POST_RESTORE_SESSION = (token) => {
  console.log(token);
  return intoaxios.post("/user/restore", { token }).catch((err) => {
    console.log(err.response);
    console.log(err.request);
  });
};

export const POST_MIDTRANS = (payload) => {
  return intoaxios
    .post("/payment", { ...payload })
    .then((res) => {
      let url = res.data.transactionRedirectUrl;
      console.log(res);
      window.open(url, "_blank");
      console.log(res);
    })
    .catch((err) => {
      console.log(err.response);
      console.log(err.request);
    });
};
