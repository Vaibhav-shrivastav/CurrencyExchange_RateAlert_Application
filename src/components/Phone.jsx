import React from "react";
import Phonee from "../media/HomeScreens/Phone.png";
import Cellular from '../media/HomeScreens/MobileScreen/Cellular.png'
import Wifi from '../media/HomeScreens/MobileScreen/Wifi.png'
import Battery from '../media/HomeScreens/MobileScreen/Battery.png'
import Screen1 from '../media/HomeScreens/MobileScreen/Screen1.png'
function Phone() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Phone Image */}
      <img src={Phonee} alt="Phone" className="z-0 h-[600px] w-auto ml-16" />

      {/* Black overlay div centered over the image */}
      <div className="absolute z-10 h-[480px] mr-[75px] mb-[100px] w-[230px] bg-black rounded-[42.72px]">
        <div className="flex justify-center items-center">
            <img src={Screen1} className="h-[480px]" alt="" />
        </div>
      </div>

      {/* Gradient overlay starting from the bottom of the phone */}
      <div className="absolute bottom-0 z-10 w-full h-[100px] bg-gradient-to-b from-transparent to-white flex-shrink-0"></div>
    </div>
  );
}

export default Phone;
