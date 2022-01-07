import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import Menu1 from "../../assets/images/menus/menu1.jpg";
import Menu2 from "../../assets/images/menus/menu2.jpg";
import Menu3 from "../../assets/images/menus/menu3.jpg";
import Menu4 from "../../assets/images/menus/menu4.jpg";
import Menu5 from "../../assets/images/menus/menu5.jpg";
import { useHistory } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import PageNotReady from "views/components/modal/PageNotReady";

function MobileHome() {
  const history = useHistory();

  const [modal, setmodal] = useState(false);

  const closeModal = () => {
    setmodal(false);
  };

  const handleClick = (type) => {
    switch (type) {
      case "Tryout": {
        history.push("/tryout");
        break;
      }
      case "Tour": {
        setmodal(true);
        // history.push("/tour-de-faculty");
        break;
      }

      case "Into": {
        setmodal(true);
        // history.push("/Into");
        break;
      }
      case "Live": {
        // history.push("/live");
        setmodal(true);
        break;
      }

      case "Sponsor": {
        // history.push("/live");
        setmodal(true);
        break;
      }

      default:
        break;
    }
  };

  return (
    <HomeLayout>
      <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 md:grid-cols-3">
        {buttonData.map((item, idx) => (
          <div
            className="relative border-4 rounded-2xl border-myYellow "
            style={{
              backgroundImage: item.bg,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
            onClick={() => handleClick(item.nama)}
          >
            <img src={item.bgHide} style={{ visibility: "hidden" }} />
            <div className="flex justify-between px-2 py-1 mb-3 ml-4 mr-20 text-sm font-bold text-white align-baseline bg-mygreen rounded-2xl">
              <p>{item.text}</p>
              <IoChevronForward className="my-auto" />
            </div>
          </div>
        ))}
      </div>

      {modal && <PageNotReady closeModal={closeModal} />}
    </HomeLayout>
  );
}

export default MobileHome;

const buttonData = [
  {
    bg: "url('/images/menus/menu1.jpg')",
    bgHide: Menu1,
    text: "Try Out",
    nama: "Tryout",
  },
  {
    bg: "url('/images/menus/menu2.jpg')",
    bgHide: Menu2,
    text: "Live Streaming",
    nama: "Live",
  },
  {
    bg: "url('/images/menus/menu3.jpg')",
    bgHide: Menu3,
    text: "Tour de Faculty",
    nama: "Tour",
  },
  {
    bg: "url('/images/menus/menu4.jpg')",
    bgHide: Menu4,
    text: "Apa itu InTO UGM?",
    nama: "Into",
  },
  {
    bg: "url('/images/menus/menu5.jpg')",
    bgHide: Menu5,
    text: "Spnsor",
    nama: "Sponsor",
  },
];
