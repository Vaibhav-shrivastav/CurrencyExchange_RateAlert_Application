import React from "react";
import VanceLogo from "../media/Navbar/VanceLogo.png";
import Arrow from "../media/Navbar/DownloadButtonArrow.png";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

function Navbar({ value, setValue, logged, setLogged }) {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from(".ani", {
      y: -50,
      opacity: 0,
      duration: 1,
      stagger: true,
    });
  });

  return (
    <div className="bg-[#111] px-[200px]  flex flex-col items-center gap-2 border-b border-b-[rgba(255,255,255,0.1)] py-5">
      <div className="w-full bg-[#111] flex flex-row justify-between items-center">
        <img className="ani" src={VanceLogo} alt="" />
        <div className=" flex flex-row gap-3">
          <button className="bg-[#81EBAB] ani rounded-[100px] h-12 px-[16px] flex flex-row items-center gap-2  hover:bg-[#45da81] hover:scale-105">
            <span className="text-[#0B0B0B] text-base font-semibold">
              Download app
            </span>
            <img src={Arrow} alt="" />
          </button>
          {logged ? (
            <button
              onClick={() => {
                localStorage.removeItem("email");
                setValue("");
                setLogged(false);
                navigate("/");
              }}
              className="text-white text-xs bg-red-600 p-2 rounded-[100px]"
            >
              Log out
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
