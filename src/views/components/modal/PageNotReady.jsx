import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import Close from "../../../assets/images/Close.png";
import useForm from "../../../core/hooks/useForm";

function PageNotReady({ closeModal, handlePayment, setIsLoading }) {
  const { form, mutateForm, resetForm } = useForm({
    code: "",
  });

  // Fungsi handle referal
  const handleReff = async () => {
    setIsLoading(true);
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex w-screen min-h-screen bg-black bg-opacity-80 ">
      {/* modal */}
      <div
        className="flex flex-col items-center justify-center p-5 mx-5 my-auto sm:p-8 sm:mx-auto rounded-2xl w-96 bg-myYellow"
        style={{ width: "610px" }}
      >
        <img src={Close} className="ml-auto closeButton" onClick={closeModal} />
        <>
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-center text-mygreen">
              Halaman belum tersedia
              <br />
              Silahkan kembali ke halaman sebelumnya
            </p>
          </div>
        </>

        {/* <p className="w-full my-4 bg-myDarkBlue" style={{ height: "1px" }}></p> */}
      </div>
    </div>
  );
}

export default PageNotReady;
