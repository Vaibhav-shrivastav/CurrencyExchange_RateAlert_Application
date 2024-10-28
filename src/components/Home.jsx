import React, { useState } from "react";
import AppleLogo from "../media/HomeScreens/AppleLogo.png";
import PlayStoreLogo from "../media/HomeScreens/PlayStoreLogo.png";
import Phonee from "../media/HomeScreens/Phone.png";
import liveRates from "../media/HomeScreens/liveRates.png";
import setAlert from "../media/HomeScreens/setAlert.png";
import Testimonialss from "../media/HomeScreens/Reviews/Testimonials.jpg";
import Screen1 from "../media/HomeScreens/MobileScreen/Screen1.png";
import Screen2 from "../media/HomeScreens/MobileScreen/Screen2.png";
import Screen3 from "../media/HomeScreens/MobileScreen/Screen3.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function Home() {
  const [isActive, setActive] = useState("three");

  const [text, setText] = useState([
    "Send Money to India at Google rates.",
    "Always know when it's a\n good time to transfer with",
  ]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".textAni", {
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 0.1,
      stagger: true,
    });

    gsap.from(".btnAni", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      delay: 0.1,
    });

    function startNavAnimation() {
      gsap.from(".navAni", {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".parentAni",
          start: "top 0%",
          end: "top -100%",
          scrub: 2,
        },
      });
    }
    gsap.from(".phoneAni", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".phoneAni",
        start: "top 81%",
        end: "top 45%",
        scrub: 2,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".phoneAni",
        start: "top 55%",
        end: "top 25%",
        scrub: true,
      },
    });

    tl.fromTo(".text1", { opacity: 1 }, { opacity: 0, duration: 1 }).fromTo(
      ".text2",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    gsap.to(".imgScreen", {
      transform: "translateY(-960px)",
      scrollTrigger: {
        trigger: ".phoneAni",
        start: "top 0%",
        end: "top -200%",
        scrub: true,
      },
    });

    gsap.to(".phoneAni", {
      transform: "translateY(-10%)",
      scrollTrigger: {
        trigger: ".parentAni",
        start: "top 0%",
        end: "top -200%",
        scrub: true,
        pin: true,
        onEnter: () => startNavAnimation(),
      },
    });

    gsap.fromTo(
      "#reviewsImg",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1.1,
        opacity: 1,
        duration: 10,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".home",
          start: "top+=100 top",
          end: "bottom+=100 bottom+=50",
          scrub: true,
        },
      }
    );
  });

  return (
    <>
      <div className="flex navAni flex-col z-20 mb-72 items-center gap-2 absolute left-0 bottom-0 w-full button-div">
        {" "}
        <div className="flex p-1 justify-center items-center gap-4 rounded-full bg-[#81EBAB] mx-auto">
          <button
            onClick={() => setActive("one")}
            className={`flex h-[40px] px-4 justify-center items-center gap-2 rounded-full ${
              isActive === "one" ? "bg-[#7C5BDA]" : ""
            }`}
          >
            <p
              className={`${
                isActive === "one" ? "text-white" : "text-[#111]"
              } font-stabil-grotesk text-[16px] font-semibold leading-[150%]`}
            >
              Currency Converter ₹
            </p>
          </button>
          <button
            onClick={() => setActive("two")}
            className={`flex h-[40px] px-4 justify-center items-center gap-2 rounded-full ${
              isActive === "two" ? "bg-[#7C5BDA]" : ""
            }`}
          >
            <p
              className={`${
                isActive === "two" ? "text-white" : "text-[#111]"
              } font-stabil-grotesk text-[16px] font-semibold leading-[150%]`}
            >
              Live rates
            </p>
            <img src={liveRates} className="h-[14px]" alt="" />
          </button>
          <button
            onClick={() => setActive("three")}
            className={`flex h-[40px] px-4 justify-center items-center gap-2 rounded-full ${
              isActive === "three" ? "bg-[#7C5BDA]" : ""
            }`}
          >
            <p
              className={`${
                isActive === "three" ? "text-white" : "text-[#111]"
              } font-stabil-grotesk text-[16px] font-semibold leading-[150%]`}
            >
              Set rate alert
            </p>
            <img src={setAlert} className="h-[14px]" alt="" />
          </button>
        </div>
      </div>

      <div className="flex flex-col parentAni justify-center items-center gap-24 self-stretch p-[56px_48px_0_48px] bg-white">
        <div className="flex flex-col items-center gap-12 rounded-3xl">
          <div className="flex flex-col items-center gap-9 self-stretch">
            <div className="overflow-hidden w-full relative textContent">
              <div className="absolute text1 w-full">
                <p className="text-[#111] textAni w-full whitespace-pre text-center text-5xl font-bold leading-[1.2]">
                  {text[0]}
                </p>
                <p className="text-[#111] textAni text-center text-lg font-medium leading-[1.4] self-stretch">
                  Say goodbye to forex fees- get the best value for your
                  transfers
                </p>
              </div>
              <div className="relative text2">
                {text[1].split("\n").map((line, index) => (
                  <p
                    key={index}
                    className="text-[#111] textAni  text-center text-5xl font-bold leading-[1.2]"
                  >
                    {line}
                    <br />
                  </p>
                ))}

                <p className="text-[#111] textAni text-center text-lg font-medium leading-[1.4] self-stretch">
                  Say goodbye to forex fees- get the best value for your
                  transfers
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <button className="flex btnAni h-16 px-5 justify-end items-center gap-2 rounded-full bg-[#111] hover:bg-[#383737] hover:scale-105">
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
              <button className="flex h-16 btnAni px-5 justify-end items-center gap-2 rounded-full bg-[#111] hover:bg-[#383737] hover:scale-105">
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
            <div className="relative  mt-[50px] w-[100%]">
              <div className="absolute top-0 left-0 w-full flex justify-center z-10">
                <div className="relative phoneAni flex justify-center items-center">
                  <img
                    src={Phonee}
                    alt="Phone"
                    className="z-0  h-[600px] w-auto ml-16"
                  />

                  <div className="absolute z-10 h-[480px] overflow-hidden mr-[75px] mb-[100px] w-[230px] bg-black rounded-[42.72px]">
                    <div className="flex flex-col imgScreen h-[480px] ">
                      <img
                        src={Screen1}
                        className="h-[480px] screen1"
                        alt="Screen 1"
                      />
                      <img
                        src={Screen2}
                        className="h-[480px] screen2"
                        alt="Screen 2"
                      />
                      <img
                        src={Screen3}
                        className="h-[480px] screen3"
                        alt="Screen 3"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 z-10 w-full h-[100px] bg-gradient-to-b from-transparent to-white flex-shrink-0"></div>
                </div>
              </div>

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
    </>
  );
}

export default Home;
