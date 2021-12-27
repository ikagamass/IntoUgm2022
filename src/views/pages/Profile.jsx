import React, { useState, useEffect } from "react";
import AccountLayout from "../components/AccountLayout";
import PlaceHolder from "../../assets/images/placeholder.png";
import Wa from "../../assets/images/wa.svg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import UserOnlyRoute from "core/routeblocks/UserOnlyRoute";
import WarnPayment from "views/components/modal/WarnPayment";
import { useAuth } from "core/contexts";
import { useHistory } from "react-router-dom";
import { POST_MIDTRANS } from "../../api";
import LoadingScreen from "views/components/LoadingScreen";

function Profile() {
  const { authMethods, status, userData } = useAuth();
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(true); // modal
  console.log(userData);

  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handlePayment = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // setIsOpen(false);

    const payload = {
      idUser: userData._id,
      mataUjian: userData.mataUjian,
      price: 20000,
      item_details: {
        id: "saintek",
        price: 20000,
        quantity: 1,
        name: `Pendaftaran Tryout ${userData.mataUjian} Into UGM 2022`,
        brand: "",
        category: userData.mataUjian,
        merchant_name: "IntoUgm2022",
      },
    };

    let res = await POST_MIDTRANS(payload);
    setIsLoading(false);

    // console.log(values);
  };

  const handleLogOut = async () => {
    // todo : buat api call buat hapus userdata di useAuth
    let logoutResponse = await authMethods.logout();
    history.push("/login");
  };

  return (
    <UserOnlyRoute>
      <AccountLayout>
        {isOpen && <WarnPayment closeModal={closeModal} />}
        <h4 className="hidden mt-8 mb-16 text-4xl font-bold text-center sm:block font-acakadut">
          Akun
        </h4>

        <div className="w-full px-4 py-6 mx-auto mt-8 bg-white rounded-3xl bg-opacity-70 sm:max-w-4xl ">
          <div className="sm:grid-cols-4 sm:grid">
            {/* gambar desktop */}
            <div className="relative justify-center hidden -my-6 -ml-4 bg-green-800 sm:flex sm:flex-col rounded-3xl sm:col-span-1">
              <div className="">
                <img
                  src={userData.linkFoto}
                  // width="150"
                  // height="150"
                  alt="Foto profile"
                  className="mx-auto mb-3 rounded-full md:w-40 sm:w-32"
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                />
              </div>
              <button className="px-3 py-1 mx-auto text-base text-white bg-gray-500 rounded-full">
                Atur Foto
              </button>
            </div>

            <div className="sm:col-span-3 sm:pl-5 ">
              {/* status, matkul, foto-mobile */}
              <div className="flex flex-col items-center col-span-4 sm:flex-row sm:justify-between">
                {/* mata kuliah */}
                <div className="flex justify-center sm:order-last">
                  <h2 className="inline px-3 py-1 text-center text-white rounded-full acakadut bg-myDarkBlue">
                    {userData.mataUjian}
                  </h2>
                </div>

                {/* Foto Mobile */}
                <img
                  src={userData.linkFoto}
                  width="100"
                  height="100"
                  alt="Foto profile"
                  className="mt-2 rounded-full sm:hidden"
                />

                <button className="px-3 py-1 mt-1 text-base text-white bg-gray-500 rounded-full sm:hidden">
                  Atur Foto
                </button>

                <p className="mt-2 text-sm">
                  Status Akun:{" "}
                  {userData.status === false ? (
                    <span className="font-bold text-red-500">Tidak Aktif</span>
                  ) : (
                    <span className="font-bold text-red-500"> Aktif</span>
                  )}
                </p>
              </div>

              {/* Name */}
              <div className="flex ">
                <p className="w-32 sm:w-40">Name</p>
                <p className="">{userData.nama}</p>
              </div>

              {/* asalSekolah */}
              <div className="flex ">
                <p className="w-32 sm:w-40">Asal Sekolah</p>
                <p className="">{userData.asalSekolah}</p>
              </div>

              {/* Email */}
              <div className="flex ">
                <p className="w-32 sm:w-40">Alamat Email</p>
                <p className="">{userData.email}</p>
              </div>

              {/* HP  */}
              <div className="flex ">
                <p className="w-32 sm:w-40">No. Handphone</p>
                <p className="">{userData.noHP}</p>
              </div>

              {/* Wa */}
              <div className="flex ">
                <p className="w-32 sm:w-40">No. WhatsApp</p>
                <p className="">{userData.noWA}</p>
              </div>

              {userData.status === false ? (
                <div className="flex items-baseline align-baseline gap-x-4">
                  {/* button belum aktif */}
                  <button
                    className="px-4 py-1 mt-3 text-base font-bold text-center text-white bg-blue-500 rounded-full"
                    onClick={handlePayment}
                  >
                    Aktivasi
                  </button>
                  <p className="col-span-4 text-xs ">
                    Segera lakukan pembayaran untuk melakukan aktivasi akun Anda
                  </p>
                </div>
              ) : (
                <div className="hidden sm:grid-cols-2 sm:gap-x-2">
                  {/* button sudah aktif */}
                  <a
                    className="w-full py-1 mt-3 text-base font-bold text-center text-white rounded-full"
                    style={{ backgroundColor: "#577CFF" }}
                  >
                    Akses Akun Pahamify
                  </a>

                  <a
                    className="w-full py-1 mt-3 text-base font-bold text-center text-white rounded-full "
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <AiOutlineWhatsApp className="inline-block mb-1 mr-1 sm:hidden md:inline-block" />
                    {/* <img src={Wa} className="inline-block w-6 h-6" /> */}
                    Grup WA InTO UGM 2022
                  </a>
                </div>
              )}

              {/* Logout */}
              <div className="flex justify-end gap-x-4">
                {/* button belum aktif */}
                <button
                  className="px-4 py-1 mt-3 text-base font-bold text-center text-white bg-red-500 rounded-full"
                  onClick={handleLogOut}
                >
                  LogOut
                </button>
              </div>
            </div>
          </div>
        </div>
      </AccountLayout>
      <>{isLoading && <LoadingScreen />}</>
    </UserOnlyRoute>
  );
}

export default Profile;
