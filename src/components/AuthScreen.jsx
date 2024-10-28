import React, { useEffect } from "react";
import Megaphone from "../media/HomeScreens/AuthScreen/MegaphoneIcon.png";
import GoogleLogo from "../media/HomeScreens/AuthScreen/GoogleLogo.png";
import { auth, provider } from "../Auth/config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function AuthScreen({ setValue, setLogged }) {
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      setLogged(true);
      localStorage.setItem("email", data.user.email);
      navigate("/dashboard");
    });
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setValue(email);
      setLogged(true);
    }
  }, []);

  return (
    <>
      <div className="relative flex h-[810px] px-[48px] flex-col justify-center items-center gap-[96px] self-stretch bg-[#111]">
        <div className="absolute z-0  w-[444px] h-[444px] left-[498px] top-[-6px] rounded-full opacity-75 bg-[radial-gradient(50%_50%_at_50%_50%,_#4602D9_0%,_#111_100%)] filter blur-[124px]"></div>
        <div className="flex flex-col items-center gap-10 rounded-3xl">
          <img className="w-[179.872px] h-[177.946px]" src={Megaphone} alt="" />
          <div className="flex flex-col justify-center items-center gap-9 self-stretch">
            <p className="text-white text-center font-[700] text-[36px] leading-[120%]">
              Access <br />
              rate alert dashboard
            </p>
            <p className="text-white text-center font-[500] text-[16px] leading-[140%] opacity-75 align-self-stretch">
              Stay updated with real-time currency rates and manage your alerts.
            </p>
          </div>

          <button
            onClick={handleClick}
            className="flex flex-col justify-center items-center w-[353px] p-[17px_19px] gap-[10px] rounded-[28px] bg-[#333] transition-all duration-300 transform hover:bg-[#555] hover:scale-105"
          >
            <div className="w-[183px] h-[20px] flex flex-row items-center justify-center gap-[10px]">
              <img src={GoogleLogo} alt="" />
              <p className="text-white font-semibold text-[16px] leading-[125%]">
                Sign in with Google
              </p>
            </div>
          </button>

          <p className="w-[263px] text-[#FFFFFF] text-opacity-35 text-center font-normal text-[14px] leading-[125%]">
            By creating an account or signing you agree to our{" "}
            <span className="text-[#FFFFFF] text-opacity-50 font-semibold text-[14px] leading-[125%] underline">
              Terms and Conditions
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default AuthScreen;
