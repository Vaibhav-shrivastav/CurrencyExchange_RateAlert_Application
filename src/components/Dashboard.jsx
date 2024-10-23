import React from "react";
import UKLogo from "../media/HomeScreens/Dashboard/UKLogo.png";
import Arrow from "../media/HomeScreens/Dashboard/Arrow.png";
import Pagination from "./Pagination";

function Dashboard() {
  return (
    <div className="flex flex-col items-center p-[48px_400px] gap-[96px] flex-1 self-stretch bg-[#111]">
      <div className="flex flex-col items-center gap-12 self-stretch">
        <p className="text-white text-center font-bold text-[36px] leading-[120%]">
          Rate alert dashboard
        </p>
        <div className="flex flex-col items-center gap-6 w-[544px] p-6 rounded-[24px] bg-[#222]">
          <div className="flex items-center justify-start gap-[90px] px-4 self-stretch flex-wrap">
            <button className="flex items-center justify-center h-[40px] px-2 gap-2 rounded-[8px] bg-[#393939]">
              <div className="flex w-[106px] justify-center items-center gap-2 self-stretch">
                <img src={UKLogo} alt="" />
                <div className="flex items-center gap-1">
                  <p className="text-white font-stabil-grotesk text-[16px] font-semibold leading-[150%]">
                    UK
                  </p>
                  <p className="text-white font-stabil-grotesk text-[14px] font-semibold leading-[150%] opacity-50">
                    £(GBP)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <img src={Arrow} alt="" />
              </div>
            </button>
          </div>
          <div className="flex px-4 justify-between items-end self-stretch">
            <div className="flex flex-col items-start gap-2">
              <p className="text-[#F9F9F9] font-stabil-grotesk text-[32px] font-bold leading-none tracking-[-0.32px]">
                ₹84.00
              </p>
            </div>
            <button className="flex h-[40px] px-[16px] justify-center items-center gap-[8px] rounded-full bg-[#81EBAB]">
              <p className="text-[#0B0B0B] font-semibold text-[14px] leading-[21px]">
                Set alert
              </p>
              <p>+</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-[530px] items-start gap-6">
          <div className="flex justify-between items-center self-stretch">
            <p className="text-white text-center font-bold text-[18px] leading-[21.6px] opacity-75">
              Previous alerts
            </p>
            <div className="flex items-start gap-[5px]">
              <Pagination />
            </div>
          </div>

          <div class="flex h-[154px] p-6 justify-between items-start self-stretch rounded-[24px] bg-[#222] backdrop-blur-[54px]">
            <div className="flex flex-col justify-between items-start self-stretch">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex flex-col items-start gap-2">
                  <p className="text-white text-center text-[16px] font-semibold leading-[120%] opacity-75">
                    Name
                  </p>
                  <p className="text-[#F9F9F9] font-['Stabil Grotesk'] text-[32px] font-bold leading-[100%] tracking-[-0.32px]">
                    ₹84.00
                  </p>
                </div>
              </div>
              <div className="flex w-[106px] justify-center items-center gap-2 self-stretch">
                <img src={UKLogo} alt="" />
                <div className="flex items-center gap-1">
                  <p className="text-white font-stabil-grotesk text-[16px] font-semibold leading-[150%]">
                    UK
                  </p>
                  <p className="text-white font-stabil-grotesk text-[14px] font-semibold leading-[150%] opacity-50">
                    £(GBP)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 self-stretch">
              <div className="flex justify-end items-start gap-4 self-stretch">
                <div className="flex items-center gap-2">
                  <div class="flex h-[32px] px-[6px] justify-center items-center gap-[16px] rounded-[6px] bg-[#333]">
                    <button className="text-white">12</button>
                  </div>
                  <p className="text-[#757575]">/</p>
                  <div class="flex h-[32px] px-[6px] justify-center items-center gap-[16px] rounded-[6px] bg-[#333]">
                    <button className="text-white">10</button>
                  </div>
                  <p className="text-[#757575]">/</p>
                  <div class="flex h-[32px] px-[6px] justify-center items-center gap-[16px] rounded-[6px] bg-[#333]">
                    <button className="text-white">24</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
