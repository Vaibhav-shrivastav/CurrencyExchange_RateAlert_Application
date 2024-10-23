import { useState, useEffect } from "react";
import AuthScreen from "./components/AuthScreen";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import liveRates from './media/HomeScreens/liveRates.png';
import setAlert from './media/HomeScreens/setAlert.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
  const [isActive, setActive]  = useState('one');

  // Register GSAP ScrollTrigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for the button div
    gsap.fromTo(
      ".button-div", 
      { y: 500, opacity: 0 },  // Initial position (off-screen below)
      { 
        y: 0, 
        opacity: 1,  // Final position
        duration: 10, 
        delay:10,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".home",  // Trigger the animation when scrolling the Home component
          start: "top+=100 top",  // Start the animation 200px after the top of the Home element passes the center
          end: "bottom+=100 bottom+=50",   // Animation completes after 200px of scrolling
          scrub: true  // Smoothly animate the scroll
        }
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative home"> {/* Relative positioning for the overlay */}
        <Home />
        <div className="flex flex-col z-20 mb-48 items-center gap-2 absolute left-0 bottom-0 w-full button-div"> {/* Full width overlay */}
          <div className="flex p-1 justify-center items-center gap-4 rounded-full bg-[#81EBAB] mx-auto">
            <button onClick={() => setActive('one')} className={`flex h-[40px] px-4 justify-center items-center gap-2 rounded-full ${isActive === 'one' ? 'bg-[#7C5BDA]' : ''}`}>
              <p className={`${isActive === 'one' ? 'text-white' : 'text-[#111]'} font-stabil-grotesk text-[16px] font-semibold leading-[150%]`}>
                Currency Converter ₹
              </p>
            </button>
            <button onClick={() => setActive('two')} className={`flex h-[40px] px-4 justify-center items-center gap-2 rounded-full ${isActive === 'two' ? 'bg-[#7C5BDA]' : ''}`}>
              <p className={`${isActive === 'two' ? 'text-white' : 'text-[#111]'} font-stabil-grotesk text-[16px] font-semibold leading-[150%]`}>Live rates</p>
              <img src={liveRates} className="h-[14px]" alt="" />
            </button>
            <button onClick={() => setActive('three')} className={`flex h-[40px] px-4 justify-center items-center gap-2 rounded-full ${isActive === 'three' ? 'bg-[#7C5BDA]' : ''}`}>
              <p className={`${isActive === 'three' ? 'text-white' : 'text-[#111]'} font-stabil-grotesk text-[16px] font-semibold leading-[150%]`}>Set rate alert</p>
              <img src={setAlert} className="h-[14px]" alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* <AuthScreen/> */}
    </>
  );
}
