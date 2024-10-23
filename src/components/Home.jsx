import React, { useEffect } from "react";
import AppleLogo from "../media/HomeScreens/AppleLogo.png";
import PlayStoreLogo from "../media/HomeScreens/PlayStoreLogo.png";
import Reviews from "./Reviews";
import Phonee from "../media/HomeScreens/Phone.png";
import Testimonialss from "../media/HomeScreens/Reviews/Testimonials.jpg";
import Screen1 from "../media/HomeScreens/MobileScreen/Screen1.png";
import Screen2 from "../media/HomeScreens/MobileScreen/Screen2.png";
import Screen3 from "../media/HomeScreens/MobileScreen/Screen3.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for the button div
    gsap.fromTo(
      "#reviewsImg", // Target the image element
      { scale: 0.8, opacity: 0.05 }, // Initial scale and opacity
      {
        scale: 1.1,
        opacity: 1,
        duration: 10,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".home", // Use the same trigger as button
          start: "top+=100 top", // Start at the same point as button animation
          end: "bottom+=100 bottom+=50", // End at the same point as button animation
          scrub: true, // Smoothly sync with scroll
        },
      }
    );

    
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-24 self-stretch p-[96px_48px_0_48px] bg-white">
      <div className="flex flex-col items-center gap-12 rounded-3xl">
        <div className="flex flex-col items-center gap-9 self-stretch">
          <p id='headingText' className="text-[#111] text-center text-5xl font-bold leading-[1.2]">
            Send Money to India at Google rates.
          </p>
          <p className="text-[#111] text-center text-lg font-medium leading-[1.4] self-stretch">
            Say goodbye to forex fees- get the best value for your transfers
          </p>

          {/* Centering the buttons */}
          <div className="flex justify-center items-center gap-4">
            <button className="flex h-16 px-5 justify-end items-center gap-2 rounded-full bg-[#111]">
              <img src={AppleLogo} alt="Apple Logo" />
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-[#FFF] text-xs not-italic font-semibold leading-5">
                  Download on the
                </p>
                <p className="text-white font-stabil-grotesk text-base font-bold leading-5">
                  App Store
                </p>
              </div>
            </button>
            <button className="flex h-16 px-5 justify-end items-center gap-2 rounded-full bg-[#111]">
              <img src={PlayStoreLogo} alt="Play Store Logo" />
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-[#FFF] text-xs not-italic font-semibold leading-5">
                  Download on the
                </p>
                <p className="text-white font-stabil-grotesk text-base font-bold leading-5">
                  Play Store
                </p>
              </div>
            </button>
          </div>

          <div className="relative mt-[50px] w-[100%]">
            {/* Position Phone above Reviews */}
            <div className="absolute top-0 left-0 w-full flex justify-center z-10">
              <div className="relative flex justify-center items-center">
                {/* Phone Image */}
                <img
                  src={Phonee}
                  alt="Phone"
                  className="z-0 h-[600px] w-auto ml-16"
                />

                {/* Black overlay div centered over the image */}
                <div className="absolute z-10 h-[480px] overflow-hidden mr-[75px] mb-[100px] w-[230px] bg-black rounded-[42.72px]">
                  <div className="flex flex-col h-[480px] ">
                    <img src={Screen1} className="h-[480px]" alt="Screen 1" />
                    <img src={Screen2} className="h-[480px]" alt="Screen 2" />
                    <img src={Screen3} className="h-[480px]" alt="Screen 3" />
                  </div>
                </div>

                {/* Gradient overlay starting from the bottom of the phone */}
                <div className="absolute bottom-0 z-10 w-full h-[100px] bg-gradient-to-b from-transparent to-white flex-shrink-0"></div>
              </div>
            </div>
            {/* Reviews behind the phone */}
            <div className="relative z-0">
              <div
                id="reviewsImg"
                className="gap-56 w-[100%] flex flex-row justify-center"
              >
                <img src={Testimonialss} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
