import React, { useState, useEffect } from "react";
import { IoToggle } from "react-icons/io5";
import CantAccesModal from "../components/modal/CantAccesModal";
import SuccessRegisterModal from "views/components/modal/SucessRegisterModal";

function BadutPage() {
  const [isOpen, setIsOpen] = useState(true); // modal

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section
      className="flex flex-col justify-between min-h-screen text-lg bg-center"
      style={{
        background: "url('/images/bgAccountDesktop.jpg')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* {isOpen && <CantAccesModal closeModal={closeModal} />} */}
      {isOpen && <SuccessRegisterModal closeModal={closeModal} />}

      <button className="bg-red-500" onClick={openModal}>
        Ayam {isOpen}
      </button>
    </section>
  );
}

export default BadutPage;
